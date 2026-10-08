# Round 2 visual reference manifest

## Manifest status

**Generated:** 2026-10-08 21:38:33 +07:00
**Repository policy:** this file may name external/source references and AO-local artifact paths; it must not embed screenshots, third-party images, fonts, logos, or binaries.

## Screenshot artifact ledger

| Filename/path | Actual viewport | URL / UI state | Timestamp | Capture method | Rights/provenance | Measurement status |
| --- | --- | --- | --- | --- | --- |
| `homepage-1440x900-initial.png` | 1440 x 900 | <https://northbkk.ac.th/> / initial | 2026-10-08 21:44 +07:00 | Google Chrome headless, isolated temp profile, 7 s virtual time | Third-party/public-site screenshot; no licence evidence; external-only/no redistribution | Actual PNG dimensions; visual measurements are estimates |
| `homepage-768x1024-initial.png` | 768 x 1024 | <https://northbkk.ac.th/> / initial | 2026-10-08 21:44 +07:00 | Google Chrome headless, isolated temp profile, 7 s virtual time | Third-party/public-site screenshot; no licence evidence; external-only/no redistribution | Actual PNG dimensions; visual measurements are estimates |
| `homepage-390x844-initial.png` | 390 x 844 | <https://northbkk.ac.th/> / initial | 2026-10-08 21:44 +07:00 | Google Chrome headless, isolated temp profile, 7 s virtual time | Third-party/public-site screenshot; no licence evidence; external-only/no redistribution | Actual PNG dimensions; visual measurements are estimates |
| `bachelor-1440x900-initial.png` | 1440 x 900 | <https://northbkk.ac.th/bachelor.php> / initial | 2026-10-08 21:45 +07:00 | Google Chrome headless, isolated temp profile, 7 s virtual time | Third-party/public-site screenshot; no licence evidence; external-only/no redistribution | Actual PNG dimensions; visual measurements are estimates |

The first unprivileged AO CLI call was unavailable, but the escalated absolute AO CLI succeeded: it connected, opened the homepage, waited for load, captured accessibility snapshots, accepted Toggle-navigation and Next-carousel clicks, and accepted scroll commands. AO painted-panel screenshot calls timed out; Chrome headless was used only under the Lead-authorized fallback.

When capture is possible, store files outside Git at:

`C:\Users\BearYang\.ao\data\artifacts\nbu-mockup-2\visual-research\2026-10-08\`

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
| University logo | Rendered visually; exact asset URL not captured | None obtained | No — default deny. |
| Homepage/banner images | Rendered visually; exact asset URL not captured | None obtained | No — default deny. |
| Faculty/news images | Not inspected beyond initial captures; exact asset URL not captured | None obtained | No — default deny. |
| Webfonts | Rendered; exact asset URL not captured | None obtained | No — default deny. |
| Screenshots | Four external-only PNGs listed above | N/A | Do not commit or redistribute without a project-approved basis. |

## Observed versus estimated values

Actual PNG dimensions are observed metadata. Layout, colour, and shape values in `docs/visual-research.md` and `docs/design-specification.md` are estimates from screenshots and are marked as such.

## Repository safety verification target

Before committing, verify that the candidate diff contains only these Markdown documents and that `git ls-files` contains no `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.svg`, `.woff`, `.woff2`, `.ttf`, or `.otf` introduced by this branch.
