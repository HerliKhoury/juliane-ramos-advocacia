---
task: 11-qa-responsivo-performance
depende_de: [10-seo-acessibilidade]
---

# Objetivo

Passe final de qualidade antes de considerar a landing page pronta: responsividade real em múltiplos tamanhos e performance de carregamento de imagens.

# Contexto

Última tarefa do plano. Todas as seções e o SEO/acessibilidade já existem; aqui é sobre validar e ajustar, não criar conteúdo novo.

# Escopo

- Checar visualmente (via skill `run`, abrindo o dev server e redimensionando/usando devtools device mode) nas larguras: 360px, 390px, 768px, 1024px, 1440px — nenhuma quebra de layout, overflow horizontal ou texto cortado.
- Estratégia de imagens:
  - Hero (`persona-hero-white-blazer.jpg`): `loading="eager"` + `fetchpriority="high"` (já deve ter sido feito na tarefa 03 — confirmar).
  - Todas as demais imagens de seção (`Sobre`, `Processo`, `ProvaSocial`, eventual CTA final): `loading="lazy"`, `decoding="async"`.
  - Considerar `width`/`height` explícitos (ou `aspect-ratio` via Tailwind) em todas as tags de imagem para evitar CLS (layout shift).
- Rodar `npm run build` e revisar o tamanho do bundle/assets gerado (`dist/`) — sinalizar (comentário/nota, não necessariamente resolver) se alguma imagem estiver visivelmente pesada demais para web (ex.: > 500KB) para uma futura otimização de compressão.
- Rodar `npm run lint` e corrigir qualquer aviso pendente acumulado ao longo das tarefas anteriores.

# Fora de escopo

- Novas features ou seções.
- Pipeline de otimização de imagem automatizado (ex. plugin de build) — fica como nota para decisão futura, não implementar aqui a menos que seja trivial.

# Critérios de aceite

- Nenhuma quebra visual nos 5 breakpoints listados.
- `npm run build` e `npm run lint` sem erros.
- Todas as imagens abaixo da dobra usam `loading="lazy"`.

# Arquivos principais

- Todos os componentes de seção (ajustes pontuais de atributos de imagem)
- `vite.config.ts` (apenas se necessário para build)
