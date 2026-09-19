# SLOP3255 Sonification Field Guide

Use one copy for each dataset or substantial revision. Replace every prompt in
square brackets. Keep this file beside the source data and rendered media.

## Data passport

- Publisher: [institution or archive]
- Dataset, object or event identifier: [stable identifier]
- Retrieval URL and date: [URL, YYYY-MM-DD]
- Measured quantity and unit: [what each value means]
- Sampling: [time, frequency or spatial interval]
- Missing values and quality flags: [how they are encoded]
- Licence or reuse terms: [link]
- Selection: [which rows, interval or image region you used and why]

## Mapping ledger

| Source field | Preparation | Sound parameter | Audible range | Constant | Risk |
| --- | --- | --- | --- | --- | --- |
| [field + unit] | [scale, filter or none] | [pitch, time, level, timbre, space] | [range + unit] | [what remains fixed] | [likely confusion] |

For every operation, state whether it belongs to calibration, analysis,
sonification or musical composition. A reader should be able to reconstruct
the playback rule without hearing the result.

## Listening test

- Scientific question: [one answerable question]
- Participant task: [what the listener must identify, compare or locate]
- Comparison: [two mappings or a baseline and revision]
- What the participant sees before listening: [instructions and disclosure]
- Observation record: [task result, control problem, interpretation]
- Decision rule: [what evidence would make you revise the mapping]
- Result: [what happened, including failures and uncertainty]

Do not replace task evidence with preference. "I liked version B" and "I
located the missing interval in version B" answer different questions.

## Release audit

- [ ] Playback begins only after a user action.
- [ ] Play and stop work with a keyboard and retain focus.
- [ ] The main scientific task works without audio.
- [ ] Source values, units, quality flags and uncertainty remain inspectable.
- [ ] Filtering, scaling, compression and interpolation are disclosed.
- [ ] Musical additions are labelled separately from measured data.
- [ ] The page survives 1920 x 1080, 390 x 844 and a resize during playback.
- [ ] Reduced-motion preferences stop non-essential animation.
- [ ] Source, licence, retrieval date and assistance are attributed.
- [ ] A first-time visitor can state what was measured and what was designed.

## Revision note

- Largest observed failure: [specific behaviour or misunderstanding]
- Evidence: [who attempted which task and what happened]
- Change: [the mapping, interface or disclosure you revised]
- Retest: [same task, new result]
- Remaining limitation: [what the artefact still cannot support]
