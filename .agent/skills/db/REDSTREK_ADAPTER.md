# Redstrek Adapter — Como Executar as Skills Oracle via Redstrek

> Este arquivo é o único ponto de adaptação entre a biblioteca `oracle/skills/db`
> e o ambiente Redstrek. Os demais arquivos da Oracle são usados **sem modificação**
> como referência de conhecimento SQL/PL/SQL/Oracle.

## ⚠️ Restrições por Tipo de Conexão

> **LEIA ANTES DE USAR QUALQUER SKILL DO oracle/skills/db**

| Recurso | Oracle DB / EBS (on-premise) | Oracle Fusion Cloud |
|---------|------------------------------|---------------------|
| `v$sql`, `v$session`, `v$lock` | ✅ Disponível | ❌ ORA-00942 |
| `dba_hist_*`, `dba_users`, `dba_segments` | ✅ Disponível | ❌ Sem acesso DBA |
| `all_tab_columns`, `all_tables` | ✅ Disponível | ✅ Disponível |
| `db_table_info` (MCP tool) | ✅ Usar | ❌ Não usar — usar `ALL_TAB_COLUMNS` |
| `db_explain` (MCP tool) | ✅ Usar | ✅ Disponível |
| `DBMS_METADATA.GET_DDL` | ✅ Disponível | ⚠️ Pode não ter privilégio |
| Queries de performance (AWR/ASH) | ✅ On-premise | ❌ Não aplicável |
| Kill session / ALTER SYSTEM | ✅ Se tiver privilégio | ❌ Não aplicável |

**Regra:** Antes de usar qualquer query da biblioteca `oracle/skills/db` em uma conexão
Fusion Cloud, verifique se ela usa `v$*`, `dba_*` ou `dba_hist_*`. Se sim, **não use**.
Use apenas queries baseadas em `all_*`, `user_*` e `dual`.

---


## Regra de Ouro

Os arquivos `oracle/skills/db` dizem **o quê fazer** (queries corretas, padrões seguros,
diagnóstico de erros). O Redstrek é **como executar** essas queries. Este arquivo mapeia um no outro.

---

## Mapeamento: oracle/skills → Redstrek MCP Tool

### Executar qualquer query SQL

| oracle/skills diz | No Redstrek usa |
|-------------------|-----------------|
| "Execute this query" | `mcp_redstrek_db_execute_query(sql: "...", connection_id: "...")` |
| "Run this SELECT" | `mcp_redstrek_db_execute_query(sql: "SELECT ...", connection_id: "...")` |
| "Run via SQLcl" | Não usar SQLcl — usar `mcp_redstrek_db_execute_query` |
| "Execute via JDBC/Python/node-oracledb" | Não aplicável — usar `mcp_redstrek_db_execute_query` |

### Descobrir schema (schema-discovery.md)

As queries de `schema-discovery.md` são válidas **sem modificação**. Executar via:
```
mcp_redstrek_db_execute_query(sql: "<query do schema-discovery.md>", connection_id: "...")
```

**Atalhos Redstrek** (mais rápidos que escrever o SQL manualmente):
```
mcp_redstrek_db_table_info(table: "AP_INVOICES_ALL")   ← equivale a schema-discovery section "Discovering Columns"
mcp_redstrek_db_list_objects(object_type: "PACKAGE", filter: "XX%")  ← equivale a "Discovering Procedures"
mcp_redstrek_db_search_objects(search_name: "INVOICE")  ← busca mais rápida que ALL_OBJECTS
mcp_redstrek_semantic_search(query: "INVOICE")          ← FTS local no cache DuckDB
```

### Safe DML (safe-dml-patterns.md)

Os padrões de `safe-dml-patterns.md` se aplicam **diretamente**. A diferença é que
o Redstrek já tem um guard embutido — qualquer UPDATE/DELETE/INSERT **bloqueia** sem
`force_destructive: true`.

**Fluxo correto no Redstrek:**
1. Fazer o `SELECT COUNT(*)` de impacto (sem `force_destructive`)
2. Mostrar o resultado ao usuário
3. Pedir confirmação explícita
4. Só então executar com `force_destructive: true`

```
# Passo 1 — sempre primeiro
mcp_redstrek_db_execute_query(sql: "SELECT COUNT(*) FROM ...", connection_id: "...")

# Passo 2 — só com confirmação do usuário
mcp_redstrek_db_execute_query(sql: "UPDATE ...", connection_id: "...", force_destructive: true)
```

### Destructive Op Guards (destructive-op-guards.md)

Equivalente Redstrek — o `db_deploy` bloqueia por padrão:
```
mcp_redstrek_db_deploy(script: "DROP TABLE ...", connection_id: "...", force_destructive: true)
```
Nunca enviar `force_destructive: true` sem confirmação explícita do usuário.

### ORA- Errors (ora-error-catalog.md)

Usar `ora-error-catalog.md` para diagnóstico. Para investigar no banco:
```
mcp_redstrek_db_execute_query(sql: "SELECT * FROM user_errors WHERE name = '...'", connection_id: "...")
```

### Explain Plan (performance/explain-plan.md)

```
mcp_redstrek_db_explain(sql: "SELECT ...", connection_id: "...")
```

### Download de objetos (schema-discovery.md → "Procedures")

Em vez de usar `DBMS_METADATA.GET_DDL` diretamente:
```
mcp_redstrek_db_download_object(object_type: "PACKAGE", name: "XXAP_NFE_PKG", connection_id: "...")
```

### Busca em código PL/SQL (schema-discovery.md → ALL_SOURCE)

```
mcp_redstrek_db_search_plsql(search_term: "process_invoice", connection_id: "...")
```

---

## O que NÃO se aplica ao Redstrek

Os arquivos abaixo da `oracle/skills/db` **não são relevantes** no contexto Redstrek —
o Redstrek gerencia essas camadas internamente:

| Diretório/Arquivo | Por quê não aplicável |
|-------------------|-----------------------|
| `db/sqlcl/` | Redstrek usa driver nativo (OCI), não SQLcl |
| `db/frameworks/` (Django, Spring, etc.) | Redstrek não é um framework de aplicação |
| `db/containers/` | Gerenciamento de infraestrutura — fora do escopo |
| `db/admin/` (RMAN, Data Guard) | DBA de infra — fora do escopo do consultor |
| `db/appdev/jdbc.md`, `node-oracledb.md` | Redstrek usa OCI nativo |

## O que é diretamente aproveitável (sem adaptação)

✅ `db/agent/schema-discovery.md` — queries de introspecção, usar via `db_execute_query`  
✅ `db/agent/safe-dml-patterns.md` — lógica de segurança (Redstrek reforça com `force_destructive`)  
✅ `db/agent/destructive-op-guards.md` — checklist antes de DROP/TRUNCATE  
✅ `db/agent/ora-error-catalog.md` — diagnóstico completo de ORA-XXXXX  
✅ `db/agent/nl-to-sql-patterns.md` — traduzir pedido do usuário para SQL  
✅ `db/sql-dev/sql-best-practices.md` — padrões SQL (bind variables, JOINs, NULLs, FETCH FIRST)  
✅ `db/sql-dev/sql-patterns.md` — CTEs, analíticas, PIVOT, UNPIVOT  
✅ `db/plsql/` — design de packages, error handling, cursors, performance PL/SQL  
✅ `db/performance/explain-plan.md` — usar via `mcp_redstrek_db_explain`  
✅ `db/security/row-level-security.md` — VPD/RAS (contexto Fusion/EBS)  
✅ `db/migrations/` — quando cliente migra de outro banco para Oracle  
