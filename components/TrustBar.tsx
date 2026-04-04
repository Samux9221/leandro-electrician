export default function TrustBar() {
  // Lista de gatilhos de confiança ou marcas
  const items = [
    "Fully Licensed in NJ & NYC",
    "•",
    "100% Code Compliant",
    "•",
    "EV Charger Specialists",
    "•",
    "Smart Home Integration",
    "•",
    "24/7 Emergency Service",
    "•",
    "Upfront Pricing",
    "•"
  ];

  return (
    <div className="w-full bg-slate-900 text-slate-300 py-4 overflow-hidden flex whitespace-nowrap border-y border-slate-800">
      {/* O container que faz a animação. Usamos duas listas iguais para o loop perfeito */}
      <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around gap-8 px-4">
        {items.map((item, i) => (
          <span key={i} className="text-sm font-medium tracking-widest uppercase">
            {item}
          </span>
        ))}
        {/* Duplicando para o loop não quebrar */}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="text-sm font-medium tracking-widest uppercase">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}