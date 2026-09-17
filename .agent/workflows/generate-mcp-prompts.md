---
description: Roteiro iterativo e sistemático para criação de Prompts otimizados no servidor MCP baseados nas capacidades das Tools existentes na Redstrek.
---
# Workflow: Generate Internal MCP Prompts for Tools

Este workflow foi criado para auxiliar o agente de IA a investigar autonomamente a lógica da aplicação por trás de cada ferramenta MCP (Tool) listada na Redstrek e criar um **Prompt altamente otimizado** que injeta esse contexto diretamente no servidor MCP. Isso transforma a funcionalidade técnica da Tool em uma Inteligência de Domínio facilmente utilizável no Chat.

## 🗄️ Passo 1: Mapeamento de Tools Existentes
Para gerar bons prompts, é preciso primeiro mapear o que é suportado:

- [ ] **Passo 1.1: Listar Tools no Rust**
  Use a ferramenta de busca (`grep_search` e `view_file`) no cargo do backend (`reds-cli/src/services/mcp.rs`) e levante todas as strings em `tools.insert("mcp_redstrek_...` ou `request.method == "tools/list"`.

## 🧠 Passo 2: Investigação do Contexto da Ferramenta
Para cada Tool que ainda não tenha um Prompt correspondente:

- [ ] **Passo 2.1: Ler Lógica Base**
  Localizar a função para onde a Tool roteia a requisição (ex: `oracle_db::execute(...)`, `bip::run_report(...)`). Use `grep` e `view_file` para analisar os parâmetros que ela aceita e os fluxos de sucesso ou falha.
- [ ] **Passo 2.2: Levantamento do "Job-to-be-done"**
  Quais dores essa ferramenta resolve para o usuário da Oracle/Fusion? Existe algum edge case? Defina claramente a missão da ferramenta do ponto de vista do consultor.

## ✍️ Passo 3: Criação de Prompt Enriquecido no MCP
Nesta fase, você deve atuar como Engenheiro de Prompt Sênior:

- [ ] **Passo 3.1: Escrever o System Prompt em Rust**
  Abra o bloco de registro de prompts do MCP no arquivo `reds-cli/src/services/mcp.rs` (logo abaixo dos prompts existentes como `fusion-query-expert`).
- [ ] **Passo 3.2: Definir nome, descrição e conteúdo**
  Mapeie um ID (`name` em kebab-case, ex: `oracle-db-manager`), e defina um bloco de instrução detalhado pedindo que a IA:
   1. Aja com a Persona apropriada (Ex: Administrador Oracle Cloud).
   2. Descreva **quando** e **como** usar a Tool mapeada no Passo 2.
   3. Exponha limites, comportamentos esperados de saída (parsing de SQL ou CSV) e como dar a resposta para o usuário.

## 🔄 Passo 4: Implementação & Iteração (Para todas as ferramentas)

- [ ] Repita o **Passo 2 e 3** iterativamente para extrair o ouro de cada Tool que temos (`run_report`, `download_object`, `plsql_search`, etc).
- [ ] Utilize blocos contínuos e bem identados no Rust (`json!({ "name": ..., "description": ..., })`) para compilar uma vitrine poderosa de capacidades no Continue.

## 🛡️ Passo 5: Teste & Validação
- [ ] **Passo 5.1: Build** (// turbo)
```bash
export PATH="/opt/homebrew/bin:$HOME/.cargo/bin:$PATH"
cd /Users/abnerbessi/Documents/GitHub/RedstrekCode/fusion-sql-runner && npm run compile && yes | npm run package
```
- [ ] **Passo 5.2: Validação Visual**
Finalize indicando ao desenvolvedor para analisar no menu lateral de Prompts do Continue se o novo Prompt está aparecendo lindamente e livre de erros textuais.
