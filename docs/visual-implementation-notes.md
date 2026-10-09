# Round 2 visual implementation notes

## Scope

This reconstruction follows the screenshot-backed layout evidence in `visual-research.md`, `design-specification.md`, and `reference-manifest.md`. It is an unofficial prototype and is not an official North Bangkok University website.

## Cycle 1 refinement: disclosure placement

The required unofficial-prototype disclosure is a compact, non-flow overlay at desktop and tablet widths. This preserves the source-equivalent utility header, primary navigation, and hero start positions while retaining a readable external link to the official NBU site. At the narrow mobile capture width, it moves to a compact fixed lower overlay so it does not cover the intentionally cropped utility controls or the carousel start. It uses only HTML, CSS, and Lucide; no source-site asset, logo, font, QR code, photo, or affiliate mark was added.

Cycle 1 final capture evidence is external-only at `C:\Users\BearYang\.ao\data\artifacts\nbu-mockup-4\round2-visual-qa\cycle1-final\`: `homepage-1440x900-final.png`, `homepage-768x1024-final.png`, `homepage-390x844-final.png`, and `homepage-1440x6000-final.png`. Visual inspection confirms the utility header begins at the top of the document at 1440/768/390, the primary navigation and hero retain their established start positions, and the disclosure does not cover the visible utility controls, mobile hamburger, or hero content. The expected safe-substitution differences from source references remain.

## Safe substitutions

No source screenshot, university logo, banner, photograph, partner mark, QR code, third-party font, or other source-site binary is included in the repository.

- The header wordmark is plain HTML text styled with system fonts. It is intentionally not the university logo.
- Hero and bachelor-page people/photography are replaced by original CSS geometry and Lucide outline icons.
- Architectural and blue promotional backgrounds are original CSS gradients, borders, and repeating-line patterns.
- Carousel slides use original prototype copy and deterministic local state. They do not reproduce source promotions or QR codes.
- Highlight and news images are original CSS poster compositions with Lucide icons. Their short labels are marked as mock/prototype content.
- Affiliate logos are replaced with plain text names, a generic building icon, and an explicit `TEXT SUBSTITUTE` label.
- Social marks are generic Lucide interface icons and link nowhere.

## Fidelity limitations

- Dimensions, colours, and spacing are estimates from the approved screenshots, not recovered source CSS.
- The source font was not identified or licensed, so the project uses the local system font stack.
- The expanded source dropdown and mobile-menu visuals were not captured; their behavior is implemented accessibly in the established colour system, but cannot claim exact source parity.
- The original carousel artwork is dynamic and unlicensed. The implementation matches its blue panel geometry and responsive crop, not its photographic content.
- The bachelor banner uses abstract portrait placeholders and original copy structure rather than source people, logo, or exact campaign copy.
- News, highlights, and affiliates match observed section/grid geometry while using safe placeholder visuals.
- The mobile utility header deliberately preserves the observed horizontal crop/overflow at 390 px rather than reflowing every control into the viewport.

## Content boundary

Verified institutional labels and destinations remain sourced from the repository research files and `src/data.ts`. Original interface descriptions and poster summaries are mock content. The public `student.php` endpoint returned HTTP 403 during research, so no student dashboard is inferred or implemented.

## QA targets

The implementation is designed for comparison at:

- 1440 × 900
- 768 × 1024
- 390 × 844
- 1440 × 6000 tall desktop capture

Generated implementation screenshots are QA artifacts and must remain outside Git.
