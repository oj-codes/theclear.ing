"use client";

import { useState, useEffect, useRef } from "react";

const structureBlocks = [
  {
    time: 0,
    text: `Synthetic pad. Shimmering, no pulse, no tonal center committed to. Functions like negative space.\n\nYou think this is atmosphere.`,
  },
  {
    time: 22,
    text: `Voice enters. Nearly a cappella against the pad. She's doing all the harmonic work — the synth isn't accompanying her. She's accompanying it, giving it a reason to exist retroactively.\n\nFirst reframe: the opening was always waiting for this.`,
  },
  {
    time: 50,
    text: `Strings begin. Not an entrance — an emergence. They were harmonically implied by the voice and now they're explicit.\n\nThe opening pad gets reclassified. It was never texture. It was ground.`,
  },
  {
    time: 70,
    text: `Strings fully committed. Gravity arrives. What sounded like drifting was always falling in a specific direction.\n\nThe voice shifts from carrying the harmony to riding it.`,
  },
  {
    time: 98,
    text: `Beat enters. Industrial-electronic, almost confrontational against the strings.\n\nThird reframe: the strings you thought were the destination are the middle layer. The architecture has three floors and you're standing on one that didn't exist thirty seconds ago.`,
  },
  {
    time: 125,
    text: `Full convergence. All elements present. Nothing new is added for almost a full minute.\n\nThe song is letting you hear what it built. This is the equivalent of turning the lights on in a room you assembled in the dark.`,
  },
  {
    time: 170,
    text: `Elements thin. Beat pulls back. Strings sustain but stop climbing.\n\nFalse resolution — feels like descent but it's a platform.`,
  },
  {
    time: 190,
    text: `The bass texture shifts underneath everything. The foundation you've been standing on since 0:00 just got swapped out while you were looking at the ceiling.\n\nFourth reframe. Most subtle. Most disorienting.`,
  },
  {
    time: 210,
    text: `Rebuild. Elements return but sit differently on the new foundation. Same components, different architecture.\n\nThe same building heard from a different room.`,
  },
  {
    time: 250,
    text: `Voice takes primacy again. Returns to the role it had at 0:22 — carrying the harmony — but now carrying the weight of everything built underneath it.\n\nSame gesture. Completely different meaning. Final reframe.`,
  },
  {
    time: 280,
    text: `Elements dissolve. Not a clean unwind — the building becoming transparent.\n\nThe last thing you hear is close to the first thing you heard. But you can't unhear the architecture.`,
  },
];

const shapeBlocks = [
  {
    time: 0,
    color: "#c4956a",
    text: `A library. Books opening and closing on their own.`,
  },
  {
    time: 15,
    color: "#c4956a",
    text: `Zooming in on one book. The page curls. Inside the book there's a mountain.`,
  },
  {
    time: 50,
    color: "#d4a07a",
    text: `At the top of the mountain, a snowy peak. Clouds surround it and flow around it and down it like a waterfall.\n\nThe sky is pink and orange.`,
  },
  {
    time: 79,
    color: "#b89878",
    text: `The cloud waterfall keeps flowing over the mountain. The clouds turn more gray but the sky holds its color — sunset or sunrise, you can't tell which.\n\nThe camera is fixed. Just watching.`,
  },
  {
    time: 115,
    color: "#7a9aaa",
    text: `The camera flows down the clouds into an ocean.\n\nNow you're under the water. Bubbles. No animals, no life. Just the water.`,
  },
  {
    time: 135,
    color: "#5a7a8a",
    text: `Getting darker as you go lower.\n\nIt gets darker and darker.`,
  },
  {
    time: 155,
    color: "#c49a5c",
    text: `A glowing floor. White sand. You're on the ocean floor now, walking around on it.\n\nGlowing floor but dark ceiling. Suffocating. Cold.`,
  },
  {
    time: 180,
    color: "#c49a5c",
    text: `The mountain was warm. You can feel the contrast now.\n\nThe floor glows amber — orangey, yellow, pulsing. The rest is dark. You can barely see ahead of you even with the glow. Walking forward, no direction. Just going.`,
  },
  {
    time: 230,
    color: "#8a8a7a",
    text: `It shifts. From underwater to underground.\n\nA cave. Stalagmites.`,
  },
  {
    time: 240,
    color: "#7a7a72",
    text: `Rock formations coming from the ceiling. Water dripping down them.\n\nZooming in on the water as it drips onto the floor.`,
  },
  {
    time: 280,
    color: "#6a6a64",
    text: `A puddle on the cave floor. Water dripping into it.\n\nFading out.`,
  },
];

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function Joga() {
  const [started, setStarted] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!started) return;

    startTimeRef.current = Date.now();

    function tick() {
      const now = Date.now();
      const secs = (now - startTimeRef.current) / 1000;
      setElapsed(secs);
      if (secs < 310) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [started]);

  const handleStart = () => {
    setStarted(true);
  };

  const closingVisible = elapsed >= 295;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#0a0a0a",
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      {/* Title Section */}
      <div
        className="flex flex-col items-center justify-center pt-16 pb-8 px-8"
        style={{
          transition: "opacity 1.5s ease-in-out",
          opacity: started ? 0.3 : 1,
        }}
      >
        <h1
          className="text-5xl md:text-6xl font-medium tracking-widest mb-3"
          style={{ color: "#e8e0d4" }}
        >
          J&Oacute;GA
        </h1>
        <p
          className="text-lg tracking-wide"
          style={{
            color: "#e8e0d4",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Structure &amp; Shape
        </p>
      </div>

      {/* Start Button / Timer */}
      <div className="flex justify-center pb-8">
        {!started ? (
          <div className="flex flex-col items-center gap-6">
            <p
              className="text-sm tracking-wide"
              style={{
                color: "#e8e0d4",
                fontFamily: "'IBM Plex Mono', monospace",
                opacity: 0.6,
              }}
            >
              Play J&oacute;ga on your device. Press Start.
            </p>
            <button
              onClick={handleStart}
              className="px-8 py-2 text-sm tracking-widest uppercase cursor-pointer bg-transparent"
              style={{
                color: "#e8e0d4",
                border: "1px solid #e8e0d4",
                fontFamily: "'Cormorant Garamond', serif",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = "0 0 15px rgba(232, 224, 212, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = "none";
              }}
            >
              start
            </button>
          </div>
        ) : (
          <span
            className="text-sm font-mono"
            style={{
              color: "#4a4a4a",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            {formatTime(elapsed)}
          </span>
        )}
      </div>

      {/* Content Area */}
      {started && (
        <div className="px-6 md:px-12 pb-16">
          {/* Desktop: Two Columns */}
          <div className="hidden md:flex max-w-6xl mx-auto">
            {/* Structure Pane */}
            <div className="flex-1 pr-8" style={{ borderRight: "1px solid #1a1a1a" }}>
              {structureBlocks.map((block, i) => (
                <div
                  key={`s-${i}`}
                  className="mb-6"
                  style={{
                    opacity: elapsed >= block.time ? 1 : 0,
                    transition: "opacity 1.5s ease-in-out",
                  }}
                >
                  <div
                    className="text-xs mb-2"
                    style={{
                      color: "#3a3a3a",
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    {formatTime(block.time)}
                  </div>
                  <div
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{
                      color: "#8a9bae",
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    {block.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Shape Pane */}
            <div className="flex-1 pl-8">
              {shapeBlocks.map((block, i) => (
                <div
                  key={`sh-${i}`}
                  className="mb-6"
                  style={{
                    opacity: elapsed >= block.time ? 1 : 0,
                    transition: "opacity 1.5s ease-in-out",
                  }}
                >
                  <div
                    className="text-xs mb-2"
                    style={{
                      color: "#3a3a3a",
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    {formatTime(block.time)}
                  </div>
                  <div
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{
                      color: block.color,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1rem",
                    }}
                  >
                    {block.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Single Column, paired blocks */}
          <div className="md:hidden max-w-lg mx-auto">
            {getMobileBlocks().map((block, i) => (
              <div
                key={`mob-${i}`}
                className={block.pane === "shape" ? "mb-6 pl-4" : "mb-6"}
                style={{
                  opacity: elapsed >= block.time ? 1 : 0,
                  transition: "opacity 1.5s ease-in-out",
                  ...(block.pane === "shape" ? { borderLeft: "1px solid #1a1a1a" } : {}),
                }}
              >
                <div
                  className="text-xs mb-2"
                  style={{
                    color: "#3a3a3a",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {formatTime(block.time)}
                </div>
                <div
                  className="leading-relaxed whitespace-pre-line"
                  style={{
                    color: block.pane === "structure" ? "#8a9bae" : block.color,
                    fontFamily: block.pane === "structure"
                      ? "'IBM Plex Mono', monospace"
                      : "'Cormorant Garamond', serif",
                    fontSize: block.pane === "structure" ? "0.875rem" : "1rem",
                  }}
                >
                  {block.text}
                </div>
              </div>
            ))}
          </div>

          {/* Closing Line */}
          <div
            className="text-center mt-16 px-4"
            style={{
              opacity: closingVisible ? 1 : 0,
              transition: "opacity 1.5s ease-in-out",
            }}
          >
            <p
              className="text-xl md:text-2xl"
              style={{
                color: "#e8e0d4",
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Same song. Same five minutes. Two people who weren&apos;t in the same room.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Merges structure and shape blocks into a single sorted list for mobile.
 * Structure blocks appear before shape blocks at the same timestamp.
 */
function getMobileBlocks() {
  const merged = [
    ...structureBlocks.map((b) => ({ ...b, pane: "structure" })),
    ...shapeBlocks.map((b) => ({ ...b, pane: "shape" })),
  ];
  merged.sort((a, b) => {
    if (a.time !== b.time) return a.time - b.time;
    return a.pane === "structure" ? -1 : 1;
  });
  return merged;
}
