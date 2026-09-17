# 📚 Catálogo Estruturado de Tabelas (Oracle Fusion Cloud)

> Catálogo otimizado para Inteligência Artificial (RAG). As tabelas estão categorizadas pelos módulos oficiais da Oracle para rápida contextualização.

## 📑 Índice (Table of Contents)

- [FIN - Payables](#fin-payables)
- [FIN - Receivables & Cash](#fin-receivables-cash)
- [FIN - General Ledger & SLA](#fin-general-ledger-sla)
- [FIN - Tax & Legal](#fin-tax-legal)
- [FIN - Projects](#fin-projects)
- [SCM - Purchasing](#scm-purchasing)
- [SCM - Order Management](#scm-order-management)
- [SCM - Inventory & Costing](#scm-inventory-costing)
- [SCM - Shipping & Logistics](#scm-shipping-logistics)
- [LOC - Localização Brasil (FDC/FDG)](#loc-localização-brasil-(fdcfdg))
- [HCM & HR](#hcm-hr)
- [CX & CRM](#cx-crm)
- [SYS & Foundation](#sys-foundation)
- [Cross-Module & Outros](#cross-module-outros)

---

## FIN - Payables

| Tabela | Observação / Descrição |
|---|---|
| ✅ `AP_AWT_BUCKETS_ALL` | `AWT_BUCKET_ID` |
| ✅ `AP_AWT_GROUPS` | `GROUP_ID` |
| ✅ `AP_AWT_TAX_RATES_ALL` | `TAX_RATE_ID` |
| ✅ `AP_BANK_CHARGES` | `BANK_CHARGE_ID` |
| ✅ `AP_BATCHES_ALL` | `BATCH_ID` |
| ✅ `AP_CHECKS_ALL` | `CHECK_ID` |
| ✅ `AP_DISTRIBUTION_SETS_ALL` | `DISTRIBUTION_SET_ID` |
| ✅ `AP_DISTRIBUTION_SET_LINES_ALL` | `DISTRIBUTION_SET_LINE_ID` |
| ✅ `AP_DOC_SEQUENCE_AUDIT` | `DOC_SEQUENCE_VALUE` |
| ✅ `AP_HISTORY_CHECKS_ALL` | `CHECK_ID` |
| ✅ `AP_HISTORY_INVOICES_ALL` | `INVOICE_ID` |
| ✅ `AP_HISTORY_INV_PAYMENTS_ALL` | `INVOICE_PAYMENT_ID` |
| ✅ `AP_HOLDS_ALL` | `INVOICE_ID, LINE_LOCATION_ID` |
| ✅ `AP_HOLD_CODES` | `HOLD_LOOKUP_CODE` |
| ✅ `AP_INVOICES_ALL` | `INVOICE_ID` |
| ✅ `AP_INVOICES_INTERFACE` | AP |
| ✅ `AP_INVOICE_DISTRIBUTIONS_ALL` | `INVOICE_DISTRIBUTION_ID` |
| ✅ `AP_INVOICE_LINES_ALL` | `INVOICE_ID, LINE_NUMBER` |
| ✅ `AP_INVOICE_LINES_INTERFACE` | AP |
| ✅ `AP_INVOICE_PAYMENTS_ALL` | `INVOICE_PAYMENT_ID` |
| ✅ `AP_PAYMENT_SCHEDULES_ALL` | `INVOICE_ID, PAYMENT_NUM` |
| ✅ `AP_SYSTEM_PARAMETERS_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `AP_TAX_CODES` | Tabela referenciada em fusion-queries.md |
| ✅ `AP_TERMS` | Tabela referenciada em fusion-queries.md |
| ✅ `AP_TERMS_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `AP_TERMS_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `IBY_ACCOUNT_OWNERS` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `IBY_EXTERNAL_PAYEES_ALL` | Tabela referenciada em fusion-queries.md |
| ✅ `IBY_EXT_BANK_ACCOUNTS` | Tabela referenciada em fusion-queries.md |
| ✅ `IBY_EXT_PARTY_PMT_MTHDS` | Tabela referenciada em fusion-queries.md |
| ✅ `IBY_PAYMENTS_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `IBY_PAYMENT_METHODS_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `IBY_PMT_INSTR_USES_ALL` | Tabela referenciada em fusion-queries.md |
| ✅ `IBY_TEMP_EXT_BANK_ACCTS` | Extraído de Integration_Pluma.xdrz |
| ✅ `POZ_SITE_ASSIGNMENTS_INT` | Extraído de Integration_Pluma.xdrz |
| ✅ `POZ_SUPPLIERS` | `VENDOR_ID` |
| ✅ `POZ_SUPPLIERS_INT` | Extraído de Integration_Pluma.xdrz |
| ✅ `POZ_SUPPLIERS_V` | Tabela referenciada em fusion-queries.md |
| ✅ `POZ_SUPPLIER_ADDRESS_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `POZ_SUPPLIER_CONTACTS` | `VENDOR_CONTACT_ID` |
| ✅ `POZ_SUPPLIER_INT_REJECTIONS` | Extraído de Integration_Pluma.xdrz |
| ✅ `POZ_SUPPLIER_SITES_ALL_M` | Tabela referenciada em fusion-queries.md |
| ✅ `POZ_SUPPLIER_SITES_INT` | Extraído de Integration_Pluma.xdrz |
| ✅ `POZ_SUPPLIER_SITES_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `POZ_SUP_ADDRESSES_INT` | Extraído de Integration_Pluma.xdrz |
| ✅ `POZ_SUP_CONTACTS_INT` | Extraído de Integration_Pluma.xdrz |
| ✅ `POZ_SUP_CONTACT_ADDRESSES_INT` | Extraído de Integration_Pluma.xdrz |
| ✅ `POZ_SUP_PRODUCTS_SERVICES` | Extraído de Integration_Pluma.xdrz |
| ✅ `POZ_SUP_PROD_SERV_INT` | Extraído de Integration_Pluma.xdrz |
| ✅ `POZ_SUP_THIRDPARTY_PAYMENT_REL` | Extraído de Integration_Pluma.xdrz |

## FIN - Receivables & Cash

| Tabela | Observação / Descrição |
|---|---|
| ✅ `AR_ACTIVITY_DETAILS` | `ACTIVITY_DETAIL_ID` |
| ✅ `AR_ADJUSTMENTS` | Extraído de Integration_Pluma.xdrz |
| ✅ `AR_ADJUSTMENTS_ALL` | `ADJUSTMENT_ID` |
| ✅ `AR_AGING_BUCKETS` | `AGING_BUCKET_ID` |
| ✅ `AR_AGING_BUCKET_LINES_B` | `AGING_BUCKET_LINE_ID` |
| ✅ `AR_APPROVAL_ACTION_HISTORY` | `APPROVAL_ACTION_ID` |
| ✅ `AR_APPROVAL_USER_LIMITS` | `USER_ID, CURRENCY_CODE` |
| ✅ `AR_APP_RULES` | `APP_RULE_ID` |
| ✅ `AR_AUTOCASH_HIERARCHIES` | `AUTOCASH_HIERARCHY_ID` |
| ✅ `AR_AUTOCASH_RULES` | `AUTOCASH_RULE_ID` |
| ✅ `AR_AUTOMATCH_RULES` | `AUTOMATCH_RULE_ID` |
| ✅ `AR_AUTOMATCH_RULE_DTLS` | `AUTOMATCH_RULE_DETAIL_ID` |
| ✅ `AR_BATCHES_ALL` | `BATCH_ID` |
| ✅ `AR_BATCH_SOURCES_ALL` | `BATCH_SOURCE_ID` |
| ✅ `AR_CASH_RECEIPTS_ALL` | `CASH_RECEIPT_ID` |
| ✅ `AR_DISTRIBUTIONS_ALL` | `LINE_ID` |
| ✅ `AR_PAYMENT_SCHEDULES_ALL` | `PAYMENT_SCHEDULE_ID` |
| ✅ `AR_RECEIPT_CLASSES` | Extraído de Integration_Pluma.xdrz |
| ✅ `AR_RECEIPT_METHODS` | Extraído de Integration_Pluma.xdrz |
| ✅ `AR_RECEIPT_METHOD_ACCOUNTS_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `AR_RECEIVABLES_TRX_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `AR_RECEIVABLE_APPLICATIONS_ALL` | `RECEIVABLE_APPLICATION_ID` |
| ✅ `AR_REMIT_TO_LOCS_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `CE_BANKS_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `CE_BANK_ACCOUNTS` | Extraído de Integration_Pluma.xdrz |
| ✅ `CE_BANK_BRANCHES_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `CE_INDEX_BANKS` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `HZ_ACCOUNT_ROLLUPS` | `ROLLUP_GROUP_ID` |
| ✅ `HZ_ADDRESS_USAGES` | `ADDRESS_USAGE_ID` |
| ✅ `HZ_ADDRESS_USAGE_DTLS` | `ADDRESS_USAGE_DETAIL_ID` |
| ✅ `HZ_ADDTNL_PARTY_IDS` | `ADDITIONAL_PARTY_ID` |
| ✅ `HZ_ADDTNL_PARTY_NAMES` | `PARTY_NAME_ID` |
| ✅ `HZ_CERTIFICATIONS` | `CERTIFICATION_ID` |
| ✅ `HZ_CITIZENSHIP` | `CITIZENSHIP_ID` |
| ✅ `HZ_CLASS_CATEGORIES` | `CLASS_CATEGORY` |
| ✅ `HZ_CLASS_CATEGORY_USES` | `CLASS_CATEGORY, OWNER_TABLE` |
| ✅ `HZ_CODE_ASSIGNMENTS` | `CODE_ASSIGNMENT_ID` |
| ✅ `HZ_CONSUMER_PROFILES` | `PARTY_ID` |
| ✅ `HZ_CONTACT_POINTS` | `CONTACT_POINT_ID` |
| ✅ `HZ_CUSTOMER_PROFILES_F` | Extraído de Integration_Pluma.xdrz |
| ✅ `HZ_CUST_ACCOUNTS` | `CUST_ACCOUNT_ID` |
| ✅ `HZ_CUST_ACCOUNT_ROLES` | Extraído de Integration_Pluma.xdrz |
| ✅ `HZ_CUST_ACCT_SITES_ALL` | `CUST_ACCT_SITE_ID` |
| ✅ `HZ_CUST_PROFILE_AMTS_F` | Extraído de Integration_Pluma.xdrz |
| ✅ `HZ_CUST_SITE_USES_ALL` | `SITE_USE_ID` |
| ✅ `HZ_GEOGRAPHIES` | Tabela referenciada em fusion-queries.md |
| ✅ `HZ_GEOGRAPHY_IDENTIFIERS` | Tabela referenciada em fusion-queries.md |
| ✅ `HZ_IMP_ACCOUNTS_T` | Extraído de Integration_Pluma.xdrz |
| ✅ `HZ_IMP_ACCTSITES_T` | Extraído de Integration_Pluma.xdrz |
| ✅ `HZ_IMP_ACCTSITEUSES_T` | Extraído de Integration_Pluma.xdrz |
| ✅ `HZ_IMP_CLASSIFICS_T` | Extraído de Integration_Pluma.xdrz |
| ✅ `HZ_IMP_CONTACTS_T` | Extraído de Integration_Pluma.xdrz |
| ✅ `HZ_IMP_ERRORS` | Extraído de Integration_Pluma.xdrz |
| ✅ `HZ_IMP_LOCATIONS_T` | Extraído de Integration_Pluma.xdrz |
| ✅ `HZ_IMP_PARTIES_T` | Extraído de Integration_Pluma.xdrz |
| ✅ `HZ_IMP_PARTYSITES_T` | Extraído de Integration_Pluma.xdrz |
| ✅ `HZ_IMP_PARTYSITEUSES_T` | Extraído de Integration_Pluma.xdrz |
| ✅ `HZ_LOCATIONS` | `LOCATION_ID` |
| ✅ `HZ_ORGANIZATION_PROFILES` | Tabela referenciada em fusion-queries.md |
| ✅ `HZ_ORG_CONTACTS` | `ORG_CONTACT_ID` |
| ✅ `HZ_PARTIES` | `PARTY_ID` |
| ✅ `HZ_PARTY_SITES` | `PARTY_SITE_ID` |
| ✅ `HZ_REF_ENTITIES` | Tabela referenciada em fusion-queries.md |
| ✅ `HZ_RELATIONSHIPS` | `RELATIONSHIP_ID` |
| ✅ `RA_BATCH_SOURCES_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `RA_CUSTOMER_TRX_ALL` | `CUSTOMER_TRX_ID` |
| ✅ `RA_CUSTOMER_TRX_LINES_ALL` | `CUSTOMER_TRX_LINE_ID` |
| ✅ `RA_CUST_PAY_METHOD_INT_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `RA_CUST_RECEIPT_METHODS` | Extraído de Integration_Pluma.xdrz |
| ✅ `RA_CUST_TRX_LINE_GL_DIST_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `RA_CUST_TRX_TYPES_ALL` | `CUST_TRX_TYPE_ID` |
| ✅ `RA_INTERFACE_LINES_ALL` | AR |
| ✅ `RA_SALESREPS` | Extraído de Integration_Pluma.xdrz |
| ✅ `RA_TERMS` | Extraído de Integration_Pluma.xdrz |
| ✅ `RA_TERMS_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `RA_TERMS_TL` | Extraído de Integration_Pluma.xdrz |

## FIN - General Ledger & SLA

| Tabela | Observação / Descrição |
|---|---|
| ✅ `GL_ACCESS_SETS` | `ACCESS_SET_ID` |
| ✅ `GL_ACCESS_SET_LEDGERS` | `ACCESS_SET_ID, LEDGER_ID` |
| ✅ `GL_ALLOCATION_RULES` | `ALLOCATION_CODE` |
| ✅ `GL_ALLOCATION_SETS` | `ALLOCATION_SET_ID` |
| ✅ `GL_AUTOMATIC_POSTING_SETS` | `AUTOPOST_SET_ID` |
| ✅ `GL_AUTOREVERSE_OPTIONS` | `JE_HEADER_ID` |
| ✅ `GL_BALANCES` | `LEDGER_ID, CCId, PERIOD_NAME, CURRENCY_CODE, ACTUAL_FLAG` |
| ✅ `GL_BALANCES_DELTA` | `LEDGER_ID, CCId, PERIOD_NAME` |
| ✅ `GL_BUDGET_BALANCES` | `LEDGER_ID, CCId, PERIOD_NAME` |
| ✅ `GL_BUDGET_INTERFACE` | `BUDGET_ENTITY_ID` |
| ✅ `GL_CALENDARS` | `PERIOD_SET_NAME` |
| ✅ `GL_COA_MAPPINGS` | `COA_MAPPING_ID` |
| ✅ `GL_CODE_COMBINATIONS` | `CODE_COMBINATION_ID` |
| ✅ `GL_DAILY_RATES` | Tabela referenciada em fusion-queries.md |
| ✅ `GL_IMPORT_REFERENCES` | `JE_HEADER_ID, JE_LINE_NUM` |
| ✅ `GL_INTERFACE` | GL |
| ✅ `GL_JE_BATCHES` | `JE_BATCH_ID` |
| ✅ `GL_JE_HEADERS` | `JE_HEADER_ID` |
| ✅ `GL_JE_LINES` | `JE_HEADER_ID, JE_LINE_NUM` |
| ✅ `GL_LEDGERS` | `LEDGER_ID` |
| ✅ `GL_LEDGER_RELATIONSHIPS` | Tabela referenciada em fusion-queries.md |
| ✅ `GL_PERIODS` | `PERIOD_SET_NAME, PERIOD_NAME` |
| ✅ `GL_PERIOD_STATUSES` | `LEDGER_ID, APPLICATION_ID, PERIOD_NAME` |
| ✅ `XLA_AE_LINES` | Tabela referenciada em fusion-queries.md |
| ✅ `XLA_MAPPING_SET_VALUES` | Tabela referenciada em fusion-queries.md |

## FIN - Tax & Legal

| Tabela | Observação / Descrição |
|---|---|
| ✅ `XLE_ASSOCIATIONS_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `XLE_ENTITY_PROFILES` | Tabela referenciada em fusion-queries.md |
| ✅ `XLE_ESTABLISHMENT_V` | Tabela referenciada em fusion-queries.md |
| ✅ `XLE_LE_FROM_REGISTRATIONS` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `XLE_REGISTRATIONS` | Extraído de Integration_Pluma.xdrz |
| ✅ `XLE_REGISTRATIONS_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `ZX_ACCOUNTS` | `TAX_ACCOUNT_ID` |
| ✅ `ZX_EXEMPTIONS` | `TAX_EXEMPTION_ID` |
| ✅ `ZX_FC_BUSINESS_CATEGORIES_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `ZX_FC_CODES_B` | Tabela referenciada em fusion-queries.md |
| ✅ `ZX_FC_CODES_DENORM_VL` | Extraído de Integration_Pluma.xdrz |
| ✅ `ZX_FC_CODES_VL` | Extraído de Integration_Pluma.xdrz |
| ✅ `ZX_FC_PRODUCT_CATEGORIES_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `ZX_FC_TYPES_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `ZX_FC_USER_DEFINED_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `ZX_FORMULA_B` | `FORMULA_ID` |
| ✅ `ZX_JURISDICTIONS_B` | `TAX_JURISDICTION_ID` |
| ✅ `ZX_LINES` | `TAX_LINE_ID` |
| ✅ `ZX_LINES_DET_FACTORS` | `EVENT_CLASS_CODE, ENTITY_CODE` |
| ✅ `ZX_LINES_SUMMARY` | `SUMMARY_TAX_LINE_ID` |
| ✅ `ZX_PARTY_TAXPAYER_IDNTFS` | Tabela referenciada em fusion-queries.md |
| ✅ `ZX_PARTY_TAX_PROFILE` | `PARTY_TAX_PROFILE_ID` |
| ✅ `ZX_PROCESS_RESULTS` | `TAX_LINE_ID` |
| ✅ `ZX_RATES_B` | `TAX_RATE_ID` |
| ✅ `ZX_REGIMES_B` | `TAX_REGIME_ID` |
| ✅ `ZX_REGISTRATIONS` | `REGISTRATION_ID` |
| ✅ `ZX_REPORTING_TYPES_TL` | Extraído de Integration_Pluma.xdrz |
| ✅ `ZX_RULES_B` | `TAX_RULE_ID` |
| ✅ `ZX_STATUS_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `ZX_TAXES_B` | `TAX_ID` |

## FIN - Projects

| Tabela | Observação / Descrição |
|---|---|
| ✅ `PJF_CLASS_CATEGORIES_B` | Tabela referenciada em fusion-queries.md |
| ✅ `PJF_EXP_TYPES_B` | Tabela referenciada em fusion-queries.md |
| ✅ `PJF_EXP_TYPES_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `PJF_PROJECTS_ALL_B` | Tabela referenciada em fusion-queries.md |
| ✅ `PJF_PROJECTS_ALL_VL` | Tabela referenciada em fusion-queries.md |
| ✅ `PJF_PROJECT_TYPES_B` | Tabela referenciada em fusion-queries.md |
| ✅ `PJF_TASKS_V` | Tabela referenciada em fusion-queries.md |
| ✅ `PJO_PLAN_VERSIONS_VL` | Tabela referenciada em fusion-queries.md |

## SCM - Purchasing

| Tabela | Observação / Descrição |
|---|---|
| ✅ `POR_BROWSE_CATEGORIES_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `POR_REQUISITION_HEADERS_ALL` | Tabela referenciada em fusion-queries.md |
| ✅ `POR_REQUISITION_LINES_ALL` | Tabela referenciada em fusion-queries.md |
| ✅ `POR_REQ_DISTRIBUTIONS_ALL` | Tabela referenciada em fusion-queries.md |
| ✅ `POR_REQ_HEADERS_INTERFACE_ALL` | Tabela referenciada em fusion-queries.md |
| ✅ `POR_REQ_IMPORT_ERRORS` | Tabela referenciada em fusion-queries.md |
| ✅ `PO_ACTION_HISTORY` | `OBJECT_ID, ACTION_DATE` |
| ✅ `PO_AGENT_ACCESSES` | Tabela referenciada em fusion-queries.md |
| ✅ `PO_APPROVED_SUPPLIER_LIST` | `ASL_ID` |
| ✅ `PO_ASL_ATTRIBUTES` | `ASL_ID, USING_ORGANIZATION_ID` |
| ✅ `PO_DISTRIBUTIONS_ALL` | `PO_DISTRIBUTION_ID` |
| ✅ `PO_DISTRIBUTIONS_ARCHIVE_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `PO_DISTRIBUTIONS_DRAFT_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `PO_DOCUMENT_TYPES_ALL_B` | `DOCUMENT_TYPE_CODE` |
| ✅ `PO_DOC_STYLE_HEADERS` | Tabela referenciada em fusion-queries.md |
| ✅ `PO_GA_ORG_ASSIGNMENTS` | Tabela referenciada em fusion-queries.md |
| ✅ `PO_HAZARD_CLASSES_B` | `HAZARD_CLASS_ID` |
| ✅ `PO_HEADERS_ALL` | `PO_HEADER_ID` |
| ✅ `PO_HEADERS_ARCHIVE_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `PO_HEADERS_DRAFT_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `PO_HEADERS_INTERFACE` | PO |
| ✅ `PO_LINES_ALL` | `PO_LINE_ID` |
| ✅ `PO_LINES_ARCHIVE_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `PO_LINES_DRAFT_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `PO_LINES_INTERFACE` | PO |
| ✅ `PO_LINE_LOCATIONS_ALL` | `LINE_LOCATION_ID` |
| ✅ `PO_LINE_LOCATIONS_ARCHIVE_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `PO_LINE_LOCATIONS_DRAFT_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `PO_LINE_TYPES_B` | `LINE_TYPE_ID` |
| ✅ `PO_LOOKUP_CODES` | `LOOKUP_TYPE, LOOKUP_CODE` |
| ✅ `PO_SYSTEM_PARAMETERS_ALL` | Tabela referenciada em fusion-queries.md |
| ✅ `PO_UN_NUMBERS_B` | `UN_NUMBER_ID` |
| ✅ `PO_VERSIONS` | Tabela referenciada em fusion-queries.md |
| ✅ `RCV_SHIPMENT_HEADERS` | Extraído de Integration_Pluma.xdrz |
| ✅ `RCV_SHIPMENT_LINES` | Extraído de Integration_Pluma.xdrz |
| ✅ `RCV_TRANSACTIONS` | Tabela referenciada em fusion-queries.md |

## SCM - Order Management

| Tabela | Observação / Descrição |
|---|---|
| ✅ `DOO_DOCUMENT_REFERENCES` | Extraído de Integration_Pluma.xdrz |
| ✅ `DOO_FULFILL_LINES_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `DOO_FULFILL_LINES_EFF_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `DOO_HEADERS_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `DOO_HEADERS_EFF_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `DOO_HOLD_INSTANCES` | Extraído de Integration_Pluma.xdrz |
| ✅ `DOO_LINES_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `DOO_SALES_CREDITS` | Extraído de Integration_Pluma.xdrz |

## SCM - Inventory & Costing

| Tabela | Observação / Descrição |
|---|---|
| ✅ `CMR_RCV_DISTRIBUTIONS` | Extraído de Integration_Pluma.xdrz |
| ✅ `CMR_RCV_EVENTS` | Tabela referenciada em fusion-queries.md |
| ✅ `CMR_RCV_EVENT_COSTS` | Extraído de Integration_Pluma.xdrz |
| ✅ `CMR_TRANSACTIONS` | Extraído de Integration_Pluma.xdrz |
| ✅ `CST_COST_BOOKS_TL` | Extraído de Integration_Pluma.xdrz |
| ✅ `CST_COST_DISTRIBUTIONS` | Tabela referenciada em fusion-queries.md |
| ✅ `CST_COST_INV_ORGS` | Extraído de Integration_Pluma.xdrz |
| ✅ `CST_COST_ORGS_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `CST_COST_ORG_BOOKS` | Extraído de Integration_Pluma.xdrz |
| ✅ `CST_ITEM_COST_HISTORY_V` | Tabela referenciada em fusion-queries.md |
| ✅ `CST_PERIODIC_AVG_COSTS` | Extraído de Integration_Pluma.xdrz |
| ✅ `CST_PERIOD_STATUSES` | Extraído de Integration_Pluma.xdrz |
| ✅ `CST_TRANSACTION_COSTS` | Extraído de Integration_Pluma.xdrz |
| ✅ `CST_VAL_UNITS_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `CST_VAL_UNIT_COMBINATIONS` | Extraído de Integration_Pluma.xdrz |
| ✅ `EGP_CATEGORIES_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `EGP_CATEGORIES_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `EGP_CATEGORIES_VL` | Tabela referenciada em fusion-queries.md |
| ✅ `EGP_CATEGORY_SETS_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `EGP_CATEGORY_SETS_TL` | Extraído de Integration_Pluma.xdrz |
| ✅ `EGP_CATEGORY_SETS_VL` | Extraído de Integration_Pluma.xdrz |
| ✅ `EGP_CATEGORY_SET_VALID_CATS` | Extraído de Integration_Pluma.xdrz |
| ✅ `EGP_ITEM_CATEGORIES` | Tabela referenciada em fusion-queries.md |
| ✅ `EGP_ITEM_CAT_ASSIGNMENTS` | Tabela referenciada em fusion-queries.md |
| ✅ `EGP_ITEM_CLASSES_B` | Tabela referenciada em fusion-queries.md |
| ✅ `EGP_ITEM_CLASSES_TL` | Extraído de Integration_Pluma.xdrz |
| ✅ `EGP_ITEM_RELATIONSHIPS_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `EGP_MFG_PART_NUMBERS` | Tabela referenciada em fusion-queries.md |
| ✅ `EGP_SYSTEM_ITEMS` | Extraído de Integration_Pluma.xdrz |
| ✅ `EGP_SYSTEM_ITEMS_B` | Tabela referenciada em fusion-queries.md |
| ✅ `EGP_SYSTEM_ITEMS_B_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `EGP_SYSTEM_ITEMS_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `EGP_SYSTEM_ITEMS_TL_V` | Tabela referenciada em fusion-queries.md |
| ✅ `EGP_SYSTEM_ITEMS_VL` | Tabela referenciada em fusion-queries.md |
| ✅ `EGP_TRADING_PARTNER_ITEMS` | Extraído de Integration_Pluma.xdrz |
| ✅ `INV_ABC_ASSIGNMENTS` | `ASSIGNMENT_ID` |
| ✅ `INV_ABC_ASSIGNMENT_GROUPS` | `ASSIGNMENT_GROUP_ID` |
| ✅ `INV_ABC_CLASSES` | `ABC_CLASS_ID` |
| ✅ `INV_ACCOUNTING_TRANSACTIONS` | `TRANSACTION_ID` |
| ✅ `INV_CC_ENTRIES_HISTORY` | `CYCLE_COUNT_ENTRY_ID` |
| ✅ `INV_CYCLE_COUNT_ENTRIES` | `CYCLE_COUNT_ENTRY_ID` |
| ✅ `INV_CYCLE_COUNT_HEADERS` | `CYCLE_COUNT_HEADER_ID` |
| ✅ `INV_CYCLE_COUNT_ITEMS` | `CYCLE_COUNT_ITEM_ID` |
| ✅ `INV_GRADES_B` | `GRADE_CODE` |
| ✅ `INV_INTERORG_DEFINITIONS` | `FROM_ORG_ID, TO_ORG_ID` |
| ✅ `INV_MATERIAL_TXNS` | Extraído de Integration_Pluma.xdrz |
| ✅ `INV_ORGANIZATION_DEFINITIONS_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `INV_ORG_PARAMETERS` | Tabela referenciada em fusion-queries.md |
| ✅ `INV_SECONDARY_INVENTORIES` | Extraído de Integration_Pluma.xdrz |
| ✅ `INV_TRANSACTION_TYPES_B` | Tabela referenciada em fusion-queries.md |
| ✅ `INV_TRANSACTION_TYPES_TL` | Extraído de Integration_Pluma.xdrz |
| ✅ `INV_TRANSFER_ORDER_HEADERS` | Extraído de Integration_Pluma.xdrz |
| ✅ `INV_TRANSFER_ORDER_LINES` | Extraído de Integration_Pluma.xdrz |
| ✅ `INV_UNITS_OF_MEASURE` | Tabela referenciada em fusion-queries.md |
| ✅ `INV_UNITS_OF_MEASURE_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `INV_UNITS_OF_MEASURE_TL` | Extraído de Integration_Pluma.xdrz |
| ✅ `INV_UNITS_OF_MEASURE_VL` | Tabela referenciada em fusion-queries.md |
| ✅ `INV_UOM_CONVERSIONS` | Extraído de Integration_Pluma.xdrz |
| ✅ `WIE_WORK_ORDERS_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `WIE_WORK_ORDERS_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `WIE_WO_OPERATIONS_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `WIE_WO_OPERATION_MATERIALS_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `WIE_WO_OPERATION_RESOURCES_V` | Extraído de Integration_Pluma.xdrz |

## SCM - Shipping & Logistics

| Tabela | Observação / Descrição |
|---|---|
| ✅ `WSH_CARRIERS` | `CARRIER_ID` |
| ✅ `WSH_CARRIERS_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `WSH_DELIVERY_ASSIGNMENTS` | `DELIVERY_ASSIGNMENT_ID` |
| ✅ `WSH_DELIVERY_DETAILS` | `DELIVERY_DETAIL_ID` |
| ✅ `WSH_EXCEPTIONS` | `EXCEPTION_ID` |
| ✅ `WSH_FREIGHT_COSTS` | `FREIGHT_COST_ID` |
| ✅ `WSH_FREIGHT_COST_TYPES` | `FREIGHT_COST_TYPE_ID` |
| ✅ `WSH_NEW_DELIVERIES` | `DELIVERY_ID` |
| ✅ `WSH_ORG_CARRIER_SERVICES` | Extraído de Integration_Pluma.xdrz |
| ✅ `WSH_PICKING_BATCHES` | `BATCH_ID` |
| ✅ `WSH_PICKING_RULES` | `PICKING_RULE_ID` |
| ✅ `WSH_TRANSACTIONS_HISTORY` | `TRANSACTION_HISTORY_ID` |

## LOC - Localização Brasil (FDC/FDG)

| Tabela | Observação / Descrição |
|---|---|
| ✅ `CMF_FISCAL_DOC_CFOP_REFS` | `FISCAL_DOC_CFOP_REF_ID` |
| ✅ `CMF_FISCAL_DOC_CHARGES` | `FISCAL_DOC_CHARGE_ID` |
| ✅ `CMF_FISCAL_DOC_DISTRIBUTIONS` | Extraído de Integration_Pluma.xdrz |
| ✅ `CMF_FISCAL_DOC_HEADERS` | Tabela referenciada em fusion-queries.md |
| ✅ `CMF_FISCAL_DOC_HOLDS_B` | `FISCAL_DOC_HOLD_ID` |
| ✅ `CMF_FISCAL_DOC_INV_ORG_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `CMF_FISCAL_DOC_LINES_B` | `FISCAL_DOC_LINE_ID` |
| ✅ `CMF_FISCAL_DOC_LINES_TL` | `FISCAL_DOC_LINE_ID, LANGUAGE` |
| ✅ `CMF_FISCAL_DOC_LINES_VL` | Extraído de Integration_Pluma.xdrz |
| ✅ `CMF_FISCAL_DOC_LOC_INFO_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `CMF_FISCAL_DOC_REF_ATTRIBUTES` | Extraído de Integration_Pluma.xdrz |
| ✅ `CMF_FISCAL_DOC_SCHEDULES` | Extraído de Integration_Pluma.xdrz |
| ✅ `CMF_FISCAL_DOC_SCHED_ASSOC` | `FISCAL_DOC_SCHED_ASSOC_ID` |
| ✅ `CMF_LELRU_TAXPAYER_INFO_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `JG_FSCL_ATRB_INT_ERRORS` | Extraído de Integration_Pluma.xdrz |
| ✅ `JG_FSCL_DOC_GEN_CNTRLS_ALL_F` | `FSCL_DOC_GEN_CNTRL_ID` |
| ✅ `JG_FSCL_DOC_HDRS_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `JG_FSCL_DOC_LEGAL_MSGS` | `LEGAL_MESSAGE_ID` |
| ✅ `JG_FSCL_DOC_LINES_ALL` | `FSCL_DOC_LINE_ID` |
| ✅ `JG_FSCL_DOC_RELATIONS_ALL` | `FSCL_DOC_RELATION_ID` |
| ✅ `JG_FSCL_HDRS_ATRB_EXT_ALL` | `FSCL_HDR_ATRB_EXT_ID` |
| ✅ `JG_FSCL_HDRS_ATRB_INT` | Extraído de Integration_Pluma.xdrz |
| ✅ `JG_FSCL_LINES_ATRB_EXT_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `JL_BR_AP_BANK_RETURNS_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `JL_BR_AP_COLL_DOCS_DET_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `JL_BR_AR_COLL_BATCHES_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `JL_BR_AR_SELECT_CONTROLS_ALL` | Extraído de Integration_Pluma.xdrz |

## HCM & HR

| Tabela | Observação / Descrição |
|---|---|
| ✅ `HR_ALL_ORGANIZATION_UNITS` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_ALL_ORGANIZATION_UNITS_F` | `ORGANIZATION_ID, EFFECTIVE_START_DATE` |
| ✅ `HR_ALL_ORGANIZATION_UNITS_F_VL` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_ALL_ORGANIZATION_UNITS_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_ALL_ORGANIZATION_UNITS_X` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_ALL_POSITIONS_F` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_ALL_POSITIONS_F_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_DOCUMENTS_OF_RECORD` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_DOCUMENT_TYPES_B` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `HR_LEGAL_ENTITIES` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_LOCATIONS` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_LOCATIONS_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `HR_LOCATIONS_ALL_F` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `HR_LOCATIONS_ALL_F_VL` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_OPERATING_UNITS` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_ORGANIZATION_INFORMATION` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_ORGANIZATION_INFORMATION_F` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_ORGANIZATION_UNITS` | Extraído de Integration_Pluma.xdrz |
| ✅ `HR_ORGANIZATION_UNITS_F_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_ORGANIZATION_V` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_ORG_UNIT_CLASSIFICATIONS_F` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_ORG_UNIT_CLASSIFICATIONS_X` | Tabela referenciada em fusion-queries.md |
| ✅ `HR_STANDARD_LOOKUPS` | Tabela referenciada em fusion-queries.md |
| ✅ `PAY_ACTION_CONTEXTS` | `ACTION_CONTEXT_ID` |
| ✅ `PAY_ACTION_INFORMATION` | `ACTION_INFORMATION_ID` |
| ✅ `PAY_ACTION_INTERLOCKS` | `LOCKING_ACTION_ID` |
| ✅ `PAY_ALLOW_OVERRIDES_F` | `ELEMENT_TYPE_ID` |
| ✅ `PAY_ALL_PAYROLLS_F` | `PAYROLL_ID, EFFECTIVE_START_DATE` |
| ✅ `PAY_ASSIGNED_PAYROLLS_DN` | `PAYROLL_ID, PERSON_ID` |
| ✅ `PAY_ASSIGNED_PAYROLLS_F` | `PAYROLL_ID, PERSON_ID` |
| ✅ `PAY_AUTO_INDIRECTS_F` | `AUTO_INDIRECT_ID` |
| ✅ `PAY_BALANCE_CATEGORIES_F` | `BALANCE_CATEGORY_ID` |
| ✅ `PAY_BALANCE_DIMENSIONS` | `BALANCE_DIMENSION_ID` |
| ✅ `PAY_BALANCE_FEEDS_F` | `BALANCE_FEED_ID` |
| ✅ `PAY_BANK_ACCOUNTS` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `PAY_ELEMENT_ENTRIES_F` | `ELEMENT_ENTRY_ID` |
| ✅ `PAY_ELEMENT_ENTRY_VALUES_F` | `ELEMENT_ENTRY_VALUE_ID` |
| ✅ `PAY_ELEMENT_TYPES_F` | `ELEMENT_TYPE_ID` |
| ✅ `PAY_FORMULA_RESULT_RULES_F` | `FORMULA_RESULT_RULE_ID` |
| ✅ `PAY_INPUT_VALUES_F` | `INPUT_VALUE_ID` |
| ✅ `PAY_ORG_PAY_METHODS_TL` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `PAY_PAYROLL_ACTIONS` | `PAYROLL_ACTION_ID` |
| ✅ `PAY_PAY_RELATIONSHIPS_DN` | Tabela referenciada em fusion-queries.md |
| ✅ `PAY_PERSON_PAY_METHODS_F` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `PAY_RUN_RESULTS` | `RUN_RESULT_ID` |
| ✅ `PAY_RUN_RESULT_VALUES` | `RUN_RESULT_ID, INPUT_VALUE_ID` |
| ✅ `PER_ACTIONS_B` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `PER_ACTION_REASONS_B` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `PER_ACTION_REASON_USAGES` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `PER_ACTION_ROLE_MAPPING` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `PER_ADDRESSES_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_ALLOCATED_CHECKLISTS` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_ALLOCATED_TASKS` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_ALLOCATED_TASKS_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_ALL_ASSIGNMENTS_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_ALL_ASSIGNMENTS_M` | `ASSIGNMENT_ID` |
| ✅ `PER_ALL_ASSIGNMENTS_M_` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `PER_ALL_PEOPLE_F` | `PERSON_ID, EFFECTIVE_START_DATE` |
| ✅ `PER_ASSIGNMENT_EXTRA_INFO_M` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `PER_ASSIGNMENT_SUPERVISORS_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_CHECKLISTS_B` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_CHECKLISTS_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_CONTACT_RELATIONSHIPS` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_CONTACT_RELSHIPS_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_DISABILITIES_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_DRIVERS_LICENSES` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_DRIVERS_LICENSE_TYPES` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_EMAIL_ADDRESSES` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_ETHNICITIES` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_EXT_APP_IDENTIFIERS` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_GRADES` | `GRADE_ID` |
| ✅ `PER_GRADES_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_GRADES_F_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_GRADE_STEPS_X` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_JOBS` | `JOB_ID` |
| ✅ `PER_JOBS_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_JOBS_F_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_JOBS_F_VL` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_JOB_EVALUATIONS` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `PER_JOB_FAMILY_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_JOB_FAMILY_F_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_LOCATIONS` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_LOCATION_DETAILS_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_LOCATION_EXTRA_INFO_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_NATIONAL_IDENTIFIERS` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_PASSPORTS` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_PEOPLE_EXTRA_INFO_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_PEOPLE_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_PEOPLE_LEGISLATIVE_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_PERIODS_OF_SERVICE` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_PERSONS` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_PERSON_ADDRESSES_V` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_PERSON_ADDR_USAGES_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_PERSON_NAMES_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_PERSON_NAMES_F_V` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `PER_PERSON_TYPES_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_PERSON_TYPE_USAGES_M` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_PHONES` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_POSITION_HIERARCHY_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_RATES_F_VL` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_RATE_VALUES_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_USERS` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_VALID_GRADES_F` | Tabela referenciada em fusion-queries.md |
| ✅ `PER_VISAS_PERMITS_F` | Tabela referenciada em fusion-queries.md |

## CX & CRM

| Tabela | Observação / Descrição |
|---|---|
| ✅ `SVC_REF_ENTITIES` | Tabela referenciada em fusion-queries.md |
| ✅ `ZCA_REF_ENTITIES` | Tabela referenciada em fusion-queries.md |

## SYS & Foundation

| Tabela | Observação / Descrição |
|---|---|
| ✅ `ESS_CP` | `CP_ID` |
| ✅ `ESS_JOB` | `JOB_DEFINITION_ID` |
| ✅ `ESS_QUERY_SEC_PRINCIPAL` | `REQUEST_ID, PRINCIPAL_ID` |
| ✅ `ESS_REQUEST_HISTORY` | `REQUEST_ID` |
| ✅ `ESS_REQUEST_PROPERTY` | `REQUEST_ID, PROPERTY_NAME` |
| ✅ `ESS_RUNTIME` | `RUNTIME_ID` |
| ✅ `FND_APPL_TAXONOMY` | `MODULE_ID` |
| ✅ `FND_APPL_TAXONOMY_ENT_APP_MAP` | `ENTERPRISE_APPLICATION_ID, MODULE_ID` |
| ✅ `FND_APPL_TAXONOMY_HIERARCHY` | `PARENT_MODULE_ID, CHILD_MODULE_ID` |
| ✅ `FND_ATTACHED_DOCUMENTS` | `ATTACHED_DOCUMENT_ID` |
| ✅ `FND_COLUMNS` | `TABLE_ID, COLUMN_ID` |
| ✅ `FND_COMPILED_MENU_FUNCTIONS` | `MENU_ID, FUNCTION_ID` |
| ✅ `FND_CURRENCIES` | `CURRENCY_CODE` |
| ✅ `FND_DF_CONTEXTS_B` | `DESCRIPTIVE_FLEXFIELD_CODE, DESCRIPTIVE_FLEX_CONTEXT_CODE` |
| ✅ `FND_DF_FLEXFIELDS_B` | `DESCRIPTIVE_FLEXFIELD_CODE` |
| ✅ `FND_DF_FLEX_USAGES_B` | `FLEX_USAGE_ID` |
| ✅ `FND_DF_SEGMENTS_B` | `SEGMENT_CODE, DESCRIPTIVE_FLEXFIELD_CODE` |
| ✅ `FND_DF_TABLE_USAGES` | `TABLE_USAGE_ID` |
| ✅ `FND_DOCUMENTS` | `DOCUMENT_ID` |
| ✅ `FND_DOCUMENT_SEQUENCES` | `DOC_SEQUENCE_ID` |
| ✅ `FND_FLEX_VALUES` | Tabela referenciada em fusion-queries.md |
| ✅ `FND_FLEX_VALUES_VL` | Tabela referenciada em fusion-queries.md |
| ✅ `FND_FLEX_VALUE_SETS` | `FLEX_VALUE_SET_ID` |
| ✅ `FND_FORM_FUNCTIONS` | `FUNCTION_ID` |
| ✅ `FND_GRANTS` | `GRANT_GUID` |
| ✅ `FND_ID_FLEX_SEGMENTS` | Tabela referenciada em fusion-queries.md |
| ✅ `FND_ID_FLEX_SEGMENTS_VL` | Tabela referenciada em fusion-queries.md |
| ✅ `FND_LOOKUPS` | Tabela referenciada em fusion-queries.md |
| ✅ `FND_LOOKUP_TYPES` | `LOOKUP_TYPE, VIEW_APPLICATION_ID` |
| ✅ `FND_LOOKUP_VALUES` | `LOOKUP_TYPE, LOOKUP_CODE, VIEW_APPLICATION_ID, LANGUAGE` |
| ✅ `FND_LOOKUP_VALUES_B` | Tabela referenciada em fusion-queries.md |
| ✅ `FND_LOOKUP_VALUES_TL` | Extraído de Integration_Pluma.xdrz |
| ✅ `FND_LOOKUP_VALUES_VL` | Tabela referenciada em fusion-queries.md |
| ✅ `FND_MENUS` | `MENU_ID` |
| ✅ `FND_MENU_ENTRIES` | `MENU_ID, ENTRY_SEQUENCE` |
| ✅ `FND_OBJECTS` | `OBJECT_ID` |
| ✅ `FND_OBJECT_INSTANCE_SETS` | `INSTANCE_SET_ID` |
| ✅ `FND_PROFILE_OPTIONS_B` | `PROFILE_OPTION_ID` |
| ✅ `FND_PROFILE_OPTION_VALUES` | `PROFILE_OPTION_ID, LEVEL_ID` |
| ✅ `FND_SETID_ASSIGNMENTS` | Extraído de Integration_Pluma.xdrz |
| ✅ `FND_SETID_SETS` | Extraído de Integration_Pluma.xdrz |
| ✅ `FND_SETID_SETS_VL` | Extraído de Integration_Pluma.xdrz |
| ✅ `FND_TERRITORIES` | `TERRITORY_CODE` |
| ✅ `FND_TERRITORIES_TL` | Tabela referenciada em fusion-queries.md |
| ✅ `FND_TERRITORIES_VL` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `FND_USER_NAVIGATIONS` | `NAVIGATION_ID` |
| ✅ `FND_USER_PREFERENCES` | `USER_ID, PREFERENCE_NAME` |
| ✅ `FND_USER_ROLES_ASSOCIATION` | `USER_ID, ROLE_ID` |
| ✅ `FND_VS_VALUES_VL` | Tabela referenciada em fusion-queries.md |
| ✅ `FUN_ALL_BUSINESS_UNITS_V` | Tabela referenciada em fusion-queries.md |
| ✅ `FUN_BU_USAGES_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `FUN_CLIENT_BU_V` | Tabela referenciada em fusion-queries.md |
| ✅ `FUN_NAMES_BUSINESS_UNITS_V` | Extraído de Integration_Pluma.xdrz |
| ✅ `FUN_USER_ROLE_DATA_ASGNMNTS` | Tabela referenciada em fusion-queries.md |
| ✅ `ZMM_SR_SCHEDULE_DTLS` | Extraído de Integration_Pluma.xdrz |

## Cross-Module & Outros

| Tabela | Observação / Descrição |
|---|---|
| ✅ `ADF_EXTENSIBLE_TABLE` | `TABLE_ID` |
| ✅ `ADF_EXTENSION_COLUMN` | `COLUMN_ID` |
| ✅ `ADF_EXTENSION_COLUMN_USAGE` | `USAGE_ID` |
| ✅ `ADF_METADATA_REVISIONS` | `REVISION_ID` |
| ✅ `ADF_METADATA_REV_BASELINES` | `BASELINE_ID` |
| ✅ `ADF_SB_ENABLED_FEATURES` | `SANDBOX_ID, FEATURE_ID` |
| ✅ `ADF_SB_FEATURES` | `FEATURE_ID` |
| ✅ `ADF_SB_REPOSITORIES` | `REPOSITORY_ID` |
| ✅ `ADF_SB_SANDBOXES` | `SANDBOX_ID` |
| ✅ `ADF_SB_SANDBOXES_B` | `SANDBOX_ID` |
| ✅ `ALTERACOES_DEPTO_ANTERIOR` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `ALTERACOES_DEPTO_CORRETO` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `ANC_ABSENCE_TYPES_F` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `ANC_PER_ABS_ENTRIES` | Tabela referenciada em fusion-queries.md |
| ✅ `ASM_APP_PRIVILEGES` | `PRIVILEGE_ID` |
| ✅ `ASM_ENTERPRISE_ROLES_B` | `ROLE_ID` |
| ✅ `BEN_ELIG_CVRD_DPNT` | Tabela referenciada em fusion-queries.md |
| ✅ `BEN_LER_F` | Tabela referenciada em fusion-queries.md |
| ✅ `BEN_OIPL_F` | Tabela referenciada em fusion-queries.md |
| ✅ `BEN_OPT_F` | Tabela referenciada em fusion-queries.md |
| ✅ `BEN_PER_IN_LER` | Tabela referenciada em fusion-queries.md |
| ✅ `BEN_PER_LE_HABITS_COV_F` | Tabela referenciada em fusion-queries.md |
| ✅ `BEN_PGM_F` | Tabela referenciada em fusion-queries.md |
| ✅ `BEN_PL_F` | Tabela referenciada em fusion-queries.md |
| ✅ `BEN_PL_TYP_F` | Tabela referenciada em fusion-queries.md |
| ✅ `BEN_PRTT_ENRT_ACTN` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `BEN_PRTT_ENRT_RSLT` | Tabela referenciada em fusion-queries.md |
| ✅ `BEN_PRTT_RT_VAL` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `CMP_SALARY` | Tabela referenciada em fusion-queries.md |
| ✅ `CMP_SALARY_BASES` | Tabela referenciada em fusion-queries.md |
| ✅ `CONTRATOS` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `CTE_GESTOR` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `CTE_IBGE_GEO` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `CTE_LEGISL_FILTRADA` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `CTE_POSICAO` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `ECSF_ENGINE_INSTANCE` | `INSTANCE_ID` |
| ✅ `ECSF_INDEX_SCHEDULE` | `SCHEDULE_ID` |
| ✅ `ECSF_PARAMETER` | `PARAMETER_NAME` |
| ✅ `ECSF_SEARCHABLE_CHANGE_LOG` | `LOG_ID` |
| ✅ `ECSF_SEARCH_ENGINE_TYPE` | `ENGINE_TYPE` |
| ✅ `ECSF_SEARCH_INDEX_GROUP` | `GROUP_ID` |
| ✅ `ECSF_SEARCH_INDEX_OBJECT` | `OBJECT_ID` |
| ✅ `EGO_ITEM_EFF_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `EGO_ITEM_EFF_VL` | Tabela referenciada em fusion-queries.md |
| ✅ `EMAIL_SUBSTITUTO_XML` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `EMAIL_XML` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `FA_ACE_BOOKS` | `ASSET_ID, BOOK_TYPE_CODE` |
| ✅ `FA_ADDITIONS_B` | `ASSET_ID` |
| ✅ `FA_ADD_WARRANTIES` | `WARRANTY_ID` |
| ✅ `FA_ADJUSTMENTS` | `ADJUSTMENT_ID` |
| ✅ `FA_APPROVAL_DETAILS` | `APPROVAL_DETAIL_ID` |
| ✅ `FA_APPROVAL_SUMMARY` | `APPROVAL_SUMMARY_ID` |
| ✅ `FA_ASSET_HISTORY` | `ASSET_ID, TRANSACTION_HEADER_ID` |
| ✅ `FA_ASSET_INVOICES` | `INVOICE_TRANSACTION_ID` |
| ✅ `FA_ASSET_KEYWORDS` | `CODE_COMBINATION_ID` |
| ✅ `FA_BALANCES_EXTRACT` | `ASSET_ID, BOOK_TYPE_CODE` |
| ✅ `FA_BALANCES_REP_GT` | Tabela referenciada em fusion-queries.md |
| ✅ `FA_BONUS_RATES` | `BONUS_RULE, YEAR_ELAPSED` |
| ✅ `FA_BONUS_RULES` | `BONUS_RULE` |
| ✅ `FA_BOOKS` | `ASSET_ID, BOOK_TYPE_CODE` |
| ✅ `FA_BOOKS_SUMMARY` | `ASSET_ID, BOOK_TYPE_CODE` |
| ✅ `FA_BOOK_CONTROLS` | `BOOK_TYPE_CODE` |
| ✅ `FA_BOOK_CONTROLS_HISTORY` | `BOOK_TYPE_CODE, DATE_EFFECTIVE` |
| ✅ `FA_BOOK_TRANSFER_DISTS` | `TRANSFER_DISTRIBUTION_ID` |
| ✅ `FA_CALENDAR_PERIODS` | `CALENDAR_TYPE, PERIOD_NUM` |
| ✅ `FA_CALENDAR_TYPES` | `CALENDAR_TYPE` |
| ✅ `FA_CATEGORIES_B` | Tabela referenciada em fusion-queries.md |
| ✅ `FA_DEPRN_PERIODS` | Tabela referenciada em fusion-queries.md |
| ✅ `FA_DEPRN_SUMMARY` | `ASSET_ID, BOOK_TYPE_CODE, PERIOD_COUNTER` |
| ✅ `FA_DISTRIBUTION_HISTORY` | Tabela referenciada em fusion-queries.md |
| ✅ `FA_FUSION_SOAINFRA` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `FA_LOCATIONS` | Tabela referenciada em fusion-queries.md |
| ✅ `FF_COMPILED_INFO` | `FORMULA_ID, EFFECTIVE_START_DATE` |
| ✅ `FF_CONTEXTS` | `CONTEXT_ID` |
| ✅ `FF_DATABASE_ITEMS` | `USER_ENTITY_ID, DATA_ITEM_CODE` |
| ✅ `FF_FORMULAS_F` | `FORMULA_ID, EFFECTIVE_START_DATE` |
| ✅ `FF_FORMULA_TYPES` | `FORMULA_TYPE_ID` |
| ✅ `FF_FUNCTION_PARAMETERS` | `FUNCTION_ID, PARAMETER_ID` |
| ✅ `FF_GLOBALS_F` | `GLOBAL_ID, EFFECTIVE_START_DATE` |
| ✅ `FF_ROUTES` | `ROUTE_ID` |
| ✅ `FF_USER_ENTITIES` | `USER_ENTITY_ID` |
| ✅ `FINANCIALS_SYSTEM_PARAMS_ALL` | Tabela referenciada em fusion-queries.md |
| ✅ `FLAGS` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `FUSION` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `GMS_ORGANIZATIONS_V` | Tabela referenciada em fusion-queries.md |
| ✅ `HRC_ALERT_RECIPIENTS` | `RECIPIENT_ID` |
| ✅ `HRC_ALERT_RUNS` | `ALERT_RUN_ID` |
| ✅ `HRC_ALERT_RUN_ERRORS` | `ERROR_ID` |
| ✅ `HRC_ARM_APPROVAL_OPTIONS` | `OPTION_ID` |
| ✅ `HRC_ARM_COMPOSITES_B` | `COMPOSITE_ID` |
| ✅ `HRC_ARM_NOTIFICATIONS_B` | `NOTIFICATION_ID` |
| ✅ `HRC_ARM_PROCESS_B` | `PROCESS_ID` |
| ✅ `HRC_ATOMPUB_COLLECTIONS` | `COLLECTION_ID` |
| ✅ `HRC_ATOMPUB_ENTRIES` | `ENTRY_ID` |
| ✅ `HRC_ATOMPUB_MEMBERSHIPS` | `MEMBERSHIP_ID` |
| ✅ `HRC_ATOMPUB_WORKSPACES` | `WORKSPACE_ID` |
| ✅ `HRC_BO_EXTRACT` | `EXTRACT_ID` |
| ✅ `HRC_COMMUNICATION_ACCOUNTS` | `ACCOUNT_ID` |
| ✅ `HRC_COMMUNICATION_MESSAGES` | `MESSAGE_ID` |
| ✅ `HRC_COMP_DEF_TYPES_B` | `DEF_TYPE_ID` |
| ✅ `HRC_COMP_DEF_VALS_B` | `DEF_VAL_ID` |
| ✅ `HRC_COMP_INST_VALS_B` | `INST_VAL_ID` |
| ✅ `HRC_COMP_ITEMS_B` | `ITEM_ID` |
| ✅ `HRC_COMP_OBJ_INSTANCES` | `INSTANCE_ID` |
| ✅ `HRC_COMP_TEMPLATES_B` | `TEMPLATE_ID` |
| ✅ `HRC_DL_ARC_FILE_LINES` | `FILE_LINE_ID` |
| ✅ `HRC_DL_ARC_FILE_ROWS` | `FILE_ROW_ID` |
| ✅ `HRC_DL_ARC_LOGICAL_LINES` | `LOGICAL_LINE_ID` |
| ✅ `HRC_DL_AUDIT_HEADERS` | `AUDIT_HEADER_ID` |
| ✅ `HRC_DL_AUDIT_LINES` | `AUDIT_LINE_ID` |
| ✅ `HRC_DL_BUSINESS_OBJECTS` | `BUSINESS_OBJECT_ID` |
| ✅ `HRC_DL_BUS_OBJECT_ATTRS_B` | `ATTRIBUTE_ID` |
| ✅ `HRC_DL_CHUNKS` | `CHUNK_ID` |
| ✅ `HRC_DL_DATA_SETS` | HCM |
| ✅ `HRC_DL_DATA_SET_BUS_OBJS` | `DATA_SET_BUS_OBJ_ID` |
| ✅ `HRC_TXN_CONSOLE_ENTRY` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `HRC_TXN_DATA` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `HRC_TXN_HEADER` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `HRT_CONTENT_ITEMS_VL` | Tabela referenciada em fusion-queries.md |
| ✅ `IRC_CANDIDATES` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `IRC_REQUISITIONS_B` | Tabela referenciada em fusion-queries.md |
| ✅ `JTF_RS_SALESREPS` | Extraído de Integration_Pluma.xdrz |
| ✅ `LE_CTE` | Extraído de Integration_Anima.xdrz (HCM) |
| ✅ `MKT_REF_ENTITIES` | Tabela referenciada em fusion-queries.md |
| ✅ `MOO_REF_ENTITIES` | Tabela referenciada em fusion-queries.md |
| ✅ `MSC_XREF_MAPPING` | Extraído de Integration_Pluma.xdrz |
| ✅ `OKC_CONTRACT_TYPES_TL` | Extraído de Integration_Pluma.xdrz |
| ✅ `OKC_K_HEADERS_ALL_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `OKC_K_PARTY_ROLES_B` | Extraído de Integration_Pluma.xdrz |
| ✅ `PJC_TRANSACTION_CONTROLS` | Tabela referenciada em fusion-queries.md |
| ✅ `PON_AUCTION_CURRENCY_RATES` | Tabela referenciada em fusion-queries.md |
| ✅ `PON_AUCTION_HEADERS_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `PON_AUCTION_ITEM_PRICES_ALL` | Extraído de Integration_Pluma.xdrz |
| ✅ `POQ_QUALIFICATIONS` | Extraído de Integration_Pluma.xdrz |

