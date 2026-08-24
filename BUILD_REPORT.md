# Build Report — BA-1.0.0-oneshot

## Completed
A single-file offline working build was produced from the raw visual-upgrade prototype and the locked game specifications. It includes the ten-map campaign framework and the integrated gameplay/meta systems requested by the one-shot directive.

## Canonical working file
`/Games/ChatGPT Barnyard Abduction/barnyard-abduction.html`
Build ID: `BA-1.0.0-oneshot`
Size: 687,428 bytes
SHA-256: `121cfba93e4d130c65062099709a2c0eb3d3c984319425463e5121c13be15512`

## Major systems delivered
UFO/camera/scout/radar; beam; animals; opposition/farmer abduction; missions/campaign; scoring/combos; five upgrades; HUD/UI; 25 cheats; localStorage save schema v2; procedural audio; environmental/weather hooks; accessibility/help; static self-test.

## Visual result
The build uses the brighter visual-upgrade procedural asset base rather than the 17 KB prototype. Farm hero structures have layered construction, red barn/blue-roof farmhouse language, rounded vegetation, white fence, pond/windmill/field landmarks, and a metallic cyan-lit UFO/beam/HUD direction.

## Tests performed
- `node --check` on the custom JavaScript: PASS.
- Python HTML parsing: PASS.
- Static release matrix assertions: PASS.
- SHA-256 and file-size capture: PASS.
- Chromium/WebGL smoke test: attempted, but the container Chromium installation could not initialize a graphics backend, so no runtime rendering/FPS claim is made.

## Documentation updated
README.md, FEATURE_REGISTRY.md, CHANGELOG.md, PROTOTYPE_EXPERIMENTS.md, NEXT_TASK.md, REVIEW_QUEUE.md, BUILD_REPORT.md in the ChatGPT working scope.

## Known limitations
No verified iPhone Safari run or measured FPS in this environment. Visual clipping, actual touch feel, Web Audio unlock behavior and long-session resource growth require device review. Studio documents outside `/Games/ChatGPT Barnyard Abduction` were intentionally not modified because the owner restricted ChatGPT work to the isolated working folder.

## Owner decision needed
None for the working build. Promotion to the original project requires explicit owner approval after review.
