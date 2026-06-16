---
name: Portfolio — Magri Mohammed Yassine
description: Personal portfolio site — editorial terminal aesthetic, warm dark palette, amber accent
colors:
  accent: "#d4a853"
  accent-dim: "rgba(212, 168, 83, 0.08)"
  accent-border: "rgba(212, 168, 83, 0.18)"
  bg: "#1a1714"
  bg-surface: "#231f1b"
  bg-elevated: "#2d2823"
  bg-card: "#25211d"
  text-primary: "#f0ebe4"
  text-secondary: "#a89b8c"
  text-muted: "#7a6e60"
  border: "rgba(240, 235, 228, 0.06)"
  border-strong: "rgba(240, 235, 228, 0.12)"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "JetBrains Mono, SF Mono, Fira Code, monospace"
    fontSize: "0.88rem"
    fontWeight: 300
    lineHeight: 1.85
  label:
    fontFamily: "JetBrains Mono, SF Mono, Fira Code, monospace"
    fontSize: "0.68rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.12em"
    textTransform: "uppercase"
  ui:
    fontFamily: "JetBrains Mono, SF Mono, Fira Code, monospace"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: "0.08em"
    textTransform: "uppercase"
rounded:
  sm: "2px"
  md: "4px"
spacing:
  xs: "0.375rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "3.5rem"
  "2xl": "5rem"
  "3xl": "8rem"
components:
  btn-primary:
    backgroundColor: "#d4a853"
    textColor: "#1a1714"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.5rem"
  btn-primary-hover:
    backgroundColor: "#f0ebe4"
    textColor: "#1a1714"
  btn-ghost:
    backgroundColor: "transparent"
    textColor: "#a89b8c"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.5rem"
    borderColor: "rgba(240, 235, 228, 0.12)"
  project-card:
    backgroundColor: "#25211d"
    rounded: "{rounded.md}"
    padding: "2rem"
    borderColor: "rgba(240, 235, 228, 0.06)"
  project-card-hover:
    borderColor: "rgba(212, 168, 83, 0.18)"
  skill-pill:
    backgroundColor: "transparent"
    textColor: "#a89b8c"
    rounded: "{rounded.sm}"
    padding: "0.3rem 0.7rem"
    borderColor: "rgba(240, 235, 228, 0.06)"
  nav-status:
    backgroundColor: "transparent"
    textColor: "#d4a853"
    rounded: "2px"
    padding: "0.35rem 0.75rem"
    borderColor: "rgba(212, 168, 83, 0.18)"
---

# Design System: Portfolio — Magri Mohammed Yassine

## 1. Overview

**Creative North Star: "The Editorial Terminal"**

A personal portfolio that reads like a high-end design magazine laid out by a developer. Warm, dark, and deliberate — every section breathes with the rhythm of editorial typography while maintaining the precision of a terminal interface. The design rejects the neon-on-black developer portfolio cliché in favor of something warmer and more human: amber accents against deep charcoal, serif headlines that feel literary, and mono body text that signals technical credibility.

Density is restrained. Spacing varies intentionally — generous in rhythm sections, tighter in data-dense areas. Layouts break the centered-card-grid paradigm with asymmetric bento-style project arrangements and split-screen compositions. Motion is orchestrated: scroll-triggered reveals with exponential easing, a text-scrambling hero name, and cursor-following spotlights on project cards.

**Key Characteristics:**
- Warm dark palette — no pure black, all neutrals tinted toward amber
- One accent color (amber/gold #d4a853), used with restraint
- Playfair Display serif for headlines, JetBrains Mono for everything else
- Asymmetric grids and split-screen layouts
- No gradients on text, no glassmorphism, no emojis, no neon
- Magazine-style section labels with numeric markers
- Scroll-driven animations via GSAP with expo-out easing

## 2. Colors

A warm dark palette built on deep charcoal tinted toward amber, with a single gold accent carrying the brand.

### Primary
- **Antique Gold** (#d4a853): The singular accent. Used on section labels, interactive hover states, the nav status indicator, project card top-border reveals, and stat numbers. Never used on large surfaces — its power comes from rarity.

### Neutral
- **Deep Charcoal** (#1a1714): Page background. Warm-tinted, never pure black.
- **Dark Umber** (#231f1b): Surface background for form inputs and elevated surfaces.
- **Warm Slate** (#2d2823): Elevated surface for identity meta items.
- **Card Brown** (#25211d): Project card and repo card backgrounds.
- **Parchment** (#f0ebe4): Primary text. Warm off-white, never pure white.
- **Warm Taupe** (#a89b8c): Secondary text, descriptions, body copy.
- **Muted Clay** (#7a6e60): Muted text, labels, timestamps, metadata.
- **Shadow Line** (rgba(240, 235, 228, 0.06)): Default border color. Barely visible, warm-tinted.
- **Subtle Edge** (rgba(240, 235, 228, 0.12)): Stronger borders for hover states and dividers.

### Named Rules
**The One Voice Rule.** The accent color appears on ≤10% of any given screen. Its warmth and rarity are the point. Never expand its usage for decoration.

**The Warm Neutral Rule.** Every neutral is tinted toward the brand hue (chroma 0.005-0.01 toward amber). No neutral should ever read as pure gray or cold.

## 3. Typography

**Display Font:** Playfair Display (with Georgia fallback)
**Body Font:** JetBrains Mono (with SF Mono / Fira Code fallback)

**Character:** A literary serif paired with a developer-native mono. The display font brings editorial warmth and magazine-quality headline presence. The mono body text communicates technical precision and gives the entire page a terminal-native feel. The contrast between the two is the personality.

### Hierarchy
- **Display** (500 weight, clamp(2.8rem, 5.5vw, 4.8rem), 1.05 line-height, -0.03em tracking): Hero name and major section titles. Playfair Display italic for the scramble effect.
- **Headline** (500 weight, 1.15rem, 1.3 line-height, -0.01em tracking): Card titles, experience positions, section titles within content.
- **Body** (300 weight, 0.88rem, 1.85 line-height): Descriptions, about text, experience bodies. Max line length ~65ch.
- **Label** (500 weight, 0.68rem, 0.12em tracking, uppercase): Section labels, nav links, form labels, meta keys.
- **UI** (500 weight, 0.78rem, 0.08em tracking, uppercase): Buttons, tech tags, channel labels.

### Named Rules
**The Two-Font Rule.** Only two typefaces exist: Playfair Display for display/headlines, JetBrains Mono for everything else. No third font is introduced for any purpose.

**The Weight Contrast Rule.** Hierarchy is communicated through weight contrast (300 vs 500 vs 600) combined with size, never through font family switching or color alone.

## 4. Elevation

This system is flat by default. No box shadows are used anywhere. Depth and hierarchy are conveyed through:
- **Border treatment**: Default 1px `border-color` at 6% opacity, increasing to 12% on hover
- **Background layering**: Four distinct surface levels (bg → surface → elevated → card)
- **Top-border accent line**: Project cards reveal a 1px accent-colored top border on hover
- **Transform lift**: Cards translate -2px on hover, creating a physical "lift" sensation

### Named Rules
**The Flat-By-Default Rule.** No shadows. Ever. Depth comes from color, border, and transform — not from box-shadow.

## 5. Components

### Buttons
- **Shape:** Sharp corners (2px radius)
- **Primary:** Antique Gold background (#d4a853), Deep Charcoal text (#1a1714), uppercase, 0.78rem label weight. Transitions to Parchment background on hover with -1px translateY.
- **Ghost:** Transparent background, Warm Taupe text, Subtle Edge border. Transitions to accent text and accent border on hover.

### Navigation
- **Style:** Fixed top, mix-blend-mode difference for contrast against any background. Transitions to semi-transparent dark background with blur on scroll.
- **Links:** 0.72rem uppercase labels, 0.12em tracking. Hover reveals an accent underline animated from left to right via width transition.
- **Status pill:** "Open" indicator with a pulsing 6px amber dot, 2px radius, accent border.

### Project Cards
- **Shape:** 4px radius, 1px Shadow Line border
- **Background:** Card Brown (#25211d)
- **Hover:** Border transitions to accent-border, -2px translateY, reveals 1px accent top-border via ::before pseudo-element
- **Layout:** Asymmetric bento grid (12-column, varying spans: 7/5, 5/7, 6/6)
- **Icon:** Two-letter monogram in a 32x32px box with accent-dim background and accent-border

### Skill Pills
- **Style:** Transparent background, Warm Taupe text, 1px Shadow Line border, 2px radius
- **Hover:** Accent text, accent border, accent-dim background
- **Layout:** Horizontal rows with a fixed-width label column (120px), not card grids

### Section Labels
- **Composition:** Numeric marker (01-06) + 40px horizontal line + uppercase text label
- **Color:** All three elements in accent or muted tones
- **Spacing:** 1.25rem bottom margin before section content

### Form Inputs
- **Style:** Dark Umber background (#231f1b), Shadow Line border, 2px radius, Parchment text
- **Focus:** Border transitions to accent-border
- **Placeholder:** Muted Clay at 60% opacity

### Repo Cards
- **Layout:** Flex row with name/desc on left, stars/lang on right
- **Hover:** Accent border, accent-dim background
- **Name:** Accent-colored, 0.82rem medium weight

## 6. Do's and Don'ts

### Do:
- **Do** use the two-font system exclusively: Playfair Display for headlines, JetBrains Mono for everything else
- **Do** keep the accent color rare — it should appear on ≤10% of any screen
- **Do** use asymmetric layouts (bento grids, split screens, varied spacing)
- **Do** tint every neutral toward amber — no pure grays
- **Do** use `min-h-[100dvh]` for full-height sections, never `h-height: 100vh`
- **Do** animate exclusively via `transform` and `opacity` — never `top`, `left`, `width`, or `height`
- **Do** respect `prefers-reduced-motion` for all animations
- **Do** use two-letter monograms (not emojis) for project icons
- **Do** vary spacing intentionally — avoid identical padding everywhere

### Don't:
- **Don't** use gradient text (`background-clip: text` with gradients) — ever
- **Don't** use glassmorphism or backdrop-blur as a decorative treatment
- **Don't** use Space Grotesk, Inter, Roboto, Arial, or system fonts
- **Don't** use emojis as icons anywhere in the interface
- **Don't** use neon glows, cyan/purple gradients, or dark-mode clichés
- **Don't** center-align hero text — use asymmetric split-screen layouts
- **Don't** use 3-column identical card grids — use asymmetric bento grids instead
- **Don't** use the hero-metric template (big number + small label + gradient accent)
- **Don't** use box-shadow for elevation — the system is flat by default
- **Don't** use `#000000` or `#ffffff` — always use tinted neutrals
- **Don't** use `h-screen` — it breaks on mobile Safari; use `min-h-[100dvh]`
- **Don't** use startup slop words: "Elevate", "Seamless", "Next-Gen", "Synergy"
- **Don't** use em dashes (—) — use commas, colons, semicolons, or periods
