# Review Queue — Barnyard Abduction

## RQ-001 — BA-1.0.0-oneshot
Status: READY FOR OWNER/DEVICE REVIEW
Canonical working file: `barnyard-abduction.html`
Workspace: `/Games/ChatGPT Barnyard Abduction`
GitHub: `travisliscumb-netizen/barnyard-abduction`
Build ID: `BA-1.0.0-oneshot`
File size: 687,428 bytes
SHA-256: `121cfba93e4d130c65062099709a2c0eb3d3c984319425463e5121c13be15512`

### Review focus
- iPhone portrait/landscape safe areas and touch overlap.
- UFO height/clearance and roof orientation on Farm.
- Scout framing: entire fence + visible outer margin, no all-blue view.
- Beam search/lock/lift/cancel/capture and energy recovery.
- Six farm species readability/behavior and later-map target silhouettes.
- Farmer/opposition alert/projectile readability; Farm farmer abduction and unharmed respawn.
- Radar state vs. actual targets/enemies/projectiles.
- Mission success/failure, unlock/replay, stars/coins, five upgrades, save/reload/reset.
- Cheat Lab combinations, especially population/army stress modes.
- Audio context unlock and calm/danger transition.
- Sustained FPS, battery/thermal behavior and long-session cleanup.

### Verification already completed
- JS syntax: PASS (`node --check`).
- HTML parse: PASS.
- Offline dependency static scan: PASS — no external `<script src>` or remote image dependency required for play.
- Registry assertions: PASS — 10 maps, 25 cheats, 5 upgrades, radar, altitude controls, save schema v2, self-test hook.
- Browser/WebGL runtime in this container: NOT VERIFIED; Chromium graphics backend initialization failed.

### Promotion gate
Do not overwrite `/Games/Barnyard Abduction/barnyard-abduction.html` until the owner explicitly approves promotion after device review.
