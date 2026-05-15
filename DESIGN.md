---
name: "ML Opsidian Genesis"
description: "A single-surface hackathon countdown that feels engineered, imminent, and cinematic."
colors:
  primary: "#56F2F4"
  primary-deep: "#1DB8BF"
  background: "#050B0D"
  surface: "#0D171A"
  surface-strong: "#132126"
  border: "#1C4D50"
  text-primary: "#E8FFFF"
  text-secondary: "#7CB9BD"
typography:
  display:
    fontFamily: "var(--font-sans), Geist, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 9vw, 7.5rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "0.1em"
  headline:
    fontFamily: "var(--font-sans), Geist, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "0.08em"
  title:
    fontFamily: "var(--font-sans), Geist, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.06em"
  body:
    fontFamily: "var(--font-sans), Geist, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.01em"
  label:
    fontFamily: "var(--font-mono), JetBrains Mono, monospace"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  frame: "4px"
  tile: "8px"
  control: "10px"
spacing:
  micro: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  hero: "72px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "40px"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "40px"
  countdown-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.display}"
    rounded: "{rounded.tile}"
    padding: "18px 16px"
    width: "120px"
  title-plate:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.headline}"
    rounded: "{rounded.frame}"
    padding: "18px 24px"
  panel-surface:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.tile}"
    padding: "20px 20px"
---

# Design System: ML Opsidian Genesis

## Overview

**Creative North Star: "The Neon Chamber"**

This system should feel like the user has stepped into a sealed countdown chamber moments before activation. The page is mostly darkness, not emptiness but containment. Cyan signal lines, illuminated rails, and plated surfaces slice through that darkness with intent. Every bright element should look functional, as if it belongs to a machine already running behind the wall.

The composition is singular by design. The page is not a multi-section event brochure, and it is not a cheerful landing page with stacked explainer cards. It exists to heighten anticipation around the remaining time. The reference language is cinematic, cold, and engineered. It explicitly rejects anything playful, pastel, generic SaaS, corporate-blue event branding, cheerful campus-fair aesthetics, rounded startup marketing tropes, or lightweight conference visuals.

**Key Characteristics:**
- Monolithic dark atmosphere with controlled cyan illumination.
- Uppercase technical typography that reads like a control-room signal.
- Thin frame geometry, corner brackets, and plated surfaces instead of soft cards.
- Motion used as system feedback, not decoration.

## Colors

The palette is a pressure system: one electric accent, one family of dark containment surfaces, and pale signal text that never outshouts the cyan.

### Primary
- **Electric Cyan** (`#56F2F4`): Reserved for the countdown, active frame lines, critical dividers, and high-priority status text. This is the pulse of the page, not a background wash.

### Neutral
- **Reactor Black** (`#050B0D`): The main field. Use it for the hero backdrop, outer void, and any area that needs to feel sealed and cinematic.
- **Smoked Graphite** (`#0D171A`): The default plated surface. Use it behind the title lockup, countdown cells, and compact data panels.
- **Containment Slate** (`#132126`): The stronger surface step. Use it when a panel needs to separate from the floor without turning into a floating card.
- **Signal Teal** (`#1C4D50`): The structural line color. Use it for 1px or 2px borders, frame corners, and scan-grid details.
- **Frost White** (`#E8FFFF`): The primary text tone. Use it for the hero wordmark and countdown numerals when maximum clarity matters.
- **Broadcast Mist** (`#7CB9BD`): Secondary text, metadata, and supporting labels. Use it when content must recede without disappearing.

**The One Signal Rule.** Electric Cyan appears on a minority of the surface, ideally no more than roughly 10 to 12 percent of the viewport. Its rarity is the tension.

**The Reactor Rule.** Large surfaces stay in the `#050B0D` to `#132126` range. Do not brighten the page to make it feel safer.

## Typography

**Display Font:** `Geist` with `Arial, sans-serif` fallback  
**Body Font:** `Geist` with `Arial, sans-serif` fallback  
**Label/Mono Font:** `JetBrains Mono` with `monospace` fallback

**Character:** The typography should feel like a technical system speaking with unusual confidence. Geist carries the mass of the hero lockup, while JetBrains Mono handles countdown labels, metadata, and any element that should feel measured rather than lyrical.

### Hierarchy
- **Display** (`600`, `clamp(3.25rem, 9vw, 7.5rem)`, `0.92`): Reserved for the event title and hero-scale countdown numerals. Keep it uppercase and widely tracked.
- **Headline** (`500`, `clamp(1.5rem, 3vw, 2.5rem)`, `1.05`): Used for subheads, countdown headers, and plated callouts adjacent to the hero.
- **Title** (`500`, `1.125rem`, `1.3`): Used for short support lines, event descriptors, and compact headings inside plates or overlays.
- **Body** (`400`, `1rem`, `1.6`): Used sparingly. When explanatory copy appears, keep it under `65ch` and make it secondary to the countdown.
- **Label** (`500`, `0.8rem`, `0.18em` letter spacing): Used for metadata, unit labels, CTA text, and any line that should feel machine-stamped.

**The Uplink Rule.** Display and label text should read like signals, not prose. Favor uppercase, deliberate tracking, and short bursts of language.

**The Scarcity Rule.** The more important the type, the fewer the words. If a line can be removed without hurting the countdown, remove it.

## Elevation

This system uses atmospheric layering, not soft app-card depth. Surfaces separate through tonal steps, thin borders, cyan edge glow, scanline overlays, and floor reflections. The page should feel deep because it is built from planes, not because it has soft drop shadows.

### Shadow Vocabulary
- **Signal Glow** (`0 0 0 1px rgba(86, 242, 244, 0.22), 0 0 24px rgba(86, 242, 244, 0.14)`): Use on active countdown edges, focused controls, and the occasional vertical rail.
- **Plate Haze** (`0 18px 60px rgba(0, 0, 0, 0.36)`): Use beneath larger hero plates only when they need to separate from the background floor.

**The No Pillow Shadow Rule.** If a panel looks like a floating SaaS card, the shadow is wrong. Blur can support atmosphere, but it must never become the primary depth cue.

## Components

### Buttons
- **Character:** Tactical controls, not friendly CTAs.
- **Shape:** Tight industrial corners (`10px` radius). Never pill-shaped.
- **Primary:** Electric Cyan fill (`#56F2F4`) with Reactor Black text (`#050B0D`), mono label styling, `40px` height, and `0 20px` horizontal padding.
- **Hover / Focus:** Allow a slight upward energy shift or cyan edge glow. Focus must be unmistakable, using a visible ring rather than subtle color drift.
- **Ghost:** Smoked Graphite fill (`#0D171A`) with Frost White text (`#E8FFFF`) and a 1px Signal Teal border (`#1C4D50`).

### Countdown Cells
- **Character:** The interface heartbeat. These are the most important repeated modules on the page.
- **Shape:** Plated modules with `8px` radius, vertical rhythm, and hard internal spacing.
- **Background:** Smoked Graphite (`#0D171A`) or Containment Slate (`#132126`) with thin signal borders.
- **Typography:** Display numerals for values, JetBrains Mono labels for units.
- **State:** The active or soonest-changing unit may receive Signal Glow. Reduced-motion mode must remove pulses and leave only the static glow.

### Title Plates
- **Character:** Hard-edged data plaques that frame the event lockup.
- **Shape:** Near-square corners (`4px` radius), never rounded slabs.
- **Background:** Smoked Graphite (`#0D171A`) with a slightly darker inner field or border treatment to feel machined.
- **Text:** Frost White (`#E8FFFF`) headline, Broadcast Mist (`#7CB9BD`) subtitle, and precise spacing rather than decorative ornaments.

### Surface Panels
- **Character:** Structural containers, not marketing cards.
- **Corner Style:** Controlled and compact (`8px` radius).
- **Background:** Containment Slate (`#132126`) for separation, with Plate Haze only when the panel needs floor lift.
- **Border:** 1px Signal Teal (`#1C4D50`) or a dimmer derivative. No thick accent stripes.
- **Internal Padding:** `20px` to `24px`, with larger breathing room around the countdown cluster than around any supporting content.

### Frame Corners
- **Character:** Camera-lock markers that imply a system is tracking the hero.
- **Style:** Cyan L-shaped corners, 1px or 2px thick, used at perimeter edges or around hero groupings.
- **Behavior:** Sparse and structural. They should bracket space, not decorate every object.

## Do's and Don'ts

### Do:
- **Do** keep the dominant field between `#050B0D` and `#132126`, so the page stays cinematic and pressurized.
- **Do** reserve `#56F2F4` for the countdown, active rails, and the highest-priority signals.
- **Do** keep corners disciplined, between `4px` and `10px`, so the UI feels engineered rather than soft.
- **Do** use uppercase display or mono labels for hero messaging, countdown units, and CTA text.
- **Do** preserve strong contrast, clear keyboard focus, and reduced-motion fallbacks for any glow, sweep, or pulse effect.

### Don't:
- **Don't** make it playful.
- **Don't** use pastels.
- **Don't** build a generic SaaS hero with stacked feature cards, soft gradients, or reassuring marketing copy.
- **Don't** drift into corporate-blue event branding.
- **Don't** introduce cheerful campus-fair aesthetics, rounded startup marketing tropes, or lightweight conference visuals.
- **Don't** use gradient text, glassmorphism, or colored `border-left` accents as shortcuts for visual interest.
