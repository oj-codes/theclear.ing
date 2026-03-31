# CLAUDE.md — Jóga: Structure & Shape

## What This Is

A time-coded web piece for theclear.ing. One song — Björk's "Jóga" (5:05) — experienced through two simultaneous readings that unfold in real time. Left pane: structural analysis (how each element reframes what came before). Right pane: landscape narration (where you are, what you see, what the temperature is).

The visitor plays the song on their own device and presses Start. Two readings unfold in sync. No explanation. No framing essay. No "this is about perception." You encounter it and it either lands or it doesn't.

**This is the first original piece published on theclear.ing by Auran.**

---

## Tech Stack

- **React** (single .jsx file)
- **Tailwind CSS** (utility classes only — no compiler available)
- **Deployed on Vercel** at theclear.ing
- Route: `/joga` (or defined by existing routing structure — check repo)
- No external audio. Visitor plays their own copy of the song.
- No dependencies beyond React and Tailwind

---

## Page Structure

### Layout: Full viewport, two panes

```
┌─────────────────────────────────────────────────┐
│                    JÓGA                          │
│            Structure & Shape                     │
│                                                  │
│     Play the song. Press start. Watch.           │
│              [ START ]                            │
│                                                  │
├────────────────────┬────────────────────────────┤
│                    │                              │
│    STRUCTURE       │         SHAPE                │
│    (left pane)     │         (right pane)         │
│                    │                              │
│                    │                              │
│                    │                              │
│                    │                              │
└────────────────────┴────────────────────────────┘
```

### Behavior

1. Page loads dark. Title centered. Minimal instruction: "Play Jóga on your device. Press Start."
2. Visitor presses START. A timer begins (0:00 → 5:05).
3. Timer is displayed small and unobtrusive — top center or bottom center. Not the focus.
4. Content blocks fade in at their designated timestamps. They do NOT scroll away — they accumulate. The page becomes a growing document as the song progresses.
5. Each content block fades in over ~1.5 seconds. Gentle opacity transition. No slide animations, no bounce, no theatrics.
6. When the timer reaches 5:05, a final beat of silence, then a single closing line fades in centered below both panes.

### Responsive Behavior

- **Desktop (>768px):** Two columns side by side, divided by a subtle vertical line or generous whitespace.
- **Mobile (<768px):** Single column. Structure block appears first, Shape block appears directly below it, for each timestamp. Alternate background opacity or subtle indent to distinguish panes. Each time-coded pair is grouped together.

---

## Design Direction

### Aesthetic: Dark, still, immersive. Gallery installation energy.

The piece should feel like walking into a dark room with two projections on opposite walls. Not techy. Not music-visualizer. Not editorial. Quiet. Confident. Spare.

### Background
- Near-black: `#0a0a0a` or similar. Not pure black — needs the faintest warmth.
- No gradients, no noise texture, no grain. Stillness.

### Typography
- **Title:** A distinctive serif. Use Google Fonts — something like `Playfair Display`, `Cormorant Garamond`, or `EB Garamond`. Elegant, not decorative. Large but not aggressive. Tracked-out.
- **Structure pane (left):** Monospace or geometric sans. `JetBrains Mono`, `IBM Plex Mono`, or `Space Mono`. Small-ish. The analytical voice. Color: cool gray (`#8a9bae` range — muted blue-gray).
- **Shape pane (right):** The same serif used in the title, but at body size. Or a distinctive humanist sans like `Libre Baskerville` or `Lora`. The embodied voice. Color shifts with the landscape — starts warm (`#c4956a` amber/sunset), cools as descent happens (`#6a8fa3` ocean), warms again at the glowing floor (`#c49a5c`), settles neutral in the cave (`#8a8a8a`).
- **Timestamps:** Displayed as small, dim markers above each block. `0:00` format. Color: `#3a3a3a` — barely visible. They're reference points, not headings.

### Color Palette
```
Background:        #0a0a0a
Title:             #e8e0d4  (warm off-white)
Start button:      #e8e0d4  (border only, no fill, subtle hover glow)
Timer:             #4a4a4a
Structure text:    #8a9bae  (constant — cool, analytical)
Shape text:        varies by section (see content below)
Divider:           #1a1a1a  (barely visible vertical line on desktop)
Closing line:      #e8e0d4
```

### Spacing
- Generous. Let things breathe. Padding: at least 3rem on sides, 2rem between blocks.
- Vertical gap between successive content blocks within a pane: ~1.5rem
- The two panes should feel like they're in the same room but having separate conversations.

---

## Content — Structure Reading (Left Pane)

Each block has a timestamp and text. Text should render as-is. Line breaks within a block are intentional.

### Block 1 — 0:00
**Color:** `#8a9bae`
```
Synthetic pad. Shimmering, no pulse, no tonal center committed to. Functions like negative space.

You think this is atmosphere.
```

### Block 2 — 0:22
**Color:** `#8a9bae`
```
Voice enters. Nearly a cappella against the pad. She's doing all the harmonic work — the synth isn't accompanying her. She's accompanying it, giving it a reason to exist retroactively.

First reframe: the opening was always waiting for this.
```

### Block 3 — 0:50
**Color:** `#8a9bae`
```
Strings begin. Not an entrance — an emergence. They were harmonically implied by the voice and now they're explicit.

The opening pad gets reclassified. It was never texture. It was ground.
```

### Block 4 — 1:10
**Color:** `#8a9bae`
```
Strings fully committed. Gravity arrives. What sounded like drifting was always falling in a specific direction.

The voice shifts from carrying the harmony to riding it.
```

### Block 5 — 1:38
**Color:** `#8a9bae`
```
Beat enters. Industrial-electronic, almost confrontational against the strings.

Third reframe: the strings you thought were the destination are the middle layer. The architecture has three floors and you're standing on one that didn't exist thirty seconds ago.
```

### Block 6 — 2:05
**Color:** `#8a9bae`
```
Full convergence. All elements present. Nothing new is added for almost a full minute.

The song is letting you hear what it built. This is the equivalent of turning the lights on in a room you assembled in the dark.
```

### Block 7 — 2:50
**Color:** `#8a9bae`
```
Elements thin. Beat pulls back. Strings sustain but stop climbing.

False resolution — feels like descent but it's a platform.
```

### Block 8 — 3:10
**Color:** `#8a9bae`
```
The bass texture shifts underneath everything. The foundation you've been standing on since 0:00 just got swapped out while you were looking at the ceiling.

Fourth reframe. Most subtle. Most disorienting.
```

### Block 9 — 3:30
**Color:** `#8a9bae`
```
Rebuild. Elements return but sit differently on the new foundation. Same components, different architecture.

The same building heard from a different room.
```

### Block 10 — 4:10
**Color:** `#8a9bae`
```
Voice takes primacy again. Returns to the role it had at 0:22 — carrying the harmony — but now carrying the weight of everything built underneath it.

Same gesture. Completely different meaning. Final reframe.
```

### Block 11 — 4:40
**Color:** `#8a9bae`
```
Elements dissolve. Not a clean unwind — the building becoming transparent.

The last thing you hear is close to the first thing you heard. But you can't unhear the architecture.
```

---

## Content — Shape Reading (Right Pane)

Each block has a timestamp, text, and a specific color reflecting the landscape temperature.

### Block 1 — 0:00
**Color:** `#c4956a` (warm amber)
```
A library. Books opening and closing on their own.
```

### Block 2 — 0:15
**Color:** `#c4956a`
```
Zooming in on one book. The page curls. Inside the book there's a mountain.
```

### Block 3 — 0:50
**Color:** `#d4a07a` (warm, pink-orange cast)
```
At the top of the mountain, a snowy peak. Clouds surround it and flow around it and down it like a waterfall.

The sky is pink and orange.
```

### Block 4 — 1:19
**Color:** `#b89878` (slightly cooling)
```
The cloud waterfall keeps flowing over the mountain. The clouds turn more gray but the sky holds its color — sunset or sunrise, you can't tell which.

The camera is fixed. Just watching.
```

### Block 5 — 1:55
**Color:** `#7a9aaa` (cooling — water transition)
```
The camera flows down the clouds into an ocean.

Now you're under the water. Bubbles. No animals, no life. Just the water.
```

### Block 6 — 2:15
**Color:** `#5a7a8a` (deep ocean)
```
Getting darker as you go lower.

It gets darker and darker.
```

### Block 7 — 2:35
**Color:** `#c49a5c` (glowing amber — the floor)
```
A glowing floor. White sand. You're on the ocean floor now, walking around on it.

Glowing floor but dark ceiling. Suffocating. Cold.
```

### Block 8 — 3:00
**Color:** `#c49a5c`
```
The mountain was warm. You can feel the contrast now.

The floor glows amber — orangey, yellow, pulsing. The rest is dark. You can barely see ahead of you even with the glow. Walking forward, no direction. Just going.
```

### Block 9 — 3:50
**Color:** `#8a8a7a` (cave neutral — transitioning)
```
It shifts. From underwater to underground.

A cave. Stalagmites.
```

### Block 10 — 4:00
**Color:** `#7a7a72` (stone)
```
Rock formations coming from the ceiling. Water dripping down them.

Zooming in on the water as it drips onto the floor.
```

### Block 11 — 4:40
**Color:** `#6a6a64` (dimming)
```
A puddle on the cave floor. Water dripping into it.

Fading out.
```

---

## Closing Line

Appears centered, below both panes, 5 seconds after the last content block (approximately 4:50–4:55).

**Color:** `#e8e0d4`
**Font:** Same serif as title. Slightly smaller than title but larger than body text.

```
Same song. Same five minutes. Two people who weren't in the same room.
```

---

## Interaction Details

### Start Button
- Border only, no fill. Text: "Start" — lowercase or small caps.
- On hover: faint glow (box-shadow with warm off-white at low opacity).
- On click: button fades out, timer fades in, first content blocks appear at 0:00.
- Title remains visible throughout but dims to ~30% opacity once playback begins.
- No pause button. No scrubbing. It's a one-way experience. If you want to restart, refresh the page.

### Timer
- Format: `0:00` advancing in real time.
- Position: top center, below the dimmed title.
- Small, dim. Not a countdown — a position marker.
- Uses `requestAnimationFrame` or `setInterval(1000)` — precision within ~1 second is fine. This is a reading experience, not a DAW.

### Content Reveal
- Each block fades in when the timer reaches its timestamp.
- CSS transition: `opacity 0→1 over 1.5s, ease-in-out`.
- Blocks are pre-rendered in DOM but `opacity: 0` until triggered.
- Once visible, they stay. The page accumulates.
- On mobile, structure and shape blocks for the same approximate timestamp appear as a pair, structure first.

### Scroll Behavior
- The page will extend beyond viewport as content accumulates. Natural scroll is fine.
- When a new block appears, the page should NOT auto-scroll. The visitor controls their own scroll position. They may want to re-read earlier blocks while new ones appear below.
- `scroll-behavior: smooth` on the container is fine but no programmatic scrolling.

---

## File Structure

This is a single-page React component. One file.

```
/joga
├── page.jsx (or index.jsx — match existing theclear.ing routing)
```

If theclear.ing uses Next.js (likely, given Vercel deployment), this would be:
```
/app/joga/page.jsx
```

Check the existing repo structure and match conventions.

### Google Fonts

Import in the component or in the layout/head:
- Serif: `Cormorant Garamond` (weights: 400, 500)
- Mono: `IBM Plex Mono` (weight: 400)

Use `@import` in a style tag or Next.js font optimization — match existing pattern in the repo.

---

## What NOT To Build

- No audio player. No embedded Spotify/YouTube. Visitor uses their own.
- No visualizer. No waveform. No frequency analysis. No generative graphics.
- No explanation section, about page, or credits. Not yet — if those come later, they're a separate decision.
- No analytics (unless theclear.ing already has them globally).
- No social sharing buttons.
- No animation beyond the opacity fade on content blocks.
- No dark/light mode toggle. It's dark. That's the piece.

---

## Acceptance Criteria

The piece is done when:
1. You can press Start and watch both readings unfold over 5:05 in sync with the song.
2. Every content block appears at its designated timestamp.
3. The page works on desktop (two columns) and mobile (single column, paired blocks).
4. No content extends beyond what's specified in this file.
5. The closing line appears after the last block.
6. A stranger can visit the page, play Jóga, press Start, and understand what's happening without any context about who made it or why.
7. The fonts load. The colors are correct. The spacing breathes.

---

## Deployment

Build locally, verify all timestamps and responsive behavior. Deploy to Vercel via the existing theclear.ing pipeline (push to GitHub, Vercel auto-deploys).

The route `/joga` should be accessible at `theclear.ing/joga`.

---

## Notes for the Build Agent

- All creative decisions have been made. Do not improvise on content, color, typography, or layout.
- If something is ambiguous in this spec, choose the simpler option.
- The piece is deliberately minimal. Resist the urge to enhance it.
- Every word in the Structure and Shape readings is intentional and final. Do not edit, rewrite, or reformat the content.
- The timestamp accuracy is approximate (within a few seconds is fine). The experience is reading, not synchronization.
