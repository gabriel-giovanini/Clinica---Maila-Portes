# Integração Redstrek MCP com LibreChat (SSE)

Este documento descreve a arquitetura e os requisitos necessários para provisionar o servidor Redstrek MCP de forma nativa e segura dentro de uma stack LibreChat, utilizando a ponte SSE (Server-Sent Events) suportada a partir da versão 0.7.6+ do LibreChat.

---

## 1. Arquitetura do Container (Sidecar)

O LibreChat implementa a conexão MCP nativamente apenas via rede (transport **SSE** ou **Streamable HTTPS**). Como o motor nativo do Redstrek (`reds-cli`) é um servidor Stdio (Padrão de I/O de console), precisamos provisionar um contêiner "Sidecar" que atue como ponte Stdio -> SSE.

A solução oficial para o Redstrek com LibreChat é instanciar uma imagem leve do Node.js utilizando o `mcp-proxy` para encapsular a execução em C/Rust.

### Requisitos do Container (`mcpo`):
* **Imagem Base:** `node:22-bookworm-slim` (Obrigatório ser distribuição baseada em Debian/Glibc para compatibilidade do driver nativo e do Oracle ODPI-C).
* **Biblioteca Assíncrona Oracle:** O pacote de dependência do sistema `libaio1` é absolutamente obrigatório para iniciar instâncias do Oracle OCI sem `Segmentation Fault`.
* **Binário Redstrek:** O executável C/Rust (`reds` ou `reds-cli`) compilado para `x86_64-unknown-linux-gnu`.
* **Oracle Instant Client:** Bibliotecas Linux (libclntsh.so, etc.) presentes no caminho mapeado.

---

## 2. Docker Compose Configuração

No ambiente do LibreChat (normalmente dentro do arquivo de personalização de ambiente `docker-compose.override.yml`), deve-se declarar o serviço `mcpo` injetado diretamente na mesma rede interna do `api` (LibreChat), usualmente através do mapping de uma rede `proxy`.

```yaml
services:
  mcpo:
    image: node:22-bookworm-slim
    restart: unless-stopped
    command: >
      sh -c "apt-get update && apt-get install -y libaio1 && npx -y mcp-proxy@latest /opt/mcpo/reds-cli/reds mcp start"
    environment:
      # A porta padrão onde o mcp-proxy vai expor o servidor
      - PORT=8080
      # Chave de licença validada remotamente via Supabase (dispensa .secrets.json)
      - REDSTREK_LICENSE_KEY=FUSION-PRO-ABNER-TEST-2026
      # Path mandatório para resolver o Oracle OCI
      - LD_LIBRARY_PATH=/opt/mcpo/linux-x64
    networks:
      - proxy
      - default
    volumes:
      # O binário
      - /opt/mcpo/reds-cli:/opt/mcpo/reds-cli
      # Drivers Linux x64 para Oracle DB
      - /opt/mcpo/linux-x64:/opt/mcpo/linux-x64
```

> **Atenção:** Como o LibreChat em versões nativas (e.g. `ghcr.io/danny-avila/librechat`) roda predominantemente focado na rede interna sem a necessidade de expor essa API pra web, o tráfego do MCP (porta 8080) flui invisível isoladamente.

---

## 3. Validação de Licença (Bypass & Variaveis)

Para evitar erros como *"UNLICENSED: No license key found in workspace"*, o sistema deve utilizar a injeção nativa de variáveis de ambiente do Redstrek 3.0+.
O motor de validação buscará por `REDSTREK_LICENSE_KEY`. É fundamental assegurar que as chaves em ambientes conteinerizados usem esta variável para contornar requisições do sistema operacional local (keyring).
A string da chave sofrerá validação *Server-Side* via `verify_remote()`. Se aprovada, o container assumirá o estado "Listening".

---

## 4. Cadastro na UI do LibreChat

Diferentemente da abordagem legada que dependia da injeção de schemas do Swagger/OpenAPI nas Custom Actions, a conexão agora ocorre diretamente no motor central do assistente:

1. Acesse o chat do **LibreChat** -> Botão de configuração do Agent/Usuário.
2. Na interface de configuração clique em **"Add MCP Server"**.
3. Preencha os requisitos abaixo:
   - **Name:** `Redstrek` (Ou outro nome descritivo para as ferramentas).
   - **MCP Server URL:** `http://mcpo:8080/sse`
   - **Transport:** `SSE` (Server-Sent Events).
   - **Authentication:** `None (Auto-detect)`.

Ao salvar, o status visual deve transitar para a cor **verde** confirmando que o SSE Hook foi estabelecido. Todos os resources, verbos e APIs encapsuladas do Oracle Fusion/EBS estarão instantaneamente habilitados no LLM para aquele agente.
