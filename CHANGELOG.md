# Changelog — Barnyard Abduction — ChatGPT Working Copy

Format: Date | Section/Step | Reason | Description | Affected dependencies | Testing performed

## 2026-08-23 — Owner one-shot directive — BA-1.0.0-oneshot
- Section/Step: S01–S17 integrated build pass.
- Reason: Owner explicitly superseded the earlier S06-only execution boundary and authorized a complete one-shot build in the isolated `/Games/ChatGPT Barnyard Abduction` workspace.
- Source reviewed: locked game docs plus raw `barnyard-abduction-visual-upgrade.html` and `barnyard-abduction-full.html` from the project library. The visual-upgrade prototype was used as a salvage source, not promoted wholesale.
- Description:
  - Preserved embedded Three.js r128 for offline single-file operation.
  - Kept and extended the ten-map procedural campaign shell.
  - Added/expanded three-axis UFO control, boost energy, altitude 4–35, input cancellation, scout fit math, radar, beam energy/state/progress, resistance-based lifting, farmer abduction/respawn, map-role opposition profiles, scoring modifiers, five upgrades, save schema migration, HUD telemetry, 25-cheat Cheat Lab, weather hooks, adaptive audio layer, accessibility/help UI, and static self-test hook.
  - Added safeguards for incompatible size/roster cheats and population caps.
  - Kept all work inside the ChatGPT working copy / GitHub coding workspace. Original Dropbox project was not edited.
- Affected dependencies: all game systems are integrated into the single HTML; further changes should preserve map-agnostic interfaces and the save schema.
- Testing performed: `node --check` on custom JS; Python HTML parse; static assertions for offline dependencies, script balance, map count, cheat count, upgrade count, radar, altitude controls, save schema, self-test hook, and TODO absence. Headless Chromium attempts failed because this container could not initialize a usable graphics backend; therefore WebGL runtime, iPhone Safari, touch feel, visual QA and FPS are explicitly unverified.

## Earlier history
The copied `.pre-step*.md` and `.pre-fullplan.md` files preserve earlier project history unchanged.
