import { Instagram, MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/5492915139508?text=Hola%20Dra.%20Daud%2C%20quisiera%20sacar%20un%20turno.";

const NAV_LINKS = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A0F18] text-white px-8 md:px-16 lg:px-24 xl:px-32 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6 leading-none">
              <p className="font-cormorant text-2xl font-semibold text-white tracking-wide">
                Dra. Yamila Daud
              </p>
              <p className="text-[9px] tracking-[0.28em] uppercase text-rose-400 font-inter mt-1.5">
                Ginecología
              </p>
            </div>
            <p className="text-neutral-400 font-inter font-light text-xs leading-relaxed">
              Especialista Jerarquizada en Ginecología. Atención integral,
              personalizada y de alto nivel en Bahía Blanca.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-inter mb-6">
              Secciones
            </p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-neutral-400 hover:text-white font-inter text-sm transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-inter mb-6">
              Contacto
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
              >
                <MessageCircle
                  size={15}
                  className="text-rose-400 group-hover:text-rose-300 transition-colors flex-shrink-0"
                />
                <span className="font-inter text-sm">WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/dra.yamiladaud"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
              >
                <Instagram
                  size={15}
                  className="text-rose-400 group-hover:text-rose-300 transition-colors flex-shrink-0"
                />
                <span className="font-inter text-sm">@dra.yamiladaud</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-400">
                <div className="w-[15px] flex-shrink-0" />
                <span className="font-inter text-sm">
                  Moreno 416, Bahía Blanca
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-rose-900/25 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 font-inter text-xs">
            © 2026 Dra. Yamila Daud. Todos los derechos reservados.
          </p>
          <p className="text-neutral-500 font-inter text-xs">
            Bahía Blanca, Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
