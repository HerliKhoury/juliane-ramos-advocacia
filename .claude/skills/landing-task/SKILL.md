---
name: landing-task
description: Implement, validate, commit, and branch/merge the next pending task for the Juliane Ramos Advocacia landing page. Use when the user asks to "continue the landing page", "do the next task", "start the landing page tasks", or similar — not for unrelated feature work in this repo.
---

# Landing Task

Executes exactly one task from `tasks/todo/` end to end: branch → implement → validate → commit → archive → merge into `development`. Repeat this skill (or ask it to keep going) to work through the whole landing page.

## Branching model

- `development` is the shared integration branch for this whole landing-page effort (already exists, both locally and on `origin`). Every finished task lands here, one merge at a time.
- Merging `development` into `main`/`first-steps` is **explicitly the user's own action** — never do this as part of this skill, and never suggest it's been done. This skill only ever merges a task branch *into* `development`.
- Each task gets its own short-lived branch off `development`, named `task/NN-slug` (matching the task file's name, e.g. `task/03-secao-hero`).

## Steps

1. **Start clean.** Confirm `development` exists (it does — don't create it) and make sure you're not mid-way through an unmerged task branch before starting a new one (`git status`, `git branch --show-current`).
2. **Pick the task.** List `tasks/todo/*.md` and pick the lowest-numbered file. If none remain, say the landing page task list is complete and stop — do not invent new tasks.
3. **Read it fully**, including its `depende_de` frontmatter. Check the dependency's task file is in `tasks/done/` on `development`. If a dependency isn't done, stop and tell the user — don't skip ahead out of order.
4. **Create the task branch:** from `development` (`git checkout development`, then `git pull --ff-only` since it tracks `origin/development`, then `git checkout -b task/NN-slug`).
5. **Implement the scope described** (`Escopo`), respecting `Fora de escopo` as a hard boundary — don't pull in work from later tasks even if it seems convenient. Reuse existing tokens/components/config from earlier completed tasks (`src/index.css` theme tokens, `src/components/layout/*`, `src/components/ui/Button`, `src/config/contato.ts`) rather than re-deriving them.
6. **Validate, on the task branch:**
   - `npm run lint` and `npm run build` must pass.
   - For any task touching UI (most of them), use the `run` skill to start the dev server and actually look at the result in a browser — check mobile width first (this project is mobile-first), then desktop. Don't claim a visual task is done without having looked at it.
   - Check the task's own `Critérios de aceite` one by one.
7. **Archive the task file:** `git mv tasks/todo/NN-slug.md tasks/done/NN-slug.md` — this move belongs in the same commit as the implementation.
8. **Commit, on the task branch.** Use the `commit` skill, staging only the files this task touched (including the task-file move). Follow this repo's Conventional Commits style; reference the task slug, e.g. `feat: add hero section (03-secao-hero)`.
9. **Merge back into `development`:** `git checkout development`, then `git merge --no-ff task/NN-slug` (keeps a clear merge point per task in history), then delete the task branch (`git branch -d task/NN-slug`). Stay on `development` afterward — don't switch back to `main`/`first-steps` or touch it.
10. **Report status:** list what's now in `tasks/done/` vs `tasks/todo/` (on `development`) so the user always sees a clear done/pending split, and remind them `development` still needs to be merged into `main`/`first-steps` by them when they're ready.

## Rules

- One task per invocation by default. If the user explicitly asks to "do all remaining tasks" or "keep going", repeat steps 2–10 in a loop, but still one task branch and one commit per task — never batch multiple tasks into one branch or commit.
- Never merge a task branch into `development` (or mark the task done) if lint, build, or the task's acceptance criteria fail. Leave the task branch unmerged, keep the file in `tasks/todo/`, and report the blocker instead.
- Never merge `development` into `main`/`first-steps`, and never push anything, unless the user explicitly asks for that in the moment — both are the user's call, not this skill's.
- Placeholder content (contact info in `src/config/contato.ts`, TODO-marked copy) is expected and correct at this stage — don't try to invent real contact numbers or fabricate testimonials to "finish" a task; that's explicitly out of scope per the project plan.
- If a task's instructions conflict with something discovered in the actual code (e.g. a dependency wasn't actually completed the way its file suggests), stop and ask rather than guessing.
