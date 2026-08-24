# Feature Registry — Barnyard Abduction — ChatGPT Working Build

Status vocabulary: PLANNED | DESIGN_FINAL | BUILDING | REVIEW_READY | TESTING | FINALIZED | BLOCKED

| Step | System | Design Status | Implementation Status | Evidence / notes |
|---|---|---|---|---|
| S01 | Foundation | DESIGN_FINAL | REVIEW_READY | Single HTML, embedded Three.js r128, state/save/input/audio/render structure retained in one file. Static parse/syntax checks passed. |
| S02 | Farm World | DESIGN_FINAL | REVIEW_READY | 425×425 farm, fence, house, barn, field/furrows, pond, windmill, grove, curved roads, countryside. |
| S03 | UFO Controller | DESIGN_FINAL | REVIEW_READY | Touch/keyboard movement, momentum, boost energy, 4–35 altitude, collision/push-out, orientation feedback. |
| S04 | Camera + Scout + Radar | DESIGN_FINAL | REVIEW_READY | Chase camera, aspect-aware scout fit, coordinated far/fog, circular 2D radar. |
| S05 | Mission Structure / Progression | DESIGN_FINAL | REVIEW_READY | Ten mission definitions, goals/timers, linear unlock, replay, ratings, rewards. |
| S06 | Tractor Beam | DESIGN_FINAL | REVIEW_READY | Hold beam, energy, search/lock/lift/capture states, resistance, stable lock, VFX hooks/feedback. |
| S07 | Farmer / Opposition AI | DESIGN_FINAL | REVIEW_READY | Shared AI with role profiles; patrol/investigate/alert/chase/projectile behavior and map-role styling. |
| S08 | Farmer Abduction | DESIGN_FINAL | REVIEW_READY | Farm opposition can be beamed, abducted, bonus-scored, removed temporarily, respawned unharmed; bonus cooldown. |
| S09 | UFO Damage/Shields + Danger | DESIGN_FINAL | REVIEW_READY | Shields, hit feedback, alert pressure and danger music behavior; God Mode hook. |
| S10 | Scoring/Combos | DESIGN_FINAL | REVIEW_READY | Species values, 4.5s combo behavior/cap, score modifiers, duplicate capture guard. |
| S11 | Cheat System + HUD | DESIGN_FINAL | REVIEW_READY | 25 cheats registered; HUD/radar/beam/boost/cheat status added. |
| S12 | Environmental Effects | DESIGN_FINAL | REVIEW_READY | Map ambience/procedural scenery plus low-cost rain/snow hooks and beam particles. |
| S13 | UI/Settings + Saving | DESIGN_FINAL | REVIEW_READY | Mission select, upgrades, settings, cheats, help, pause/results, localStorage schema v2. |
| S14 | Audio | DESIGN_FINAL | REVIEW_READY | Offline Web Audio SFX and calm/danger procedural music pulses. |
| S15 | Optimization | DESIGN_FINAL | REVIEW_READY | Shared materials/geometries from prototype, population caps, quality-aware outline/population behavior, pooled arrays; runtime FPS not measured here. |
| S16 | Regression Pass | DESIGN_FINAL | TESTING | Static regression passed. WebGL runtime/device pass still required. |
| S17 | Polish / Release / Campaign | DESIGN_FINAL | REVIEW_READY | All ten map builders/mission entries remain in one working file; final device visual/feel review still required. |

## Current implementation truth — 2026-08-23
The working file is no longer the 17 KB Map-1-only prototype. It is a ~687 KB self-contained build derived from a raw-code review of `barnyard-abduction-visual-upgrade.html`, preserving its embedded Three.js r128 and procedural art work while replacing/expanding systems required by the owner’s one-shot directive.

No row is marked FINALIZED because iPhone Safari and usable WebGL runtime verification were not available in this execution environment.
