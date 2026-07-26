# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Business owners, executives, and internal decision-makers (B2B) facing decisions with legal exposure — drafting or signing contracts, or building/adapting a compliance and LGPD program — who need specialized outside counsel rather than generic legal help. The site does not target individuals seeking personal/consumer legal services; every piece of copy addresses "o seu negócio" (your business).

## Product Purpose

A single-page marketing/lead-generation site for Juliane Ramos, introducing her practice and converting visitors into a first consultation via WhatsApp or email. It is informational and persuasive, not transactional — there is no client portal, booking system, or payment flow.

## Positioning

Two specialized, complementary fronts under one practice: **Contratos** (elaboração, revisão, negociação) and **Compliance** (programas de integridade, adequação à LGPD, due diligence). The differentiator is a consultative, close-attention approach with clear, jargon-light language and visible process transparency — aimed at reducing the uncertainty of a buyer who has likely never hired specialized contract/compliance counsel before.

## Operating Context

- Single long-scroll landing page with anchor navigation: hero → sobre → serviços → processo → credibilidade (prova social) → contato, plus a header and footer.
- Primary conversion path is WhatsApp (`linkWhatsapp()`), secondary is email (`mailto:`) — both driven from centralized config in `src/config/contato.ts`, never hardcoded per-component.
- No CMS; content changes are code changes.

## Capabilities and Constraints

- Juliane Ramos is a **solo practitioner**, not a firm — copy and design must not imply a team or a large-firm structure.
- She serves clients with **no fixed geographic limit** (works remotely); the site should not be scoped to a single city/state as a hard constraint, even though `CONTATO.cidadeUf` exists as a field.
- The following are **deliberately left as open/placeholder facts**, explicitly marked `TODO` in `src/config/contato.ts` and in section components, and must not be fabricated by future work: real WhatsApp number, email, city/UF, OAB registration number, Instagram/LinkedIn handles, years of experience, and sectors served.

## Brand Commitments

- Name: Juliane Ramos Advocacia. Tagline: "Advocacia Contratual & Compliance."
- Explicit client decision (see `tasks/done/07-secao-prova-social.md`): **no fictional or fabricated client testimonials, ever.** Credibility is built through objective trust markers (credentials, experience, sectors served) and quotes attributed to Juliane herself, never to a third-party "client."
- Existing visual identity: navy / gold / cream / blush palette, monogram + horizontal logo lockup, Playfair Display for display type, Inter for body text — established in `tasks/done/00-design-tokens-e-fontes.md` and not to be treated as undecided.

## Evidence on Hand

- Persona photography already selected and mapped to sections (hero, about/studio portrait, two work-in-office shots, closeup portrait) — see `src/assets/persona/`.
- Logo assets (icon on gold/navy, full horizontal lockup, palette swatches) in `src/assets/logo/` and `src/assets/logoPaleta/`.
- No real testimonials, case studies, press mentions, or performance statistics exist yet — none should be invented; all remain explicit placeholders until supplied.

## Product Principles

1. Every decision should build trust appropriate to a high-stakes, considered B2B legal purchase — credibility and clarity outrank generic law-firm visual conventions.
2. Never fabricate testimonials, statistics, or contact details; placeholders stay visibly marked (`TODO`) until real data is supplied, not silently filled with invented specifics.
3. Reduce the buyer's uncertainty about hiring specialized contract/compliance counsel through visible process and consultative tone, not just credential display.
4. Every path through the page should resolve toward the single primary conversion action (WhatsApp), with email as the only secondary path.
5. Positioning and copy should read as an independent, remote-capable solo practice — never imply a fixed office requirement or a multi-lawyer firm.

## Accessibility & Inclusion

No externally mandated standard was specified by the client. `tasks/done/10-seo-acessibilidade.md` already implemented WCAG AA-oriented practice as general good practice: single `<h1>`, semantic landmarks, AA contrast, visible `:focus-visible` states, and `prefers-reduced-motion` support — treat this as the baseline to preserve, not a requirement to re-derive.
