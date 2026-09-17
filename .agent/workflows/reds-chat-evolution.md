---
description: Roteiro iterativo para evoluir o reds-chat — UI, inteligência do agente, auto-healing e qualidade de resposta Oracle. Execute fase a fase, compilando e testando a cada passo.
---
# Workflow: Reds-Chat Evolution — UI + Oracle Intelligence

Este workflow guia a evolução contínua do `reds-chat` como produto Antigravity.
Cada fase é independente e compilável. Marcar `[x]` ao concluir cada passo antes de avançar.

> **Regra de ouro:** Compile e abra o app após cada bloco antes de avançar à próxima fase.
> ```bash
> cd /Users/abnerbessi/Documents/GitHub/RedstrekCode/reds-chat && cargo build --release
> /Users/abnerbessi/Documents/GitHub/RedstrekCode/reds-chat/target/release/reds-chat &
> ```

---

## 🎨 Fase 1: UI Codex — Fidelidade Visual

_Objetivo: Fazer o app visualmente indistinguível do Codex/Claude para macOS._

- [x] **1.1 — Tipografia Personalizada via egui**
  Registrar a fonte `Inter` (ou `Geist Mono`) via `egui::FontDefinitions` no `main.rs`.
  Arquivo alvo: `reds-chat/src/main.rs`
  ```rust
  // Carregar Inter da pasta assets/ e injetar no context
  fonts.font_data.insert("Inter".to_owned(), egui::FontData::from_static(include_bytes!("../assets/Inter-Regular.ttf")));
  fonts.families.entry(egui::FontFamily::Proportional).or_default().insert(0, "Inter".to_owned());
  ```

- [x] **1.2 — Header minimalista com título de conversa**
  O header atual usa `Panel::top` com texto simples. Refinar para mostrar o título da conversa
  centralizado, com ícone de hamburguer à esquerda e botão `🗑 Limpar` à direita como no Codex.
  Arquivo alvo: `reds-chat/src/app.rs` (bloco `Panel::top("header")`)

- [ ] **1.3 — Welcome screen com 4 cards clicáveis otimizados para Oracle**
  Atualizar os 4 cards de sugestão da tela inicial para ações reais e relevantes do Oracle Fusion/EBS.
  Arquivo alvo: `reds-chat/src/message_view.rs` (função `render_welcome`)

- [ ] **1.4 — Animação de Streaming Cursor pulsante**
  Substituir o cursor estático `▋` por um cursor que pisca usando `ctx.input(|i| i.time)` com seno.
  Verificar também que o cursor some ao finalizar a geração.
  Arquivo alvo: `reds-chat/src/message_view.rs`

- [ ] **1.5 — Separador visual entre mensagens do mesmo remetente**
  Adicionar micro-espaçamento maior (16px) entre mensagens do Assistente sequenciais
  e marcar com um dot ou linha horizontal fina quando troca de remetente.

---

## 🧠 Fase 2: System Prompt Oracle de Elite

_Objetivo: Transformar o 3B em um DBA Sênior que nunca alucina nome de tabela._

- [x] **2.1 — Injetar cheatsheet completa por módulo Oracle**
  Expandir o bloco `RAZIONAMENTO ORACLE FUSION/EBS` no `function_calling.rs` com todas as tabelas críticas:
  - AP: `AP_INVOICES_ALL`, `AP_INVOICE_DISTRIBUTIONS_ALL`, `AP_SUPPLIERS`, `AP_PAYMENT_SCHEDULES_ALL`, `AP_CHECKS_ALL`
  - AR: `RA_CUSTOMER_TRX_ALL`, `RA_CUSTOMER_TRX_LINES_ALL`, `AR_CASH_RECEIPTS_ALL`, `HZ_CUST_ACCOUNTS`
  - GL: `GL_JE_HEADERS`, `GL_JE_LINES`, `GL_LEDGERS`, `GL_CODE_COMBINATIONS`, `GL_BALANCES`
  - PO: `PO_HEADERS_ALL`, `PO_LINES_ALL`, `PO_DISTRIBUTIONS_ALL`, `PO_VENDORS`
  - HR/FND: `PER_ALL_PEOPLE_F`, `FND_USER`, `FND_CONCURRENT_REQUESTS`
  - EBS ERP: `RA_CUSTOMER_TRX_ALL`, `MTL_SYSTEM_ITEMS_B`, `CSI_ITEM_INSTANCES`
  Arquivo alvo: `fusion-sql-runner/reds-cli/src/ai/function_calling.rs`

- [x] **2.2 — Adicionar Playbook de Diagnóstico de ORA-Errors**
  Expandir a seção `PLAYBOOK DE AUTO-HEALING` com todos os ORA comuns:
  - `ORA-00904`: coluna inválida → verificar com `db_table_info` a coluna exata
  - `ORA-01427`: subquery com mais de 1 linha → adicionar `ROWNUM = 1` ou `FETCH FIRST 1 ROW`
  - `ORA-12899`: valor muito grande → truncar ou verificar comprimento com `LENGTH()`
  - `ORA-00001`: violação de unique → não é query, é DML — informar ao usuário
  - `ORA-01403`: sem dados → informar "Nenhum registro encontrado" sem retry
  Arquivo alvo: `fusion-sql-runner/reds-cli/src/ai/function_calling.rs`

- [x] **2.3 — Exemplos de Tool Calls em Two-Shot**
  Adicionar 2 exemplos completos de raciocínio `<thought>` + `<tool_call>` no prompt:
  - Exemplo 1: usuário pede "faturas do fornecedor X" → busca AP_SUPPLIERS, depois AP_INVOICES_ALL
  - Exemplo 2: usuário pede "packages do banco" → usa `db_list_objects` com `PACKAGE`
  Arquivo alvo: `fusion-sql-runner/reds-cli/src/ai/function_calling.rs`

- [x] **2.4 — Instruções de formatação de output**
  Adicionar regras explícitas de como o agente deve formatar suas respostas:
  - JSON arrays → tabela Markdown com truncamento em 20 linhas e aviso de total
  - Código SQL → bloco ```sql com comentário descritivo
  - DDL → bloco ```sql
  - PL/SQL → bloco ```plsql
  Arquivo alvo: `fusion-sql-runner/reds-cli/src/ai/function_calling.rs`

---


---

## 🔄 Fase 3: Auto-Healing Robusto

_Objetivo: O agente nunca para ante uma falha Oracle. Persiste até entregar._

- [x] **3.1 — Contador de Context com Memória**
  Atualmente o retry usa apenas o resultado imediato. Implementar um histórico de tentativas
  (`retry_log: Vec<String>`) no `AppState` e injetar no prompt de retry para evitar loops.
  Arquivo alvo: `reds-chat/src/state.rs` e `reds-chat/src/app.rs`

- [x] **3.2 — Limite inteligente de retry (não infinito)**
  Reimplementar um limite dinâmico: máximo 5 tentativas, mas se em 2 consecutivas
  o modelo repetir o mesmo `<tool_call>` exato (loop), interromper e avisar o usuário.
  Arquivo alvo: `reds-chat/src/app.rs` (bloco Auto-Healing)
  ```rust
  // Hash do último tool_call para detectar loop
  if self.state.last_tool_call == current_tool_call { break_loop(); }
  ```

- [x] **3.3 — Tool Result Display nativo**
  Ao receber `LlmEvent::ToolResult`, mostrar o resultado bruto em um `CollapsingHeader`
  recolhido mas disponível, antes da resposta interpretada do agente.
  Arquivo alvo: `reds-chat/src/app.rs` (handler `LlmEvent::ToolResult`)

---

## 💾 Fase 4: Persistência e Sessão [Concluído]

_Objetivo: O agente lembra o contexto entre reinicializações._

- [x] **4.1 — Múltiplas Sessões de Chat**
  Implementar lista de sessões no sidebar (`session_list: Vec<ChatSession>`).
  Cada sessão tem: ID, título (primeira mensagem), timestamp, caminho no disco.
  Salvar em `~/.redstrek/chats/session_<timestamp>.json`
  Arquivo alvo: `reds-chat/src/state.rs`, `reds-chat/src/sidebar.rs`, `reds-chat/src/app.rs`

- [x] **4.2 — Sessão "Nova Conversa" com confirmação**
  Hoje o botão `＋` limpa sem perguntar. Implementar um modal `egui::Window` de confirmação
  antes de apagar a sessão ativa.
  Arquivo alvo: `reds-chat/src/app.rs` e `reds-chat/src/sidebar.rs`

- [x] **4.3 — Auto-título da Conversa**
  Após a primeira resposta do agente, executar um micro-prompt no background:
  `"Em 5 palavras, qual o tema desta conversa?"` e atualizar o título da sessão no sidebar.
  Arquivo alvo: `reds-chat/src/app.rs`

---

## ⚡ Fase 5: Performance e Qualidade de Build [Concluído]

_Objetivo: Zero warnings, build < 60s, app sub-200mb._

- [x] **5.1 — Limpar warnings de unused imports**
  Rodar `cargo fix --lib -p reds-cli` e resolver manualmente os restantes.
  ```bash
  cd /Users/abnerbessi/Documents/GitHub/RedstrekCode/fusion-sql-runner/reds-cli
  cargo fix --lib -p reds-cli --allow-dirty
  ```

- [x] **5.2 — Verificar tamanho do binário release**
  O binário atual `reds-chat` deve ser < 200MB. Se maior, ativar `strip = true` no `Cargo.toml`.
  ```bash
  ls -lh /Users/abnerbessi/Documents/GitHub/RedstrekCode/reds-chat/target/release/reds-chat
  ```
  Se necessário adicionar ao `reds-chat/Cargo.toml`:
  ```toml
  [profile.release]
  strip = true
  opt-level = "z"
  lto = true
  ```

- [x] **5.3 — Rebuild final e smoke test completo**
  ```bash
  cd /Users/abnerbessi/Documents/GitHub/RedstrekCode/reds-chat
  cargo build --release 2>&1 | grep -E "^error|Finished"
  /Users/abnerbessi/Documents/GitHub/RedstrekCode/reds-chat/target/release/reds-chat &
  ```
  Validar manualmente:
  - [x] Conexão Ocyan carrega automática
  - [x] Query `SELECT SYSDATE FROM DUAL` retorna resultado em < 5s
  - [x] Auto-Healing funciona com tabela inexistente (`SELECT * FROM TABELA_INVENTADA`)
  - [x] Sidebar mostra status correto (verde "Pronto")
  - [x] Input centralizado, bubble correta, cursor piscante

---

## 📋 Checklist de Validação Final

Antes de considerar uma fase concluída, validar:

| Check | Critério |
|---|---|
| 🟢 Build limpo | `cargo build --release` sem `error[...]` |
| 🟢 Conexão persiste | App abre com Ocyan selecionada |
| 🟢 Agente usa Search-First | `db_search_objects` antes de `db_execute_query` |
| 🟢 Auto-Healing funciona | Tabela errada → busca e corrige automaticamente |
| 🟢 UI Codex | Fundo branco, sidebar cinza, bubble escura, texto limpo |
| 🟢 Sem polite filler | Agente nunca diz "Espero que ajude" ou "Olá!" |

---

> **Nota de Arquitetura:** O `function_calling.rs` é o cérebro do sistema. Toda melhoria de inteligência passa por esse arquivo. A UI (`message_view.rs`, `app.rs`) é o corpo. O `llm_worker.rs` é o sistema nervoso. Ao debugar comportamentos inesperados, checar sempre nessa ordem: prompt → parser de XML → executor de tool → handler de resultado.
