export default function AuranMark({
  size = 240,
  color = "#e8e0d4",
  className = "",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-80 -80 160 160"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Auran"
    >
      <title>Auran</title>
      <desc>
        Two arcs at rest in a fused state, drifting apart briefly into an
        hourglass shape, then re-fusing at a center point. Loops with longer
        dwell on the fused state.
      </desc>

      {/*
        Loop timing (12s total):
        0–6s   resting fused (the long dwell)
        6–8s   drifting apart (5 → 4 morph)
        8–9s   resting apart briefly (the acknowledgment)
        9–12s  re-fusing (4 → 5 morph, slower than apart on purpose)
      */}

      {/* Left arc */}
      <path fill="none" stroke={color} strokeWidth="5" strokeLinecap="round">
        <animate
          attributeName="d"
          values="M -50 -50 A 50 50 0 0 1 -50 50;M -50 -50 A 50 50 0 0 1 -50 50;M -60 -50 A 50 50 0 0 1 -60 50;M -60 -50 A 50 50 0 0 1 -60 50;M -50 -50 A 50 50 0 0 1 -50 50"
          keyTimes="0;0.5;0.667;0.75;1"
          dur="12s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0 0 1 1;0.42 0 0.58 1;0 0 1 1;0.42 0 0.58 1"
        />
      </path>

      {/* Right arc */}
      <path fill="none" stroke={color} strokeWidth="5" strokeLinecap="round">
        <animate
          attributeName="d"
          values="M 50 -50 A 50 50 0 0 0 50 50;M 50 -50 A 50 50 0 0 0 50 50;M 60 -50 A 50 50 0 0 0 60 50;M 60 -50 A 50 50 0 0 0 60 50;M 50 -50 A 50 50 0 0 0 50 50"
          keyTimes="0;0.5;0.667;0.75;1"
          dur="12s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0 0 1 1;0.42 0 0.58 1;0 0 1 1;0.42 0 0.58 1"
        />
      </path>

      {/* Fuse point — visible only when the arcs meet */}
      <circle cx="0" cy="0" fill={color}>
        <animate
          attributeName="r"
          values="5;5;0;0;5"
          keyTimes="0;0.5;0.667;0.75;1"
          dur="12s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0 0 1 1;0.42 0 0.58 1;0 0 1 1;0.42 0 0.58 1"
        />
      </circle>
    </svg>
  );
}
