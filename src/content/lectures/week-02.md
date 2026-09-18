---
title: From telescope to speaker
description: Follow a measurement through calibration, reduction, representation and playback.
week: 2
date: 2027-08-02
teachers: [amara-vale]
question: Which transformations happen before a telescope measurement reaches a listener?
dataObject: calibrated detector time series
slides: /decks/from-telescope-to-speaker/
related:
  - sessions/week-02
  - assessments/listening-notebook
---

## The question

A sonification never starts with “the universe”. It starts with an instrument,
units, sampling choices and a reduction pipeline. We draw a provenance chain
that distinguishes collected values from corrections, derived values and
presentation choices.

## Signal chain

Detector counts → remove instrument bias → attach timestamps and units →
select a time window → rescale for hearing → render. Every arrow must be
documented because each can change the claim a listener is able to make.

NASA's [Exoplanet Watch analysis guide](https://science.nasa.gov/citizen-science/exoplanet-watch/how-to-contribute/how-to-analyze-your-data/)
is a useful example: raw telescope images become a light curve only after a
named reduction process.
