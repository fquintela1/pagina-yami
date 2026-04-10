const sp = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none" as const,
};

function MiniVulva() {
  return (
    <g>
      <path
        d="M0,-12 C-9,-9 -10,-2 -10,4 C-10,9 -5,12 0,13 C5,12 10,9 10,4 C10,-2 9,-9 0,-12Z"
        {...sp}
      />
      <path d="M0,-4 C-3,-1 -4,3 -4,7 C-4,10 -2,12 0,13" {...sp} strokeWidth={1.1} />
      <path d="M0,-4 C3,-1 4,3 4,7 C4,10 2,12 0,13" {...sp} strokeWidth={1.1} />
      <path d="M-3,-6 C-1,-10 1,-10 3,-6" {...sp} strokeWidth={1.1} />
      <circle cx="0" cy="-15" r="2.8" {...sp} />
    </g>
  );
}

function MiniBreasts() {
  return (
    <g>
      <path d="M-15,7 C-15,7 -14,-7 -5,-7 C4,-7 4,7 4,7" {...sp} />
      <path d="M-4,7 C-4,7 -3,-7 6,-7 C15,-7 16,7 16,7" {...sp} />
      <circle cx="-5" cy="-1" r="2" {...sp} strokeWidth={1.1} />
      <circle cx="6" cy="-1" r="2" {...sp} strokeWidth={1.1} />
    </g>
  );
}

function MiniHeart() {
  return (
    <path
      d="M0,7 C0,7 -8,1 -8,-2.5 C-8,-6 -5.5,-7.5 -3,-7.5 C-1,-7.5 0,-4.5 0,-4.5 C0,-4.5 1,-7.5 3,-7.5 C5.5,-7.5 8,-6 8,-2.5 C8,1 0,7 0,7Z"
      {...sp}
    />
  );
}

const items: Array<{
  type: "vulva" | "breasts" | "heart";
  x: number;
  y: number;
  r: number;
  s: number;
}> = [
  { type: "vulva",   x: 22,  y: 30,  r: -8,  s: 0.9  },
  { type: "heart",   x: 88,  y: 16,  r: 12,  s: 0.85 },
  { type: "breasts", x: 155, y: 26,  r: -5,  s: 0.85 },
  { type: "heart",   x: 192, y: 90,  r: 0,   s: 0.62 },
  { type: "vulva",   x: 56,  y: 108, r: 14,  s: 0.75 },
  { type: "breasts", x: 120, y: 100, r: 8,   s: 0.8  },
  { type: "heart",   x: 16,  y: 165, r: -10, s: 0.7  },
  { type: "vulva",   x: 174, y: 150, r: -6,  s: 0.78 },
  { type: "breasts", x: 68,  y: 175, r: 5,   s: 0.72 },
  { type: "heart",   x: 134, y: 182, r: 8,   s: 0.65 },
];

export default function PatternDivider() {
  return (
    <div
      className="h-36 md:h-44 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #F0ECE6, #FAF8F5)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full text-rose-300"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="bodyPattern"
            x="0"
            y="0"
            width="215"
            height="215"
            patternUnits="userSpaceOnUse"
          >
            {items.map(({ type, x, y, r, s }, i) => (
              <g key={i} transform={`translate(${x},${y}) rotate(${r}) scale(${s})`}>
                {type === "vulva"   && <MiniVulva />}
                {type === "breasts" && <MiniBreasts />}
                {type === "heart"   && <MiniHeart />}
              </g>
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bodyPattern)" opacity="0.22" />
      </svg>
    </div>
  );
}
