import { Award, BookOpen, Star } from "lucide-react";

const credentials = [
  { icon: BookOpen, label: "Formación", value: "Fundación Barceló" },
  { icon: Award, label: "Especialidad", value: "Jerarquizada en Ginecología" },
  { icon: Star, label: "Matrícula Prov.", value: "MP XXXX" },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="py-24 md:py-36 px-8 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Photo placeholder */}
          <div className="relative isolate">
            <div className="aspect-[3/4] bg-gradient-to-br from-rose-50 to-rose-100 flex items-center justify-center relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-6 left-6 w-14 h-14 border-l-2 border-t-2 border-rose-200 pointer-events-none" />
              <div className="absolute bottom-6 right-6 w-14 h-14 border-r-2 border-b-2 border-rose-200 pointer-events-none" />

              <div className="text-center">
                <div className="w-36 h-36 rounded-full bg-white/80 border border-rose-200 flex items-center justify-center mx-auto mb-6">
                  <span className="font-cormorant text-5xl text-rose-300 font-light select-none">
                    YD
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-rose-300 font-inter">
                  Fotografía profesional
                </p>
              </div>
            </div>
            {/* Offset decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-rose-200 -z-10 pointer-events-none" />
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-rose-400 font-inter mb-6">
              Sobre la Doctora
            </p>

            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight mb-8">
              Compromiso con la salud femenina
            </h2>

            <div className="w-12 h-px bg-rose-300 mb-8" />

            <p className="text-neutral-600 leading-relaxed font-inter font-light mb-5 text-[15px]">
              La Dra. Yamila Daud es Médica Especialista Jerarquizada en
              Ginecología, graduada de la Fundación Barceló. Con una sólida
              formación académica y clínica, se dedica al cuidado integral de la
              salud femenina en todas sus etapas.
            </p>
            <p className="text-neutral-600 leading-relaxed font-inter font-light mb-12 text-[15px]">
              Su práctica combina la medicina basada en la evidencia con un
              enfoque humano y personalizado, brindando un espacio de confianza,
              respeto y excelencia médica para cada paciente.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {credentials.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="border border-neutral-100 p-5 hover:border-rose-200 transition-colors"
                >
                  <Icon size={17} className="text-rose-300 mb-3" />
                  <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-inter mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-neutral-800 font-inter font-medium">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
