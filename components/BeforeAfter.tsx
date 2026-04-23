"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section id="portfolio" className="py-32 px-6 max-w-[90rem] mx-auto bg-[#FBFBFD]">
      <div className="flex flex-col items-center text-center mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block"
        >
          The Proof is in the Wiring
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-950 text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          Surgical <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">Precision.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 max-w-2xl leading-relaxed font-medium"
        >
          We don't cut corners. Drag the slider to see the difference between standard contractor work and our master-level infrastructure.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-5xl mx-auto aspect-16/10 md:aspect-21/9 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/60 select-none group"
      >
        {/* IMAGEM DE FUNDO: O DEPOIS (Trabalho Limpo) */}
        <div className="absolute inset-0 w-full h-full bg-slate-900">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop" 
            alt="Clean Server Rack - After" 
            className="w-full h-full object-cover opacity-90"
            draggable="false"
          />
          <div className="absolute top-6 right-6 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-white/10 z-0">
            After
          </div>
        </div>

        {/* IMAGEM DA FRENTE: O ANTES (Trabalho Bagunçado - Usando clip-path para performance) */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=2069&auto=format&fit=crop" 
            alt="Messy Wiring - Before" 
            className="w-full h-full object-cover brightness-75"
            draggable="false"
          />
          <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md text-slate-900 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-slate-200 z-0">
            Before
          </div>
        </div>

        {/* O SLIDER HANDLE (Visual - A linha branca e a bolinha) */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none flex items-center justify-center z-10"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-slate-200 text-slate-700 transition-transform group-hover:scale-110">
            <GripVertical size={24} />
          </div>
        </div>

        {/* A MÁGICA DA PERFORMANCE:
          Usamos um input range nativo do HTML. Ele é invisível (opacity-0), 
          mas cobre toda a imagem. O navegador lida com o toque/arraste nativamente 
          com zero lag, e nós apenas pegamos o valor para atualizar o clip-path acima.
        */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPosition} 
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0"
          aria-label="Compare Before and After"
        />
      </motion.div>
    </section>
  );
}