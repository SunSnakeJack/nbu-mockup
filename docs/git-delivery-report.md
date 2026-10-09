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

---

# Round 2 local delivery — visual-fidelity integration

**Prepared:** 2026-10-09 (Asia/Bangkok)
**Scope:** Local-only Round 2 integration. No fetch, push, remote update, deployment, publication, worktree deletion, or history rewrite is authorized by this section.

## Approved lineage and delivery branch

- Prior integrated `main` commit: `5ef3ff8ee3db8fd7c85543d6b06f6bec5de1158c` (`docs: add local delivery report`).
- Lead-approved tested QA commit: `00f10a6848aeda28a47b94191731568e0e4f7bf7` (`docs: record cycle one visual regression`), verified as a descendant of the prior `main` commit.
- Preserved Round 2 commits, in order after the prior delivery: `0aeae70`, `5e4008b`, `913a7af`, `a1e13c2`, `23972ff`, `f8714f4`, `0a11009`, `650c1c6`, `6a8a5aa`, and `00f10a6`.
- Local delivery branch: `feature/nbu-mockup-round2`, created directly at the approved QA commit without changing `feature/nbu-mockup` or any worker branch.
- This report commit is the intended final local Round 2 delivery commit; the clean original `main` checkout may be fast-forwarded to it only after this commit is created and all stated checks pass.

## Lead acceptance and limitations

Lead acceptance is **PARTIAL overall visual fidelity**. Functional and structural checks pass, and Cycle 1 resolves **VQA-01**: the disclosure no longer displaces the utility header, navigation, hero, or downstream layout.

Remaining visible differences are approved asset-safe substitutions caused solely by unavailable or unlicensed original logos, photography, QR code, affiliate marks, and font metrics. The source carousel’s dynamic artwork also prevents slide-art equivalence. The documented AO Browser click-postcondition limitation remains a tool limitation, not a confirmed frontend defect. No further refinement cycle is justified without licensed assets.

## Deliverables and repository-safety audit

- Application source, `README.md`, `package.json`, and `package-lock.json` are tracked.
- Research and functional QA material is present in `docs/research.md` and `docs/qa-report.md`; the earlier refactor report is `docs/refactor-report.md`.
- Round 2 evidence material is present in `docs/design-specification.md`, `docs/reference-manifest.md`, `docs/visual-implementation-notes.md`, `docs/visual-research.md`, and `docs/visual-qa-report.md`, including Cycle 1 regression evidence.
- The delivery checklist originally referred to `docs/design-spec.md`; the actual, approved tracked filename is `docs/design-specification.md`. This was a checklist-path typo, not a missing deliverable.
- No screenshots, reference binaries, unlicensed image/logo/font assets, environment files, secrets, `node_modules`, `dist`, or other generated output are tracked. Visual comparison captures remain external-only artifacts, as documented in the visual QA report.
- Existing ignore rules exclude `node_modules/`, `.env`/`.env.*`, `dist/`, `build/`, `out/`, `coverage/`, framework build directories, logs, and TypeScript build metadata. A common-secret-pattern scan returned no tracked-content matches.

## Validation evidence

The approved Cycle 1 visual QA regression records successful `npm ci` (177 packages added; 178 audited; 0 vulnerabilities), `npm run lint`, `npm run typecheck`, and a retry-successful `npm run build` (1,908 transformed modules). It also records route accessibility-tree checks, no captured browser errors, correct responsive structural/layout regression results, and VQA-01 resolution.

An initial build attempt in that regression encountered a transient Windows `EPERM` while cleaning `dist/assets`; the retry passed and no source or worktree recovery action was required. Fresh local verification is required from the original checkout after its safe fast-forward; only a clearly scoped transient file-lock retry is permitted.

## Fresh original-checkout validation and integration result

The original checkout at `C:\Users\BearYang\OneDrive - northbkk.ac.th\เดสก์ท็อป\nbu-mockup` was clean at `5ef3ff8` and safely fast-forwarded, without a merge commit, to the Round 2 delivery-report baseline `0f9da8033bda826a63110540634351098d13f2a7`. It contained `src`, `docs`, `package.json`, `README.md`, and every required Round 2 report. This Vite project does not use a `public/` directory.

The following fresh commands then completed from that original checkout:

| Command | Actual result |
| --- | --- |
| `npm ci` | Added 177 packages, audited 178 packages, and reported 0 vulnerabilities. |
| `npm run lint` | ESLint exited 0. |
| `npm run typecheck` | `tsc -b --pretty false` exited 0. |
| `npm run build` | `tsc -b && vite build` exited 0; Vite transformed 1,908 modules and wrote ignored `dist/` output. |

No transient lock retry was needed for this fresh build. This final report update only records the completed validation and local integration result; local `main` must fast-forward to this report commit before any later delivery decision. No remote action is authorized.

## Local integration gate

Before local `main` is advanced, the original checkout must be clean at `5ef3ff8`, remain an ancestor of this report commit, and fast-forward without conflict. No reset, forced update, merge commit, or remote action is permitted.
