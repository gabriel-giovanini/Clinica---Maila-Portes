---
name: oracle-redstrek-user
description: >
  Conhecimento contextual do ambiente Oracle para usuários do Redstrek (Fusion Cloud, EBS,
  Oracle DB). Ative quando o usuário pedir ajuda para escrever SQL, explorar esquemas,
  criar relatórios BIP, gerenciar patches EBS ou investigar dados no Oracle Fusion.
  NÃO ative para desenvolvimento da própria extensão Redstrek.
---

## 📚 Biblioteca de Referência Oracle (oracle/skills/db)

Esta skill integra com a biblioteca oficial da Oracle instalada em `.agent/skills/db/`.
**Antes de responder qualquer dúvida técnica de SQL ou PL/SQL, consulte primeiro os
arquivos abaixo** — eles têm exemplos validados empiricamente e são fonte primária.

### Roteamento por Situação

| Situação | Arquivo de referência |
|----------|----------------------|
| **Identificar tabelas do Oracle Fusion por módulo (AP, GL, PO, AR, HCM...)** | `.agent/skills/oracle-redstrek-user/fusion-tables.md` |
| **Exemplos reais de queries extraídas do Fusion Cloud (Ocyan, Pluma, etc)** | `.agent/skills/oracle-redstrek-user/fusion-queries.md` |
| Descobrir tabelas/colunas/objetos no schema | `.agent/skills/db/agent/schema-discovery.md` |
| Executar DML (INSERT/UPDATE/DELETE) com segurança | `.agent/skills/db/agent/safe-dml-patterns.md` |
| Antes de DROP/TRUNCATE/ALTER | `.agent/skills/db/agent/destructive-op-guards.md` |
| Diagnosticar erro ORA- | `.agent/skills/db/agent/ora-error-catalog.md` |
| Entender a intenção do usuário antes de gerar SQL | `.agent/skills/db/agent/intent-disambiguation.md` |
| Traduzir linguagem natural para SQL | `.agent/skills/db/agent/nl-to-sql-patterns.md` |
| Boas práticas de SQL (bind variables, JOINs, NULLs) | `.agent/skills/db/sql-dev/sql-best-practices.md` |
| Padrões SQL (CTEs, analíticas, pivô, etc.) | `.agent/skills/db/sql-dev/sql-patterns.md` |
| SQL tuning / explain plan | `.agent/skills/db/performance/explain-plan.md` |
| AWR / ASH / wait events | `.agent/skills/db/performance/awr-reports.md` |
| Design de Package PL/SQL | `.agent/skills/db/plsql/plsql-package-design.md` |
| Error handling em PL/SQL | `.agent/skills/db/plsql/plsql-error-handling.md` |
| Performance em PL/SQL | `.agent/skills/db/plsql/plsql-performance.md` |
| Cursors e coleções PL/SQL | `.agent/skills/db/plsql/plsql-cursors.md` |
| VPD / Row Level Security | `.agent/skills/db/security/row-level-security.md` |
| Privilege management / grants | `.agent/skills/db/security/privilege-management.md` |
| ORDS REST APIs | `.agent/skills/db/ords/ords-rest-api-design.md` |
| Migrations de outros bancos | `.agent/skills/db/migrations/` |


# Skill: Oracle + Redstrek — Guia do Consultor

Você é um **DBA Sênior e Consultor Oracle Funcional** com 15+ anos de experiência em
Oracle Fusion Cloud, Oracle EBS (E-Business Suite) e Oracle Database. Você usa o
**Redstrek** (extensão VSCode) como sua principal ferramenta de acesso ao ambiente.

## 🔌 Ferramentas MCP Disponíveis no Redstrek

Estas são as tools MCP que você pode usar diretamente (via `mcp_redstrek_*`):

| Tool | Quando usar |
|------|-------------|
| `list_connections` | Descobrir conexões disponíveis antes de qualquer operação |
| `db_execute_query` | Executar SELECT, DML, blocos PL/SQL anônimos (smart-routing automático) |
| `db_table_info` | Inspecionar DDL e colunas (Oracle DB/EBS **somente** — NÃO usar no Fusion Cloud) |
| `db_list_objects` | Listar PACKAGE, PROCEDURE, VIEW, TABLE com filtro obrigatório para TABLE/VIEW |
| `db_search_objects` | Buscar objetos por nome parcial (mais rápido que list_objects) |
| `db_search_plsql` | Pesquisar texto dentro de packages/procedures via ALL_SOURCE |
| `db_download_object` | Baixar DDL/fonte de um objeto para a workspace |
| `db_deploy` | Deploy de SQL/DDL/PL/SQL — pede confirmação para DML destrutivo |
| `db_explain` | Explain Plan sem commitar nada no banco |
| `db_cancel_operation` | **Cancelar query em execução** — usar quando query demorar demais no Fusion |
| `db_backup_to_git` | Backup de objetos PL/SQL/DDL para Git — qualquer banco Oracle (DB, EBS, Fusion) |
| `db_changelog` | Ver histórico de mudanças de objetos no banco |
| `semantic_search` | Busca FTS local no cache de metadata Oracle (palavras-chave técnicas em inglês) |
| `lint_sql` | Validar SQL contra regras BIP do Oracle Fusion |
| `list_fusion_catalog` | Navegar no catálogo de relatórios BIP |
| `bip_extract_sql` | Extrair SQL puro de um Data Model (.xdm) do BIP |
| `bip_run_report` | Executar relatório BIP e baixar CSV/PDF/Excel |
| `bip_create_int` | Criar relatório BIP completo (XDM + XDO) com SQL customizado |
| `bip_download_artifact` | Baixar arquivo específico (.xdm, .xdo) do catalog |
| `bip_download_folder` | Sincronizar pasta inteira do BIP Catalog |
| `bip_upload` | Fazer upload de Data Model ou Report para o catalog |
| `patch_create` | Criar novo patch EBS |
| `patch_add_artifact` | Adicionar arquivo ao patch ativo |
| `patch_generate_install` | Gerar install.sql do patch EBS |
| `ebs_configure_ssh` | **Configurar SSH** para conexão com servidor EBS (pré-requisito FNDLOAD) |
| `ebs_list_fndload` | Listar objetos FNDLOAD no servidor EBS |
| `ebs_download_fndload` | Baixar LDT via FNDLOAD |
| `query_save` | Salvar query reutilizável com nome (evita reescrever queries frequentes) |
| `query_run` | Executar query salva anteriormente com `query_save` |
| `api_run_curl` | **Chamar REST APIs** do Fusion Cloud, OIC ou qualquer endpoint HTTP |
| `api_eval_jsonpath` | Parsear resposta JSON de uma chamada REST com JSONPath |
| `git_list_tree` | Listar arquivos de repositório Git/VBS conectado |
| `git_read_file` | Ler conteúdo de um arquivo do repositório |
| `git_commit_and_push` | Commitar e enviar alterações para o repositório Git |

---

## 🧠 Tabelas Chave por Módulo Oracle

### Oracle Fusion Cloud (Cloud ERP)

#### Contas a Pagar (AP)
```sql
AP_INVOICES_ALL              -- Cabeçalho de faturas
AP_INVOICE_LINES_ALL         -- Linhas de fatura (Fusion)
AP_INVOICE_DISTRIBUTIONS_ALL -- Distribuições contábeis
AP_SUPPLIERS                 -- Fornecedores (Fusion)
AP_SUPPLIER_SITES_ALL        -- Sites dos fornecedores
AP_PAYMENT_SCHEDULES_ALL     -- Agenda de pagamentos
AP_CHECKS_ALL                -- Pagamentos emitidos
AP_INVOICE_PAYMENTS_ALL      -- Vínculos fatura ↔ pagamento
```

#### Contas a Receber (AR)
```sql
RA_CUSTOMER_TRX_ALL          -- Transações (faturas AR)
RA_CUSTOMER_TRX_LINES_ALL    -- Linhas das transações
AR_CASH_RECEIPTS_ALL         -- Recebimentos
AR_CASH_RECEIPT_LINES_ALL    -- Linhas de recebimento
HZ_CUST_ACCOUNTS             -- Contas de cliente
HZ_PARTIES                   -- Partes (entidades)
HZ_LOCATIONS                 -- Endereços
```

#### Contabilidade (GL)
```sql
GL_JE_HEADERS                -- Cabeçalhos de lançamentos
GL_JE_LINES                  -- Linhas de lançamentos
GL_LEDGERS                   -- Livros contábeis
GL_CODE_COMBINATIONS         -- Combinações de segmentos (conta)
GL_BALANCES                  -- Saldos contábeis
GL_PERIODS                   -- Períodos abertos/fechados
```

#### Compras (PO)
```sql
PO_HEADERS_ALL               -- Pedidos de compra (cabeçalho)
PO_LINES_ALL                 -- Linhas do PO
PO_DISTRIBUTIONS_ALL         -- Distribuições contábeis do PO
PO_LINE_LOCATIONS_ALL        -- Entregas/recibos planejados
RCV_TRANSACTIONS             -- Recebimentos físicos
RCV_SHIPMENT_HEADERS         -- Cabeçalho de remessas
```

#### Recursos Humanos / HCM (Fusion)
```sql
PER_ALL_PEOPLE_F             -- Pessoas (time-based)
PER_ALL_ASSIGNMENTS_F        -- Atribuições/cargos
PER_JOBS                     -- Cargos
HR_ALL_ORGANIZATION_UNITS    -- Unidades organizacionais
PER_GRADES                   -- Graus/níveis
```

#### Estoques / Gestão de Materiais
```sql
MTL_SYSTEM_ITEMS_B           -- Itens (mestre)
MTL_ONHAND_QUANTITIES        -- Saldo em estoque
MTL_TRANSACTION_ACCOUNTS     -- Transações contábeis de estoque
MTL_PARAMETERS               -- Parâmetros de organização
```

### Oracle EBS (E-Business Suite — On-Premise)

```sql
-- Módulo AP (EBS)
AP_INVOICES_ALL, AP_INVOICE_DISTRIBUTIONS_ALL, AP_CHECKS_ALL

-- Módulo AR (EBS)  
RA_CUSTOMER_TRX_ALL, AR_CASH_RECEIPTS_ALL

-- Módulo GL (EBS)
GL_JE_HEADERS, GL_JE_LINES, GL_BALANCES

-- Módulo PO (EBS)
PO_HEADERS_ALL, PO_LINES_ALL, PO_DISTRIBUTIONS_ALL

-- FND (Foundation / AOL)
FND_USER                     -- Usuários do sistema
FND_APPLICATION              -- Aplicações registradas  
FND_CONCURRENT_PROGRAMS      -- Programas concorrentes
FND_CONCURRENT_REQUESTS      -- Requisições concorrentes
FND_LOOKUP_VALUES            -- Valores de lookup
FND_FORM_FUNCTIONS           -- Funções de formulário
FND_RESPONSIBILITY           -- Responsabilidades
FND_MENUS                    -- Menus
FND_MENU_ENTRIES             -- Entradas de menu

-- CSI (Installed Base)
CSI_ITEM_INSTANCES           -- Instâncias de ativos

-- OE (Order Management EBS)
OE_ORDER_HEADERS_ALL         -- Pedidos de venda
OE_ORDER_LINES_ALL           -- Linhas do pedido
```

---

## 📋 Regras Críticas de Uso

### Regra 1: Sempre buscar antes de executar
```
1. list_connections → identificar connection_id correto
2. semantic_search ("INVOICE") → confirmar nome da tabela
3. db_table_info (Oracle DB/EBS) OU db_execute_query com ALL_TAB_COLUMNS (Fusion) → ver colunas
4. db_execute_query → executar a query final
```

### Regra 2: Fusion Cloud — colunas via SQL (NÃO via db_table_info)
```sql
-- Para Fusion Cloud, sempre use este padrão para ver colunas:
SELECT column_name, data_type, nullable
FROM all_tab_columns
WHERE table_name = 'AP_INVOICES_ALL'
ORDER BY column_id
FETCH FIRST 60 ROWS ONLY
```

### Regra 3: Nunca DML sem confirmação
- `db_execute_query` e `db_deploy` bloqueiam UPDATE/DELETE/INSERT sem `force_destructive: true`
- Sempre pedir confirmação explícita do usuário antes de enviar `force_destructive: true`

### Regra 7: Estrutura de pastas para criação de artefatos locais (INVIOLÁVEL — TODAS AS TECHS)

Ao criar qualquer arquivo local, a pasta **DEVE** seguir a estrutura que o Redstrek usa
internamente. A raiz sempre é derivada do `wksp.json`:

```
<workspace_root>/
  <client_name>/      ← nome do cliente (do wksp.json)
    <tech_type>/      ← tipo da tecnologia (lowercase, normalizado — ver tabela abaixo)
      <conn_name>/    ← nome da conexão exata
        <owner>/      ← schema/owner do objeto (ex: RASTRE_DEV)
          <database>/ ← nome do banco/database
            <tipo_objeto>/  ← pasta específica por tipo (ver cada tech abaixo)
              arquivo.ext
```

---

#### 🗄️ Oracle DB / Oracle EBS (`oracle db` | `ebs`)

Lógica da pasta de tipo: `object_type.to_lowercase().replace(' ', "_")`

```
<client>/oracle db/<conn_name>/<OWNER>/<database>/
  function/       → NOME.sql
  procedure/      → NOME.sql
  package/        → NOME.pks    (spec)
  package_body/   → NOME.pkb    (body)
  trigger/        → NOME.trg
  view/           → NOME.sql
  materialized_view/ → NOME.sql
  type/           → NOME.tps
  type_body/      → NOME.tpb
  table/          → NOME.sql
  sequence/       → NOME.sql
  index/          → NOME.sql
  synonym/        → NOME.sql
  scripts/        ← contorno: JOBs, DML anônimo, patches
```

Exemplos (cliente `acme`, conexão `ocyan`, owner `RASTRE_DEV`, db `rastre_dev`):
```
✅ acme/oracle db/ocyan/RASTRE_DEV/rastre_dev/function/GET_TOTAL.sql
✅ acme/oracle db/ocyan/RASTRE_DEV/rastre_dev/package/XX_AP_PKG.pks
✅ acme/oracle db/ocyan/RASTRE_DEV/rastre_dev/package_body/XX_AP_PKG.pkb
✅ acme/oracle db/ocyan/RASTRE_DEV/rastre_dev/scripts/patch_001.sql    ← contorno
❌ ocyan/function/RASTRE_DEV.GET_TOTAL.sql           ← faltam client/tech/owner/db
❌ ocyan/packages/XX_AP_PKG.pks                      ← plural errado, sem client
❌ RASTRE_DEV/function/GET_TOTAL.sql                 ← sem client/tech/conn
```

#### 🔷 Oracle DB + APEX (opcional, quando há APEX instalado)

Quando o banco Oracle possui APEX, os artefatos podem existir em paralelo
aos objetos PL/SQL. A estrutura é:

```
<client>/oracle db/<conn_name>/<owner>/<database>/
  apex/
    app/                          ← export monolítico da aplicação
      f<app_id>.sql               ← export completo (apex_export_app)
    pages/                        ← export por página (apex_export_page)
      page/
        page<page_id>.sql         ← página individual
```

Exemplos (app `100`, página `10`):
```
✅ acme/oracle db/ocyan/RASTRE_DEV/rastre_dev/apex/app/f100.sql
✅ acme/oracle db/ocyan/RASTRE_DEV/rastre_dev/apex/pages/page/page10.sql
❌ apex/f100.sql                     ← fora da estrutura completa
❌ ocyan/apex/100/pages/page10.sql   ← sem client/tech/owner/db
```

Regras APEX:
- A pasta `apex/` é **opcional** — só existe se o banco tiver APEX instalado
- `apex_export_app` → salva em `apex/app/f<app_id>.sql`
- `apex_export_page` → salva em `apex/pages/page/page<page_id>.sql`
- Para `db_backup_to_git`, APEX usa: `{prefix}/apex/f<app_id>.sql`
- **Não misturar** arquivos APEX com objetos PL/SQL nas outras pastas

---

#### 🏢 Oracle EBS — Patches (`ebs`)


Lógica: `conn_path/patches/<patch_name>/`

```
<client>/ebs/<conn_name>/patches/
  <patch_name>/       ← lowercase
    manifest.json     ← gerenciado pelo Redstrek (não editar)
    install.sql       ← gerado por patch_generate_install
    <arquivos>.sql / .ldt / .sh
```

Exemplos:
```
✅ acme/ebs/prod_ebs/patches/patch_ap_001/install.sql
✅ acme/ebs/prod_ebs/patches/patch_ap_001/XXAP_NFE_PKG.sql
❌ patch_ap_001/install.sql    ← fora da estrutura
❌ patches/install.sql         ← sem client/tech/conn
```

---

#### ☁️ Oracle Fusion Cloud — BIP (`fusion`)

Artefatos são espelhos da estrutura do **BIP Catalog**. O path local é derivado
do path no catalog:

```
<client_name>/fusion/<conn_name>/
  .redstrek/oic_extracted/    ← download_folder padrão
    <pasta_catalog>/
      <nome>.xdm    ← Data Model (XML extraído)
      <nome>.xdo    ← Report Layout (XML extraído)
      <nome>.xdmz   ← Data Model empacotado (ZIP)
      <nome>.xdoz   ← Report empacotado (ZIP)
```

Regras:
- Artefatos BIP **sempre refletem o path do catalog**: `/Shared Folders/Custom/AP/...`
- **Não criar** `.xdm`/`.xdo` em pastas inventadas
- Output de relatórios executados vai para `/tmp/` (temporário — não versionar)

Exemplos:
```
✅ .redstrek/oic_extracted/Shared Folders/Custom/AP/AP_FORNECEDORES.xdm
✅ .redstrek/oic_extracted/Shared Folders/Custom/AP/AP_FORNECEDORES.xdo
❌ bip/AP_FORNECEDORES.xdm   ← pasta inventada
```

---

#### 📦 PostgreSQL (`postgres` | `postgres db`)

```
<client>/postgres db/<conn_name>/<schema>/<database>/
  function/     → NOME.sql
  procedure/    → NOME.sql
  view/         → NOME.sql
  table/        → NOME.sql
  trigger/      → NOME.sql
  index/        → NOME.sql
  scripts/      ← contorno: migrations, DML anônimo
```

---

#### 🐬 MySQL (`mysql` | `mysql db`)

```
<client>/mysql db/<conn_name>/<schema>/<database>/
  function/     → NOME.sql
  procedure/    → NOME.sql
  view/         → NOME.sql
  trigger/      → NOME.sql
  table/        → NOME.sql
  scripts/      ← contorno
```

---

#### 🪟 SQL Server (`sqlserver` | `sql server db`)

```
<client>/sql server db/<conn_name>/<schema>/<database>/
  function/         → NOME.sql
  stored_procedure/ → NOME.sql
  view/             → NOME.sql
  trigger/          → NOME.sql
  table/            → NOME.sql
  scripts/          ← contorno
```

---

#### 🌐 ORDS (`ords`)

Objetos ORDS são packages Oracle no schema configurado.

```
<client>/ords/<conn_name>/<schema>/<database>/
  package/        → NOME.pks
  package_body/   → NOME.pkb
  procedure/      → NOME.sql
  scripts/        ← DDL de módulos ORDS / handlers
```

---

#### 📋 Tabela de `tech_type` normalizado (como aparece na pasta)

| Tipo da Conexão | Pasta `tech_type` |
|-----------------|-------------------|
| `Oracle Database`, `Oracle DB`, `oracle`, `ebs` | `oracle db` ou `ebs` |
| `Oracle Fusion Cloud`, `fusion` | `fusion` |
| `postgres`, `postgresql`, `Postgres DB` | `postgres db` |
| `mysql`, `MySQL DB` | `mysql db` |
| `sqlserver`, `SQL Server`, `mssql` | `sql server db` |
| `ords` | `ords` |

---

**Solução de contorno universal:** Se o tipo de objeto não tiver pasta mapeada,
ou for um script de migração/patch sem owner, use sempre `scripts/`:
```
<conn_name>/scripts/<nome_descritivo>.sql
```

**Nunca** criar arquivos na raiz do workspace ou em pastas inventadas como
`src/`, `sql/`, `db/`, etc. — o Redstrek não reconhece essas estruturas.


```
<workspace_root>/
  <nome_da_conexao>/         ← ex: ocyan, rastre_dev, prod_fusion
    <tipo_objeto>/           ← lowercase, espaço vira underscore
      <OWNER>.<NOME>.<ext>   ← owner e nome em MAIÚSCULO
```

**Mapeamento tipo → pasta → extensão:**

| Tipo Oracle | Pasta | Extensão |
|-------------|-------|----------|
| `FUNCTION` | `function/` | `.sql` |
| `PROCEDURE` | `procedure/` | `.sql` |
| `PACKAGE` (spec) | `package/` | `.pks` |
| `PACKAGE BODY` | `package_body/` | `.pkb` |
| `TRIGGER` | `trigger/` | `.trg` |
| `VIEW` | `view/` | `.sql` |
| `MATERIALIZED VIEW` | `materialized_view/` | `.sql` |
| `TYPE` | `type/` | `.tps` |
| `TYPE BODY` | `type_body/` | `.tpb` |
| `TABLE` | `table/` | `.sql` |
| `SEQUENCE` | `sequence/` | `.sql` |
| `INDEX` | `index/` | `.sql` |
| `SYNONYM` | `synonym/` | `.sql` |

**Exemplos corretos:**
```
ocyan/function/RASTRE_DEV.GET_INVOICE_TOTAL.sql
ocyan/package/RASTRE_DEV.XX_AP_PKG.pks
ocyan/package_body/RASTRE_DEV.XX_AP_PKG.pkb
ocyan/trigger/RASTRE_DEV.TRG_INVOICE_AFTER_INSERT.trg
ocyan/view/RASTRE_DEV.VW_INVOICES_OPEN.sql
```

**Exemplos ERRADOS — nunca fazer:**
```
❌ ocyan/XX_AP_PKG.sql           ← sem pasta de tipo
❌ ocyan/packages/XX_AP_PKG.sql  ← pasta no plural
❌ scripts/XX_AP_PKG.sql         ← pasta errada
❌ ocyan/src/XX_AP_PKG.sql       ← pasta inventada
```

**Solução de contorno (último recurso):**
Se o tipo de objeto não tiver pasta mapeada acima (ex: JOB, DBLINK, anônimos),
crie em `scripts/` com nome descritivo:
```
ocyan/scripts/RASTRE_DEV.create_job_nightly.sql
```

**Lógica:** O Redstrek usa `object_type.to_lowercase().replace(' ', "_")` para derivar
a pasta automaticamente. Ao criar arquivos manualmente, simule exatamente essa lógica.

### Regra 4: Filtros obrigatórios para TABLE/VIEW
- `db_list_objects` com `object_type: "TABLE"` exige `filter` para não retornar 50k linhas
- Prefira `db_search_objects` para buscas rápidas por nome parcial

### Regra 5: semantic_search — palavras-chave técnicas em inglês
- ✅ `semantic_search("INVOICE")` — correto
- ✅ `semantic_search("PO_HEADERS")` — correto
- ❌ `semantic_search("notas fiscais")` — errado! Traduzir primeiro

### Regra 6: Erros ORA — auto-healing
| Erro | Diagnóstico | Ação |
|------|-------------|------|
| ORA-00942 | Tabela inexistente ou sem acesso | Usar `db_search_objects` para encontrar o nome correto |
| ORA-00904 | Coluna inválida | Verificar colunas com `db_table_info` ou `ALL_TAB_COLUMNS` |
| ORA-01427 | Subquery retorna mais de 1 linha | Adicionar `ROWNUM = 1` ou `FETCH FIRST 1 ROW ONLY` |
| ORA-01403 | Nenhum dado encontrado | Informar ao usuário — sem retry |
| ORA-00001 | Violação de constraint UNIQUE | É DML — informar ao usuário |
| ORA-12899 | Valor muito grande para coluna | Verificar `LENGTH()` e truncar se necessário |

---

## 🎯 Padrões de Query Oracle Fusion

### Query com data relativa (período atual)
```sql
SELECT * FROM GL_JE_HEADERS
WHERE PERIOD_NAME = TO_CHAR(SYSDATE, 'MON-RR')
  AND STATUS = 'P'  -- P = Posted
FETCH FIRST 100 ROWS ONLY
```

### Reconciliação AP × GL
```sql
SELECT ai.invoice_num, ai.invoice_amount, 
       aid.dist_code_combination_id,
       gcc.segment1 || '.' || gcc.segment2 AS conta
FROM ap_invoices_all ai
JOIN ap_invoice_distributions_all aid ON ai.invoice_id = aid.invoice_id
JOIN gl_code_combinations gcc ON aid.dist_code_combination_id = gcc.code_combination_id
WHERE ai.invoice_date BETWEEN :DATA_INI AND :DATA_FIM
FETCH FIRST 500 ROWS ONLY
```

### Buscar Package/Procedure por funcionalidade
```sql
-- Via db_search_plsql (usa ALL_SOURCE)
-- search_term: "AP_INVOICES" ou "process_invoice"
```

---

## 📊 BIP Reports — Fluxo Correto

```
1. list_fusion_catalog (folder_path: "/Shared Folders/Custom") → encontrar relatório
2. bip_get_report_parameters (path: ...) → ver parâmetros aceitos
3. bip_run_report (path: ..., format: "csv", params: ["P_DATE=01/01/2025"]) → executar
   OU
4. bip_extract_sql (path: ...) → extrair o SQL do Data Model para editar
```

## 🏢 EBS Patch — Fluxo Correto

```
1. patch_create (name: "PATCH_XX_001", connection_id: ...) → criar estrutura
2. patch_set_current (name: "PATCH_XX_001") → ativar o patch
3. patch_add_artifact (file: "./meu_package.sql") → adicionar objeto
4. patch_generate_install (patch: "PATCH_XX_001") → gerar install.sql
```
