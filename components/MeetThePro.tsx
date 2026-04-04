"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function MeetThePro() {
  const values = [
    {
      title: "Fully Licensed & Insured",
      description: "Complete peace of mind knowing your property is in certified hands."
    },
    {
      title: "Respect for Your Space",
      description: "We wear boot covers and leave the workspace cleaner than we found it."
    },
    {
      title: "Transparent Upfront Pricing",
      description: "No hidden fees or surprise charges at the end of the job."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Coluna da Imagem (Esquerda) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full relative"
        >
          <div className="relative h-[500px] lg:h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200">
            {/* Imagem Placeholder - Depois trocaremos por uma foto do Leandro */}
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" 
              alt="Leandro - Professional Electrician" 
              className="w-full h-full object-cover"
            />
            {/* Selo flutuante de experiência sobre a imagem */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white">
              <p className="text-amber-600 font-extrabold text-4xl">10+</p>
              <p className="text-slate-900 font-semibold text-sm mt-1">Years of<br/>Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Coluna de Texto (Direita) */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            The Standard of <br />
            <span className="text-amber-600">Excellence</span>
          </h2>
          
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Hi, I'm Leandro. I built this company on a simple premise: electrical work shouldn't just be safe—it should be a seamless, premium experience for the homeowner. From the moment we step into your property to the final inspection, we treat your home as if it were our own.
          </p>

          <div className="space-y-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-4"
              >
                <div className="mt-1">
                  <CheckCircle2 className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{value.title}</h3>
                  <p className="text-slate-600 mt-1">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Signature_Placeholder.svg/1200px-Signature_Placeholder.svg.png" 
              alt="Leandro Signature" 
              className="h-12 opacity-40 grayscale"
            />
          </div>
        </div>

      </div>
    </section>
  );
}