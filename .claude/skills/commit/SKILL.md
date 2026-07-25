---
name: commit
description: Create a git commit for the current changes in this repo, following its Conventional Commits convention. Use when the user asks to "commit", "commit this", "commit these changes", or similar — not for pushing, amending, or rewriting history.
---

# Commit

Create a git commit for the pending changes in this repository, following [Conventional Commits](https://www.conventionalcommits.org/) — the convention established in this repo's initial commit (`feat: scaffold React app with Vite, TypeScript, and Tailwind CSS`).

## Steps

1. Run in parallel:
   - `git status` — see untracked and modified files (never `-uall`)
   - `git diff` (and `git diff --staged` if anything is already staged) — see what actually changed
   - `git log --oneline -10` — confirm recent message style
2. Decide the commit type from the diff:
   - `feat` — new feature or capability
   - `fix` — bug fix
   - `refactor` — code change that neither fixes a bug nor adds a feature
   - `docs` — documentation only
   - `style` — formatting, no code meaning change
   - `test` — adding or fixing tests
   - `chore` — tooling, deps, config, build scripts
3. Stage only the relevant files by name (never `git add -A` or `git add .`). Check contents of anything that looks like it could hold secrets (`.env`, credentials, keys) before staging it.
4. Write a concise commit message: `type: short imperative summary` (≤ 70 chars), optionally followed by a blank line and 1-2 sentences of "why" if it's not obvious from the diff. Do not restate the full diff.
5. Commit via heredoc so formatting is preserved:

   ```
   git commit -m "$(cat <<'EOF'
   feat: short imperative summary
   EOF
   )"
   ```
6. Run `git status` after to confirm the commit succeeded and nothing unexpected remains staged/unstaged.

## Rules

- Only commit when the user has asked for it in this turn — do not commit proactively.
- Never add a `Co-Authored-By` trailer or any other AI-attribution line to the commit message. This should never happen in this repo.
- Never use `--no-verify`, `--no-gpg-sign`, or `-c commit.gpgsign=false` unless the user explicitly asks.
- Always create a new commit; only amend if the user explicitly requests `--amend`.
- If a pre-commit hook fails, fix the underlying issue, re-stage, and make a new commit — don't bypass the hook.
- If there is nothing to commit, say so instead of creating an empty commit.
- Never push as part of this skill — pushing is a separate, explicit request.
