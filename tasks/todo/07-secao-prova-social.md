---
task: 07-secao-prova-social
depende_de: [06-secao-processo]
---

# Objetivo

Reforçar credibilidade sem inventar depoimentos que não existem — usando marcadores de confiança genuínos e genéricos.

# Contexto

Decisão já tomada com o usuário: **não** criar depoimentos fictícios de clientes. Em vez disso, usar marcadores de confiança (anos de experiência, setores atendidos, credenciais). Foto: `src/assets/persona/persona-portrait-closeup.jpg` (tom suave, boa para compor com uma citação/destaque textual da própria advogada, não de terceiros).

# Escopo

- `src/components/sections/ProvaSocial.tsx`, `id="credibilidade"` (ou nome similar), fundo `cream`.
- Um bloco de destaque (card ou faixa) com uma frase de posicionamento em citação — atribuída à própria Juliane Ramos (não a um "cliente"), ex.: *"Meu compromisso é traduzir a complexidade jurídica em decisões seguras para o seu negócio."* — deixar claro no comentário do código que é uma citação de autoria própria, não testemunho de terceiro.
- 3–4 marcadores de confiança em formato de estatística/chip, todos com valores placeholder marcados para revisão, ex.: "+X anos de atuação", "Setores atendidos: [placeholder]", "OAB {`{CONTATO.oab}`}", "Atendimento consultivo personalizado".
- Composição com a foto (ex.: foto de um lado, citação + marcadores do outro; mobile-first empilhado).

# Fora de escopo

- Qualquer texto que simule ser depoimento de cliente real ou fictício.

# Critérios de aceite

- Nenhum texto no componente é atribuído a um "cliente" — apenas à própria advogada ou dados objetivos placeholder.
- Todos os valores placeholder (anos, setores) estão claramente marcados com comentário `TODO` para revisão futura.
- `npm run build` e `npm run lint` passam.

# Arquivos principais

- `src/components/sections/ProvaSocial.tsx`
- `src/App.tsx`
