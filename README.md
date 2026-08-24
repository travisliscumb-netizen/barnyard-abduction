# Barnyard Abduction — ChatGPT Working Build

## Canonical working file
`barnyard-abduction.html`

Build: `BA-1.0.0-oneshot`
Date: 2026-08-23
Architecture: single self-contained UTF-8 HTML with embedded Three.js r128.
Primary target: iPhone Safari, touch-first; keyboard fallback included.

## Working-scope rule
This repository and `/Games/ChatGPT Barnyard Abduction` are the ChatGPT implementation workspace. The original `/Games/Barnyard Abduction` Dropbox folder is intentionally untouched.

## What is implemented in the working build
- Ten-map linear campaign shell: Farm, Small Town, Campground, Rural Town, City, Military Base, Coastal Harbor, Desert Research Facility, Snowy Mountain Area, Space Launch Complex.
- Data-driven mission goals/timers/target rosters/opposition.
- Bright stylized procedural 3D world generation with distinct map palettes/landmarks.
- Farm benchmark: 425×425 property, white fence, authored farmhouse/barn, field/furrows, tractors, pond, windmill, orchard/grove, curved dirt routes, distant countryside.
- Touch joystick flight with momentum, boost energy, altitude controls (4–35), collision/boundary handling, chase camera, hold-to-scout full-map framing.
- Layered UFO and tractor beam with search/lock/lift/capture states, beam energy, target resistance, stable lock, capture feedback, and farmer abduction on Farm.
- Distinct procedural animal models and species tuning for all target types in the campaign.
- Shared opposition AI framework with map-role visual profiles, alert/chase/fire states, pooled cartoon projectiles, shields, danger state, abduction/respawn support on Farm.
- Score, combo window/cap, mission ratings, star coins, linear unlocks, replay, five permanent upgrades.
- Always-visible HUD with score, timer, target count, shield bar, alert state, beam state/progress, boost meter, circular 2D radar, cheat indicator, pause.
- Versioned localStorage save schema with defensive merge/migration and reset.
- 25-entry Cheat Lab with compatibility handling and device/quality population caps.
- Procedural Web Audio SFX/music pulses with calm/danger variation; critical states remain visible without audio.
- Responsive portrait/landscape UI, safe-area handling, reduced-motion setting, quality settings, multi-touch hold controls and keyboard help.

## Controls
Touch: left joystick = movement; BEAM = hold to capture; BOOST = hold; SCOUT = hold; ▲/▼ = altitude; pause button = pause.

Keyboard: WASD/arrows = movement; Space = beam; Shift = boost; Q = scout; R/F = altitude; Esc = pause.

## Verification performed in this environment
- Custom JavaScript passed `node --check`.
- HTML parsed successfully with Python `html.parser`.
- Static release checks passed for: embedded Three.js r128, two balanced script tags, no external script/image dependencies, ten-map registry, 25-cheat registry, five upgrades, radar, altitude controls, versioned save schema, self-test hook, and no TODO markers.
- Final file SHA-256 recorded in `REVIEW_QUEUE.md`.

## Not verified here
The available Chromium installation could not initialize a usable headless graphics backend in this container, so WebGL runtime rendering and device FPS were not truthfully measured here. iPhone Safari portrait/landscape play, touch feel, audio unlock, visual clipping and sustained FPS remain owner/device review items. Do not mark the build FINALIZED until those are checked.
