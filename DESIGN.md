# Design

## Theme

Dark. Not pure black — a deep, tinted neutral. The scene: a developer working late in a dim room, monitor as the primary light source. The palette should feel like that environment — focused, low-distraction, high-contrast where it counts.

## Color Palette

OKLCH-based. Tinted neutrals with a single restrained accent.

```css
--bg:       oklch(0.14 0.005 260);    /* Deep blue-black, not pure #000 */
--surface:  oklch(0.18 0.006 260);    /* Elevated surfaces */
--border:   oklch(0.28 0.006 260);    /* Subtle borders */
--text:     oklch(0.92 0.006 260);    /* Primary text */
--text-dim: oklch(0.62 0.006 260);    /* Secondary text */
--accent:   oklch(0.72 0.12 145);     /* Muted emerald — desaturated, not neon */
--accent-dim: oklch(0.55 0.08 145);   /* Accent at reduced prominence */
```

Color strategy: **Restrained.** The accent covers ≤10% of the surface — used for links, active states, and the occasional highlight. Everything else is tinted neutral.

## Typography

**Display / Headings:** `Geist` — tight tracking, strong weight contrast. Not Inter. Not Space Grotesk. Geist has the precision of a Swiss instrument without the startup-sans feel.

**Body:** `Geist` (same family). Weight contrast does the work — 400 for body, 600 for emphasis, 700 for headings.

**Mono (code, metadata, labels):** `Geist Mono`. Used sparingly — for timestamps, tech stack tags, and inline code. Not as a design statement.

Scale (fluid with `clamp()`):
- H1: `clamp(2.5rem, 5vw + 1rem, 4.5rem)` / weight 700 / tracking -0.03em
- H2: `clamp(1.75rem, 3vw + 0.5rem, 2.5rem)` / weight 600 / tracking -0.02em
- H3: `clamp(1.1rem, 1.5vw + 0.5rem, 1.4rem)` / weight 600
- Body: `clamp(0.95rem, 1vw + 0.5rem, 1.05rem)` / weight 400 / line-height 1.7
- Small: `0.8rem` / weight 500 / tracking 0.04em / uppercase for labels

Body max-width: 65ch.

## Layout

- Max-width: 1200px, centered with `margin: 0 auto`
- Content padding: `clamp(1.5rem, 4vw, 4rem)`
- Section spacing: `clamp(4rem, 8vw, 8rem)`
- Asymmetric compositions preferred over centered stacks
- CSS Grid for all multi-column layouts — no flexbox math
- Mobile: single column, aggressive fallback below 768px

## Components

### Navigation
Minimal. Logo left, links right. On scroll: subtle background blur + border. No hamburger on desktop — if it doesn't fit, redesign the nav items.

### Hero
Left-aligned. No centered text. Name as the primary element, one-line subtitle, two actions (primary + optional). No stock photo background.

### Project Cards
Not cards in the traditional sense. Each project is a row: year, title, description, tech stack. Hover reveals a subtle border accent. No images — this is a text-first portfolio.

### Skill Tags
Inline pills. No bento grid of cards. Grouped by category, displayed as comma-separated or inline-tag lists.

### Contact Form
Label above input. Helper text optional. Error text below. Standard `gap-2` input blocks. No floating labels.

## Motion

**Intensity: Restrained (2-3).**

- Scroll-triggered reveals via IntersectionObserver (fade + translate-y)
- No perpetual animations
- No parallax
- No magnetic buttons
- No custom cursor
- Transitions: `cubic-bezier(0.16, 1, 0.3, 1)` — ease-out-expo, 300ms
- `prefers-reduced-motion: reduce` disables all motion

## Imagery

Text-first portfolio. No hero images, no stock photography. The typography and layout ARE the visual. Project screenshots optional (links to live demos/GitHub instead).

## Iconography

Phosphor Icons (`@phosphor-icons/react`). Stroke weight: 1.5. Used sparingly — social links, external links, section markers. Never decorative.
