# Round 2 visual reference manifest

## Manifest status

**Generated:** 2026-10-08 21:38:33 +07:00
**Repository policy:** this file may name external/source references and AO-local artifact paths; it must not embed screenshots, third-party images, fonts, logos, or binaries.

## Screenshot artifact ledger

| Filename/path | Requested viewport | URL/UI state | Capture method | Status | Measurement status |
| --- | --- | --- | --- | --- | --- |
| None | 1440 x 900 | Homepage / initial | AO Browser unavailable | Not captured | No measurements |
| None | 768 x 1024 | Homepage / initial | AO Browser unavailable | Not captured | No measurements |
| None | 390 x 844 | Homepage / initial | AO Browser unavailable | Not captured | No measurements |

No screenshot artifacts exist for this pass, so there is no AO-local screenshot location to reference. The required visual-browser command was unavailable (`ao` absent from PowerShell `PATH`), and the Lead-provided absolute executable path `C:\Users\BearYang\AppData\Local\Programs\agent-orchestrator\resources\daemon\ao.exe` also returned PowerShell `CommandNotFoundException` when `browser status --json` was attempted. No non-AO browser was used as a substitute.

When capture is possible, store files outside Git at:

`C:\Users\BearYang\.ao\data\artifacts\nbu-mockup-2\visual-research\YYYY-MM-DD\`

Suggested filename convention (do not treat as an existing file):

`homepage-<viewport>-<state>-YYYYMMDD-HHMMSS.png`

## Source-page manifest

| Reference | URL | Access status / purpose | Reuse status |
| --- | --- | --- | --- |
| Public homepage | <https://northbkk.ac.th/> | Text-confirmed navigation/content source; visual state not captured in this pass. | Source copy/visual assets not cleared. |
| Bachelor page | <https://northbkk.ac.th/bachelor.php> | Text-confirmed public study-pathway page. | Not cleared. |
| Graduate page | <https://northbkk.ac.th/graduate.php> | Text-confirmed public study-pathway page. | Not cleared. |
| Short courses | <https://northbkk.ac.th/shortcourse.php> | Text-confirmed public course page. | Not cleared. |
| IT faculty | <https://itdi.northbkk.ac.th/> | Text-confirmed public faculty page. | Not cleared. |
| Business faculty | <https://ba.northbkk.ac.th/> | Text-confirmed public faculty page. | Not cleared. |
| Registrar | <https://reg.northbkk.ac.th/registrar/home.asp> | Public service landing page; authenticated flows not inspected. | Not cleared. |
| E-learning | <https://elearning.northbkk.ac.th/> | Public service landing page; authenticated flows not inspected. | Not cleared. |
| Student page | <https://northbkk.ac.th/student.php> | HTTP 403 to public crawler in prior evidence. | Not applicable. |

## Asset and font provenance ledger

| Asset class | Rendered source URL | Licence/permission evidence | May be reused or redistributed? |
| --- | --- | --- | --- |
| University logo | Not observed; no rendered asset URL captured | None obtained | No — default deny. |
| Homepage/banner images | Not observed; no rendered asset URL captured | None obtained | No — default deny. |
| Faculty/news images | Not observed; no rendered asset URL captured | None obtained | No — default deny. |
| Webfonts | Not observed; no rendered asset URL captured | None obtained | No — default deny. |
| Screenshots | None created | N/A | No source screenshot was captured or committed. |

## Observed versus estimated values

There are no observed visual measurements and no estimates in this pass. The timestamp, URLs, AO-browser unavailability, public text-page access, and student-page crawler result are process/access evidence, not visual measurements.

## Repository safety verification target

Before committing, verify that the candidate diff contains only these Markdown documents and that `git ls-files` contains no `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.svg`, `.woff`, `.woff2`, `.ttf`, or `.otf` introduced by this branch.
