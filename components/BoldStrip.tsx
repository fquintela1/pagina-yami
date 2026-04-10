function VulvaSketch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 110 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer labia */}
      <path
        d="M55 15 C34 21 14 42 12 67 C10 94 23 116 55 124 C87 116 100 94 98 67 C96 42 76 21 55 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner labia — left */}
      <path
        d="M55 32 C45 42 39 57 38 73 C37 90 42 107 55 116"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Inner labia — right */}
      <path
        d="M55 32 C65 42 71 57 72 73 C73 90 68 107 55 116"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Clitoris hood */}
      <path
        d="M47 30 C50 21 60 21 63 30"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Clitoris */}
      <ellipse
        cx="55"
        cy="17"
        rx="5.5"
        ry="5.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      {/* Tiny heart — esquina superior derecha */}
      <path
        d="M92 20 C90 17 86 19 86 23 C86 27 92 31 92 31 C92 31 98 27 98 23 C98 19 94 17 92 20Z"
        fill="currentColor"
        opacity="0.35"
      />

      {/* Sparkle — izquierda */}
      <path
        d="M17 38 L18.5 33 L20 38 L25 39.5 L20 41 L18.5 46 L17 41 L12 39.5 Z"
        fill="currentColor"
        opacity="0.25"
      />

      {/* Sparkle — derecha abajo */}
      <path
        d="M90 96 L91 92 L92 96 L96 97 L92 98 L91 102 L90 98 L86 97 Z"
        fill="currentColor"
        opacity="0.25"
      />

      {/* Puntito decorativo */}
      <circle cx="20" cy="95" r="2" fill="currentColor" opacity="0.2" />
      <circle cx="94" cy="50" r="1.5" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

export default function BoldStrip() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-16 lg:px-24 xl:px-32 bg-white border-y border-rose-100 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Text */}
        <div className="flex-1">
          <p className="text-[11px] tracking-[0.3em] uppercase text-rose-400 font-inter mb-6">
            Nuestra filosofía
          </p>
          <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-neutral-900 font-light leading-[1.05] mb-6">
            Sin tabúes.
            <br />
            <span className="font-semibold">Con confianza.</span>
          </h2>
          <p className="font-inter text-neutral-500 font-light text-[15px] leading-relaxed max-w-md">
            Hablemos de lo que importa. Cada parte de tu cuerpo merece atención,
            cuidado y respeto — sin vergüenza, sin prejuicios.
          </p>
        </div>

        {/* Sketch */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <VulvaSketch className="w-32 h-40 md:w-44 md:h-56 text-rose-300" />
        </div>
      </div>
    </section>
  );
}
