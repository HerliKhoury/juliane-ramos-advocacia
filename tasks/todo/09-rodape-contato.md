---
task: 09-rodape-contato
depende_de: [08-secao-cta-final]
---

# Objetivo

Rodapé utilitário e profissional: identidade, contato, navegação rápida e créditos legais.

# Contexto

Reaproveita o mesmo badge+wordmark do header (tarefa 02) e os dados centralizados em `src/config/contato.ts` (tarefa 01) — nenhum dado de contato deve ser hardcoded diretamente no JSX do rodapé.

# Escopo

- `src/components/layout/Footer.tsx`, fundo `navy`, texto `cream`/`muted`.
- Coluna/bloco 1: badge + wordmark, uma linha curta de posicionamento (ex.: "Advocacia Contratual & Compliance").
- Coluna/bloco 2: links rápidos de navegação (mesmas âncoras do header).
- Coluna/bloco 3: contato — `CONTATO.email` (`mailto:`), link WhatsApp (`linkWhatsapp()`), `CONTATO.cidadeUf`, `CONTATO.oab`.
- Ícones/links sociais (Instagram, LinkedIn) usando `CONTATO.instagram`/`CONTATO.linkedin`.
- Linha final de copyright com ano dinâmico: `` `© ${new Date().getFullYear()} Juliane Ramos Advocacia. Todos os direitos reservados.` ``.
- Mobile-first: colunas empilhadas em mobile, lado a lado (`md:grid-cols-3` ou similar) em desktop.

# Fora de escopo

- Qualquer CTA novo (já coberto na tarefa 08).

# Critérios de aceite

- Nenhuma string de contato hardcoded fora de `src/config/contato.ts`.
- Ano de copyright reflete o ano atual automaticamente (testável mudando a data do sistema, se necessário).
- `npm run build` e `npm run lint` passam.

# Arquivos principais

- `src/components/layout/Footer.tsx`
- `src/App.tsx`
