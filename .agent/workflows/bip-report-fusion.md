---
description: >
  Workflow completo para criar, editar e publicar relatórios BIP (BI Publisher)
  no Oracle Fusion Cloud usando o Redstrek. Use quando o usuário quiser criar
  um novo relatório, extrair SQL de um relatório existente, editar um Data Model
  ou fazer upload de alterações para o catalog.
---
# Workflow: BIP Report — Criar e Gerenciar Relatórios Fusion Cloud

Este workflow guia o Consultor Técnico Oracle através do ciclo completo de
desenvolvimento de relatórios BIP (BI Publisher) no Oracle Fusion Cloud usando
as ferramentas MCP do Redstrek.

> **Tipos de operação cobertos:**
> - Explorar catálogo de relatórios
> - Extrair SQL de Data Model existente
> - Criar novo relatório do zero
> - Executar e validar relatório
> - Fazer upload de alterações

---

## 🗺️ Fase 1: Explorar o Catálogo BIP

- [ ] **1.1 — Listar conexão Fusion disponível**
  ```
  mcp_redstrek_list_connections()
  ```
  Identificar o `connection_id` da conexão tipo `oracle_fusion`.

- [ ] **1.2 — Navegar no catálogo**
  Começar pelas pastas principais:
  ```
  mcp_redstrek_list_fusion_catalog(folder_path: "/Shared Folders", connection_id: "...")
  ```
  Pasta custom do cliente geralmente em:
  - `/Shared Folders/Custom/<NomeCliente>/`
  - `/Custom/<NomeCliente>/`

- [ ] **1.3 — Navegar em subpastas**
  Ir refinando o caminho até o relatório ou pasta desejados:
  ```
  mcp_redstrek_list_fusion_catalog(
    folder_path: "/Shared Folders/Custom/MeuCliente/Financials",
    connection_id: "..."
  )
  ```

---

## 📥 Fase 2: Trabalhar com Relatório Existente

### 2A — Extrair SQL do Data Model

- [ ] **2A.1 — Baixar o Data Model (.xdm)**
  ```
  mcp_redstrek_bip_download_artifact(
    path: "/Shared Folders/Custom/MeuCliente/Financials/MEU_RELATORIO",
    connection_id: "..."
  )
  ```

- [ ] **2A.2 — Extrair o SQL puro do Data Model**
  ```
  mcp_redstrek_bip_extract_sql(
    path: "/Shared Folders/Custom/MeuCliente/Financials/MEU_RELATORIO",
    connection_id: "..."
  )
  ```
  > O Redstrek descompacta o .xdmz e retorna o SQL do bloco CDATA.

- [ ] **2A.3 — Validar e melhorar o SQL extraído**
  Usar o workflow `/oracle-sql-investigation` para refinar a query.

  Lint obrigatório antes de qualquer alteração:
  ```
  mcp_redstrek_lint_sql(sql_query: "<SQL extraído>")
  ```

### 2B — Executar Relatório Existente

- [ ] **2B.1 — Ver parâmetros do relatório**
  ```
  mcp_redstrek_bip_get_report_parameters(
    path: "/Shared Folders/Custom/MeuCliente/Financials/MEU_RELATORIO",
    connection_id: "..."
  )
  ```

- [ ] **2B.2 — Executar o relatório**
  ```
  mcp_redstrek_bip_run_report(
    path: "/Shared Folders/Custom/MeuCliente/Financials/MEU_RELATORIO",
    format: "csv",
    params: ["P_DATE_FROM=2025-01-01", "P_DATE_TO=2025-12-31"],
    connection_id: "..."
  )
  ```
  Formatos disponíveis: `csv`, `pdf`, `excel`, `xml`, `html`

---

## 🆕 Fase 3: Criar Novo Relatório BIP

- [ ] **3.1 — Preparar o SQL do Data Model**
  Escrever e validar o SQL antes de criar o relatório.
  Usar workflow `/oracle-sql-investigation` para confirmar tabelas e colunas.
  
  Lint obrigatório:
  ```
  mcp_redstrek_lint_sql(sql_query: "SELECT ...")
  ```

- [ ] **3.2 — Definir o caminho no catálogo**
  Convenção de nomenclatura recomendada:
  ```
  /Shared Folders/Custom/<CLIENTE>/<MODULO>/<XX_NOME_RELATORIO>
  ```
  Exemplo: `/Shared Folders/Custom/Acme/Financials/XX_AP_FATURAS_VENCIDAS`

- [ ] **3.3 — Criar o relatório com SQL inline**
  ```
  mcp_redstrek_bip_create_int(
    path: "/Shared Folders/Custom/Acme/Financials/XX_AP_FATURAS_VENCIDAS",
    sql: "SELECT ai.invoice_num, ai.invoice_amount, ai.due_date FROM ap_invoices_all ai WHERE ai.payment_status_flag = 'N'",
    connection_id: "..."
  )
  ```
  
  **OU com arquivo SQL local:**
  ```
  mcp_redstrek_bip_create_int(
    path: "/Shared Folders/Custom/Acme/Financials/XX_AP_FATURAS_VENCIDAS",
    sql_file: "./queries/ap_faturas_vencidas.sql",
    connection_id: "..."
  )
  ```

- [ ] **3.4 — Verificar criação executando o relatório**
  ```
  mcp_redstrek_bip_run_report(
    path: "/Shared Folders/Custom/Acme/Financials/XX_AP_FATURAS_VENCIDAS",
    format: "csv",
    connection_id: "..."
  )
  ```

---

## 📤 Fase 4: Upload de Alterações

Após editar um Data Model (.xdmz) localmente:

- [ ] **4.1 — Fazer upload do arquivo modificado**
  ```
  mcp_redstrek_bip_upload(
    path: "/Shared Folders/Custom/Acme/Financials/XX_AP_FATURAS_VENCIDAS",
    file: "./XX_AP_FATURAS_VENCIDAS.xdmz",
    connection_id: "..."
  )
  ```

- [ ] **4.2 — Validar o upload executando o relatório**
  ```
  mcp_redstrek_bip_run_report(
    path: "/Shared Folders/Custom/Acme/Financials/XX_AP_FATURAS_VENCIDAS",
    format: "csv",
    connection_id: "..."
  )
  ```

---

## 📦 Fase 5: Sincronizar Pasta Inteira (Backup)

Para sincronizar todos os relatórios de uma pasta para a workspace local:

```
mcp_redstrek_bip_download_folder(
  path: "/Shared Folders/Custom/Acme",
  output_dir: "./bip_backup",
  connection_id: "..."
)
```

---

## 🚨 Regras de Nomenclatura BIP (Fusion Cloud)

| Regra | Exemplo |
|-------|---------|
| Prefixo XX_ para customizações | `XX_AP_FATURAS_VENCIDAS` |
| MAIÚSCULAS, underscores | `XX_GL_BALANCETE_MENSAL` |
| Módulo no nome | `XX_AR_`, `XX_AP_`, `XX_GL_`, `XX_PO_`, `XX_HCM_` |
| Sem espaços ou caracteres especiais | ✅ `XX_FATURAMENTO_2025` ❌ `Faturamento 2025` |

## ⚠️ Limitações do BIP (Fusion Cloud)

- SQL deve ser compatível com BIP (sem CONNECT BY hierárquico complexo)
- `FETCH FIRST N ROWS ONLY` é aceito mas prefira `ROWNUM <= N` para compatibilidade
- BIP não suporta PL/SQL anônimo — apenas SELECT puro
- Parâmetros BIP usam o formato `P_NOME_PARAM` com prefixo P_
- Tamanho máximo de Data Model: ~50MB
