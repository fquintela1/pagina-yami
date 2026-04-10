import { ArrowDown, MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/5492915139508?text=Hola%20Dra.%20Daud%2C%20quisiera%20sacar%20un%20turno.";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left: Text content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 pt-32 pb-16 lg:pt-0 lg:pb-0 order-2 lg:order-1">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p className="text-[11px] tracking-[0.32em] uppercase text-rose-400 font-inter mb-8">
            Especialista Jerarquizada en Ginecología
          </p>

          {/* Heading */}
          <h1 className="font-cormorant font-light text-neutral-900 leading-none">
            <span className="block text-6xl md:text-7xl xl:text-8xl">Dra. Yamila</span>
            <span className="block text-6xl md:text-7xl xl:text-8xl font-semibold">Daud</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 my-9">
            <div className="w-12 h-px bg-rose-300" />
            <span className="text-[10px] tracking-[0.22em] uppercase text-neutral-400 font-inter">
              Bahía Blanca
            </span>
          </div>

          {/* Description */}
          <p className="text-neutral-500 text-lg leading-relaxed font-inter font-light mb-12">
            Atención ginecológica integral con un enfoque humano,
            especializado y de alto nivel. Acompañándote en cada
            etapa de tu vida.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-neutral-900 text-white px-8 py-4 text-[11px] tracking-[0.22em] uppercase font-inter hover:bg-neutral-700 transition-all duration-300 group"
            >
              <MessageCircle
                size={14}
                className="group-hover:scale-110 transition-transform"
              />
              Sacar Turno
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center gap-3 border border-neutral-200 text-neutral-500 px-8 py-4 text-[11px] tracking-[0.22em] uppercase font-inter hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300"
            >
              Ver Especialidades
              <ArrowDown size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Right: Photo placeholder */}
      <div className="w-full lg:w-[42%] xl:w-[38%] bg-rose-50 relative flex items-center justify-center min-h-[55vh] lg:min-h-screen order-1 lg:order-2 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-rose-100/50 rounded-bl-[300px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-rose-100/40 rounded-tr-[200px] pointer-events-none" />

        {/* Avatar placeholder */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-52 h-52 md:w-72 md:h-72 rounded-full bg-white/70 border-2 border-rose-200 flex items-center justify-center shadow-sm">
            <span className="font-cormorant text-6xl md:text-7xl text-rose-300 font-light select-none">
              YD
            </span>
          </div>
          <p className="mt-6 text-[10px] tracking-[0.3em] uppercase text-rose-300 font-inter">
            Fotografía profesional
          </p>
        </div>

        {/* Floating address card */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-max max-w-[calc(100%-3rem)]">
          <div className="bg-white px-8 py-4 shadow-sm border border-rose-100">
            <p className="font-cormorant text-base text-neutral-700 text-center tracking-wide">
              Moreno 416, Bahía Blanca
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
