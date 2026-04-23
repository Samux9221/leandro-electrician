"use client";

import { motion } from "framer-motion";
import { Zap, BatteryCharging, AlertTriangle, ArrowRight, Shield } from "lucide-react";

const electricalServices = [
  {
    id: "panels",
    title: "Heavy-Duty Panel Upgrades",
    description: "Upgrading legacy systems to 200A or 400A service. Essential for modern HVAC, induction ranges, and high-demand properties.",
    icon: <Zap size={32} className="text-amber-500" />,
    features: ["Code-Compliant Breakers", "Whole-House Surge Protection", "Load Balancing"]
  },
  {
    id: "ev-chargers",
    title: "EV Charging Infrastructure",
    description: "Level 2 charging stations installed with absolute precision. Tesla Wall Connectors, ChargePoint, and universal systems.",
    icon: <BatteryCharging size={32} className="text-amber-500" />,
    features: ["Permit & DOB Processing", "Dedicated Circuits", "Smart Load Management"]
  },
  {
    id: "troubleshooting",
    title: "Diagnostics & Code Violations",
    description: "Fast, accurate troubleshooting for flickering lights, tripped breakers, and removal of DOB/ECB code violations.",
    icon: <AlertTriangle size={32} className="text-amber-500" />,
    features: ["Thermal Imaging Diagnostics", "Knob & Tube Rewiring", "Emergency Repairs"]
  }
];

export default function CoreElectrical() {
  return (
    // Seção Escura para contrastar com o resto do site e passar "Autoridade e Segurança"
    <section id="services" className="py-32 px-6 bg-slate-950 text-slate-50 border-t border-slate-900 relative overflow-hidden">
      
      {/* Background Glow sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Coluna da Esquerda: Sticky Text (Fica fixo enquanto a direita rola) */}
        <div className="lg:w-1/3 relative">
          <div className="lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-slate-300 font-medium px-4 py-2 rounded-full text-sm mb-8"
            >
              <Shield size={16} className="text-amber-500" />
              <span>Master-Level Expertise</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            >
              The Power <br /> Behind the <span className="text-amber-500">Tech.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed mb-10 font-medium"
            >
              Beyond low-voltage, we are fully licensed master electricians. We build the robust, safe, and code-compliant electrical foundation your property requires.
            </motion.p>

            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="#contact" 
              className="group flex items-center gap-3 text-amber-500 font-bold text-lg hover:text-amber-400 transition-colors"
            >
              Consult an Expert <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* Coluna da Direita: Lista de Serviços */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          {electricalServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 md:p-12 rounded-[2rem] hover:bg-slate-900 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                
                {/* Ícone com base sutil */}
                <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-amber-500/50 transition-all duration-500">
                  {service.icon}
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-50">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature, fIndex) => (
                      <span 
                        key={fIndex} 
                        className="bg-slate-950 border border-slate-800 text-slate-300 text-sm font-medium px-4 py-2 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}