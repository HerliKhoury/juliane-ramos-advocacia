---
task: 05-secao-servicos
depende_de: [04-secao-sobre]
---

# Objetivo

Deixar claro, em poucos segundos, o que a advogada resolve — organizado em duas frentes: Contratos e Compliance.

# Contexto

Esta é a seção mais "vendedora" de escopo de serviço. Sem ícones externos (nenhuma lib nova) — usar SVGs inline simples (traços/linhas, coerentes com o estilo minimalista do monograma da marca).

# Escopo

- `src/components/sections/Servicos.tsx`, `id="servicos"`, fundo `cream`.
- Heading (h2): "Áreas de Atuação".
- Grid responsivo: 1 coluna em mobile, 2 em `sm:`/`md:`, considerar 3 em `lg:` se o número de cards permitir (ex.: 6 cards, 3x2 em desktop).
- Cards — **Contratos**: "Elaboração de Contratos", "Revisão Contratual", "Negociação Contratual".
- Cards — **Compliance**: "Programas de Integridade", "Adequação à LGPD", "Due Diligence & Políticas Internas".
- Cada card: ícone SVG inline, título (h3), 1–2 linhas de descrição placeholder formal em PT-BR, leve borda/sombra sutil usando os tokens de cor (não cores arbitrárias fora do tema).
- Pode agrupar visualmente os dois blocos (ex.: subtítulo "Contratos" e subtítulo "Compliance" acima de cada trio de cards) para reforçar as duas frentes de atuação.

# Fora de escopo

- Formulário de contato ou detalhamento jurídico extenso — são cards de resumo, não páginas de serviço individuais.

# Critérios de aceite

- 6 cards renderizam corretamente, sem overflow, em 360px de largura.
- Hierarquia de heading correta (h2 da seção, h3 por card, nenhum h1 duplicado).
- Checagem visual via skill `run` em 360px e em desktop, confirmando o grid responsivo (1 coluna mobile, 2–3 colunas desktop).
- `npm run build` e `npm run lint` passam.

# Arquivos principais

- `src/components/sections/Servicos.tsx`
- `src/App.tsx`
