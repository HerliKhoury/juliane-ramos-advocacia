# Wiki schema — Juliane Ramos Advocacia project knowledge base

This directory is a personal knowledge base about **this project** (the landing page for Juliane Ramos Advocacia), separate from the app code in `src/` and the task briefs in `tasks/`. It follows the LLM Wiki pattern: raw sources are immutable, the wiki is LLM-maintained, this file is the schema.

Scope: client requirements and preferences, design decisions and their rationale, copy/content research, competitor and reference-site notes, legal-industry (contratos/compliance) domain notes, and anything else that helps build the page but doesn't belong in code comments or task files.

Do not duplicate what's already authoritative elsewhere — don't re-summarize `tasks/todo|done/*.md` (those are the task specs themselves) or code structure (readable directly). Wiki pages should hold things that would otherwise be lost: *why* a decision was made, client feedback, research findings, things discussed in conversation that aren't written down anywhere else.

## Layout

```
wiki/
  raw/                  Immutable source material (briefs, clippings, screenshots, transcripts)
  pages/
    entities/            People and organizations (client, competitors, ...)
    concepts/            Recurring themes (brand voice, compliance domain notes, ...)
    sources/             One page per ingested source, summarizing it
  index.md               Catalog of every page, updated on every ingest
  log.md                 Append-only chronological record of ingests/queries/lints
```

Pages are markdown with minimal YAML frontmatter:

```markdown
---
title: Page Title
type: entity | concept | source
updated: YYYY-MM-DD
---
```

Cross-reference with `[[wikilink]]`-style relative links or plain markdown links to other pages in `pages/`.

## Workflows

**Ingest.** When given a new source (a brief, a client email, a competitor site, an article on contract law or compliance, a screenshot):
1. Save it as-is into `wiki/raw/` (never edit raw sources after saving).
2. Read it, discuss key takeaways with the user if warranted.
3. Write or update a `pages/sources/<slug>.md` summary page.
4. Update any affected `pages/entities/` or `pages/concepts/` pages — note contradictions with prior claims rather than silently overwriting.
5. Update `index.md`.
6. Append an entry to `log.md`.

**Query.** Read `index.md` first to find relevant pages, then read the pages themselves before answering. If the answer is worth keeping (a comparison, an analysis, a synthesis), offer to file it back as a new page under `pages/concepts/` or `pages/sources/` as appropriate, and log it.

**Lint.** On request, check for: contradictions between pages, claims a newer source has superseded, orphan pages with no inbound links, concepts mentioned but lacking their own page, missing cross-references.

## Conventions

- Language: match the source. Client-facing/Portuguese material (briefs, copy, legal domain notes) gets summarized in PT-BR; keep it consistent with a given page rather than mixing languages within one page.
- Filenames: kebab-case, no spaces, `.md`.
- `log.md` entries start with a consistent prefix so they're greppable: `## [YYYY-MM-DD] ingest|query|lint | Title`.
- This wiki is unrelated to the app's runtime — nothing here should be imported by `src/`, and none of this should affect `npm run build`/`lint`.
