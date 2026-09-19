export interface LectureGuide {
  phase: string;
  outcomes: string[];
  example: {
    title: string;
    context: string;
    unit: string;
    values: number[];
    steps: string[];
    result: string;
  };
  check: {
    prompt: string;
    answer: string;
    explanation: string;
  };
  source: {
    title: string;
    publisher: string;
    href: string;
    purpose: string;
  };
  nextUse: string;
}

export const lectureGuides: Record<string, LectureGuide> = {
  "week-01": {
    phase: "Listening claim",
    outcomes: [
      "Distinguish physical sound, audification and parameter mapping.",
      "Write a mapping rule that another person can reconstruct.",
      "Separate a measured pattern from the musical choices used to present it.",
    ],
    example: {
      title: "One dip, two readings",
      context: "Synthetic relative brightness sampled at equal time intervals.",
      unit: "relative brightness",
      values: [0.99, 1, 0.98, 0.91, 0.83, 0.9, 0.98, 1],
      steps: [
        "Keep the sample order and interval fixed.",
        "Map 0.83 to 220 Hz and 1.00 to 660 Hz with a linear scale.",
        "Replay the same values with constant pitch and longer gaps for lower values.",
        "Record which version makes the central dip easier to locate.",
      ],
      result: "Both versions preserve the location of the dip. Only the pitch version preserves value order as pitch order. The rhythm version invents unequal playback time.",
    },
    check: {
      prompt: "A headline calls this sequence the sound of an exoplanet. What information is missing before that claim becomes checkable?",
      answer: "The source, measured quantity, processing and data-to-sound rule.",
      explanation: "A light curve records brightness over time. A speaker receives audio only after someone selects, scales and schedules those values. Naming that chain separates the observation from its audible representation.",
    },
    source: {
      title: "Exoplanet Watch overview",
      publisher: "NASA Science",
      href: "https://science.nasa.gov/citizen-science/exoplanet-watch/exoplanet-watch-overview/",
      purpose: "See how telescope images become transit light curves before any sonification begins.",
    },
    nextUse: "This distinction becomes the disclosure rule used in every later lab and assessment.",
  },
  "week-02": {
    phase: "Provenance",
    outcomes: [
      "Trace detector values through calibration, reduction and playback.",
      "Keep observed quantities separate from derived quantities.",
      "Record units and assumptions at every transformation.",
    ],
    example: {
      title: "Counts are not yet brightness",
      context: "Synthetic detector counts with a constant 100-count electronic bias.",
      unit: "detector counts",
      values: [1098, 1101, 1097, 1088, 1082, 1089, 1099, 1100],
      steps: [
        "Subtract the documented 100-count bias from every sample.",
        "Divide by the out-of-event median to obtain relative brightness.",
        "Retain timestamps and flag any rejected frame.",
        "Only then choose an audible range and playback interval.",
      ],
      result: "Bias subtraction changes the values but not their order. Normalisation changes the unit and makes the dip comparable. Neither operation creates audio.",
    },
    check: {
      prompt: "Which transformation belongs to data reduction rather than sonification: subtracting detector bias or mapping brightness to pitch?",
      answer: "Subtracting detector bias belongs to data reduction.",
      explanation: "Bias correction estimates the measured signal before representation. Pitch mapping is a later communication choice. Mixing the two makes it impossible to tell whether a feature came from the instrument or the display.",
    },
    source: {
      title: "How to analyse exoplanet observations",
      publisher: "NASA Exoplanet Watch",
      href: "https://science.nasa.gov/citizen-science/exoplanet-watch/how-to-contribute/how-to-analyze-your-data/",
      purpose: "Follow a documented route from FITS images through calibration to a light curve.",
    },
    nextUse: "The data passport in the Field Guide turns this chain into a reusable project record.",
  },
  "week-03": {
    phase: "Mapping",
    outcomes: [
      "Match data relationships to perceptually distinguishable sound dimensions.",
      "Compare linear, logarithmic and quantised scales with the same values.",
      "Select a mapping from listening evidence rather than musical preference.",
    ],
    example: {
      title: "Test the scale, not the melody",
      context: "A synthetic scalar sequence with one small and one large increase.",
      unit: "normalised value",
      values: [0.1, 0.12, 0.2, 0.24, 0.48, 0.5, 0.82, 0.9],
      steps: [
        "Render the values with a linear 220 to 660 Hz mapping.",
        "Render them again after logarithmic scaling.",
        "Quantise a third version to five pitches while keeping duration fixed.",
        "Ask listeners to locate the two largest changes without seeing the plot.",
      ],
      result: "The best mapping depends on the comparison task. Quantisation may clarify categories while erasing small differences; a logarithmic scale may expand low values and compress high ones.",
    },
    check: {
      prompt: "If a listener can rank all values but cannot judge their differences, which data relationship did the mapping preserve?",
      answer: "It preserved ordinal order, not interval size.",
      explanation: "A ranking task only requires higher and lower to remain ordered. Claims about twice as much or equal differences require a mapping whose perceptual intervals support that stronger relationship.",
    },
    source: {
      title: "The Sonification Handbook",
      publisher: "COST and Logos Publishing House",
      href: "https://sonification.de/handbook/",
      purpose: "Use the chapters on parameter-mapping sonification and auditory perception as the conceptual reference.",
    },
    nextUse: "The mapping matrix becomes the decision record for the Listening Notebook.",
  },
  "week-04": {
    phase: "Periodicity",
    outcomes: [
      "Read a pulsar period and pulse profile without treating either as music.",
      "Explain what folding preserves and what repeated averaging removes.",
      "Compare raw event timing with a folded representation.",
    ],
    example: {
      title: "Fold repeated pulses",
      context: "Synthetic intensity bins across two repeated rotations.",
      unit: "relative radio intensity",
      values: [0.08, 0.12, 0.76, 0.21, 0.09, 0.1, 0.16, 0.72, 0.25, 0.11],
      steps: [
        "Use five bins as the stated rotation period.",
        "Align the second group of five bins beneath the first.",
        "Average corresponding phase bins to create one folded profile.",
        "Compare the folded peak with the two original pulse heights.",
      ],
      result: "Folding strengthens a stable phase pattern and suppresses differences between rotations. The folded profile cannot show which individual pulse was stronger.",
    },
    check: {
      prompt: "Why would adding a steady drum grid to irregular pulse arrivals create a stronger claim than the source supports?",
      answer: "The grid introduces regular musical timing that was not measured.",
      explanation: "A published period supports phase alignment over many rotations. It does not make every detected pulse identical or every arrival free of noise. A drum grid can hide those distinctions.",
    },
    source: {
      title: "ATNF Pulsar Catalogue documentation",
      publisher: "CSIRO Australia Telescope National Facility",
      href: "https://www.atnf.csiro.au/research/pulsar/psrcat/psrcat_help.html",
      purpose: "Check parameter definitions, units and catalogue provenance before selecting a pulsar.",
    },
    nextUse: "The raw and folded pair becomes the central evidence in the Pulsar Signal Study.",
  },
  "week-05": {
    phase: "Interference",
    outcomes: [
      "Read time, frequency and intensity in a dynamic spectrum.",
      "Keep interference flags distinct from missing and measured values.",
      "Choose a scan path that does not collapse two dimensions without disclosure.",
    ],
    example: {
      title: "Retain the suspicious channel",
      context: "A synthetic frequency scan with one narrow persistent spike.",
      unit: "relative spectral power",
      values: [0.12, 0.14, 0.17, 0.84, 0.82, 0.19, 0.22, 0.18],
      steps: [
        "Plot the channel values before filtering.",
        "Mark the two high bins as suspected interference rather than confirmed solar emission.",
        "Render flagged bins with a separable timbre while preserving their positions.",
        "Compare the full and muted versions against the same identification task.",
      ],
      result: "The flagged cue preserves where the anomaly occurred without pretending its cause is known. Muting it creates a cleaner result but removes evidence of the editorial decision.",
    },
    check: {
      prompt: "What is the honest audible treatment when a bright feature may be terrestrial interference but cannot be classified from this dataset alone?",
      answer: "Keep it present, flag it distinctly and label the cause unknown.",
      explanation: "Deleting the feature would overstate certainty. Presenting it as solar would do the same. A separate cue lets the listener inspect the data while preserving the unresolved classification.",
    },
    source: {
      title: "Solar radio observations",
      publisher: "Australian Space Weather Forecasting Centre",
      href: "https://www.sws.bom.gov.au/Solar/3/1",
      purpose: "Use operational solar radio products to see how time, frequency and event context are reported.",
    },
    nextUse: "This flagging discipline carries into missing-data and uncertainty design in Week 9.",
  },
  "week-06": {
    phase: "Audification",
    outcomes: [
      "Identify strain, sampling rate and detector as parts of a GWOSC record.",
      "Separate filtering and amplification from the event's rising frequency.",
      "Compare two detectors before accepting a polished combined rendering.",
    ],
    example: {
      title: "A processing ladder for GW150914",
      context: "A schematic event envelope for comparing operations, not released strain data.",
      unit: "relative envelope",
      values: [0.05, 0.08, 0.13, 0.21, 0.36, 0.58, 0.9, 0.2],
      steps: [
        "Begin with the same short event window for both detectors.",
        "Compare raw context, band-passed data and an amplified rendering.",
        "State any speed or frequency shift independently from filtering.",
        "Use spectrograms to check whether audible clarity came from the event or the operation.",
      ],
      result: "The rising time-frequency pattern supports the chirp description. Loudness, noise suppression and placement inside the audible range belong to the rendering.",
    },
    check: {
      prompt: "A filtered version is easier to hear than the surrounding strain. Does that make it stronger detection evidence?",
      answer: "No. Audibility and detection confidence answer different questions.",
      explanation: "Filtering can expose a known pattern to human hearing, but detection uses calibrated data, detector agreement and statistical analysis. A clearer playback does not add independent evidence.",
    },
    source: {
      title: "GW150914 open data release",
      publisher: "Gravitational Wave Open Science Center",
      href: "https://gwosc.org/events/GW150914/",
      purpose: "Inspect detector files, sampling choices, quality notes and official signal-processing tutorials.",
    },
    nextUse: "The processing ladder supplies the method used in the Week 6 blind comparison.",
  },
  "week-07": {
    phase: "Spatial scan",
    outcomes: [
      "Explain how a scan path turns image space into playback time.",
      "Keep location, intensity and energy band in separable sound dimensions.",
      "Write a structured image description that survives without audio.",
    ],
    example: {
      title: "One image, three possible routes",
      context: "Synthetic brightness samples encountered during a left-to-right row scan.",
      unit: "pixel brightness",
      values: [0.08, 0.12, 0.17, 0.72, 0.3, 0.18, 0.81, 0.15],
      steps: [
        "State the scan origin, direction and total duration.",
        "Map horizontal position to playback time without changing the order.",
        "Map brightness to level and reserve timbre for energy band.",
        "Test whether a listener can locate both bright regions and identify the end.",
      ],
      result: "The scan reveals two bright regions along one row. It says nothing about pixels above or below that route, so the interface must expose the chosen path.",
    },
    check: {
      prompt: "Why can a radial scan and a row scan of the same image support different interpretations even when every pixel is included?",
      answer: "They impose different temporal neighbourhoods on the pixels.",
      explanation: "An image has spatial adjacency but no playback order. Each scan path decides which pixels arrive together and which become distant in time, changing the patterns a listener can compare.",
    },
    source: {
      title: "Chandra data sonification",
      publisher: "Chandra X-ray Center",
      href: "https://chandra.si.edu/sound/",
      purpose: "Inspect published mappings across X-ray, optical and infrared image layers.",
    },
    nextUse: "The storyboard and structured description become evidence for the Sonification Critique.",
  },
  "week-08": {
    phase: "Spectral comparison",
    outcomes: [
      "Keep wavelength separate from playback time.",
      "Use reference cues without converting scientific intervals into harmony claims.",
      "Compare spectral-line positions under a stated scale.",
    ],
    example: {
      title: "Locate a shifted emission line",
      context: "Two schematic spectra sampled on the same wavelength grid.",
      unit: "relative flux",
      values: [0.08, 0.12, 0.18, 0.76, 0.2, 0.13, 0.1, 0.08],
      steps: [
        "Keep both spectra on the same wavelength axis.",
        "Play the first left to right with spoken axis landmarks.",
        "Alternate the shifted copy without changing scale or duration.",
        "Ask listeners to report direction and approximate size of the shift.",
      ],
      result: "Playback order represents increasing wavelength, not elapsed astronomical time. A successful listener can compare line position without treating the resulting interval as physical harmony.",
    },
    check: {
      prompt: "What new structure appears the moment a static spectrum is played from left to right?",
      answer: "The designer creates a temporal order from the wavelength axis.",
      explanation: "The spectrum already has ordered wavelength samples, but it does not unfold in listening time. Playback makes that axis sequential, so duration and tempo must appear in the disclosure.",
    },
    source: {
      title: "Optical spectra tutorial",
      publisher: "Sloan Digital Sky Survey",
      href: "https://classic.sdss.org/dr7/products/spectra/",
      purpose: "Read how wavelength, flux, redshift and spectral features appear in survey products.",
    },
    nextUse: "The paired listening test supplies a concrete redesign candidate for the critique.",
  },
  "week-09": {
    phase: "Uncertainty",
    outcomes: [
      "Distinguish a measured zero, a missing sample and a low-confidence value.",
      "Give uncertainty its own bounded auditory channel.",
      "Test whether that channel clarifies or masks the primary pattern.",
    ],
    example: {
      title: "Do not interpolate silently",
      context: "Synthetic brightness values with one missing sample and unequal errors.",
      unit: "relative brightness",
      values: [1, 0.98, 0.95, 0.9, 0.86, 0.89, 0.96, 0.99],
      steps: [
        "Map the measured value to pitch.",
        "Represent error magnitude with a quiet, bounded roughness cue.",
        "Replace the missing fifth sample with an explicit gap, not a zero.",
        "Let listeners switch the uncertainty channel off for comparison.",
      ],
      result: "The gap states that no value was available. A zero tone would falsely report a measurement; interpolation would invent one unless it was separately labelled.",
    },
    check: {
      prompt: "Which is more misleading for a missing sample: silence with an announced gap or a pitch calculated from interpolation?",
      answer: "Unlabelled interpolation is more misleading.",
      explanation: "A declared gap preserves the absence of evidence. Interpolation may be useful, but it becomes a modelled value and must remain distinguishable from observations in audio, tables and methods.",
    },
    source: {
      title: "TESS light curves",
      publisher: "NASA Exoplanet Archive",
      href: "https://exoplanetarchive.ipac.caltech.edu/docs/TESSMission.html",
      purpose: "Use a real archive context to inspect time series, data products and quality information.",
    },
    nextUse: "The chosen uncertainty channel becomes a required part of the capstone design.",
  },
  "week-10": {
    phase: "Multimodal access",
    outcomes: [
      "State the scientific task independently from its visual or audio display.",
      "Test keyboard-only, no-audio and no-visual paths separately.",
      "Design coordinated alternatives instead of calling sound universally accessible.",
    ],
    example: {
      title: "One task across three representations",
      context: "The task is to locate the lowest region in a small transit-shaped sequence.",
      unit: "relative brightness",
      values: [0.99, 0.98, 0.94, 0.86, 0.88, 0.95, 0.99],
      steps: [
        "Ask the same location question with the chart only.",
        "Repeat with audio and keyboard controls while the chart is hidden.",
        "Repeat with a structured table and text summary while audio is muted.",
        "Record whether each route supports the same answer and level of precision.",
      ],
      result: "Equivalent access does not require identical experiences. Each route must still support the stated scientific task and expose the same uncertainty and provenance.",
    },
    check: {
      prompt: "A sonification works perfectly for a blind listener but has no captions, table or stop control. Is the instrument accessible?",
      answer: "No. It serves one access need while creating others.",
      explanation: "Accessibility is not a property of sound alone. Deaf and hard-of-hearing listeners, sensory-sensitive users and keyboard users need coordinated representations and controllable playback.",
    },
    source: {
      title: "A Universe of Sound",
      publisher: "Chandra X-ray Center",
      href: "https://chandra.si.edu/sound/",
      purpose: "Study a public sonification programme developed with multimodal access as an explicit goal.",
    },
    nextUse: "The three-route audit defines what the final instrument must support before public testing.",
  },
  "week-11": {
    phase: "Rhetorical audit",
    outcomes: [
      "Identify implications added by scale, timbre, harmony and reverberation.",
      "Separate measured data, mapping and composition in a public interface.",
      "Revise the cue that creates the largest unsupported listener inference.",
    ],
    example: {
      title: "Measure the certainty gap",
      context: "A noisy sequence presented first as raw values, then as quantised notes with a cadence.",
      unit: "normalised value",
      values: [0.42, 0.5, 0.47, 0.58, 0.53, 0.62, 0.57, 0.61],
      steps: [
        "Ask listeners what they think changed in the source.",
        "Reveal the quantisation, chord and reverberation added by the designer.",
        "Compare perceived certainty with the overlapping source values.",
        "Remove or relabel the strongest unsupported cue, then repeat the question.",
      ],
      result: "The cadence can make an ambiguous ending feel resolved. Disclosure identifies the addition; revision tests whether the unsupported certainty actually decreases.",
    },
    check: {
      prompt: "Why is a complete mapping legend necessary but still insufficient for an ethically persuasive sonification?",
      answer: "Disclosure enables critique but does not cancel a misleading design.",
      explanation: "A listener may still absorb the interface's musical and visual implications before reading a legend. The designer must test those inferences and revise cues that overpower the evidence.",
    },
    source: {
      title: "Data sonification collection",
      publisher: "NASA Chandra X-ray Center",
      href: "https://chandra.si.edu/sound/list.html",
      purpose: "Choose a documented public work whose mappings can be reconstructed and tested.",
    },
    nextUse: "The hostile reading becomes the final pre-release audit for the listening instrument.",
  },
  "week-12": {
    phase: "Public instrument",
    outcomes: [
      "Frame one precise astronomical question for a first-time visitor.",
      "Publish source, mapping, uncertainty and alternatives beside the interaction.",
      "Use observed visitor behaviour to justify one final revision.",
    ],
    example: {
      title: "A visitor test with a decision",
      context: "Five first-time visitors attempt the same pattern-location task.",
      unit: "successful task completion",
      values: [1, 0, 1, 1, 0, 1, 1, 1],
      steps: [
        "Let visitors begin without a verbal explanation from the designer.",
        "Record task result, control failure and interpretation separately.",
        "Group failures by interface, mapping or misunderstood scientific claim.",
        "Revise the largest repeated failure and rerun the same task.",
      ],
      result: "Preference comments may guide polish, but repeated task failures identify the consequential revision. The final note connects that change to observed evidence.",
    },
    check: {
      prompt: "Three visitors like the sound, but two of five answer the scientific question correctly. What should the release note prioritise?",
      answer: "The failed scientific task and the revision made in response.",
      explanation: "The instrument exists to support an investigation, not only a musical experience. Enjoyment is useful audience evidence, but it cannot substitute for whether the stated pattern became understandable.",
    },
    source: {
      title: "NASA Open Data Portal",
      publisher: "NASA",
      href: "https://data.nasa.gov/",
      purpose: "Select a citable public dataset whose licence, fields and retrieval path can ship with the instrument.",
    },
    nextUse: "The completed field guide becomes the methods and disclosure page submitted with the capstone.",
  },
};
