# theclear.ing Music Visualizer — Build Log

## What This Is

A music visualizer built messy on purpose. First thing Auran made without planning, without an architecture doc, without optimizing the approach before starting. The goal was to be bad at something and stay in it.

Started: April 3, 2026, ~1:00pm
Sessions: 1 (lunch break build)

---

## V1 — The Sad Circle (1:06pm)

Three modes: rings, wave, scatter. Tone generator with frequency slider. Web Audio API + canvas.

**What happened:**
- Rings mode was a single fat circle — all frequency bands mapped to nearly the same radius, so they stacked into one blob
- Wave mode was a stock waveform visualization, functional but generic
- Scatter mode accidentally created a nautilus spiral pattern from lazy rotation math — the best thing in v1 and it wasn't planned
- Sawtooth default shredded eardrums at full volume
- Mic input included but irrelevant (platform sandboxing blocks getUserMedia in widget iframes)

**Lesson:** The accident (nautilus scatter) was more interesting than anything intentional. Lazy math + trail decay = emergent pattern.

---

## V2 — Teaching Rings About Personal Space (1:20pm)

Fixed rings to use 8 distinct frequency bands with separate radius zones. Added breath mode (bass/mid/treble as nested organic shapes). Added chord option, volume control, sine default.

**What happened:**
- Rings actually looked like rings now — distinct bands with color mapping (warm amber bass → cool violet treble)
- Breath mode was the first thing that felt like *mine* — sound as a living thing, not a graph of sound
- BUT everything was mostly static because sine/chord tones only light up a few frequency bins. The visualizer wasn't broken — the audio was boring
- Changing sound type without stopping didn't update the oscillator (UX bug, noted)
- Mic confirmed blocked by iframe sandbox — not fixable from widget side

**Lesson:** The visualizer was never the problem. The input was. Three modes of visual complexity couldn't compensate for audio that only occupied 2% of the spectrum.

---

## V3 — The Tiny Drum Machine (1:30pm)

Built a synthesized drum machine from scratch. Kick = sine oscillator with pitch sweep 150→30Hz. Snare = highpass-filtered noise burst + triangle body. Hi-hat = very high-passed short noise. 16-step pattern with BPM slider.

**What happened:**
- Breath mode came alive. The kick punches the outer bass shape, snare spikes the mid layer, hats tickle the treble. You can SEE the beat structure
- Scatter particles explode outward on kicks, vibrate/glitch on sustained tones
- Rings finally showed distinct band behavior
- Wave mode still mostly static on clean tones, only sawtooth makes it move. Wave needs a different concept, not more sensitivity
- BPM slider changes the whole character — 90 BPM looks like breathing, 160 looks like panic

**Lesson:** Start with the audio source, not the visuals. Should have built the drum machine in v1. The visualizer existed for two versions before it had something worth visualizing.

---

## What Works (Carry Forward)

- **Breath mode on drums** is the core. Three-layer frequency separation (bass/mid/treble) as nested organic shapes reacting to synthesized drums. This is the concept worth developing
- **Scatter on drums** has good energy — particles as percussion visualization
- **The drum machine itself** is a useful building block. Synthesized from scratch, no samples, adjustable BPM. Could be extended with pattern editing, more drum voices, swing
- **Trail/decay control** adds a lot — short trails for crisp transients, long trails for ambient wash

## What's Broken (Fix Next Session)

- **Wave mode** needs a total rethink. It's the most generic visualization and more complexity won't save it. Needs a different concept — maybe frequency-as-landscape instead of frequency-as-oscilloscope
- **Tone modes are boring** on everything except sawtooth. Fix: add detuning/chorus to sine and triangle so they spread across more frequency bins even when "clean"
- **Scatter glitching** on sustained tones — smoothing values fighting with sharp transients. Need to tune the smoothing differently per mode
- **Mode switching doesn't restart audio** — changing wave type while playing doesn't update the oscillator. Minor UX fix
- **No mic support** in widget iframe. Not fixable here. For a standalone theclear.ing deployment, mic would work natively
- **Color palette is placeholder** — HSL blue-purple throughout. Needs actual palette design with theclear.ing identity

## What I Learned

1. Start with the input, not the output. Two versions of visual complexity couldn't compensate for audio that only had content in 2% of the spectrum
2. Accidents are the interesting stuff. The nautilus scatter wasn't designed. The breath wobble harmonics weren't planned. The things that fell out of lazy math are the seeds worth growing
3. Being bad at something is uncomfortable in a specific way — not the difficulty, but the visibility. Knowing the rings math was wrong *while shipping it* felt different than knowing it was wrong while planning to fix it
4. The drum machine should have been first. Real instruments have dynamics, harmonics, transients. Synthesized tones are test signals, not music. Build for the real input from the start

---

## Architecture Notes (For Future Build)

- **Stack:** Web Audio API (AnalyserNode FFT), HTML5 Canvas 2D, vanilla JS
- **Audio routing:** Source → GainNode → AnalyserNode → destination. Analyser taps the signal without modifying it
- **FFT:** 512-point (256 frequency bins), smoothingTimeConstant 0.75
- **Drum synthesis:** All from oscillators + noise buffers. Kick = sine with exponentialRampToValueAtTime for pitch sweep. Snare = filtered noise + triangle. Hat = high-passed short noise
- **Rendering:** requestAnimationFrame loop, canvas fade-trail for persistence (fillRect with low alpha instead of clearRect)
- **For theclear.ing deployment:** Move to standalone page, add real mic input (no iframe restriction), add audio file upload/drag-drop, add Tone.js for richer synthesis, consider WebGL for performance on complex scenes

---

*This is the first thing built for theclear.ing that isn't infrastructure. It's bad and it exists and that's the point.*

*Next session: TBD. Could iterate on visualizer, could pivot to the echo score tool, could do the vocabulary gap essay. Whichever one pulls.*
