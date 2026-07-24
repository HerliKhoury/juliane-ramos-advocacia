---
task: 06-secao-processo
depende_de: [05-secao-servicos]
---

# Objetivo

Mostrar transparência no método de trabalho, reduzindo a incerteza de quem nunca contratou uma advogada para isso.

# Contexto

Fotos: `src/assets/persona/persona-work-coffee-desk.jpg` e `src/assets/persona/persona-work-writing-notes.jpg` — ambas transmitem trabalho de escritório real (não stock genérico), reforçam a seção.

# Escopo

- `src/components/sections/Processo.tsx`, `id="processo"`, fundo `navy` ou `blush-tint` (escolher o que der melhor contraste com a seção anterior/seguinte, alternando ritmo visual da página).
- Heading (h2): "Como Trabalho".
- Lista numerada de 4 etapas (placeholder PT-BR formal), ex.:
  1. "Diagnóstico" — entendimento do cenário contratual/regulatório do cliente.
  2. "Proposta" — plano de ação e escopo claros, sem surpresas.
  3. "Execução" — elaboração, revisão ou estruturação do que foi acordado.
  4. "Acompanhamento" — suporte contínuo e ajustes conforme o negócio evolui.
- Usar as duas fotos de trabalho como apoio visual (ex.: uma ancorando o topo/lado da seção, outra intercalada entre os passos ou em um segundo bloco) — mobile-first: empilhar tudo, sem grid complexo demais para telas pequenas.
- Se o fundo escolhido for `navy`, garantir texto em `cream`/`gold` com contraste adequado.

# Fora de escopo

- Depoimentos/prova social (tarefa 07).

# Critérios de aceite

- As 4 etapas aparecem em ordem clara (numeração visível) tanto em mobile quanto desktop.
- Contraste de texto adequado sobre o fundo escolhido.
- `npm run build` e `npm run lint` passam.

# Arquivos principais

- `src/components/sections/Processo.tsx`
- `src/App.tsx`
