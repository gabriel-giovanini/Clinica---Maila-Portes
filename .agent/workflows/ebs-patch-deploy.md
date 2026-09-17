---
description: >
  Workflow completo de Patch e Deploy para Oracle EBS (E-Business Suite) e Oracle Database
  usando o Redstrek. Use quando o usuário precisar criar um patch EBS, adicionar objetos
  PL/SQL (packages, procedures), gerar o install.sql, baixar LDTs via FNDLOAD ou
  fazer deploy de DDL/DML em Oracle DB.
---
# Workflow: Oracle EBS Patch & Deploy — Redstrek

Este workflow guia o Consultor Técnico Oracle no processo de criação de patches EBS,
gerenciamento de objetos PL/SQL e deploy controlado em Oracle Database usando as
ferramentas MCP do Redstrek.

> **Segurança:** O Redstrek bloqueia automaticamente UPDATE/DELETE/INSERT/DROP/ALTER
> sem confirmação explícita. Nunca use `force_destructive: true` sem confirmar com o usuário.

---

## 🏗️ PARTE A: Oracle EBS — Criação de Patch

### A.1 — Setup Inicial do Patch

- [ ] **A.1.1 — Identificar a conexão EBS**
  ```
  mcp_redstrek_list_connections()
  ```
  Buscar conexão do tipo `oracle_ebs` ou `oracle_db` para o EBS.

- [ ] **A.1.2 — Criar estrutura do patch**
  Convenção de nomenclatura EBS:
  - Formato: `<SIGLA_CLIENTE>_<MODULO>_<NUMERO>_<DESCRICAO>`
  - Exemplo: `ACME_AP_001_NOTA_FISCAL_ELETRONICA`
  
  ```
  mcp_redstrek_patch_create(
    name: "ACME_AP_001_NOTA_FISCAL_ELETRONICA",
    connection_id: "..."
  )
  ```

- [ ] **A.1.3 — Ativar o patch como patch corrente**
  ```
  mcp_redstrek_patch_set_current(
    name: "ACME_AP_001_NOTA_FISCAL_ELETRONICA",
    connection_id: "..."
  )
  ```

### A.2 — Desenvolver e Adicionar Objetos

- [ ] **A.2.1 — Baixar objetos existentes do banco (para modificar)**
  
  Baixar Package existente para editar:
  ```
  mcp_redstrek_db_download_object(
    object_type: "PACKAGE",
    name: "XXAP_NFE_PKG",
    owner: "APPS",
    connection_id: "..."
  )
  ```
  
  Baixar Package Body:
  ```
  mcp_redstrek_db_download_object(
    object_type: "PACKAGE BODY",
    name: "XXAP_NFE_PKG",
    owner: "APPS",
    connection_id: "..."
  )
  ```

  Tipos suportados: `PACKAGE`, `PACKAGE BODY`, `PROCEDURE`, `FUNCTION`,
  `TRIGGER`, `VIEW`, `TABLE`, `TYPE`, `SEQUENCE`

- [ ] **A.2.2 — Pesquisar lógica existente no código fonte**
  Para entender onde uma funcionalidade está implementada:
  ```
  mcp_redstrek_db_search_plsql(
    search_term: "process_invoice",
    connection_id: "..."
  )
  ```

- [ ] **A.2.3 — Adicionar arquivo ao patch ativo**
  Após criar/modificar os arquivos localmente:
  ```
  mcp_redstrek_patch_add_artifact(
    file: "./XXAP_NFE_PKG.pks",
    connection_id: "..."
  )
  mcp_redstrek_patch_add_artifact(
    file: "./XXAP_NFE_PKG.pkb",
    connection_id: "..."
  )
  mcp_redstrek_patch_add_artifact(
    file: "./XXAP_NFE_SETUP.sql",
    connection_id: "..."
  )
  ```

### A.3 — FNDLOAD (Objetos AOL/FND)

Para objetos AOL (menus, responsabilidades, concurrent programs):

- [ ] **A.3.1 — Listar objetos FNDLOAD disponíveis**
  ```
  mcp_redstrek_ebs_list_fndload(
    fndload_type: "CONCURRENT_PROGRAM",
    connection_id: "..."
  )
  ```
  Tipos: `CONCURRENT_PROGRAM`, `REQUEST_GROUP`, `MENU`, `RESPONSIBILITY`,
  `LOOKUP`, `PROFILE`, `FORM_FUNCTION`

- [ ] **A.3.2 — Baixar LDT via FNDLOAD**
  ```
  mcp_redstrek_ebs_download_fndload(
    fndload_type: "CONCURRENT_PROGRAM",
    name: "XXAP_IMPORTA_NFE",
    app_short_name: "XXAP",
    connection_id: "..."
  )
  ```

- [ ] **A.3.3 — Adicionar LDT ao patch**
  ```
  mcp_redstrek_patch_add_artifact(
    file: "./XXAP_IMPORTA_NFE.ldt",
    connection_id: "..."
  )
  ```

### A.4 — Gerar Install.sql e Finalizar

- [ ] **A.4.1 — Gerar o install.sql consolidado**
  ```
  mcp_redstrek_patch_generate_install(
    patch: "ACME_AP_001_NOTA_FISCAL_ELETRONICA",
    connection_id: "..."
  )
  ```
  O Redstrek gera um `install.sql` com a ordem correta de execução dos objetos.

- [ ] **A.4.2 — Revisar o install.sql gerado**
  Abrir o arquivo `install.sql` e verificar:
  - Ordem de criação (dependências respeitadas)
  - Statements de compilação (`ALTER PACKAGE COMPILE`, etc.)
  - Includes dos LDTs

---

## 🚀 PARTE B: Oracle DB — Deploy Controlado

### B.1 — Deploy de DDL (Tabelas, Views, Sequences)

- [ ] **B.1.1 — Validar script antes de fazer deploy**
  ```
  mcp_redstrek_db_explain(
    sql: "CREATE TABLE XXAP_NFE_HEADERS ...",
    connection_id: "..."
  )
  ```
  > Use `db_explain` para validar sintaxe sem commitar.

- [ ] **B.1.2 — Deploy do script**
  ```
  mcp_redstrek_db_deploy(
    file: "./XXAP_NFE_HEADERS.sql",
    connection_id: "..."
  )
  ```
  
  Para script inline:
  ```
  mcp_redstrek_db_deploy(
    script: "CREATE TABLE XXAP_TEST (ID NUMBER, NOME VARCHAR2(100))",
    connection_id: "..."
  )
  ```

### B.2 — Deploy de PL/SQL (Packages, Procedures)

- [ ] **B.2.1 — Deploy da especificação (header)**
  ```
  mcp_redstrek_db_deploy(
    file: "./XXAP_NFE_PKG.pks",
    connection_id: "..."
  )
  ```

- [ ] **B.2.2 — Deploy do corpo (body)**
  ```
  mcp_redstrek_db_deploy(
    file: "./XXAP_NFE_PKG.pkb",
    connection_id: "..."
  )
  ```

- [ ] **B.2.3 — Verificar se compilou sem erros**
  ```
  mcp_redstrek_db_execute_query(
    sql: "SELECT object_name, object_type, status FROM user_objects WHERE object_name = 'XXAP_NFE_PKG' AND status = 'INVALID'",
    connection_id: "..."
  )
  ```
  Se retornar linha, compilar manualmente:
  ```
  mcp_redstrek_db_execute_query(
    sql: "ALTER PACKAGE XXAP_NFE_PKG COMPILE",
    connection_id: "..."
  )
  ```

### B.3 — DML Controlado (INSERT/UPDATE/DELETE)

> ⚠️ **SEMPRE pedir confirmação explícita do usuário antes de executar DML destrutivo.**

- [ ] **B.3.1 — Preview do impacto antes do DML**
  ```
  mcp_redstrek_db_execute_query(
    sql: "SELECT COUNT(*) FROM xxap_nfe_headers WHERE status = 'ERROR'",
    connection_id: "..."
  )
  ```

- [ ] **B.3.2 — Confirmar com o usuário**
  Apresentar ao usuário: "Serão afetados X registros. Confirma a execução?"

- [ ] **B.3.3 — Executar o DML com force_destructive**
  Somente após confirmação explícita:
  ```
  mcp_redstrek_db_execute_query(
    sql: "UPDATE xxap_nfe_headers SET status = 'PENDENTE' WHERE status = 'ERROR'",
    connection_id: "...",
    force_destructive: true
  )
  ```

---

## 🔍 PARTE C: Investigação e Diagnóstico

### C.1 — Inspecionar Objetos Inválidos

```sql
-- Listar todos os objetos inválidos do schema
SELECT object_name, object_type, last_ddl_time
FROM user_objects
WHERE status = 'INVALID'
ORDER BY object_type, object_name
```

### C.2 — Ver Erros de Compilação

```sql
-- Ver erros detalhados de compilação
SELECT name, type, line, position, text
FROM user_errors
WHERE name = 'XXAP_NFE_PKG'
ORDER BY sequence
```

### C.3 — Recompilar Objetos Inválidos em Cascata

```sql
-- Gera statements para recompilar tudo
SELECT 'ALTER ' || object_type || ' ' || object_name || ' COMPILE;'
FROM user_objects
WHERE status = 'INVALID'
  AND object_type IN ('PACKAGE', 'PACKAGE BODY', 'PROCEDURE', 'FUNCTION', 'TRIGGER', 'VIEW')
```

### C.4 — Verificar Grants e Dependências

```sql
-- Verificar se o objeto tem os grants necessários
SELECT grantee, privilege, granted_option
FROM user_tab_privs_made
WHERE table_name = 'XXAP_NFE_PKG'

-- Ver dependências do objeto
SELECT name, type, referenced_name, referenced_type
FROM user_dependencies
WHERE name = 'XXAP_NFE_PKG'
ORDER BY referenced_type, referenced_name
```

---

## 📋 Checklist de Qualidade — Deploy EBS

| Item | Critério |
|------|----------|
| ✅ Nomenclatura | Prefixo `XX` + módulo (XXAP_, XXGL_, XXHR_) |
| ✅ Compilação | Nenhum objeto INVALID após deploy |
| ✅ Dependências | Objetos base compilados antes dos dependentes |
| ✅ Grants | `GRANT EXECUTE ON XXAP_NFE_PKG TO APPS` se necessário |
| ✅ Documentação | Cabeçalho com version, autor, data, descrição |
| ✅ LDTs | FNDLOAD baixado e adicionado ao patch |
| ✅ Install.sql | Gerado e revisado antes de entregar o patch |
