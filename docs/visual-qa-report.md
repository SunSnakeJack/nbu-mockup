# Round 2 visual QA report

**Date:** 2026-10-08 (Asia/Bangkok)
**Branch under test:** `ao/nbu-mockup-4-visual-qa`
**Frontend base:** `0a11009474f295a67307391939995a925c38dec8` (`feat: reconstruct NBU visual experience`)
**Verdict:** **Conditional pass for the approved, asset-safe reconstruction; not a pixel-parity match to the public source.**

## Scope and method

This review compares only screenshot-observable layout and rendering states. Reference assets are not licensed for reuse, so photo/logo/QR/font differences are kept separate from implementation mismatches.

- Read: `docs/visual-research.md`, `docs/design-specification.md`, `docs/reference-manifest.md`, and `docs/visual-implementation-notes.md`.
- Independently inspected the source captures in `C:\Users\BearYang\.ao\data\artifacts\nbu-mockup-2\visual-research\2026-10-08\` and the prior implementation captures in `C:\Users\BearYang\.ao\data\artifacts\nbu-mockup-3\round2\`.
- Ran Chrome headless against the local Vite server at `http://127.0.0.1:4176/` with a fresh temporary profile, `--hide-scrollbars`, and each stated window size. PNG dimensions were the requested CSS viewport sizes.
- Created side-by-side and 50% alpha overlay evidence using the installed .NET `System.Drawing` APIs; no dependency was installed. Overlays are qualitative alignment aids, not a similarity metric. No similarity percentage is claimed.

All new binary evidence is external-only and is not tracked by Git:

`C:\Users\BearYang\.ao\data\artifacts\nbu-mockup-4\round2-visual-qa\`

## Evidence ledger

| State | Fresh implementation capture | Reference / comparison evidence |
| --- | --- | --- |
| Home, 1440 x 900 | `homepage-1440x900-fresh.png` | `homepage-1440x900-initial.png`; `comparison-1440x900-side-by-side.png`; `comparison-1440x900-overlay.png` |
| Home, 768 x 1024 | `homepage-768x1024-fresh.png` | `homepage-768x1024-initial.png`; `comparison-768x1024-side-by-side.png`; `comparison-768x1024-overlay.png` |
| Home, 390 x 844 | `homepage-390x844-fresh.png` | `homepage-390x844-initial.png`; `comparison-390x844-side-by-side.png`; `comparison-390x844-overlay.png` |
| Home, 1440 x 6000 | `homepage-1440x6000-fresh.png` | `homepage-1440x6000-tall.png`; `comparison-1440x6000-side-by-side.png`; `comparison-1440x6000-overlay.png` |
| Programs, 1440 x 900 | `programs-1440x900-fresh.png` | Local route evidence only; maps to the reconstructed bachelor/program presentation. |
| Bachelor alias, 1440 x 900 | `bachelor-1440x900-fresh.png` | `bachelor-1440x900-initial.png`; local `/bachelor` intentionally renders the same Programs page. |

The source tall capture selected a different dynamic carousel slide from its desktop initial capture. The implementation uses deterministic prototype slides; slide artwork/content is therefore not used as a stable visual-parity criterion.

## Static checks

| Command | Actual result |
| --- | --- |
| `npm ci` | Passed: 177 packages added, 178 audited, 0 vulnerabilities reported. |
| `npm run lint` | Passed, exit 0. |
| `npm run typecheck` | Passed, exit 0. |
| `npm run build` | Passed, exit 0; Vite transformed 1,908 modules. |

## Confirmed visual findings

| ID / severity | Finding and evidence | Reproduction / recommended refinement |
| --- | --- | --- |
| VQA-01 — Medium | The implementation adds a 26 px dark-blue unofficial-prototype disclosure above the source-equivalent utility header. In all three initial viewport comparisons, this shifts the utility header, primary navigation, hero start, and below-fold sections down by about 26 px. Compare `comparison-1440x900-overlay.png`, `comparison-768x1024-overlay.png`, and `comparison-390x844-overlay.png`. This is a confirmed geometric mismatch, though the disclosure is an intentional compliance requirement rather than an unlicensed-asset substitution. | Load `/` at each comparison viewport. Keep the required disclosure, but have Worker 4 evaluate a non-flow placement or a compact treatment that preserves the observed header/hero vertical rhythm without weakening the disclaimer. |
| VQA-02 — Medium | The desktop/tablet/mobile structural layout broadly follows the evidence: grey utility bar, ~56 px blue navigation, 1298 px desktop hero frame, 472 px desktop hero, five pathway cards, four-column highlights/news, affiliate band, and blue footer. The overlays show the vertical geometry aligns after accounting for VQA-01. | Preserve these measured structures. Re-check captures after any disclosure adjustment. |
| VQA-03 — Low | The reconstructed wordmark is text-only and differs in glyph treatment/size from the source logo. The utility/nav background colours and ordering are visually close estimates, but the font cannot be certified because source font files and computed values were unavailable. | Do not copy the source logo or webfont. Keep the text substitute; only tune system-font size/weight/spacing if a project-approved visual direction requires it. |
| VQA-04 — Informational, unavoidable | Hero athletes, sports artwork, QR code, source photography, highlight/news imagery, affiliate marks, and bachelor-banner people are replaced with CSS geometry/Lucide placeholders. This prevents exact visual parity but complies with the manifest's default-deny asset rule. Evidence: all fresh captures and `docs/visual-implementation-notes.md`. | Do not reproduce or import source assets. If higher fidelity is needed, commission/license original equivalent artwork; do not treat this as a frontend defect. |
| VQA-05 — Low | The local bachelor alias has the reconstructed 384 px blue program banner and four-column faculty tile structure; it does not reproduce the source's Thai promotional copy, logo, or photographed people. Its banner is also displaced by the disclosure height. Compare `bachelor-1440x900-fresh.png` with `bachelor-1440x900-initial.png`. | Retain safe copy and placeholders. After resolving VQA-01, validate banner start position and tile-grid spacing again. |
| VQA-06 — Low | Tall desktop evidence confirms all observed section families are implemented in the expected order: pathways, Highlights, news, affiliates, then footer. Card artwork and content density differ because safe substitutes replace source materials. The page ends well above the 6000 px viewport, leaving expected blank lower pixels. | Prioritize geometry and spacing changes only; preserve the safe content/asset boundary. |

## Functional and responsive checks

| Check | Actual result |
| --- | --- |
| Local routes | Browser opened and produced rendered accessibility content for `/programs`, `/bachelor`, `/faculties`, `/news`, `/admissions`, `/student-services`, `/about`, `/research`, and `/contact`. No browser errors captured. |
| Responsive states | Fresh 1440 x 900, 768 x 1024, and 390 x 844 captures confirm desktop navigation at 1440; hamburger navigation at 768/390; tablet four-plus-one pathway layout; and the intentionally cropped/overflowing 390 px utility/hero state described in the implementation notes. |
| Mobile menu | AO Browser dispatched a click to `Toggle navigation`, but the subsequent snapshot remained `aria-expanded=false` and did not expose the mobile menu. |
| Carousel | AO Browser dispatched a click to `Next`, but the following accessibility snapshot did not identify or expose a changed slide state. |
| Dropdowns and click-driven navigation | Source code provides mouse/keyboard/click handlers and routes; the AO Browser click dispatcher did not yield observable state or URL change in this session. |

### Interaction limitation

This repeats the prior QA environment behavior: AO Browser reports the input as dispatched, but no DOM/accessibility or URL postcondition is observable after menu, carousel, or link clicks. The exact same limitation occurs on a fresh local server run; there are no captured browser errors. It does **not** establish an application defect. Manual interaction testing in a normal painted browser remains required for menu expansion, dropdowns, carousel transitions, and click-driven navigation.

## Final visual recommendation and Worker 4 priorities

The implementation is suitable as a safe structural reconstruction, with no confirmed functional regression and no prohibited binaries tracked. It cannot be represented as source pixel parity because source assets and font metrics are unavailable/unlicensed.

1. **Highest priority:** preserve the required unofficial disclosure while reducing or compensating for its confirmed ~26 px vertical displacement of the header/hero stack (VQA-01).
2. Re-capture 1440, 768, and 390 after that change; preserve the matched nav, hero, pathway, grid, affiliate, and footer geometry.
3. Do not “fix” VQA-03 through VQA-06 by copying source logos, photos, QR codes, webfonts, or partner marks. Use licensed/original equivalents only.
4. Manually validate click interactions and dropdown/carousel state in a normal browser, because AO Browser postconditions remain unobservable.

## Cycle 1 final regression — 2026-10-09 (Asia/Bangkok)

**Refinement under test:** Worker 4 commit `47620bc6c82fb39c2f844f2a34d22ee271249364`, cherry-picked locally as `6a8a5aa` (`fix: preserve visual header alignment`).

### Before / after visual finding

**VQA-01 is resolved.** The prior normal-flow 26 px disclosure bar shifted the full header, navigation, hero, and below-fold sequence down at 1440, 768, and 390. The new external-only captures show the utility header at the top of the document, the blue navigation immediately below, and the hero at the source-equivalent start position.

The disclosure remains visible as a compact overlay: centered at the top of the utility bar at 1440/768 and fixed below the visible hero content at 390. It did not cover utility controls, the mobile hamburger, or the hero artwork/copy in the fresh captures.

### Cycle 1 evidence

All files below are external-only, untracked artifacts in:

`C:\Users\BearYang\.ao\data\artifacts\nbu-mockup-4\round2-visual-qa\cycle1-regression\`

| Viewport / state | Fresh capture | Comparison artifacts |
| --- | --- | --- |
| Home, 1440 x 900 | `homepage-1440x900-cycle1.png` | `comparison-1440x900-side-by-side.png`, `comparison-1440x900-overlay.png` |
| Home, 768 x 1024 | `homepage-768x1024-cycle1.png` | `comparison-768x1024-side-by-side.png`, `comparison-768x1024-overlay.png` |
| Home, 390 x 844 | `homepage-390x844-cycle1.png` | `comparison-390x844-side-by-side.png`, `comparison-390x844-overlay.png` |
| Home, 1440 x 6000 | `homepage-1440x6000-cycle1.png` | `comparison-1440x6000-side-by-side.png`, `comparison-1440x6000-overlay.png` |

The side-by-side and 50% alpha overlay images were generated with installed .NET `System.Drawing`; they are qualitative alignment evidence, not a pixel-difference score. The source tall capture and the deterministic local carousel show different slides, so dynamic hero artwork is excluded from geometry conclusions.

### Regression results

| Check | Actual result | Status |
| --- | --- | --- |
| `npm ci` | Completed: 177 packages added, 178 audited, 0 vulnerabilities reported. | Pass |
| `npm run lint` | Passed, exit 0. | Pass |
| `npm run typecheck` | Passed, exit 0. | Pass |
| First `npm run build` | Reached Vite output cleanup, then failed once with Windows `EPERM` removing `dist/assets`. Read-only process inspection found no active Node/Chrome process. | Environment retry required |
| Second `npm run build` | Passed, exit 0; Vite transformed 1,908 modules. | Pass |
| Visual layout | Header, Thai navigation order, hero frame dimensions/start, pathway layout, highlights/news order, affiliate band, and footer sequence remain intact at all required viewports and tall desktop. | Pass |
| Disclosure | Visible and non-obstructive in each fresh viewport; the previous layout displacement is absent. | Pass |
| Implemented routes | `/programs`, `/bachelor`, `/faculties`, `/news`, `/admissions`, `/student-services`, `/about`, `/research`, and `/contact` each rendered an AO Browser accessibility tree. | Pass |
| Browser errors | None captured during the route run. | Pass |
| Mobile menu / carousel clicks | AO Browser reported both `Toggle navigation` and `Next` clicks as dispatched; follow-up snapshots retained `aria-expanded=false` and did not expose a changed slide state. | Tooling limit |

### Remaining differences and limits

- Text-only wordmark/system font metrics, original CSS/Lucide hero/cards, and text affiliate substitutes remain visibly different from source logos, photos, QR code, fonts, and partner marks. These are correct license-driven substitutions, not defects.
- The dynamic source carousel selected different artwork between its own reference captures; it cannot support slide-art equivalence.
- AO Browser still does not expose a post-click state or URL change in this session. This repeats the documented QA tooling limit and does not establish a frontend interaction defect. Manual painted-browser verification remains the only open interaction check.

### Cycle 1 recommendation

**PASS for the approved asset-safe visual fidelity scope.** The only confirmed correctable visual defect, VQA-01, is resolved with no observed regression to header order, hero position, section sequence, responsive layout, or disclosure visibility. No further visual refinement cycle is justified unless the project changes the approved disclaimer policy or obtains licensed visual assets. Preserve the remaining manual interaction check as an environment limitation rather than opening another visual cycle.
