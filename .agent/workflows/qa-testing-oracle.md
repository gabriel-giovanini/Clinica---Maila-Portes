---
description: Roteiro de QA manual para buscar bugs de funcionalidade e usabilidade no Fusion, Oracle DB e EBS.
---
# QA Testing Workflow: Redstrek - Oracle Environments

Este workflow de QA foca na validação abrangente (*end-to-end*) das integrações da extensão Redstrek nas principais teias de produto suportadas: **Oracle Fusion (BIP)**, **Oracle DB** e **Oracle EBS**.

O objetivo é atuar em "happy paths" (fluxos normais com sucesso), testar limites de conectividade, manipulação de arquivos (XDM, DRV, Packages) e validação severa de usabilidade da UI gráfica.

---

## 🏗️ 1. Fase de Casos Comuns Transversais (Setup e Workspaces)
_Esta fase isola o gerenciamento de perfis antes de testar a nuvem/on-prem._

- [ ] **Criar/Editar/Deletar Conexão:** Tente criar conexões com senhas erradas ou URLs inválidas para todas as tecnologias. O sistema emite alertas claros? 
- [ ] **Timeout de Conexão:** Altere temporariamente o host para um IP que não pinga e teste as conexões. Deve lidar com *Timeout* sem travar o painel de UI principal (`window`).
- [ ] **Navegação do Menu:** Verificar o estado de ativação condicional do menu "Reconnect", "Edit", e "Delete". O *TreeItem* muda o ícone ao ser ativado?
- [ ] **Ativar MCP:** Invocar a ativação/set do ambiente atual como MCP-provider e verificar pelo `redstrek.mcpStatus` se os caminhos dos binários estão limpos.

---

## ☁️ 2. QA Oracle Fusion (Cloud ERP / BIP)
_Valida a comunicação SOAP/REST nativa por trás do BI Publisher_

### 2.1. Manipulação de Execução de Básico SQL
- [ ] **Run Selection:** Selecione e rode comandos simples: `SELECT * FROM DUAL`.
- [ ] **Run com Bind Parameters:** Execute uma query que possua binds (`SELECT * FROM PER_ALL_PEOPLE_F WHERE PERSON_ID = :ID`). O validador consegue pedir/identificar os binds adequadamente caso não existam configurações fallback?
- [ ] **Cancelamento de Query Longa:** Dispare um produto cartesiano gigantesco (`SELECT * FROM AP_INVOICES_ALL A, PO_HEADERS_ALL B`). Clique no botão de cancelar. O log SOAP encerra o job efetivamente sem travar a extensão?
- [ ] **Parsing Errado:** Execute uma query faltando a keyword `FROM`. A resposta mostra os `ORA-xxxx` de forma interativa e humanitária?
- [ ] **Lint SQL nativo:** Acione o `Fusion: Lint SQL`. Verifique as marcações de problemas no painel gerado.

### 2.2. Manipulação Bip Catalog (XDM e XDO)
- [ ] **Navegação Hierárquica:** Tente expandir pastas grandes como `/Shared Folders/Financials`. Observe a latência ou qualquer crash em sub-nested folders.
- [ ] **Download / Edit XML:** Realize o download de um `.xdmz`. Deszipe-o internamente. Tente abrir o script nativo (`.xdm`) de forma fluída e rodar a extração do SQL puro usando o "Extract SQL from Data Model".
- [ ] **Preview de Relatório:** Rodar um "Preview Data Model" que gere XML e "Run and Export" em formato `pdf`, `csv` e `excel`. Ao fim abrir os arquivos para validar a integridade.

---

## 🛢️ 3. QA Oracle DB (On-Premisse / Autônomo)
_Valida a comunicação via driver nativo e OCI (Instant Client)._

### 3.1. DDL e Introspecção
- [ ] **Describe Table:** Executar o `Describe Table` com o ponteiro na palavra `AP_INVOICES_ALL` e com nenhuma palavra selecionada (para invocar o input-box). O grid ou resposta retorna as columns com Data Types exatos?
- [ ] **Explain Plan:** Escrever `SELECT * FROM GL_BALANCES` e solicitar plano de execução. Verificar formatação dos custos, *Nested Loops* e partição.

### 3.2. Listagem de Objetos via Catálogo de Banco
- [ ] **Download Local de Objeto:** No novo Explorer de objetos nativos, navegue até "Packages" ou "Views". Tente baixar o DDL de uma Procedure gigantesca (ex: 20k linhas). A formatação do PL/SQL vem incorreta/suja?
- [ ] **Performance Queries com Data Longa (LOB/CLOB):** Fazer um SELECT em uma tabela de auditoria ou metadata cujo banco retorna BLOBs. Falha com buffer overrun?

---

## 🏢 4. QA Oracle EBS (E-Business Suite)
_Valida fluxos proprietários complexos de deploy e Patching do EBS._

### 4.1. Patching e Exportações (AOL / FNDLOAD)
- [ ] **Criar Estrutura de Patch:** Usar `Create Patch` ou `redstrek.ebs.createPackage`. Validar as pastas físicas resultantes criadas na workspace (`/workspace/<client>.../patches`). 
- [ ] **Add/Remove from Patch:** Adicionar e remover objetos (LDTs, SQLs, Shs, Packages) do "Current Patch". Validar se a estrela `Current` visual está alternando corretamente entre múltiplos "patch_configs".
- [ ] **Geração .drv / driver:** Gerar o driver nativo a partir do inventário final. As sintaxes no .drv estão de acordo com o AD Patch/FND standard?

---

## 🧠 5. Testes de Usabilidade Relacionados ("Dev-XP")
_Critérios mais flexíveis de experiência e frustração._

- [ ] A tela mostra uma indicação *clara visual* de Loading/Progress de background enquanto carrega catálogos que demoram mais de 4 segundos?
- [ ] Erros que sobem pelo Rust (Cargo runtime) geram popup bonitos em vez de vomitar strings json de erro brutas na interface?
- [ ] Salvar query customizada cria o arquivo bonitinho e atualiza a view de "Saved Queries"?
- [ ] O History limpa perfeitamente, garantindo que o Webview "QUERY RESULTS" libere o memory leak da sessão antiga?

---

## 🔌 6. Testes de Integração MCP e SSE (Tempo Real)
_Valida a comunicação entre o VS Code (cliente), o Agente Local (MCP) e streams de Eventos._

- [ ] **Descoberta de Tools MCP:** Ao invocar uma Tool do `redstrek` (via Cline ou Antigravity), o schema das *parameters* é respeitado e a execução é roteada para a conexão correta no EBS/DB/Fusion?
- [ ] **Observabilidade em Tempo Real (SSE):** Se houver uma requisição que devolve log contínuo:
  - Os chunks do log chegam pela interface sem estourar o Webview?
  - Emulando uma desconexão temporária, o Server-Sent Events (SSE) restabelece a conexão sem triplicar mensagens no console?
- [ ] **Isolamento de Estado MCP:** O agente consegue manter a referência correta para `connection_id` quando troca rapidamente de uma conexão "Dev" para "Prod"? A sessão do driver não se mistura?

---
> Recomendação contínua: Sempre iniciar o teste com um ambiente "Limpo" (sem `.redstrek` inicializado) para ver a curva do primeiro usuário, e por último migrando pastas com configurações já preenchidas (backward compatibility).
