---
name: Portfolio — Magri Mohammed Yassine
description: Personal portfolio site — quiet luxury aesthetic, warm cream palette, terracotta accent
colors:
  accent: "#b87a5a"
  accent-dim: "rgba(184, 122, 90, 0.06)"
  accent-border: "rgba(184, 122, 90, 0.2)"
  bg: "#faf8f5"
  bg-surface: "#f3f0eb"
  bg-elevated: "#ede8e0"
  text-primary: "#2a2118"
  text-secondary: "#6b5d52"
  text-muted: "#9a8e84"
  border: "rgba(42, 33, 24, 0.06)"
  border-strong: "rgba(42, 33, 24, 0.12)"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)"
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "DM Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 300
    lineHeight: 1.8
  label:
    fontFamily: "DM Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.65rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.2em"
    textTransform: "uppercase"
  ui:
    fontFamily: "DM Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: "0.06em"
    textTransform: "uppercase"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  pill: "100px"
spacing:
  xs: "0.375rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "3rem"
  "2xl": "5rem"
components:
  btn-primary:
    backgroundColor: "#2a2118"
    textColor: "#faf8f5"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.6rem"
  btn-primary-hover:
    backgroundColor: "#b87a5a"
    textColor: "#faf8f5"
  btn-ghost:
    backgroundColor: "transparent"
    textColor: "#6b5d52"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.6rem"
    borderColor: "rgba(42, 33, 24, 0.12)"
  project-row:
    borderColor: "rgba(42, 33, 24, 0.06)"
    padding: "1.75rem 0"
  project-row-hover:
    paddingLeft: "0.5rem"
  skill-pill:
    backgroundColor: "transparent"
    textColor: "#6b5d52"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.9rem"
    borderColor: "rgba(42, 33, 24, 0.06)"
  nav-status:
    backgroundColor: "transparent"
    textColor: "#b87a5a"
    rounded: "100px"
    padding: "0.3rem 0.75rem"
    borderColor: "rgba(184, 122, 90, 0.2)"
---

# Design System: Portfolio — Magri Mohammed Yassine

## 1. Overview

**Creative North Star: "Quiet Luxury"**

A personal portfolio that reads like a boutique editorial — warm, refined, and confident. Light mode with cream tones, a terracotta accent, and generous but purposeful whitespace. The design rejects developer portfolio clichés (dark mode, mono body text, neon accents) in favor of something warmer and more human.

Layouts are asymmetric where it counts: a split-screen hero with photo, 2-column grids for experience and GitHub sections. Motion is orchestrated through GSAP — staggered skill pills, animated counters, parallax hero photo, and scroll-triggered reveals with exponential easing.

**Key Characteristics:**
- Warm cream palette — no pure white, all neutrals tinted toward terracotta
- One accent color (terracotta #b87a5a), used with restraint
- DM Serif Display for headlines, DM Sans for body — both warm, humanist fonts
- Asymmetric split-screen hero with photo placeholder
- Animated gradient orbs in background for depth
- Scroll-driven animations via GSAP with expo-out easing
- No gradients on text, no glassmorphism, no emojis, no neon

## 2. Colors

A warm light palette built on cream, with a single terracotta accent carrying the brand.

### Primary
- **Terracotta** (#b87a5a): The singular accent. Used on section kickers, interactive hover states, the nav status indicator, project row hover reveals, and stat numbers. Never used on large surfaces.

### Neutral
- **Warm Cream** (#faf8f5): Page background. Never pure white.
- **Soft Sand** (#f3f0eb): Surface background for form inputs and elevated surfaces.
- **Linen** (#ede8e0): Elevated surface for subtle layering.
- **Dark Brown** (#2a2118): Primary text. Warm-tinted, never pure black.
- **Warm Taupe** (#6b5d52): Secondary text, descriptions, body copy.
- **Muted Clay** (#9a8e84): Muted text, labels, timestamps, metadata.
- **Shadow Line** (rgba(42, 33, 24, 0.06)): Default border color.
- **Subtle Edge** (rgba(42, 33, 24, 0.12)): Stronger borders for hover states.

### Named Rules
**The One Voice Rule.** The accent color appears on ≤10% of any given screen.

**The Warm Neutral Rule.** Every neutral is tinted toward the brand hue. No neutral should ever read as pure gray or cold.

## 3. Typography

**Display Font:** DM Serif Display (with Georgia fallback)
**Body Font:** DM Sans (with system fallback)

**Character:** A warm serif paired with a warm sans. The display font carries editorial warmth. The body font provides readability and a humanist feel. Both are chosen for voice — neither is on the reflex-reject list.

### Hierarchy
- **Display** (400 weight, clamp(2.6rem, 5.5vw, 4.8rem), 1.0 line-height, -.03em tracking): Hero name and major section titles.
- **Headline** (400 weight, 1.2rem, 1.2 line-height, -.01em tracking): Card titles, experience positions, section titles.
- **Body** (300 weight, .95rem, 1.8 line-height): Descriptions, about text. Max line length ~65ch.
- **Label** (500 weight, .65rem, .2em tracking, uppercase): Section kickers, nav links, form labels.
- **UI** (500 weight, .72rem, .06em tracking, uppercase): Buttons, tech tags.

### Named Rules
**The Two-Font Rule.** Only two typefaces: DM Serif Display for display/headlines, DM Sans for everything else.

**The Weight Contrast Rule.** Hierarchy through weight contrast (300 vs 400 vs 500) combined with size.

## 4. Elevation

Flat by default. No box shadows. Depth conveyed through:
- **Border treatment**: 1px borders at 6% opacity, increasing on hover
- **Background layering**: Three surface levels (bg → surface → elevated)
- **Transform lift**: Elements translate on hover
- **Ambient orbs**: Blurred gradient circles in the background for atmospheric depth

## 5. Components

### Buttons
- **Shape:** Pill-shaped (100px radius)
- **Primary:** Dark Brown background, cream text, uppercase label. Transitions to accent background on hover with -2px translateY and a shimmer sweep.
- **Ghost:** Transparent, taupe text, Subtle Edge border. Transitions to dark text and border on hover.

### Navigation
- **Style:** Fixed top, transitions to frosted glass (blur + cream tint) on scroll.
- **Links:** .7rem uppercase labels, .1em tracking. Hover reveals an animated underline (width transition from 0 to 100%).
- **Status pill:** "Available" with a pulsing 5px dot, accent border.

### Hero
- **Layout:** Split-screen grid (1fr .7fr). Text left, photo right.
- **Photo:** 280×340px rounded rectangle with a decorative offset border behind it. Parallax scroll effect.
- **Entrance:** Staggered reveal — label, title, subtitle, buttons, identity strip.

### Project Rows
- **Layout:** Horizontal grid (70px year / 1fr content / auto arrow)
- **Hover:** Content shifts right 8px, project name turns accent color, arrow translates right.
- **Tech tags:** Pill-shaped, border brightens on row hover.

### Experience Cards
- **Layout:** 2-column grid, thick 2px top border in dark brown.
- **Hover:** Accent-colored top-border reveal (width animates from 0 to 30%), content shifts right.

### Skill Pills
- **Style:** Transparent, taupe text, 1px border, pill-shaped.
- **Hover:** Accent text, accent border, accent-dim background, -1px translateY.
- **Reveal:** Staggered waterfall animation on scroll.

### Section Kickers
- **Composition:** 40px accent horizontal rule + uppercase label word
- **Color:** Accent rule, accent label text.

### Form Inputs
- **Style:** Soft Sand background, no border, 8px radius, body font.
- **Focus:** Accent border, cream background, subtle accent glow.
- **Placeholder:** Muted Clay at 50% opacity.

### Repo Cards
- **Layout:** Flex row with name/desc on left, meta on right.
- **Hover:** Background shift, padding-left increase (slide effect).

## 6. Motion

All animations use GSAP with expo-out easing.

- **Hero entrance:** Staggered timeline (delay 0.2s, stagger 0.12s), photo slides in from right.
- **Scroll reveals:** `.reveal` class starts at opacity 0, translateY 30px. GSAP scroll-triggered to opacity 1, translateY 0.
- **Side reveals:** `.reveal-left` / `.reveal-right` for GitHub section columns.
- **Staggered children:** Skill pills and project rows use 60ms stagger delay.
- **Animated counters:** GitHub stats count up from 0 to target on scroll.
- **Parallax:** Hero photo translates 60px vertically during hero scroll.
- **Nav:** Background transitions from transparent to frosted glass at 60px scroll.
- **Reduced motion:** All animations respect `prefers-reduced-motion`.

## 7. Do's and Don'ts

### Do:
- **Do** use the two-font system exclusively
- **Do** keep the accent color rare — ≤10% of any screen
- **Do** use asymmetric layouts (split hero, 2-column grids)
- **Do** tint every neutral toward terracotta — no pure grays
- **Do** use `min-h-[100dvh]` for full-height sections
- **Do** animate exclusively via `transform` and `opacity`
- **Do** respect `prefers-reduced-motion`
- **Do** use GSAP stagger for lists and grids
- **Do** use pill-shaped buttons and tags (100px radius)

### Don't:
- **Don't** use gradient text — ever
- **Don't** use glassmorphism or backdrop-blur as decoration
- **Don't** use Space Grotesk, Inter, Playfair Display, or JetBrains Mono
- **Don't** use emojis as icons
- **Don't** use neon glows, cyan/purple gradients, or dark-mode clichés
- **Don't** center-align hero text — use split-screen
- **Don't** use 3-column identical card grids
- **Don't** use box-shadow for elevation
- **Don't** use `#000000` or `#ffffff` — always use tinted neutrals
- **Don't** use `h-screen` — use `min-h-[100dvh]`
- **Don't** use startup slop: "Elevate", "Seamless", "Next-Gen", "Synergy"
