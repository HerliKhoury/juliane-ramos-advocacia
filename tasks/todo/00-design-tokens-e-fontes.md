---
task: 00-design-tokens-e-fontes
depende_de: []
---

# Objetivo

Estabelecer a base visual do projeto (cores, tipografia, favicon) para que todas as tarefas seguintes usem os mesmos tokens, sem retrabalho.

# Contexto

O projeto hoje só tem o scaffold padrão do Vite (`@import "tailwindcss";` em `src/index.css`, sem tokens de marca). A pasta `src/assets/logoPaleta/` contém as cores oficiais e o logotipo; `public/favicon.svg` ainda é o ícone genérico roxo do template do Vite, sem relação com a marca.

Paleta already sampled from the swatch images (do not re-sample, use these exact values):
- Navy `#051B32`
- Gold `#CA884E`
- Blush `#E8B095`
- Cream (novo, background) `#FBF8F4`
- Ink (novo, texto em fundo claro) `#0F2438`
- Muted slate (novo, texto secundário) `#5B6B7A`

Tipografia: `Playfair Display` (headings) + `Inter` variable (body), self-hosted via `@fontsource` (sem chamada externa a Google Fonts em runtime).

# Escopo

- `npm install @fontsource/playfair-display @fontsource-variable/inter`
- Em `src/index.css`, após `@import "tailwindcss";`, importar os pesos de fonte necessários (ex.: `@fontsource/playfair-display/600.css`, `/700.css`; `@fontsource-variable/inter`) e declarar os tokens de marca via `@theme` do Tailwind v4 (`--color-navy`, `--color-gold`, `--color-blush`, `--color-cream`, `--color-ink`, `--color-muted`, `--font-display: "Playfair Display", serif`, `--font-sans: "Inter Variable", sans-serif`).
- Definir estilos base: `body` com `bg-cream text-ink font-sans`, `scroll-behavior: smooth` (respeitando `prefers-reduced-motion` — só o essencial aqui, o audit completo fica pra tarefa 10), cor de seleção de texto (`::selection`) em gold sobre navy.
- Substituir `public/favicon.svg` por uma versão em SVG do monograma JR (pode ser um SVG simples com o fundo navy `#051B32` e o monograma em gold `#CA884E` — vetorizar a forma vista em `src/assets/logo/logo-icon-gold-bg.jpg`, não precisa ser pixel-perfect).
- Atualizar `index.html`: `<html lang="pt-BR">`, `<title>Juliane Ramos | Advocacia Contratual e Compliance</title>` (ajustável nas próximas tarefas de SEO).

# Fora de escopo

- Meta tags de SEO/OpenGraph completas (tarefa 10).
- Qualquer componente de UI (tarefas 01+).

# Critérios de aceite

- `npm run build` e `npm run lint` passam sem erros.
- Abrir o site (`npm run dev`) mostra fundo cream, e qualquer texto de teste já usa a fonte Inter/Playfair (inspecionar via devtools).
- Favicon da aba do navegador é o monograma da marca, não o ícone roxo padrão do Vite.

# Arquivos principais

- `src/index.css`
- `public/favicon.svg`
- `index.html`
- `package.json` (novas dependências)
