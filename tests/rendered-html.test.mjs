import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("ships the complete playable game surface", async () => {
  const html = await readFile(new URL("../public/game.html", import.meta.url), "utf8");

  assert.match(html, /Barnyard Abduction/i);
  assert.match(html, /THREE\.WebGLRenderer/);
  assert.match(html, /function populateAnimals\(\)/);
  assert.match(html, /Auto','hd','balanced','battery/i);
  assert.match(html, /window\.__ready = true/);
  assert.match(html, /Tractor Beam/i);
});

test("includes high-detail concept and launch artwork", async () => {
  const assets = [
    "../public/assets/concepts/cow-to3d.png",
    "../public/assets/concepts/ufo-to3d.png",
    "../public/assets/concepts/barn-to3d.png",
    "../public/og.png",
  ];

  for (const asset of assets) {
    const info = await stat(new URL(asset, import.meta.url));
    assert.ok(info.size > 100_000, `${asset} should contain production artwork`);
  }
});
