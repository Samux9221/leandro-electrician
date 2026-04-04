"use client";

import { motion } from "framer-motion";
import { Zap, Home, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Smart Home Integration",
    description: "Automated lighting, smart thermostats, and security systems wired to perfection.",
    icon: <Home className="text-electric" size={32} />
  },
  {
    title: "Panel Upgrades",
    description: "Modernizing your electrical panels to handle today's high-demand appliances safely.",
    icon: <Zap className="text-electric" size={32} />
  },
  {
    title: "Troubleshooting & Repair",
    description: "Fast diagnostics and code-compliant repairs to keep your property safe.",
    icon: <ShieldCheck className="text-electric" size={32} />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Our <span className="text-electric">Expertise</span></h2>
        <p className="mt-4 text-slate-600">High-end electrical solutions tailored to your needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default"
          >
            <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-50 transition-all duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}