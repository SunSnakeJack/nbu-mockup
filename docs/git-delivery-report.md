# Git delivery report — NBU unofficial mockup

**Prepared:** 2026-10-08 (Asia/Bangkok)  
**Scope:** Local delivery preparation only. No push, pull request, merge, deployment, or publication was performed.

## Branch and approved lineage

- Local delivery branch: `feature/nbu-mockup`.
- Approved final-regression tip integrated without rewriting history: `e6cb20d6e39b8f0c57abfc45e801dde23fec07ce` (`docs: record final regression`).
- Complete authoritative Worker 3 lineage preserved, in order:
  `ee21d6b`, `ed7f63e`, `aca8a33`, `6aa3d35`, `4a0faf7`, `6a4a7a7`, and `e6cb20d`.
- Local ignore-policy delivery commit: `9ae9075d301b9188d3c1257754244e7036e406ec` (`chore: harden delivery ignore policy`).
- Working tree status immediately before this report was created: clean on `feature/nbu-mockup`.

## Remote findings

- Configured `origin` URL was verified as exactly `https://github.com/SunSnakeJack/nbu-mockup.git` for fetch and push.
- A read-only `git ls-remote --symref origin HEAD refs/heads/*` completed with no advertised refs. Consequently, no remote default branch or remote branch existence can be identified from this session.
- No remote mutation was performed.

## Ignore and secret audit

`.gitignore` now excludes dependencies, environment files, local configuration, build/generated output, logs, and operating-system files. In particular it excludes `node_modules/`, `.env`, `.env.*`, `dist/`, `build/`, `out/`, `coverage/`, `.next/`, `.nuxt/`, `.svelte-kit/`, `.turbo/`, `.vite/`, and `*.tsbuildinfo`.

Safe sample templates remain intentionally eligible for tracking through `!.env.example` and `!.env.*.example` exceptions. Ignore probes confirmed the required sensitive and generated paths are ignored, while the two sample-template paths are not ignored. A tracked-path audit found no tracked environment files, dependency directories, build outputs, coverage directories, generated framework output, or private-key file extensions. A tracked-content scan for common AWS, Google, GitHub, private-key, password, secret, and API-key signatures returned no matches.

## Required deliverables and setup

- `README.md` is present and documents project scope, unofficial-status disclaimer, routes, setup (`npm install`, `npm run dev`), quality checks, preview, and research provenance.
- `docs/research.md`, `docs/qa-report.md`, and `docs/refactor-report.md` are present.
- The QA report records final regression against `6a4a7a7`; it retains **QA-LIM-01** as an AO Browser interaction-observation limitation, not a confirmed application defect.

## Local validation evidence

After `npm ci`, npm installed 177 packages, audited 178 packages, and reported 0 vulnerabilities. The following commands completed successfully on the prepared tree:

| Command | Actual result |
| --- | --- |
| `npm run lint` | ESLint exited 0. |
| `npm run typecheck` | `tsc -b --pretty false` exited 0. |
| `npm run build` | `tsc -b && vite build` exited 0; Vite transformed 1,908 modules and wrote ignored `dist/` output. |

The first non-elevated `npm ci` attempt failed with `EPERM` access to the shared npm cache; an approved retry completed successfully. This was an environment permission condition, not a project failure.

## Delivery state

This report is committed locally after the documented validation and is intended to be the final local delivery-preparation record. Inspect the branch tip with `git rev-parse feature/nbu-mockup`; no push or other publication is authorized by this report.
