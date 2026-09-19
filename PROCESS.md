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

A final visual pass in
[`4734793`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-xty116/commit/4734793)
made the course interface behave more like a listening observatory than a
generic template. I retained the fixed SlopU identity and palette, but moved the
surfaces into a dark instrument environment with scan lines, signal colours and
a synthetic telemetry display. Its animation can be paused and is disabled by
the user's reduced-motion preference; the panel also states that it is a visual
simulation rather than scientific evidence. I expanded the original single
deck so every lecture owned a unique route. Commit
[`9beaf20`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-xty116/commit/9beaf20)
then replaced the outline-like decks with 110 taught slides: evidence tables,
synthetic plots, process diagrams and distinct lab briefs tied to each week's
data object. I raised the contract to require at least eight slides per lecture
and measured every slide at 1920×1080 and 390×844 so depth could not regress
into repeated content-shaped chunks.
Commit
[`8987cd0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-xty116/commit/8987cd0)
aligned every deck's colours and type with the course observatory.
