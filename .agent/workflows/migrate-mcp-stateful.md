---
description: Roteiro controlado para a migração do Engine Stateless CLI para MCP Stateful com Connection Pooling.
---
# Workflow: Migrate Oracle Execution to Stateful MCP

Este workflow gerencia o estado da migração estrutural do Redstrek. Cada passo contém as diretrizes e eventuais comandos para eu (Antigravity) executar de forma cadenciada e não perder o histórico do que já foi alterado.

## 🗄️ Fase 1: Estado Global (Rust Cargo)
Nesta fase adaptaremos a API nativa para suportar pool.

- [x] **Passo 1.1: Adição do gerenciador de pool e dependências.**
  Validar se `lazy_static` e `tokio` (ou similar) estão presentes no `reds-cli/Cargo.toml`. 
  `Objetivo:` Injetar o state Mutex.

- [x] **Passo 1.2: Refatoração do `oracle_db.rs`.**
  Criar a assinatura da Session Map: `static ref ORACLE_POOL: Arc<Mutex<HashMap<String, oracle::Connection>>>`.
  Adaptar o método de "Executar SQL" para adquirir o lock ou se logar no oracle se vazio.

## 🌉 Fase 2: Roteamento MCP
Para garantir que a comunicação não vá para logs STDOUT e retorne via JSON-RPC.

- [x] **Passo 2.1: Modificar `mcp_redstrek_db_execute_query` no `services/mcp.rs`.**
  Remover a chamada efêmera e apontar diretamente para a persistência criada no Passo 1.2.

- [x] **Passo 2.2: Adicionar Tool `mcp_redstrek_db_cancel_operation`.**
  Cadastrar um novo registro no esquema de tools do MCP. Implementar a interceptação nativa (via handler assíncrono ou spawn_blocking) chamando a função parecida com `conn.break_execution()`.

## 🖥️ Fase 3: Gateway Visual (Morte ao `execFile`)
Migrar o Client TypeScript.

- [x] **Passo 3.1: Encontrar mapeamento VS Code.**
  Usar grep_search para rastrear e localizar a função que recebe a action visual *"Redstrek: Run Query"*.

- [x] **Passo 3.2: Switch de `child_process` para `mcpClient`.**
  Comentar antigas importações e injeções de Command-Line, escrevendo o bloco `await client.request("tools/call", { name: "mcp_redstrek_db_execute_query" })`. O output JSON será em pipeline nativo.

- [x] **Passo 3.3: Integrar o Ícone STOP.**
  Vincular a task paralela ao botão da aba de interrupção com o `cancel_operation`.

## 🛡️ Fase 4: Build & Tests
- [x] **Passo 4.1: Compilar backend.** (// turbo command validation)
```bash
cd fusion-sql-runner/reds-cli && cargo check
```

- [x] **Passo 4.2: Empacotamento Node.js.**
```bash
cd fusion-sql-runner && npm run compile
```

- [x] **Passo 4.3: QA Testing Live.**
Executar 3 DMLs na branch `EBA_DEMO_FILE_DATA` para atestar a reutilização fluída do mesmo SID no Banco (Lock Zero).
