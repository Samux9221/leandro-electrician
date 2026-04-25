"use client";

import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Site Audit", desc: "Análise técnica completa da infraestrutura atual e requisitos do projeto." },
  { step: "02", title: "Strategy & Design", desc: "Desenho do sistema otimizado para evitar permits desnecessários e maximizar performance." },
  { step: "03", title: "Precision Install", desc: "Execução por técnicos certificados com gestão rigorosa de cabos e estética." },
  { step: "04", title: "Support", desc: "Monitorização e manutenção contínua para garantir uptime total." }
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 max-w-[90rem] mx-auto">
      <h2 className="text-5xl font-extrabold tracking-tighter mb-20 text-center">The NYC <span className="text-slate-400">Process.</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {steps.map((s) => (
          <div key={s.step} className="space-y-4">
            <span className="text-6xl font-black text-slate-100 block">{s.step}</span>
            <h3 className="text-xl font-bold">{s.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}