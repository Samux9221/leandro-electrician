"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Wifi, Home, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const features = [
  {
    id: "smart-home",
    title: "Smart Home Integration",
    tagline: "The Future of Living",
    description: "Complete ecosystem control. We don't just install devices; we engineer environments that anticipate your needs.",
    details: [
      "Lutron & Savant Lighting Control",
      "Multi-room 8K Video Distribution",
      "Invisible Sonance Audio Systems",
      "Climate & Shading Automation"
    ],
    icon: <Home size={32} />,
    colSpan: "lg:col-span-2",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "networking",
    title: "Networking",
    tagline: "Enterprise Grade",
    description: "Eliminate downtime with military-grade WiFi 7 and fiber-optic backbones.",
    details: ["WiFi 7 Heatmapping", "Fiber Optic Splicing", "Rack Management"],
    icon: <Wifi size={32} />,
    colSpan: "lg:col-span-1",
    image: null,
  },
  {
    id: "security",
    title: "Security Systems",
    tagline: "Protection 2.0",
    description: "Advanced AI-driven surveillance and biometric access for NYC's elite properties.",
    details: ["AI Human Detection", "Remote Gate Control", "Secure Data Storage"],
    icon: <ShieldCheck size={32} />,
    colSpan: "lg:col-span-3",
    image: null,
  }
];

export default function LowVoltagePrimary() {
  return (
    <section className="py-32 px-6 max-w-[90rem] mx-auto bg-white">
      <div className="mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block"
        >
          Specialized Solutions
        </motion.span>
        <h2 className="text-slate-950 text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
          The Low Voltage <br />
          <span className="text-slate-400">Revolution.</span>
        </h2>
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
      {/* Background Image Logic */}
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

      {/* Content */}
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

          {/* New Informative Layer: Details List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {feature.details.map((detail: string) => (
              <div key={detail} className="flex items-center gap-2">
                <CheckCircle2 size={16} className={feature.image ? "text-amber-400" : "text-amber-600"} />
                <span className="text-sm font-medium opacity-80">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          animate={{ x: isHovered ? 10 : 0 }}
          className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest cursor-pointer"
        >
          Explore Solution <ArrowRight size={18} />
        </motion.div>
      </div>
    </motion.div>
  );
}