---
description: Workflow para verificar e validar o bloqueio geral de licenciamento (Extension, CLI e MCP)
---
// turbo-all

Siga os comandos abaixo sequencialmente para garantir que o sistema de licenciamento remoto do Redstrek está corretamente ativado e efetuando o bloqueio global de execução nas camadas cabíveis.

> **Importante:**
> Este fluxo de validação pressupõe que a sua chave de licença encontra-se revogada ou expirada de forma proposital via Supabase ou que está sem licença local configurada.

1. Navegue para o diretório de dados base para focar no CLI compilado localmente
```bash
cd /Users/abnerbessi/Documents/Gantz/GitHub/RedstrekCode
```

2. Validar liberação em comandos internos (Deve funcionar normalmente: status 0):
```bash
./fusion-sql-runner/bin/macos/reds config list
```
*(Comandos como `config`, `workspace`, e `license` não podem e não devem ser travados pela licença)*

3. Validar bloqueio de execução de Banco de Dados (Extension View / Runner):
```bash
./fusion-sql-runner/bin/macos/reds db list
```
*(Deve falhar com `UNLICENSED: Provided license key is invalid or expired.` ou análogo)*

4. Validar o bloqueio de operações do ERP (Fusion Commands):
```bash
./fusion-sql-runner/bin/macos/reds fusion extract-sql
```
*(Deve falhar bloqueado preventivamente pela verificação de licença antes de realizar qualquer requisição externa).*

5. Validar o bloqueio do servidor MCP (Isolamento de IA):
```bash
./fusion-sql-runner/bin/macos/reds mcp
```
*(Deve abortar a partida do servidor StdIO imediatamente e travar os agentes de IA, respondendo o erro diretamente para a Stream)*

6. Validar o log explícito na função remota e status de verificação:
```bash
./fusion-sql-runner/bin/macos/reds license verify
```
*(Deve exibir o trace de erro remoto explícito: `Server rejected license`)*
