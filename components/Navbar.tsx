"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const WA_LINK =
  "https://wa.me/5492915139508?text=Hola%20Dra.%20Daud%2C%20quisiera%20sacar%20un%20turno.";

const NAV_LINKS = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-cormorant text-xl font-semibold tracking-wide text-neutral-900">
            Dra. Yamila Daud
          </span>
          <span className="text-[9px] tracking-[0.28em] uppercase text-rose-400 font-inter mt-0.5">
            Ginecología
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors tracking-wide font-inter"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 text-[11px] tracking-[0.18em] uppercase font-inter hover:bg-neutral-700 transition-colors"
          >
            Sacar Turno
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-neutral-900 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-6">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-neutral-600 hover:text-neutral-900 font-inter tracking-wide transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-neutral-900 text-white py-3 text-[11px] tracking-[0.18em] uppercase font-inter text-center hover:bg-neutral-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sacar Turno
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
