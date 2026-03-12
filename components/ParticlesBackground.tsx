"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
const [init, setInit] = useState(false);

useEffect(() => {
initParticlesEngine(async (engine) => {
await loadSlim(engine);
}).then(() => {
setInit(true);
});
}, []);

if (!init) return null;

return (
<Particles
id="tsparticles"
options={{
fullScreen: { enable: false },

    particles: {
      number: { value: 100 },

      color: { value: "#ffffff" },

      links: {
        enable: true,
        color: "#ffffff",
        distance: 150,
        opacity: 0.2,
        width: 1,
      },

      move: {
        enable: true,
        speed: 0.5,
      },

      opacity: { value: 0.3 },

      size: { value: { min: 1, max: 3 } },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },

      modes: {
        grab: {
          distance: 200,
          links: { opacity: 0.6 },
        },
      },
    },
  }}

  style={{
    position: "absolute",
    inset: 0,
    zIndex: 2,
  }}
/>
);
}
