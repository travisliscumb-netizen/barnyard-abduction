# Barnyard Abduction

A touch-first 3D arcade campaign: pilot a UFO through ten progressively harder environments, capture the required targets, evade defenders, earn stars, and upgrade the craft. The visual rebuild uses a bright stylized cartoon-realism direction while keeping the original controls, missions, progression, upgrades, settings, and save data.

## Play

- Touch: left stick to fly; hold **Beam**, **Boost**, or **Scout**; use ▲/▼ to change altitude.
- Keyboard: `WASD` or arrows to fly, `Space` to beam, `Shift` to boost, `E` to scout, and `Q`/`R` to descend/ascend.
- Campaign: Farm, Small Town, Campground, Rural Town, City, Military Base, Coastal Harbor, Desert Research Facility, Snowy Mountain Area, and Space Launch Complex.
- Bonus: the menu links to a high-detail Rolling Acres farm challenge at `/farm-hd.html`.

## Rebuild highlights

- Ten distinct, dressed 3D maps with map-specific structures, roads, vegetation, props, targets, and defenders.
- Rebuilt gambrel barn, layered UFO, animated tractor beam, textured terrain, atmospheric sky, cloud layer, lighting, shadows, particles, and richer silhouettes.
- Mission radar, altitude readout, scout overview, shield/alert feedback, touch-safe controls, and responsive safe-area layout.
- Persistent campaign stars, unlocks, coins, upgrades, settings, and local saves.
- Auto, HD, and Battery Saver rendering with mobile-aware pixel density and automatic runtime downshifting.
- Installable web app shell and embedded Three.js runtime for reliable static delivery.

## App structure

- `app/page.tsx` — full-screen game host and launch layer.
- `public/game.html` — rebuilt ten-mission campaign.
- `public/farm-hd.html` — high-detail farm bonus challenge.
- `public/og.png` — launch/social key art.
- `public/assets/` — supplied reference and 3D-conversion concept art.
- `BUILD_REPORT.md` — detailed implementation and verification report.

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
