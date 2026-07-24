---
task: 08-secao-cta-final
depende_de: [07-secao-prova-social]
---

# Objetivo

Fechar a página com uma chamada para ação inequívoca, antes do rodapé.

# Contexto

Esta é a última chance de conversão antes do rodapé (que é mais utilitário). Pode reaproveitar `src/assets/persona/persona-work-laptop-desk.jpg` como imagem de apoio/fundo, se fizer sentido no layout — é a única foto ainda não usada em nenhuma seção anterior.

# Escopo

- `src/components/sections/CtaFinal.tsx`, `id="contato"`, fundo `navy` ou `gold` (o mais forte contraste de toda a página — reservar a cor mais intensa para o momento de maior intenção de conversão).
- Heading (h2, `font-display`), forte e direto, ex.: "Vamos proteger o seu negócio juridicamente?"
- Subtexto curto reforçando urgência/valor, ex.: "Fale agora e receba uma orientação inicial sobre o seu caso."
- Dois CTAs lado a lado em desktop, empilhados em mobile: `Button primary` → `linkWhatsapp()` ("Chamar no WhatsApp"), `Button outline` → `mailto:${CONTATO.email}` ("Enviar e-mail").
- Se usar a foto, garantir contraste de texto (overlay escuro semi-transparente sobre a imagem, se necessário).

# Fora de escopo

- Rodapé com links/copyright (tarefa 09).

# Critérios de aceite

- Os dois CTAs são clicáveis e abrem os links corretos (`wa.me` e `mailto:`).
- Em mobile, os botões ficam empilhados e ocupam largura confortável para toque.
- `npm run build` e `npm run lint` passam.

# Arquivos principais

- `src/components/sections/CtaFinal.tsx`
- `src/App.tsx`
