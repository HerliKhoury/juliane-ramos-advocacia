---
task: 02-header-navegacao
depende_de: [01-layout-e-primitivos]
---

# Objetivo

Cabeçalho fixo, elegante, com navegação mobile funcional e um CTA sempre visível.

# Contexto

Header usa fundo navy sólido (ver decisão de marca no plano: o badge quadrado do logo em `src/assets/logo/logo-icon-gold-bg.jpg` só funciona visualmente sobre navy). Nesta tarefa o badge pode ser recriado como um pequeno monograma inline (reaproveitando o favicon SVG da tarefa 00) — não é necessário usar o JPG diretamente no header.

# Escopo

- `src/components/layout/Header.tsx`: barra fixa/sticky no topo, fundo `navy`, altura confortável para toque.
- Lado esquerdo: badge do monograma (reuso do SVG da tarefa 00, ex. via `<img src="/favicon.svg">` ou componente inline) + wordmark "Juliane Ramos" em `font-display` cor gold/cream, com "Advogada" em texto menor abaixo ou ao lado.
- Navegação desktop (`hidden md:flex`): links âncora para as seções (`#sobre`, `#servicos`, `#processo`, `#contato`), cor cream com hover gold.
- Botão CTA no header (`Button variant="primary"`, texto ex. "Fale comigo") linkando para `linkWhatsapp()`.
- Menu mobile (`md:hidden`): botão hambúrguer que abre um drawer/painel (pode ser um simples dropdown absolute, sem lib externa) com os mesmos links + CTA, fechável por clique fora ou tecla Esc.
- Acessibilidade: botão hambúrguer com `aria-expanded`/`aria-label`, navegação com `<nav aria-label="Principal">`, foco visível em todos os itens interativos.

# Fora de escopo

- Efeito de encolher/sombra ao rolar (nice-to-have, não obrigatório; só implementar se trivial).
- Conteúdo das seções ligadas (âncoras podem apontar para ids que só existirão nas próximas tarefas — ok deixar como TODO até lá).

# Critérios de aceite

- Em mobile (< 768px), o menu abre e fecha corretamente, sem quebrar o layout nem gerar scroll horizontal.
- Em desktop, todos os links de navegação e o CTA são visíveis sem hambúrguer.
- Navegação por teclado (Tab) alcança todos os itens do header, incluindo dentro do drawer mobile quando aberto.
- Checagem visual via skill `run` em 360–390px e em desktop: badge+wordmark legíveis, sem scroll horizontal, CTA sempre visível.
- `npm run build` e `npm run lint` passam.

# Arquivos principais

- `src/components/layout/Header.tsx`
- `src/App.tsx` (montar o Header)
