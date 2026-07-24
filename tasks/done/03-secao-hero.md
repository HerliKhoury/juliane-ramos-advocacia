---
task: 03-secao-hero
depende_de: [02-header-navegacao]
---

# Objetivo

Primeira impressão de impacto: headline forte, foto de autoridade e um CTA impossível de ignorar, já em mobile.

# Contexto

Foto escolhida: `src/assets/persona/persona-hero-white-blazer.jpg` (fundo neutro, postura confiante, recorta bem). Este é o LCP (largest contentful paint) da página — carregamento tem que ser eager/prioritário (detalhe de performance fica formalizado na tarefa 11, mas já usar `loading="eager"`/`fetchpriority="high"` aqui).

# Escopo

- `src/components/sections/Hero.tsx`, seção com `id="inicio"` (ou sem id, é o topo da página).
- Mobile-first: imagem em cima (ou como fundo com overlay), texto abaixo, empilhado; em `lg:`, layout de duas colunas (texto à esquerda, foto à direita ou vice-versa).
- Copy placeholder (formal, PT-BR — revisar depois):
  - Eyebrow/kicker: "Advocacia Contratual & Compliance"
  - Headline (h1, `font-display`): "Segurança jurídica para decisões que não podem dar errado."
  - Subheadline: "Assessoria especializada na elaboração, revisão e negociação de contratos, e na estruturação de programas de compliance sob medida para o seu negócio."
  - CTA primário: Button primary → `linkWhatsapp()`, texto "Agende uma consulta"
  - CTA secundário: link `ghost`/texto simples → `href="#servicos"`, texto "Conheça as áreas de atuação"
- Imagem com `alt` descritivo em PT-BR (ex.: "Juliane Ramos, advogada especialista em contratos e compliance").

# Fora de escopo

- Qualquer outra seção da página.
- Otimização fina de imagem (formatos responsivos/`srcset`) — tarefa 11.

# Critérios de aceite

- Em viewport de 360–390px, nada estoura horizontalmente; CTA primário é o elemento mais destacado visualmente.
- `h1` único na página (verificar que nenhuma outra seção usa `<h1>`).
- `npm run build` e `npm run lint` passam.
- Checagem visual via skill `run` em mobile e desktop.

# Arquivos principais

- `src/components/sections/Hero.tsx`
- `src/App.tsx` (montar a seção)
