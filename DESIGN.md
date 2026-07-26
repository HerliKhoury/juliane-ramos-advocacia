---
name: Juliane Ramos Advocacia
description: Advocacia Contratual & Compliance — a solo B2B lawyer's single-page site, built as an editorial dossier rather than a law-firm template.
colors:
  deep-navy: "#051B32"
  warm-gold: "#CA884E"
  gold-ink: "#8D5F37"
  soft-blush: "#E8B095"
  paper-cream: "#FBF8F4"
  ink: "#0F2438"
  muted-slate: "#5B6B7A"
typography:
  display:
    fontFamily: "Playfair Display, serif"
    fontWeight: 600
    lineHeight: 1.08
  headline:
    fontFamily: "Playfair Display, serif"
    fontWeight: 600
    fontSize: "clamp(1.875rem, 1.6rem + 1.2vw, 2.25rem)"
    lineHeight: 1.2
  body:
    fontFamily: "Inter Variable, sans-serif"
    fontSize: "1.125rem"
    lineHeight: 1.6
  label:
    fontFamily: "Inter Variable, sans-serif"
    fontWeight: 600
    fontSize: "0.875rem"
    letterSpacing: "0.08em"
rounded:
  control: "6px"
  plate: "8px"
  full: "9999px"
spacing:
  section-y: "4rem"
  section-y-lg: "6rem"
  gutter: "1.25rem"
  gutter-lg: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.warm-gold}"
    textColor: "{colors.deep-navy}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "2.75rem"
  button-outline-inverse:
    backgroundColor: "transparent"
    textColor: "{colors.paper-cream}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "2.75rem"
---

# Design System: Juliane Ramos Advocacia

## Overview

**Creative North Star: "The Counsel's Dossier"**

The site reads as a formally bound legal dossier translated to screen, not a law-firm marketing template. Its structural vocabulary comes from the physical grammar of contract work: a letterhead rule under the header, mounted-print offset frames behind documentary photographs, a table-of-contents-style index for the services list, and portraits background-removed and set on navy mounting plates like a formal portfolio print. Numerals and rule lines stand in for the marginalia of a paper document — margin ticks, a running folio, an index number — rather than decorative UI chrome.

The palette and type pairing (navy/gold/cream/blush, Playfair Display + Inter) are locked, pre-existing brand commitments; this system does not change them. What it changes is composition and craft: asymmetric layouts over centered symmetric grids, an index list over icon-in-circle cards, one restrained motion grammar (scroll reveal, a hand-drawn signature stroke, a spine line connecting process steps) instead of no motion at all.

Confirmed rejections: no icon-tile cards, no generic 3-up grid as the default page structure, no colored/chromatic glow shadows, no width/height-based hover transitions, no more than one tracked-uppercase "eyebrow" label per page (reserved for the brand tagline).

**Key Characteristics:**
- Editorial-dossier composition: mounted-print photo frames, index lists, letterhead rules.
- Two photo treatments only: full-frame "documentary" shots (offset gold-rule frame) and background-removed "portrait" cutouts (floating on a navy plate).
- One eyebrow label in the whole page (the Hero's brand tagline) — every other section leads with its heading directly.
- Motion is one-shot scroll-reveal plus a small number of named signature moments, never per-element decoration.

## Colors

Warm, high-contrast palette built around a near-black navy and a muted terracotta gold, used at page scale (whole-section fields), not as scattered accents.

### Primary
- **Deep Navy** (#051B32): the site's dark register — header, footer, the Processo and closing-CTA sections, and the mounting plate behind every cutout portrait. Also the primary text/shadow tone on light sections (shadows are neutral black, not navy-tinted, to avoid a "colored glow" read).

### Secondary
- **Warm Gold** (#CA884E): the single accent, carried by primary buttons, rule lines (letterhead rules, quote-mark underlines, list dividers' active state), hover states, and the signature-stroke SVG under the closing CTA heading.
- **Gold Ink** (#8D5F37): a deeper, AA-safe variant of gold used for small label text on cream/blush backgrounds where full-saturation gold would fail contrast.

### Tertiary
- **Soft Blush** (#E8B095): the Sobre section's tinted background (`blush/15`) and the oversized quotation mark in ProvaSocial (`gold/25` over a blush-adjacent field). Used as atmosphere, never as text color.

### Neutral
- **Paper Cream** (#FBF8F4): the default light background. This is a pre-existing locked brand color (see PRODUCT.md); its resemblance to a generic "AI cream" surface is a known, accepted tradeoff, not an oversight.
- **Ink** (#0F2438): primary body text on light backgrounds and heading color throughout.
- **Muted Slate** (#5B6B7A): secondary/paragraph text on light backgrounds (`text-muted`).

### Named Rules
**The One Accent Rule.** Gold is the only chromatic accent on the page. Every other color is navy, cream, blush, or a neutral derived from them. When something needs to draw the eye, it turns gold — never a second hue.

**The Neutral Shadow Rule.** Every shadow in the system (`FramedPhoto`, `CutoutPortrait`, the scrolled header) uses a neutral black (`rgba(0,0,0,…)`), even on navy surfaces. A shadow tinted to match its background reads as a chromatic glow, which this system explicitly refuses.

## Typography

**Display Font:** Playfair Display (with serif fallback) — weights 600/700, self-hosted via `@fontsource`.
**Body Font:** Inter Variable (with sans-serif fallback), self-hosted via `@fontsource-variable`.

**Character:** A confident serif display against a plain, highly legible sans body — the pairing of a formal legal document's cover page and its typed body text.

### Hierarchy
- **Display** (600, `text-4xl`–`text-5xl`/`3.4rem` clamp, leading-[1.08]): the Hero H1 only.
- **Headline** (600, `text-3xl`–`text-4xl`, leading-tight): every section's H2. Every section leads directly with its H2 — no eyebrow precedes it except Hero.
- **Title** (600, `text-xl`, Playfair): card/list-item titles (service names, process step names).
- **Body** (400, `text-lg`/18px, `text-muted`): paragraph copy, max width kept short (`max-w-lg`/`max-w-xl`) rather than running full column width.
- **Label** (600, `text-sm`, `tracking-[0.08em]`, uppercase, `gold-ink`): the single Hero eyebrow, and the two Servicos group labels ("Contratos"/"Compliance") — these are functional group headers for parallel lists, not decorative section kickers, and are the only other place this treatment appears.

### Named Rules
**The One Eyebrow Rule.** The tracked-uppercase-label-plus-rule-line device appears exactly once as a page-level section eyebrow: the Hero's brand tagline. Applying it to every section turns a deliberate accent into unexamined grammar — confirmed as a defect and removed during this build's finish review.

## Layout

Single long-scroll page, `max-w-6xl` (1152px) container, responsive gutters `px-5` → `sm:px-8` → `lg:px-12`. Sections use vertical rhythm `py-16` (64px) → `md:py-24` (96px), mobile-first: base styles target the smallest screen, `sm:`/`md:`/`lg:` prefixes only add refinements, never override in the other direction.

Two-column sections (Hero, Sobre, Processo, ProvaSocial) stack vertically on mobile (photo above copy) and go side-by-side at `lg:`. Hero and ProvaSocial break the grid asymmetrically: the cutout-portrait column is weighted `lg:flex-[1.05]` and pulled toward the edge with a negative margin (`lg:-mr-6 xl:-mr-12` in Hero) rather than sitting in a evenly-split two-column grid.

Servicos breaks from the two-column photo pattern entirely: a `lg:grid-cols-2` pairing of two rule-divided index lists (see Components → Service Index).

## Elevation & Depth

Hybrid: flat surfaces at rest, with shadow reserved for the two photo devices and the sticky header's scrolled state — never on flat content blocks, buttons, or list rows.

### Shadow Vocabulary
- **Mounted-print shadow** (`box-shadow: 0 20px 45px -22px rgba(0,0,0,0.5)`, `FramedPhoto`): offset + soft blur under every documentary photo, reinforcing the "print sitting slightly off its mat" read.
- **Portrait drop-shadow** (`filter: drop-shadow(0 35px 50px rgba(0,0,0,0.38))`, `CutoutPortrait`): follows the silhouette's actual alpha shape (not a rectangle), since the source is a background-removed PNG.
- **Scrolled header shadow** (`box-shadow: 0 12px 30px -18px rgba(0,0,0,0.7)`): appears only once `window.scrollY > 8`, paired with a gold border brightening from `gold/15` to `gold/30`.

### Named Rules
**The Earned Shadow Rule.** Shadow appears only where something is physically "lifted" off the page (a mounted photo, a cutout portrait, a header floating over scrolled content) — never as generic card elevation.

## Shapes

Two radius steps only: `rounded-md` (6px) for controls (buttons, the header/footer logo mark), `rounded-lg` (8px) for photo plates and the `CutoutPortrait` mounting panel (`rounded-[1.75rem]` there specifically, since it's a large decorative field, not a control). Process-step numerals sit in `rounded-full` circles (the one legitimate pill-like shape in the system, justified because it holds a two-digit ordinal, not label text).

The signature offset-frame device (a 1px `border-gold/50` rectangle, same radius as the photo, offset `-bottom-3 -right-3`/`-bottom-4 -right-4`) is the system's one recurring non-rectangular-feeling silhouette, and is reserved for `FramedPhoto` only.

## Components

### Buttons
- **Shape:** `rounded-md` (6px), `min-h-11` (44px tap target), horizontal padding `px-6`.
- **Primary:** solid gold background, navy text (`bg-gold text-navy`), `hover:bg-gold/90`. Used for every WhatsApp/primary conversion CTA.
- **Outline / Outline-inverse:** transparent with a 1px border — navy border on light backgrounds, `cream/60` border on navy backgrounds (`outline-inverse`) — never the wrong-contrast pairing.
- **Ghost:** text-only, `hover:bg-navy/5`, unused in current sections but available.
- **Focus:** every variant shares `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold`.

### Framed Photo (signature component)
`src/components/ui/FramedPhoto.tsx`. A documentary photograph (Sobre, both Processo images) with a 1px gold offset-frame sibling behind it and a neutral drop shadow on the photo itself — the "mounted print in a portfolio" device. Always paired with `object-cover` full-bleed cropping inside a fixed aspect box.

### Cutout Portrait (signature component)
`src/components/ui/CutoutPortrait.tsx`. A background-removed portrait (Hero, ProvaSocial only — confirmed scope, not applied to all photos) rendered `object-contain` over a `rounded-[1.75rem]` navy plate, with a neutral `drop-shadow` following the silhouette. Source PNGs are generated via `@imgly/background-removal-node` and must be checked for stray semi-transparent artifacts (a connected-component cleanup pass was required once) before shipping — a raw background-removal output is not guaranteed clean.

### Service Index (signature component)
`src/components/sections/Servicos.tsx`. Replaces a same-size icon-card grid with a rule-divided list: `divide-y divide-navy/10` rows, each with a large faint Playfair numeral (`text-gold/40`, `group-hover:text-gold/75`) standing in for a table-of-contents entry number, an inline small icon + Playfair title, and body copy. No card border, background, or shadow — hierarchy comes entirely from the numeral, divider rule, and type scale.

### Credential / Marker List
Used in Sobre and ProvaSocial for OAB/credential badges. Replaces pill badges with a plain inline list separated by a `h-3.5 w-px bg-navy/25` hairline divider (hidden below `sm:`, where items simply wrap onto their own lines).

### Navigation
Sticky navy header with a `border-b border-gold/15` letterhead rule (brightens to `gold/30` plus a neutral shadow once scrolled). Desktop nav links get an animated gold underline (`::after`, `scale-x-0 → scale-x-100`, transform-based, never a width transition) on hover/focus. Mobile collapses to a slide-down panel with the same link styling plus a full-width primary button.

## Do's and Don'ts

### Do:
- **Do** keep shadows neutral black (`rgba(0,0,0,…)`) even on navy surfaces — a same-hue shadow reads as a glow.
- **Do** drive all hover/reveal motion with `transform`/`opacity` (`scale`, `scaleX`, `scaleY`, `translateY`, `stroke-dashoffset`) — never `width`, `height`, `padding`, or `margin`.
- **Do** wrap every scroll-triggered element in `Reveal` (or the raw `data-reveal`/`useInView` primitives for custom cases like the Processo spine and the CTA signature stroke) so `prefers-reduced-motion: reduce` disables it globally from one place in `index.css`.
- **Do** use the `FramedPhoto` device for full-frame documentary photos and `CutoutPortrait` only for the two confirmed background-removed portraits (Hero, ProvaSocial) — don't extend cutouts to every photo on the page.

### Don't:
- **Don't** add a tracked-uppercase eyebrow label above a section heading. That device is reserved for the Hero's brand tagline and the two functional Servicos group labels.
- **Don't** reintroduce icon-in-a-colored-circle cards for lists of 3+ similar items — use the rule-divided index pattern instead.
- **Don't** change the locked palette, font pairing, or logo lockup; this system documents them, it doesn't own them (see PRODUCT.md → Brand Commitments).
- **Don't** fabricate credentials, statistics, testimonials, or contact details anywhere in new content — PRODUCT.md's placeholder/`TODO` fields stay visibly marked until real data is supplied.
