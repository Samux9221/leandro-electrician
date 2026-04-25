"use client";

import { motion } from "framer-motion";
import { Wifi, Home, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

// Expandimos os dados para oferecer a profundidade que o cliente sentiu falta no benchmark.
// Foco agressivo em marcas premium (Lutron, Brivo) e na vantagem "Permit-Free".
const features = [
  {
    id: "smart-home",
    title: "Architectural Smart Home",
    tagline: "Luxury & Convenience",
    description: "We engineer invisible technology ecosystems for high-end residential spaces. Complete climate, lighting, and AV control without the aesthetic clutter.",
    details: [
      "Lutron Lighting Control",
      "Motorized Custom Shading",
      "Invisible Audio Systems",
      "Rapid Deploy (No DOB Delays)"
    ],
    icon: <Home size={32} />,
    colSpan: "lg:col-span-2",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "networking",
    title: "Enterprise Networking",
    tagline: "Zero Downtime",
    description: "Military-grade WiFi 7 and structured cabling designed for mission-critical commercial spaces and heavy data loads.",
    details: ["Fiber Optic Backbones", "WiFi 7 Heatmapping", "Server Rack Management"],
    icon: <Wifi size={32} />,
    colSpan: "lg:col-span-1",
    image: null,
  },
  {
    id: "security",
    title: "Advanced Access & Security",
    tagline: "Protection 2.0",
    description: "Protect your NYC assets remotely. We install AI-driven surveillance and cloud-based intercoms that bypass heavy electrical permitting.",
    details: ["Brivo & ButterflyMX", "AI Human/Vehicle Detection", "Cloud-Managed Access"],
    icon: <ShieldCheck size={32} />,
    colSpan: "lg:col-span-3",
    image: null,
  }
];

export default function LowVoltagePrimary() {
  return (
    <section id="services" className="py-32 px-6 max-w-[90rem] mx-auto bg-white">
      <div className="mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block"
        >
          Specialized Solutions
        </motion.span>
        {/* Headline aprimorada para focar no benefício principal */}
        <h2 className="text-slate-950 text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
          High-Tech. <br />
          <span className="text-slate-400">Low Friction.</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl font-medium">
          By leveraging low-voltage architecture, we deploy cutting-edge systems in a fraction of the time it takes for traditional electrical work, bypassing strict NYC permit bottlenecks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <ServiceCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ feature, index }: { feature: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-[3rem] p-12 overflow-hidden border border-slate-100 transition-all duration-500 shadow-sm hover:shadow-2xl hover:border-amber-200/50 ${feature.colSpan} ${feature.image ? 'min-h-[500px]' : 'min-h-[400px] bg-slate-50'}`}
    >
      {feature.image && (
        <>
          <motion.img 
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={feature.image} 
            className="absolute inset-0 w-full h-full object-cover z-0" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />
        </>
      )}

      <div className={`relative z-20 h-full flex flex-col justify-between ${feature.image ? 'text-white' : 'text-slate-950'}`}>
        <div>
          <motion.div 
            animate={{ y: isHovered ? -5 : 0 }}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${feature.image ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-white shadow-sm border border-slate-100'}`}
          >
            {feature.icon}
          </motion.div>
          
          <span className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 block ${feature.image ? 'text-amber-400' : 'text-amber-600'}`}>
            {feature.tagline}
          </span>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{feature.title}</h3>
          
          <p className={`text-lg leading-relaxed max-w-md mb-8 ${feature.image ? 'text-slate-200' : 'text-slate-600'}`}>
            {feature.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {feature.details.map((detail: string) => (
              <div key={detail} className="flex items-center gap-2">
                <CheckCircle2 size={16} className={feature.image ? "text-amber-400" : "text-amber-600"} />
                <span className="text-sm font-medium opacity-90">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.a 
          href="#contact"
          animate={{ x: isHovered ? 10 : 0 }}
          className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest cursor-pointer w-max"
        >
          Explore Solution <ArrowRight size={18} />
        </motion.a>
      </div>
    </motion.div>
  );
}