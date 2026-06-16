# Portfolio — Magri Mohammed Yassine

Personal portfolio site. Single-file HTML (no build step). Brand register.

## Design Context

See `PRODUCT.md` for strategic context and `DESIGN.md` (when generated) for visual tokens.

**Aesthetic**: "Editorial Terminal" — warm dark palette, Playfair Display serif headlines, JetBrains Mono body text, amber/gold accent. Magazine-like layouts with asymmetric grids. No neon, no glassmorphism, no gradient text, no emojis.

**Register**: `brand` — the design IS the product.

## File Structure

- `index.html` — the entire portfolio (single file, all CSS and JS inline)
- `PRODUCT.md` — strategic brand context for impeccable skill
- `DESIGN.md` — visual design tokens (run `$impeccable document` to generate)
- `init/` — initialization scaffolding
- `.gitignore` — standard ignores

## Working Conventions

- No build tools. Edit `index.html` directly.
- All CSS uses custom properties defined in `:root`.
- GSAP loaded from CDN for scroll animations.
- Fonts loaded from Google Fonts (Playfair Display + JetBrains Mono).
- Test by opening `index.html` in a browser or serving with a local server.

## Design Rules (from PRODUCT.md)

- One accent color: `var(--accent)` / `#d4a853`
- No gradients on text
- No glassmorphism
- No emojis as icons (use monogram SVGs or two-letter abbreviations)
- No Space Grotesk, Inter, or other AI-default fonts
- Asymmetric layouts — avoid centered hero, 3-column grids
- `min-h-[100dvh]` for mobile-safe full-height sections
- Respect `prefers-reduced-motion`
