# Portfolio — Magri Mohammed Yassine

Personal portfolio site. Single-file HTML (no build step). Brand register.

## Design Context

See `PRODUCT.md` for strategic context and `DESIGN.md` for visual tokens.

**Aesthetic**: "Quiet Luxury" — warm cream palette, DM Serif Display headlines, DM Sans body text, terracotta accent. Light mode. Generous whitespace without excess. Asymmetric split-screen layouts. No neon, no glassmorphism, no gradient text, no emojis.

**Register**: `brand` — the design IS the product.

## File Structure

- `index.html` — the entire portfolio (single file, all CSS and JS inline)
- `PRODUCT.md` — strategic brand context
- `DESIGN.md` — visual design tokens
- `assets/` — resume PDF and profile photo
- `.gitignore` — standard ignores

## Working Conventions

- No build tools. Edit `index.html` directly.
- All CSS uses custom properties defined in `:root`.
- GSAP loaded from CDN for scroll animations (ScrollTrigger plugin).
- Fonts loaded from Google Fonts (DM Serif Display + DM Sans).
- Test by opening `index.html` in a browser or serving with a local server.

## Design Rules

- One accent color: `var(--accent)` / `#b87a5a`
- No gradients on text
- No glassmorphism
- No emojis as icons
- No Playfair Display, Space Grotesk, Inter, JetBrains Mono
- Asymmetric layouts — split-screen hero, 2-column grids
- `min-h-[100dvh]` for mobile-safe full-height sections
- Respect `prefers-reduced-motion`
- GSAP animations: expo-out easing, staggered reveals, parallax
