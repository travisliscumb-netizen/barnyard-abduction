"use client";

import { useState } from "react";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <main className="game-shell">
      <iframe
        className="game-frame"
        src="/game.html"
        title="Barnyard Abduction"
        allow="autoplay; fullscreen; gamepad"
        onLoad={() => setReady(true)}
      />
      <div className={`boot-screen${ready ? " boot-screen--hidden" : ""}`}>
        <div className="boot-screen__wash" />
        <div className="boot-screen__content">
          <span className="boot-screen__eyebrow">Map 01 · Rolling Acres Farm</span>
          <h1>Barnyard Abduction</h1>
          <p>Beam. Boost. Escape.</p>
          <div className="boot-screen__loader" aria-label="Loading game">
            <span />
          </div>
        </div>
      </div>
    </main>
  );
}
