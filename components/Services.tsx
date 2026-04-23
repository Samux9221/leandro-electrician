"use client";

import { motion } from "framer-motion";
import { Zap, Home, ShieldCheck, Wifi, Video, Cable } from "lucide-react";

// Categorias divididas para SEO e Funil de Vendas
const lowVoltageServices = [
  { title: "Smart Home Integration", description: "Automated lighting, climate control, and smart locks seamlessly connected.", icon: <Home size={28} /> },
  { title: "Structured Networking", description: "Enterprise-grade Wi-Fi and clean ethernet wiring for zero dead zones.", icon: <Wifi size={28} /> },
  { title: "Surveillance Systems", description: "High-definition camera setups with hidden routing and remote access.", icon: <Video size={28} /> }
];

const electricalServices = [
  { title: "Panel Upgrades", description: "Modernizing your electrical panels to handle today's high-demand appliances safely.", icon: <Zap size={28} /> },
  { title: "Code Compliance & Repair", description: "Fast diagnostics to correct violations and ensure building safety.", icon: <ShieldCheck size={28} /> },
  { title: "Custom Heavy Wiring", description: "Dedicated circuits for EV chargers, HVAC systems, and heavy loads.", icon: <Cable size={28} /> }
];

export default function Services() {
  // Subcomponente de Card com Glassmorphism
  const ServiceCard = ({ service, index, isDark }: { service: any, index: number, isDark: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-8 rounded-[2rem] border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
        isDark 
          ? "bg-slate-900/90 border-slate-800 hover:shadow-2xl hover:shadow-amber-500/10 text-white" 
          : "bg-white/60 border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-slate-900"
      }`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
        isDark ? "bg-slate-800 text-amber-400" : "bg-slate-50 text-amber-600"
      }`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-tight">{service.title}</h3>
      <p className={`leading-relaxed text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
        {service.description}
      </p>
    </motion.div>
  );

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative">
      
      {/* Background Decorativo sutil para realçar a transparência dos cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">Solutions.</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Delivering precision across modern networking and heavy-duty infrastructure.
        </p>
      </div>

      {/* Seção 1: Low Voltage */}
      <div id="low-voltage" className="mb-24 scroll-mt-32">
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Smart & Low Voltage</h3>
          <div className="h-px bg-gradient-to-r from-slate-200 to-transparent flex-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lowVoltageServices.map((srv, idx) => (
            <ServiceCard key={idx} service={srv} index={idx} isDark={false} />
          ))}
        </div>
      </div>

      {/* Seção 2: General Electrical */}
      <div id="electrical" className="scroll-mt-32">
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Licensed Electrical</h3>
          <div className="h-px bg-gradient-to-r from-slate-200 to-transparent flex-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {electricalServices.map((srv, idx) => (
            <ServiceCard key={idx} service={srv} index={idx} isDark={true} />
          ))}
        </div>
      </div>

    </section>
  );
}