---
task: 10-seo-acessibilidade
depende_de: [09-rodape-contato]
---

# Objetivo

Garantir que a página seja bem indexada, compartilhável e acessível — depois que todo o conteúdo (tarefas 00–09) já existe.

# Contexto

Esta tarefa é um passe de auditoria/ajuste sobre o que já foi construído, não uma seção nova. `src/assets/logoPaleta/logo-full-horizontal.jpg` é reservado exatamente para este momento (imagem de compartilhamento OpenGraph).

# Escopo

- `index.html`: `<meta name="description">` (resumo em PT-BR do posicionamento — contratos e compliance), `<meta property="og:title">`, `og:description`, `og:image` (apontando para a lockup horizontal, servida de `public/` ou via import com hash — decidir o que for mais simples no Vite), `og:locale` `pt_BR`, `<meta name="twitter:card" content="summary_large_image">`, `<meta name="theme-color" content="#051B32">`.
- Auditoria de hierarquia de headings: exatamente um `<h1>` (no Hero), `<h2>` por seção, `<h3>` dentro de cards — corrigir qualquer desvio introduzido nas tarefas anteriores.
- Landmarks semânticos: confirmar `<header>`, `<main>`, cada `<section>` com `id`, `<footer>` — ajustar `src/App.tsx` se alguma seção não estiver dentro de `<main>`.
- Passe de `alt` text: revisar todas as imagens (hero, sobre, processo) garantindo descrições em PT-BR que fazem sentido para leitores de tela (não apenas "foto da advogada").
- Estados de foco: confirmar que todo elemento interativo (links, botões, menu mobile) tem `:focus-visible` perceptível usando os tokens de cor (ex.: anel gold sobre navy).
- `prefers-reduced-motion`: qualquer transição/animação introduzida (menu mobile, scroll suave) deve respeitar essa media query.

# Fora de escopo

- Mudanças de conteúdo/copy (isso já foi decidido nas tarefas de seção).

# Critérios de aceite

- Rodar uma ferramenta de auditoria de acessibilidade do navegador (ex. Lighthouse/axe via devtools) e não haver erros críticos de contraste, landmarks ou alt text ausente.
- `view-source` mostra as meta tags corretas.
- `npm run build` e `npm run lint` passam.

# Arquivos principais

- `index.html`
- `src/App.tsx`
- Componentes de seção existentes (ajustes pontuais, se necessário)
