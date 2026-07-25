---
task: 04-secao-sobre
depende_de: [03-secao-hero]
---

# Objetivo

Construir confiança: quem é Juliane Ramos, credenciais e abordagem profissional.

# Contexto

Foto principal: `src/assets/persona/persona-about-studio-portrait.jpg` (tons navy/marrom, combina com a paleta). `src/assets/persona/persona-about-standing-houndstooth.jpg` fica disponível como alternativa caso o crop da principal não funcione bem no layout final — usar a critério de quem implementar.

# Escopo

- `src/components/sections/Sobre.tsx`, `id="sobre"`, fundo `cream` ou `blush-tint` (variante do `Section`).
- Mobile-first: foto acima do texto em mobile; `lg:` duas colunas (foto de um lado, texto do outro).
- Copy placeholder (PT-BR formal):
  - Heading (h2, `font-display`): "Sobre Juliane Ramos"
  - Corpo (2–3 parágrafos curtos): trajetória, especialização em direito contratual e compliance, forma de atuação (atenção próxima ao cliente, prevenção de riscos, linguagem clara).
  - 3–4 "chips" de credencial/destaque (ex.: "OAB {`{CONTATO.oab}`}", "Direito Contratual", "Compliance & LGPD", "Atendimento consultivo") — usar `CONTATO.oab` do config da tarefa 01, não hardcoded.
- `alt` da imagem descritivo em PT-BR.

# Fora de escopo

- Prova social/depoimentos (tarefa 07).
- Processo de trabalho (tarefa 06).

# Critérios de aceite

- Texto legível (contraste AA mínimo) sobre o fundo escolhido.
- Layout correto em mobile e desktop (checagem visual via skill `run`).
- `npm run build` e `npm run lint` passam.

# Arquivos principais

- `src/components/sections/Sobre.tsx`
- `src/App.tsx`
