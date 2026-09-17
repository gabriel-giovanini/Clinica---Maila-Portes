---
description: Workflow para traduzir e atualizar os menus e funcionalidades em Readmes (Manual do Usuário).
---
# Atualização e Tradução de Funcionalidades do README

Este workflow orienta o assistente (Antigravity/Agente) a fazer uma varredura nas novas funcionalidades da extensão e atualizar iterativamente os documentos de instruções (`README`) em três idiomas: Inglês, Português (Brasil) e Espanhol.

## Instruções para o Assistente:

1. **Escanear o Projeto e o Git History**: 
   - Utilize a ferramenta de bash ou os logs de `git log` para levantar as funcionalidades mais recentes adicionadas na extensão VS Code (`fusion-sql-runner`) ou no parser/engine em Rust (`reds-cli`).
   - Você também pode ler/visualizar `package.json` ou arquivos-chave para entender os novos fluxos de desenvolvimento.

2. **Ler os Manuais Atuais**:
   - Leia profundamente o arquivo principal `fusion-sql-runner/README.md` atual para entender a estrutura de comunicação.

3. **Traduzir e Atualizar (Foco no Usuário Final)**:
   - ATENÇÃO: Os READMEs gerados devem atuar como **MANUAIS DE USUÁRIO FINAL** (vitrine do produto), e não como documentação técnica de código fonte.
   - Utilize jargões voltados ao produto, explique "Como Usar", "Benefícios" e os atalhos/menus, ignorando detalhes de implementação do repositório.
   - Refaça ou atualize os `README`s adicionando essas novas funções de forma amigável, comercial e didática.
   - Os arquivos-alvo devem ser:
     - `fusion-sql-runner/README.md` (English)
     - `fusion-sql-runner/README.pt-br.md` (Português/BR)
     - `fusion-sql-runner/README.es.md` (Espanhol)
   
4. **Ciclo de Iteração**:
   - Depois de gerar as atualizações, forneça um breve resumo ("changelog interno") e peça ao usuário para avaliar.
   - Como o usuário disse que "quer rodar várias vezes até ficar refinado", se ele solicitar mudanças no tom de voz, estilo visual ou correção do escopo, você deve rodar esse processo novamente.

## Como invocar
Basta o usuário digitar `@[/update-readme]` no chat para iniciar o processo automaticamente.
