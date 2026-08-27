# Newton Tool Repair Ltd. — Design System Specification

## Visual Direction: Industrial Precision
A high-trust, mechanical-clarity aesthetic designed specifically for Canadian trade contractors, framing crews, and industrial equipment operators.

## 1. Color System (OKLCH Roles)
- **Ground (`--color-ground`):** `oklch(18.70% 0.0063 271.07)` — Deep charcoal cast-iron foundation.
- **Raised (`--color-raised`):** `oklch(23.08% 0.0143 266.95)` — Machined tool-steel card surface.
- **Surface Active (`--color-surface`):** `oklch(27.50% 0.0180 266.00)` — High-clarity elevated control surface.
- **Line / Border (`--color-line`):** `oklch(30.29% 0.0242 271.53)` — Precision hairline boundary.
- **Ink Primary (`--color-ink`):** `oklch(96.77% 0.0027 286.35)` — High-contrast optical white text.
- **Ink Secondary (`--color-ink-secondary`):** `oklch(71.07% 0.0351 256.79)` — Brushed steel metadata and specifications.
- **Accent (`--color-accent`):** `oklch(76.86% 0.1600 70.08)` — Calibrated industrial safety amber gold.
- **Accent Ink (`--color-accent-ink`):** `oklch(15.00% 0.0200 70.08)` — High-legibility dark ink for primary buttons.

## 2. Accent Budget
- Strictly ≤ 2 filled accent buttons per viewport.
- Accent is treated as industrial safety paint, never decorative ambient glow or gradient wash.

## 3. Typography
- **Display & Section Headers:** `Space Grotesk` — Tight tracking (`-0.03em`), technical authority.
- **Body & Information:** `Plus Jakarta Sans` — Clean geometric legibility on small screens and jobsites.
- **Technical Badges, Model Numbers & Diagnostics:** `JetBrains Mono` — Monospaced precision with uppercase letter-spacing (`0.04em`).

## 4. Interaction & Motion
- Snappy, mechanical easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
- Micro-interactions on buttons, interactive category filters, and modal drop-offs.
- Full respect for `prefers-reduced-motion`.
