# Barnyard Abduction — 3D Web App Build Report

## Outcome

The strongest existing prototype was rebuilt as a production-shaped, touch-first web game centered on the high-fidelity Rolling Acres Farm vertical slice. The project intentionally favors depth, responsiveness, and visual clarity over exposing the older shallow ten-map shell.

## Source consolidation

- Searched and inspected the three matching Dropbox project trees: `/Barnyard Abduction Studio`, `/Games/Barnyard Abduction`, and `/Games/ChatGPT Barnyard Abduction`.
- Retrieved 129 matching files and compared the complete historical builds, current project documentation, canonical art, and milestone notes.
- Used the Map 1 rebuild from the linked GitHub development lineage as the gameplay baseline because it already contained the strongest farm simulation, creature set, camera behavior, collision model, farmer AI, and touch controls.
- Excluded unrelated backup and temporary test files from the product source.

## Major upgrades

- Cinematic key-art launch and social presentation.
- Physically based farm, creature, glass, water, and metal materials.
- ACES tone mapping, sRGB output, stronger hero lighting, UFO core/underside detailing, beam point light, and screen-space feedback.
- Barn facade depth, cupola detail, and weather vane.
- Adaptive Auto/HD/Balanced/Battery renderer presets.
- Self-contained Web Audio effects and persistent mute preference.
- Persistent best score.
- Full herd, farmer, UFO, projectile, and particle reset on replay.
- Installable web manifest and mobile viewport treatment.
- Conversion-ready high-detail cow, UFO, and barn concept images under `assets/concepts/`.

## 3D conversion pipeline

The three conversion references were committed to the feature branch and sent to the selected to3D workflow as high-quality glTF/game jobs. URL validation succeeded, while the generation endpoint returned a backend `400 Failed to generate 3D model` during this run. The live game therefore uses its polished procedural Three.js hero models as the reliable fallback; the references and insertion points remain ready for generated glTF replacements when the service accepts jobs again.

## Verification

- Inline game JavaScript parse check: passed.
- Vinext production build: passed.
- ESLint: passed.
- Node integration and artifact tests: passed.

## Branch

`codex/3d-webapp-upgrade-2026-08-24`
