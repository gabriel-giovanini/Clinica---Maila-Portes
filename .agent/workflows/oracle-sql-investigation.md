---
description: >
  Workflow de investigação e escrita de SQL Oracle para consultores que usam o Redstrek.
  Use quando o usuário pedir ajuda para escrever, otimizar ou entender uma query
  no Oracle Fusion Cloud, EBS ou Oracle Database.
---
# Workflow: Oracle SQL — Investigar e Escrever com Redstrek

Use este workflow sempre que precisar explorar o esquema Oracle e construir
uma query precisa, sem alucinação de nomes de tabela ou coluna.

> **Regra de ouro:** Nunca assuma um nome de tabela. Sempre confirme com as ferramentas
> antes de construir a query final.

---

## 🔍 Fase 1: Descoberta do Ambiente

- [ ] **1.1 — Listar conexões disponíveis**
  ```
  mcp_redstrek_list_connections()
  ```
  Identificar o `connection_id` correto (Fusion Cloud, EBS, Oracle DB).

- [ ] **1.2 — Testar conectividade**
  Se houver dúvida sobre a conexão ativa:
  ```
  mcp_redstrek_config_test(name: "<connection_id>")
  ```

---

## 🗂️ Fase 2: Descoberta de Tabelas

- [ ] **2.1 — Buscar tabelas por palavra-chave (DuckDB FTS)**
  ```
  mcp_redstrek_semantic_search(query: "INVOICE", connection_id: "...")
  ```
  > Use sempre palavras-chave técnicas em inglês (ex: INVOICE, PAYMENT, SUPPLIER).
  > Se o usuário escreveu em português, traduza antes de chamar.

- [ ] **2.2 — Confirmar existência e nome exato**
  Se a busca FTS retornar candidatos, confirmar o nome exato:
  ```
  mcp_redstrek_db_search_objects(search_name: "AP_INVOIC", connection_id: "...")
  ```

- [ ] **2.3 — Listar objetos por tipo (quando necessário)**
  Para packages/procedures, use com filtro:
  ```
  mcp_redstrek_db_list_objects(object_type: "PACKAGE", filter: "XX%", connection_id: "...")
  ```

---

## 🔬 Fase 3: Inspeção da Estrutura

- [ ] **3.1 — Ver colunas e DDL**

  **Oracle DB / EBS:**
  ```
  mcp_redstrek_db_table_info(table: "AP_INVOICES_ALL", connection_id: "...")
  ```

  **Oracle Fusion Cloud** (db_table_info NÃO funciona no Fusion):
  ```sql
  -- Via db_execute_query:
  SELECT column_name, data_type, nullable, data_length
  FROM all_tab_columns
  WHERE table_name = 'AP_INVOICES_ALL'
  ORDER BY column_id
  FETCH FIRST 60 ROWS ONLY
  ```

- [ ] **3.2 — Ver sample de dados (quando necessário)**
  ```sql
  SELECT * FROM AP_INVOICES_ALL
  WHERE ROWNUM <= 5
  ```

---

## ✍️ Fase 4: Construir a Query

- [ ] **4.1 — Montar SELECT com colunas confirmadas**
  Usar apenas colunas verificadas na fase 3. Nunca inventar nomes.

- [ ] **4.2 — Adicionar filtros de performance**
  - Sempre incluir `FETCH FIRST N ROWS ONLY` ou `ROWNUM <= N` em exploratórias
  - Filtrar por `ORG_ID` quando a tabela for multi-org (sufixo `_ALL`)
  - Filtrar por data em tabelas grandes (AP, GL, RA)

- [ ] **4.3 — Lint da query (Fusion Cloud)**
  Antes de executar em Fusion Cloud, validar:
  ```
  mcp_redstrek_lint_sql(sql_query: "SELECT ...")
  ```

---

## ▶️ Fase 5: Executar

- [ ] **5.1 — Executar a query**
  ```
  mcp_redstrek_db_execute_query(sql: "SELECT ...", connection_id: "...")
  ```
  > O smart-routing do Redstrek detecta automaticamente o tipo de conexão.

- [ ] **5.2 — Diagnóstico de erros ORA**
  | Erro | Ação |
  |------|------|
  | ORA-00942 | Usar `db_search_objects` para achar o nome correto |
  | ORA-00904 | Verificar colunas com `db_table_info` ou `ALL_TAB_COLUMNS` |
  | ORA-01427 | Adicionar `FETCH FIRST 1 ROW ONLY` na subquery |
  | ORA-00923 | Erro de sintaxe — revisar SELECT, FROM, WHERE |

---

## 💾 Fase 6: Salvar (Opcional)

- [ ] **6.1 — Salvar query útil na workspace**
  ```
  mcp_redstrek_query_save(name: "ap_invoices_por_fornecedor", sql: "SELECT ...")
  ```

- [ ] **6.2 — Explain Plan (queries lentas)**
  Se a query demorar mais de 5s:
  ```
  mcp_redstrek_db_explain(sql: "SELECT ...", connection_id: "...")
  ```

---

> **Checklist de Qualidade SQL:**
> - [ ] Nomes de tabela verificados com `semantic_search` ou `db_search_objects`
> - [ ] Colunas verificadas com `db_table_info` ou `ALL_TAB_COLUMNS`
> - [ ] `FETCH FIRST N ROWS ONLY` presente em queries exploratórias
> - [ ] Sem `SELECT *` em queries de produção
> - [ ] Sem DML (UPDATE/DELETE) sem confirmação explícita do usuário
