---
description: Como reconstuir o VSIX completo da extensão Redstrek
---
// turbo-all

Siga os comandos abaixo sequencialmente para garantir o empacotamento do VSIX com o executável Rust correto e as últimas melhorias do esbuild.

> **Estrutura Monorepo:**
> A extensão VS Code vive em `Redstrek/vscode-extension/`.
> O binário Rust é compilado a partir de `Redstrek/crates/engine/` (o `reds-cli` legado foi movido para `old/reds-cli`).

> **Aviso de Tamanho (Size Check):**
> O tamanho final do VSIX gerado irá ser de aproximadamente **600 MB**. Esse pacote inclui a pasta pesada de **Oracle Instant Client (TNS)** dentro de `bin/` para resolver conexões nativas locais.


1. Navegue para o diretório de código da extensão:
```bash
cd /Library/Projects/github/RedstrekCode/Redstrek/vscode-extension
```

2. Apague builds VSIX antigos:
```bash
rm -f redstrek-*.vsix
```

3. Compile o código Typescript:
```bash
npm run compile
```

4. Compile a release de produção do runtime Rust (macOS ARM) — usando `crates/engine`:
```bash
cd ../crates/engine
cargo build --release
mkdir -p ../../vscode-extension/bin/macos
cp ../../target/release/engine ../../vscode-extension/bin/macos/reds
chmod +x ../../vscode-extension/bin/macos/reds
codesign -s - -f ../../vscode-extension/bin/macos/reds
cd ../../vscode-extension
```

5. Compile a release de produção do Dashboard WebAssembly (Leptos) gerando o `dist/`:
```bash
cd ../crates/dashboard
trunk build --release
cd ../../vscode-extension
```

6. Empacote o VSIX (darwin-arm64):
```bash
# Copia a pasta .agent (Agentes, Skills, Workflows) para dentro da extensão para ser distribuída junto com o VSIX
cp -r ../../.agent ./

# Empacota
yes | npx vsce package --target darwin-arm64 --no-dependencies

# Limpa a cópia temporária do .agent para não poluir o repositório da extensão
rm -rf .agent
```

7. Instale automaticamente no Antigravity IDE:
```bash
"/Applications/Antigravity IDE.app/Contents/Resources/app/bin/antigravity-ide" --install-extension redstrek-darwin-arm64-3.0.0.vsix
```

8. Compile a release Wasm da extensão nativa do Zed:
```bash
cd ../zed-extension
cargo build --target wasm32-wasip1 --release
cd ../vscode-extension
```

9. Copie o VSIX gerado para a pasta de Tools da Twoone:
```bash
cp redstrek-*.vsix "/Users/abnerbessi/Library/CloudStorage/OneDrive-TwooneInformáticaLTDA/Twoone Informática LTDA - Documents/General/Tools/"
```

10. **Verificação final antes do commit** (evita falhas de CI):
```bash
cd /Library/Projects/github/RedstrekCode/Redstrek
cargo check -p engine -p gateway 2>&1 | grep "^error"
# Se zero erros: prosseguir. Se houver erros: corrigir antes do commit.
```

11. Commit e push das alterações no repositório:
```bash
cd /Library/Projects/github/RedstrekCode/Redstrek

# Adiciona todos os arquivos modificados (exceto binários e .vsix)
git add -A -- ':!*.vsix' ':!target/' ':!vscode-extension/bin/'

# Commit com mensagem padronizada
git commit -m "chore: rebuild VSIX 3.0.0 — gateway-first architecture

- Engine: zero direct Supabase calls (all via gateway)
- OAuth: HMAC session only, removed persist_jwt_to_vault
- Gateway: new routes /vault/connections/all, /vault/connection/:id,
  /vault/repository/:id, /vault/scripts, /license/plan, /license/usage
- CLI: fixed auth bypass, Pull uses oauth_session not jwt fallback"

# Push para o remote
git push
```

*(Opcional) Instale a extensão no seu editor Zed local:*
```text
Abra o Zed, use a Command Palette (Cmd+Shift+P) e digite:
"zed: install dev extension" -> Selecione a pasta zed-extension
```
