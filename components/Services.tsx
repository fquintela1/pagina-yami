import {
  Heart,
  Activity,
  Sparkles,
  Scissors,
  Sun,
  Droplets,
  Shield,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Ginecología General",
    description:
      "Control ginecológico anual, diagnóstico y tratamiento de patologías del aparato reproductivo femenino.",
  },
  {
    icon: Activity,
    title: "Ginecología Funcional",
    description:
      "Abordaje integral de trastornos hormonales, alteraciones del ciclo menstrual y disfunciones del sistema reproductivo.",
  },
  {
    icon: Sparkles,
    title: "Ginecología Estética y Reparadora",
    description:
      "Procedimientos orientados a mejorar la calidad de vida, el bienestar íntimo y la funcionalidad femenina.",
  },
  {
    icon: Scissors,
    title: "Cirugía Genital",
    description:
      "Intervenciones quirúrgicas especializadas realizadas con los más altos estándares de seguridad y precisión.",
  },
  {
    icon: Sun,
    title: "Menopausia",
    description:
      "Diagnóstico y tratamiento personalizado para acompañar y mejorar la calidad de vida en la etapa menopáusica.",
  },
  {
    icon: Droplets,
    title: "Pellet — Terapia Hormonal",
    description:
      "Tratamiento con pellets de hormonas bioidénticas para el equilibrio hormonal y el bienestar integral.",
  },
  {
    icon: Shield,
    title: "Cirugía de Patología Mamaria",
    description:
      "Diagnóstico y resolución quirúrgica de patologías benignas y malignas de la mama con criterio oncológico.",
  },
  {
    icon: Search,
    title: "Cuello de Útero",
    description:
      "Prevención, diagnóstico precoz y tratamiento de lesiones cervicales mediante colposcopía y técnicas avanzadas.",
  },
];

export default function Services() {
  return (
    <section
      id="especialidades"
      className="py-24 md:py-36 bg-[#1A0F18] dot-pattern px-8 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-rose-400 font-inter mb-6">
              Especialidades
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Atención integral
              <br />
              <span className="font-semibold">en ginecología</span>
            </h2>
          </div>
          <p className="text-neutral-400 font-inter font-light text-sm leading-relaxed max-w-xs md:text-right hidden md:block">
            Diagnóstico preciso, tratamiento personalizado
            <br />y seguimiento continuo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rose-900/20">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#1A0F18] p-8 hover:bg-[#26132A] transition-colors duration-300 group"
            >
              <div className="w-10 h-10 bg-rose-900/50 flex items-center justify-center mb-6 group-hover:bg-rose-800/60 transition-colors">
                <Icon size={18} className="text-rose-300" />
              </div>
              <h3 className="font-cormorant text-xl text-white font-medium mb-3 leading-snug">
                {title}
              </h3>
              <p className="text-neutral-300 text-xs font-inter font-light leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
