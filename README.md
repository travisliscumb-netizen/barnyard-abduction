# Barnyard Abduction

A touch-first 3D arcade game built around one polished vertical slice: pilot a UFO over Rolling Acres Farm, lock the tractor beam onto six animal species, dodge the farmer, and complete the abduction before time expires.

## Play

- Touch: left stick to fly, hold **Tractor Beam** to abduct, **Boost** for speed, and **Scout** for the full-farm camera.
- Keyboard: `WASD` or arrow keys to fly, `Space` to beam, `Shift` to boost, `E` to scout, and `Q`/`R` to change altitude.
- The HUD includes score, combo scoring, mission timer, hull, target reticle, and radar.

## Visual and game systems

- Detailed procedural UFO, barn, farmhouse, windmill, pond, field, road network, fencing, trees, and distant scenery.
- Eighteen animals across cow, horse, sheep, pig, chicken, and goat species.
- Physically based materials, ACES tone mapping, sRGB output, soft shadows, beam lighting, particles, impact flashes, and adaptive pixel density.
- Auto, HD, Balanced, and Battery quality modes.
- Touch-first controls with keyboard fallbacks.
- Synthesized launch, beam, capture, impact, and result audio with a mute toggle.
- Reliable replay reset and locally persisted best score.

## App structure

- `app/page.tsx` — full-screen game host and cinematic boot layer.
- `public/game.html` — self-contained Three.js game runtime.
- `public/og.png` — launch/social key art.
- `public/assets/concepts/` — conversion-ready cow, UFO, and barn model references.
- `public/assets/reference/` — canonical Dropbox reference art used for layout and style alignment.
- `docs/SOURCE_MANIFEST.md` — source discovery and provenance summary.
- `BUILD_REPORT.md` — implementation and verification report.

## Development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Verification:

```bash
npm run lint
npm test
```

The app is packaged with Vinext for OpenAI Sites. The game itself remains a static route at `/game.html`, wrapped by the main application route for metadata, loading state, and installable-web-app behavior.
