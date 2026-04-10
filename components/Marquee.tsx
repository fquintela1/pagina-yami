const specialties = [
  "Ginecología General",
  "Ginecología Funcional",
  "Ginecología Estética y Reparadora",
  "Cirugía Genital",
  "Menopausia",
  "Pellet · Terapia Hormonal",
  "Patología Mamaria",
  "Cuello de Útero",
];

export default function Marquee() {
  const items = [...specialties, ...specialties];

  return (
    <div className="bg-[#1A0F18] py-3.5 overflow-hidden border-y border-rose-900/20">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-inter text-[10px] tracking-[0.28em] uppercase text-rose-300/70 px-8">
              {item}
            </span>
            <span className="text-rose-800/50 text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
