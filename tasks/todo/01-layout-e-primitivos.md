---
task: 01-layout-e-primitivos
depende_de: [00-design-tokens-e-fontes]
---

# Objetivo

Criar os blocos de construção reutilizáveis (layout e botão) e o arquivo central de dados de contato, para que as seções (tarefas 02+) só precisem compor, não reinventar.

# Contexto

Ainda não existe `src/components/` nem convenção de layout. Sem isso, cada seção futura reimplementaria padding/max-width/CTA do zero, gerando inconsistência mobile-first.

# Escopo

- Criar `src/components/layout/Container.tsx`: wrapper com `max-width` responsivo e padding horizontal mobile-first (ex.: `px-5 sm:px-8 lg:px-12`, `max-w-6xl mx-auto`).
- Criar `src/components/layout/Section.tsx`: wrapper de seção com `id` (para âncoras do menu), padding vertical consistente (ex.: `py-16 md:py-24`), e prop opcional de variante de fundo (`cream` | `navy` | `blush-tint`).
- Criar `src/components/ui/Button.tsx`: componente de botão/link com variantes `primary` (gold sólido, texto navy), `outline` (borda navy/gold), `ghost` (texto simples); tamanho mínimo de toque 44px de altura; suporta renderizar como `<a>` (para links de WhatsApp) ou `<button>`.
- Criar `src/config/contato.ts` exportando constantes placeholder, todas em maiúsculo e claramente marcadas para substituição futura:
  ```ts
  export const CONTATO = {
    whatsapp: "5500000000000", // TODO: substituir pelo número real (código do país + DDD + número)
    whatsappMensagemPadrao: "Olá! Gostaria de agendar uma consulta sobre contratos/compliance.",
    email: "contato@julianeramosadvocacia.com.br", // TODO: confirmar e-mail real
    cidadeUf: "Cidade/UF", // TODO: preencher
    oab: "OAB/UF 000.000", // TODO: preencher número real de inscrição
    instagram: "https://instagram.com/", // TODO: preencher usuário real
    linkedin: "https://linkedin.com/", // TODO: preencher perfil real
  } as const;

  export const linkWhatsapp = (mensagem = CONTATO.whatsappMensagemPadrao) =>
    `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(mensagem)}`;
  ```
- Documentar rapidamente (comentário no topo de `Section.tsx` ou similar) a convenção mobile-first esperada nas próximas tarefas: estilizar primeiro para telas pequenas, usar prefixos `sm:`/`md:`/`lg:` apenas para ajustes em telas maiores.

# Fora de escopo

- Header/nav (tarefa 02).
- Conteúdo real das seções.

# Critérios de aceite

- `npm run build` e `npm run lint` passam.
- `Button` renderiza corretamente como link externo (`target="_blank" rel="noopener noreferrer"` quando `href` é fornecido) e como botão nativo quando não é.
- `linkWhatsapp()` gera uma URL `https://wa.me/...` válida com a mensagem codificada.

# Arquivos principais

- `src/components/layout/Container.tsx`
- `src/components/layout/Section.tsx`
- `src/components/ui/Button.tsx`
- `src/config/contato.ts`
