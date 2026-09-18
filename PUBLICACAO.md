# Publicação na Vercel

Site estático, sem build ou instalação de dependências. Use Framework Preset “Other” e a raiz do projeto como diretório de saída. A configuração vercel.json preserva os arquivos existentes e serve 404.html com status HTTP 404 para caminhos inexistentes, inclusive /404 e /404.html. /index.html redireciona permanentemente para /.

Domínio canônico: https://clinica-maila-portes.vercel.app/

## Validação local

- `python3 scripts/validate_site.py`
- `node --check js/script.js`
- `node --check js/contato.js`
- `git diff --check`

O servidor simples do Python é somente uma prévia visual: ele não interpreta vercel.json. Não usar sua resposta para certificar as regras da hospedagem.

## Após o deploy

Verificar GET / (200), /privacidade.html (200), /obrigado.html (200 com noindex), /404.html (404), /caminho-inexistente (404, corpo da página personalizada), /index.html (308 para /), /robots.txt (200), /sitemap.xml (200) e a imagem social /assets/images/dra-maila-nova.jpg (200). Confira também um caminho aninhado inexistente e o carregamento do CSS na página 404.

Cadastrar o domínio no Google Search Console, verificar a propriedade e enviar /sitemap.xml. Não foi realizado deploy nem envio ao Search Console nesta preparação. A indexação depende do Google.

## Conteúdo e fontes

- Prazo de resposta de 20 minutos informado pelo responsável. Dias e horários não foram fornecidos; não foi prometida disponibilidade 24 horas. Prazo de resposta não é prazo de chegada ou confirmação de consulta.
- Avaliação de Joao Chiba: https://share.google/AA5fe8s6TDrm9nV80 — texto conferido no Google Maps.
- Avaliação de Rafaela Mello: https://share.google/8fEA0XbY4GFSd9opr — trecho conferido no Google Maps, com corte indicado por reticências.
- O terceiro link fornecido repete o segundo. O relato “Atendimento incrível e profissionais altamente capacitadas.” foi retirado da página por não haver fonte correspondente entre os links. Pode ser reinserido quando a fonte for fornecida.
- A nota agregada 4,9 e a contagem de 8 avaliações foram removidas por falta de fonte atual confirmada. Não há aggregateRating nem marcação Review.
- Nome, telefone e endereço da marcação Dentist vêm dos dados existentes no projeto. Não foram adicionados horários, registro profissional, coordenadas, preços ou outras informações não fornecidas.
- Os casos clínicos e suas imagens foram preservados sem acrescentar resultados numéricos ou garantias.
- Links de Hotmart e São Leopoldo Mandic retornaram HTTP 200. Links de avaliações foram conferidos no navegador. Links sociais podem exigir sessão ou limitar robôs.

## Contato e privacidade

CTAs levam à página Obrigado com o assunto selecionado. Ela apenas prepara o contato; nenhuma mensagem, venda ou consulta é registrada. O usuário deve abrir o WhatsApp e enviar a mensagem. Nenhum evento de conversão é emitido. Parâmetros desconhecidos usam a mensagem genérica, sem interpolar conteúdo arbitrário.

A política descreve as ferramentas presentes no código: Vercel, Google Fonts, Google Maps incorporado e links externos. Não há formulário, analytics, pixel, cookies próprios ou armazenamento local implementados. Atualize a política caso ferramentas de hospedagem, analytics ou atendimento sejam adicionadas.
