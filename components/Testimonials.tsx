"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "M. González",
    initials: "MG",
    rating: 5,
    text: "La Dra. Daud es una profesional excepcional. Me sentí escuchada y acompañada en todo momento. Su conocimiento y dedicación son admirables. La recomiendo con total confianza.",
  },
  {
    name: "V. Martínez",
    initials: "VM",
    rating: 5,
    text: "Después de años buscando respuestas, encontré en la Dra. Daud a una especialista que realmente comprende y trata el problema desde la raíz. Cambió mi calidad de vida.",
  },
  {
    name: "L. Pérez",
    initials: "LP",
    rating: 5,
    text: "El consultorio es muy cómodo y la atención es de primera. La doctora es muy clara al explicar los diagnósticos y los tratamientos. Una experiencia médica excelente.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 500);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 2750);
    return () => clearInterval(interval);
  }, [paused, next]);

  const t = testimonials[current];

  return (
    <section
      id="testimonios"
      className="py-24 md:py-36 px-8 md:px-16 lg:px-24 xl:px-32 bg-[#F0ECE6] relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Pattern background */}
      <svg
        className="absolute inset-0 w-full h-full text-rose-400 pointer-events-none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="bgPattern" x="0" y="0" width="210" height="210" patternUnits="userSpaceOnUse">
            {/* Vulva 1 */}
            <g transform="translate(22,30) rotate(-8) scale(0.9)">
              <path d="M0,-12 C-9,-9 -10,-2 -10,4 C-10,9 -5,12 0,13 C5,12 10,9 10,4 C10,-2 9,-9 0,-12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M0,-4 C-3,-1 -4,3 -4,7 C-4,10 -2,12 0,13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
              <path d="M0,-4 C3,-1 4,3 4,7 C4,10 2,12 0,13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
              <path d="M-3,-6 C-1,-10 1,-10 3,-6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
              <circle cx="0" cy="-15" r="2.8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </g>
            {/* Heart 1 */}
            <g transform="translate(88,16) rotate(12) scale(0.85)">
              <path d="M0,7 C0,7 -8,1 -8,-2.5 C-8,-6 -5.5,-7.5 -3,-7.5 C-1,-7.5 0,-4.5 0,-4.5 C0,-4.5 1,-7.5 3,-7.5 C5.5,-7.5 8,-6 8,-2.5 C8,1 0,7 0,7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </g>
            {/* Breasts 1 */}
            <g transform="translate(155,26) rotate(-5) scale(0.85)">
              <path d="M-15,7 C-15,7 -14,-7 -5,-7 C4,-7 4,7 4,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M-4,7 C-4,7 -3,-7 6,-7 C15,-7 16,7 16,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <circle cx="-5" cy="-1" r="2" stroke="currentColor" strokeWidth="1.1" fill="none"/>
              <circle cx="6" cy="-1" r="2" stroke="currentColor" strokeWidth="1.1" fill="none"/>
            </g>
            {/* Heart 2 */}
            <g transform="translate(192,90) scale(0.62)">
              <path d="M0,7 C0,7 -8,1 -8,-2.5 C-8,-6 -5.5,-7.5 -3,-7.5 C-1,-7.5 0,-4.5 0,-4.5 C0,-4.5 1,-7.5 3,-7.5 C5.5,-7.5 8,-6 8,-2.5 C8,1 0,7 0,7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </g>
            {/* Vulva 2 */}
            <g transform="translate(56,108) rotate(14) scale(0.75)">
              <path d="M0,-12 C-9,-9 -10,-2 -10,4 C-10,9 -5,12 0,13 C5,12 10,9 10,4 C10,-2 9,-9 0,-12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M0,-4 C-3,-1 -4,3 -4,7 C-4,10 -2,12 0,13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
              <path d="M0,-4 C3,-1 4,3 4,7 C4,10 2,12 0,13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
              <path d="M-3,-6 C-1,-10 1,-10 3,-6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
              <circle cx="0" cy="-15" r="2.8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </g>
            {/* Breasts 2 */}
            <g transform="translate(120,100) rotate(8) scale(0.8)">
              <path d="M-15,7 C-15,7 -14,-7 -5,-7 C4,-7 4,7 4,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M-4,7 C-4,7 -3,-7 6,-7 C15,-7 16,7 16,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <circle cx="-5" cy="-1" r="2" stroke="currentColor" strokeWidth="1.1" fill="none"/>
              <circle cx="6" cy="-1" r="2" stroke="currentColor" strokeWidth="1.1" fill="none"/>
            </g>
            {/* Heart 3 */}
            <g transform="translate(16,165) rotate(-10) scale(0.7)">
              <path d="M0,7 C0,7 -8,1 -8,-2.5 C-8,-6 -5.5,-7.5 -3,-7.5 C-1,-7.5 0,-4.5 0,-4.5 C0,-4.5 1,-7.5 3,-7.5 C5.5,-7.5 8,-6 8,-2.5 C8,1 0,7 0,7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </g>
            {/* Vulva 3 */}
            <g transform="translate(174,150) rotate(-6) scale(0.78)">
              <path d="M0,-12 C-9,-9 -10,-2 -10,4 C-10,9 -5,12 0,13 C5,12 10,9 10,4 C10,-2 9,-9 0,-12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M0,-4 C-3,-1 -4,3 -4,7 C-4,10 -2,12 0,13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
              <path d="M0,-4 C3,-1 4,3 4,7 C4,10 2,12 0,13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
              <path d="M-3,-6 C-1,-10 1,-10 3,-6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
              <circle cx="0" cy="-15" r="2.8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </g>
            {/* Breasts 3 */}
            <g transform="translate(68,175) rotate(5) scale(0.72)">
              <path d="M-15,7 C-15,7 -14,-7 -5,-7 C4,-7 4,7 4,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M-4,7 C-4,7 -3,-7 6,-7 C15,-7 16,7 16,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <circle cx="-5" cy="-1" r="2" stroke="currentColor" strokeWidth="1.1" fill="none"/>
              <circle cx="6" cy="-1" r="2" stroke="currentColor" strokeWidth="1.1" fill="none"/>
            </g>
            {/* Heart 4 */}
            <g transform="translate(134,182) rotate(8) scale(0.65)">
              <path d="M0,7 C0,7 -8,1 -8,-2.5 C-8,-6 -5.5,-7.5 -3,-7.5 C-1,-7.5 0,-4.5 0,-4.5 C0,-4.5 1,-7.5 3,-7.5 C5.5,-7.5 8,-6 8,-2.5 C8,1 0,7 0,7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bgPattern)" opacity="0.3"/>
      </svg>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-rose-400 font-inter mb-6">
            Testimonios
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900">
            Lo que dicen{" "}
            <span className="font-semibold">mis pacientes</span>
          </h2>
        </div>

        {/* Carousel card */}
        <div className="relative">
          <div className="bg-white border border-rose-100 px-10 md:px-16 py-12 md:py-16 text-center relative overflow-hidden min-h-[320px] flex flex-col items-center justify-center">
            {/* Decorative large quote */}
            <span className="absolute -top-2 left-6 font-cormorant text-[9rem] leading-none text-rose-100/80 select-none pointer-events-none">
              &ldquo;
            </span>

            {/* Stars */}
            <div className="flex gap-1 justify-center mb-8 relative z-10">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={12} className="fill-rose-300 text-rose-300" />
              ))}
            </div>

            {/* Quote */}
            <blockquote
              key={current}
              className={`font-cormorant text-xl md:text-2xl lg:text-[1.6rem] text-neutral-800 font-light leading-relaxed mb-10 relative z-10 transition-opacity duration-500 ${
                animating ? "opacity-0" : "opacity-100"
              }`}
            >
              &ldquo;{t.text}&rdquo;
            </blockquote>

            {/* Author */}
            <div
              className={`flex items-center gap-4 transition-opacity duration-500 ${
                animating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                <span className="font-cormorant text-sm text-rose-400 font-medium">
                  {t.initials}
                </span>
              </div>
              <div className="text-left">
                <p className="text-sm font-inter font-medium text-neutral-800">
                  {t.name}
                </p>
                <p className="text-[11px] text-neutral-400 font-inter">
                  Paciente verificada
                </p>
              </div>
            </div>
          </div>

          {/* Prev / Next */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white border border-rose-100 flex items-center justify-center hover:border-rose-300 hover:text-rose-400 transition-colors shadow-sm"
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white border border-rose-100 flex items-center justify-center hover:border-rose-300 hover:text-rose-400 transition-colors shadow-sm"
            aria-label="Siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-rose-400" : "w-2 bg-rose-200 hover:bg-rose-300"
              }`}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
