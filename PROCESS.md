# Process overview

## What I built

I built **SLOP3255: How to Hear the Universe**, a twelve-week Slop University
course in astronomical data sonification. Its position is that data does not
“sing” by itself: audible results contain decisions about scale, time and
timbre, so students must expose the chain from observation to playback. Twelve
lecture/lab pairs move from mapping through pulsars, solar radio, gravitational
waves, images and spectra into uncertainty, accessibility and ethical critique.
Four staged assessments culminate in a public listening instrument. A working
Web Audio lab compares pitch and rhythm mappings while keeping the same source
values visible.

## How I got here

I used Codex as an implementation agent, but first turned the idea into a
repo-local harness in `CLAUDE.md`. The harness fixed the course's intellectual
position, content contracts, interaction rules and two marking viewports. A
representative instruction was:

> Treat sonification as an accountable mapping from data to sound. Never call
> an output “the sound of space” without naming the source data,
> transformation and uncertainty.

Before replacing the starter, I asked the agent to encode the non-negotiable
structure as tests. Commit
[`f4c98b3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-xty116/commit/f4c98b3)
introduced a deliberately red contract for the allocated code, twelve distinct
weekly questions and data objects, twelve lab outputs, a real deck and four
assessments totalling 100%. Running it against the starter produced four
failures. That gave the implementation a concrete stopping condition rather
than relying on visual completeness.

The main build in
[`5901cbe`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-xty116/commit/5901cbe)
returned that contract to green. I directed the agent to keep the fixed SlopU
platform while replacing its content and imagery. We checked claims against
primary sources from LIGO, NASA Exoplanet Watch, Chandra and CSIRO/ATNF. The
visual treatment uses measured grids, readouts and mapping legends instead of a
generic space mood. The Listening Lab avoids autoplay, exposes raw values and
keeps stop and non-audio routes available.

Automated checks were only one sensor. I inspected the live site at 1920×1080
and 390×844, exercised both mappings and opened non-adjacent course pages and a
deck. This exposed missing styles on direct Astro pages, phone overflow, absent
index headings and illegible mobile deck scaling. Commit
[`fb4b487`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-xty116/commit/fb4b487)
records the responsive fixes. I then re-ran type checking, production build,
accessibility, internal-link, deck, generated-API and custom contract checks.

The visual pass in
[`4734793`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-xty116/commit/4734793)
initially leaned on synthetic telemetry. A rubric review made me reject that as
decoration: it looked on-topic but did not help a prospective student
understand the curriculum. I encoded the replacement contract first in
[`65172ef`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-xty116/commit/65172ef):
every week must expose outcomes, teaching values, a worked method, an explained
checkpoint and a primary source.
[`d0ff96c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-xty116/commit/d0ff96c)
then replaced telemetry with a semester atlas, twelve observation guides and a
downloadable field guide, while adding speed and level controls to the listening
comparison. I accepted it only after following the marker route through
non-adjacent weeks, assessment, deck and policies at both viewports, resizing
during playback and operating every audio control by keyboard. Earlier deck
commits
[`9beaf20`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-xty116/commit/9beaf20)
and
[`8987cd0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-xty116/commit/8987cd0)
supply 110 distinct, course-styled slides rather than one repeated outline.

A final public-browser check exposed a subtler failure: Play could appear inert
when an embedded browser left `AudioContext.resume()` pending. I rejected
“works in Chrome” as acceptance. In
[`d679c3c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-xty116/commit/d679c3c)
I paired the fix with a fallback regression contract, decoupled visual progress
from audio activation, raised the audible gain and named the blocked-audio
state. I accepted it only after the deployed page advanced its sample readout,
highlighted each bar and enabled Stop. Commit
[`773119b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-xty116/commit/773119b)
preserves that diagnosis as a harness rule rather than a one-off patch.
