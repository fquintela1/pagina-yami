import { MessageCircle, MapPin, Instagram } from "lucide-react";

const WA_LINK =
  "https://wa.me/5492915139508?text=Hola%20Dra.%20Daud%2C%20quisiera%20sacar%20un%20turno.";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 md:py-36 px-8 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-rose-400 font-inter mb-6">
              Contacto
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight mb-8">
              Comenzá tu
              <br />
              <span className="font-semibold">camino hacia</span>
              <br />
              tu bienestar
            </h2>

            <div className="w-12 h-px bg-rose-300 mb-8" />

            <p className="text-neutral-500 font-inter font-light text-[15px] leading-relaxed mb-10">
              Agendá tu consulta y recibí atención ginecológica especializada,
              personalizada y en un entorno de confianza.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 text-[11px] tracking-[0.22em] uppercase font-inter hover:bg-neutral-700 transition-all duration-300 group mb-12"
            >
              <MessageCircle
                size={14}
                className="group-hover:scale-110 transition-transform"
              />
              Escribir por WhatsApp
            </a>

            {/* Info */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin size={15} className="text-rose-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-neutral-400 font-inter mb-0.5">
                    Consultorio
                  </p>
                  <p className="text-sm text-neutral-700 font-inter">
                    Moreno 416, Bahía Blanca
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Instagram size={15} className="text-rose-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-neutral-400 font-inter mb-0.5">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/dra.yamiladaud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-700 font-inter hover:text-rose-400 transition-colors"
                  >
                    @dra.yamiladaud
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Decorative element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <p className="font-cormorant text-[140px] xl:text-[180px] font-light text-rose-50 leading-none select-none text-center">
                YD
              </p>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border border-rose-200 px-10 py-8 text-center bg-white/60 backdrop-blur-sm">
                  <p className="font-cormorant text-2xl text-neutral-800 font-light mb-2">
                    Dra. Yamila Daud
                  </p>
                  <div className="w-8 h-px bg-rose-300 mx-auto my-3" />
                  <p className="text-[10px] tracking-[0.25em] uppercase text-rose-400 font-inter">
                    Especialista en Ginecología
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
