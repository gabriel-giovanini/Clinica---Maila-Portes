---
description: Roteiro de QA manual e automatizado para buscar bugs de funcionalidade, UI/UX e persistência no Redstrek Dashboard (Leptos + Supabase).
---
# QA Testing Dashboard (E2E)

## Fase 1: Inspeção de Interface (UI/UX) e Internacionalização (i18n)
- [ ] Verifique se a tela carrega corretamente sem erros no console (F12). O `Suspense` (loading states) deve ser exibido enquanto os dados são buscados.
- [ ] Confirme que todos os rótulos, botões e placeholders estão utilizando a macro `t!()` corretamente. Nenhuma string *hardcoded* ou chave bruta (ex: `conn.new`) deve aparecer na tela.
- [ ] Valide a consistência visual: o design system deve ser respeitado (Botões com altura padrão de 38px, bordas arredondadas de 6px, cores e *hover states* consistentes com o Oracle Mega Menu).
- [ ] Teste a reatividade: alterar valores de dropdowns (ex: *Tech Type* ou *Object Type*) deve refletir imediatamente no estado (signals) sem recarregar a página inteira.

## Fase 2: Integração Front-to-Back (Network & API)
- [ ] Ao preencher o formulário e confirmar a criação/atualização de dados (ex: Novo Conector), inspecione a aba **Network** do navegador. O payload enviado ao endpoint REST contém o formato JSON esperado?
- [ ] Verifique a autenticação: o *Header* da requisição contém corretamente o `apikey` (chave anônima) e o `Authorization: Bearer <JWT>`?
- [ ] Teste o Tratamento de Erros simulando falhas (ex: desconecte a internet ou force um erro de banco):
  - A interface deve exibir a mensagem amigável de erro capturada pelo `.map_err()`.
  - O botão de ação deve ficar desabilitado para evitar múltiplos envios (duplo clique).

## Fase 3: Validação de Persistência no Banco (Supabase)
- [ ] Certifique-se de que o cadastro bem-sucedido foi persistido na tabela correspondente do Supabase (ex: `rsk_connections_vault`, `rsk_projects`).
- [ ] Valide o Multi-Tenant (RLS):
  - A coluna `tenant_id` deve ser preenchida automaticamente (via default `rsk_my_tenant_id()`) ou enviada corretamente pelo front.
  - Ao efetuar login com um usuário de **outro Tenant**, o registro recém-criado **NÃO** deve estar visível ou acessível.
- [ ] Confirme a Integridade dos Dados: UUIDs formatados corretamente e ENUMs ou *constraints* impedindo cadastro de dados inválidos.

## Fase 4: Fluxo Completo de CRUD
- [ ] **Create**: Teste cadastro com dados válidos, campos em branco e caracteres especiais.
- [ ] **Read**: Teste o carregamento de listas vazias (*Empty State*) e listas populadas. O layout quebra se o nome do item for muito longo?
- [ ] **Update**: A alteração deve enviar um método `PATCH` e persistir apenas os campos modificados.
- [ ] **Delete**: A exclusão atualiza a lista visualmente e efetua o `DELETE` real no banco (ou soft-delete `is_active = false`)?

## Fase 5: Integração MCP e Eventos em Tempo Real (SSE)
- [ ] **Requisições MCP**: Valide se as chamadas de ferramentas (*tool calls*) enviadas para o backend do MCP Gateway estão sendo assinadas e autenticadas corretamente. Verifique na aba Network se o payload bate com o esquema JSON esperado pela *Tool* respectiva.
- [ ] **Server-Sent Events (SSE)**: Se a tela possui funcionalidades de tempo real (como *streams* do AI Copilot, System Logs ou observabilidade):
  - Inspecione a aba **EventStream** no navegador. As mensagens estão chegando corretamente?
  - A conexão SSE lida de forma resiliente com perdas de rede (desconexão e reconexão automática)?
  - A interface renderiza progressivamente os chunks ou eventos recebidos sem bloqueio (*blocking*) da thread principal do Leptos?

---

**Comando:** Ao invocar este workflow (`/qa-testing-dashboard`), o Antigravity agirá como um Engenheiro QA executando as validações descritas acima com o contexto da tela em desenvolvimento.
