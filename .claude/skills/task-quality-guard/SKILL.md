---
name: task-quality-guard
description: Audit task files in tasks/todo/ for vague, hand-wavy, or under-specified instructions that would let an implementing agent produce mediocre output, and rewrite them to be concrete and rigorous. Use when the user asks to "audit the tasks", "check task quality", "review the backlog", "raise the bar on the tasks", or is disappointed with a task's result — not for implementing tasks (use landing-task) and not for reviewing already-written code (use /code-review).
---

# Task Quality Guard

This project's tasks (`tasks/todo/*.md`) are instructions one agent writes for another agent to execute unsupervised (via the `landing-task` skill). A task that's vague, permissive, or under-specified doesn't just risk a bug — it silently licenses a mediocre result, because the implementing agent will fill every gap with the path of least resistance instead of the best one.

Concrete precedent: task `00-design-tokens-e-fontes` originally asked for a favicon recreated from the brand logo without saying *how* faithfully — the implementing agent approximated the curves by hand and produced a poor result. The fix wasn't reviewing the SVG after the fact; it was rewriting the task to name the exact source file and mandate tracing (`potrace`) over hand-approximation. That's the pattern this skill applies everywhere, proactively.

## When to run

- On demand: "audit the tasks", "check task quality", "review the backlog".
- Before a task is implemented, especially anything touching brand assets, copy, layout judgment calls, or "make it look good" language — proactively suggest this before handing a task to `landing-task` if you notice these smells.
- After a task ships a disappointing result: audit the *task file* (or, if already moved, the file in `tasks/done/`) to find what allowed the gap, then sweep the rest of `tasks/todo/` for the same smell class — one bad task is a bug, an unaudited pattern is a recurring one.

## Smells to hunt for

- **Unoperationalized quality words** — "bonito", "profissional", "moderno", "elegante" etc. used without a concrete, checkable anchor (specific token, exact reference file, measurable constraint).
- **Escape hatches that lower the bar** — "não precisa ser perfeito", "aproximado está ok", "pode ser simples por enquanto", "fica para depois ajustar". These are permission slips for mediocrity, not scope control.
- **Acceptance criteria that can't be objectively checked** — no visual-check step for visual work, no measurable numbers, criteria that just restate the scope instead of testing the result.
- **Ambiguous asset sourcing** — "recrie o logo/ícone/monograma" without naming the exact source file and a faithful method (vectorize/trace from the real source, never hand-approximate).
- **Unmarked fabrication risk** — placeholder content that isn't explicitly flagged as placeholder/TODO, inviting the implementing agent to silently invent "final-looking" data.
- **Missing reuse pointers** — new visual/structural work that doesn't point at the tokens/components earlier tasks already established (`src/index.css`, `src/components/layout/*`, `src/components/ui/Button`), inviting drift and inconsistency.
- **No mobile-first checkpoint** — visual tasks without an explicit "check at 360–390px" instruction, in a project that's mobile-first by convention.
- **Loose `Fora de escopo`** — missing or vague boundaries that let scope creep or under-building happen silently.
- **Unpinned technique** — "vectorize", "optimize", "compress" etc. without naming the actual tool/approach, leaving room for a shortcut.

## Process

1. Read every file in `tasks/todo/` (or the specific task named by the user).
2. Score each against the smells above. Note the *why*, not just the *what* — a task fails this audit because a specific gap would let a bad result pass, not because it's merely short.
3. For each task with a real gap, rewrite it in place with `Edit`:
   - Keep the existing structure exactly (frontmatter `task`/`depende_de`, headings `Objetivo`/`Contexto`/`Escopo`/`Fora de escopo`/`Critérios de aceite`/`Arquivos principais`) — `landing-task` depends on this shape.
   - Replace vague language with concrete, checkable instructions (name the exact file, the exact technique, the exact number).
   - Add or tighten `Critérios de aceite` so each one is objectively verifiable (something `landing-task` can actually check, not just assert).
   - Strip escape-hatch language — never add it, even if it feels like reasonable scope control (that's a decision for the user to make explicitly, not a default).
4. Never expand `Escopo` beyond what the task already covers — this skill raises the floor on rigor, it doesn't add ambition or new work. If the task's *ambition* itself looks wrong (not just underspecified), stop and flag it to the user instead of silently redesigning it.
5. If closing a gap needs information only the user has (a real brand/content decision, a priority call), stop and ask — don't guess a "best effort" fix, that's the same failure mode this skill exists to prevent.
6. Leave `tasks/done/` alone. If a shipped task's laxity caused a real result you're unhappy with, tell the user and propose either a small follow-up task or explicitly reopening the done task — don't rewrite history silently.
7. Report back a compact list: which tasks changed, and the one-line reason each was flagged. Don't restate the full diff.

## Rules

- This skill edits task specification files only (`tasks/todo/*.md`). It never touches implementation code — that's `landing-task`'s job.
- Never invent new tasks, delete tasks, or reorder `depende_de` chains.
- Don't touch tasks that pass the audit — only rewrite what's actually deficient, don't rephrase for style.
