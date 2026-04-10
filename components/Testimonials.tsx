import { Star, Quote } from "lucide-react";

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
  return (
    <section
      id="testimonios"
      className="py-24 md:py-36 px-8 md:px-16 lg:px-24 xl:px-32 bg-rose-50/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[11px] tracking-[0.3em] uppercase text-rose-400 font-inter mb-6">
            Testimonios
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900">
            Lo que dicen{" "}
            <span className="font-semibold">mis pacientes</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ name, initials, rating, text }) => (
            <div
              key={name}
              className="bg-white p-8 md:p-10 border border-rose-100 hover:border-rose-200 transition-colors"
            >
              <Quote size={30} className="text-rose-200 mb-6" />

              <div className="flex gap-1 mb-6">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-rose-300 text-rose-300"
                  />
                ))}
              </div>

              <p className="text-neutral-600 font-inter font-light text-sm leading-relaxed mb-8">
                &ldquo;{text}&rdquo;
              </p>

              <div className="flex items-center gap-4 border-t border-rose-50 pt-6">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                  <span className="font-cormorant text-sm text-rose-400 font-medium">
                    {initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-inter font-medium text-neutral-800">
                    {name}
                  </p>
                  <p className="text-[11px] text-neutral-400 font-inter">
                    Paciente verificada
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
