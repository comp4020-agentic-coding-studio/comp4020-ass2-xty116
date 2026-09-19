# Process overview

## What I built

I built **SLOP3255: How to Hear the Universe**, a twelve-week Slop University
course about astronomical data sonification. Its central position is that data
does not “sing” by itself: an audible result is produced by choices about
scaling, timing, filtering, timbre and interaction. The course therefore asks
students to expose the chain from observation to playback. Twelve lectures and
twelve Listening Labs move from basic mapping through pulsars, solar radio,
GW150914, image scanning and spectra, then into uncertainty, accessibility and
ethical critique. Four staged assessments culminate in a public listening
instrument. The site also contains a working Web Audio lab in which the same
synthetic light curve can be heard through pitch or rhythm while its values and
mapping rules remain visible.

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
platform while replacing all starter content and imagery. We checked scientific
claims against primary institutional sources including LIGO, NASA Exoplanet
Watch, Chandra and CSIRO/ATNF. The generated observatory hero was used as a
course-specific visual asset, while the page treatment used measured grids,
readouts and mapping legends instead of a generic space aesthetic. The
Listening Lab uses no autoplay, exposes raw values, provides a stop control and
keeps a non-audio representation on screen.

Automated checks were only one sensor. I inspected the live site at 1920×1080
and 390×844, exercised play, stop and both radio modes, and opened the week-six
deck and non-adjacent course pages. This caught issues the build did not:
course styles were absent from direct Astro pages, the ten bars scrolled on a
phone, index pages lacked visible headings, and Reveal's default mobile scaling
made deck text too small. Commit
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
