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
- Dois CTAs lado a lado em desktop, empilhados em mobile: `Button primary` → `linkWhatsapp()` ("Chamar no WhatsApp"), segundo CTA → `mailto:${CONTATO.email}` ("Enviar e-mail").
- Atenção ao componente `Button` (`src/components/ui/Button.tsx`): o variant `outline` é hardcoded `border-navy text-navy`, ou seja, fica invisível sobre fundo `navy`. Se o fundo escolhido for `navy`, **não usar `Button outline`** para o segundo CTA — usar `Button primary` para ambos (diferenciando por hierarquia, ex. tamanho/peso) ou `Button ghost` com `className` explícito em tons `cream`/`gold` (ex. `className="text-cream border border-cream/60 hover:bg-cream/10"`). Se o fundo escolhido for `gold`, `Button outline` funciona sem ajuste.
- Se usar a foto, garantir contraste de texto (overlay escuro semi-transparente sobre a imagem, se necessário).

# Fora de escopo

- Rodapé com links/copyright (tarefa 09).

# Critérios de aceite

- Os dois CTAs são clicáveis e abrem os links corretos (`wa.me` e `mailto:`).
- Em mobile, os botões ficam empilhados e ocupam largura confortável para toque.
- Checagem visual via skill `run`: nenhum dos dois CTAs fica ilegível/invisível sobre o fundo escolhido (nem em mobile, nem em desktop).
- `npm run build` e `npm run lint` passam.

# Arquivos principais

- `src/components/sections/CtaFinal.tsx`
- `src/App.tsx`
