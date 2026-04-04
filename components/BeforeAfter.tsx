"use client";

import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfter() {
  // Estado que controla a posição da barra divisória (começa no meio: 50%)
  const [position, setPosition] = useState(50);

  return (
    <section className="py-24 px-6 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            The Difference is in the <span className="text-amber-600">Details</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            We don't just make it work; we make it safe, clean, and code-compliant. 
            Slide to see the standard of our electrical panel upgrades.
          </p>
        </div>

        {/* Container do Slider Interativo */}
        <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 group cursor-ew-resize">
          
          {/* Imagem do ANTES (Fundo) */}
          <img 
            src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=2000&auto=format&fit=crop" 
            alt="Messy electrical panel before" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Label ANTES */}
          <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
            BEFORE
          </div>

          {/* Imagem do DEPOIS (Por cima, cortada pelo slider) */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1621905251918-4841cbe817d5?q=80&w=2070&auto=format&fit=crop" 
              alt="Clean electrical panel after" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Label DEPOIS */}
            <div className="absolute top-6 right-6 bg-amber-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
              AFTER
            </div>
          </div>

          {/* Input invisível que o usuário arrasta */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={position} 
            onChange={(e) => setPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          />

          {/* Linha e Botão visual do Slider */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]" 
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-900 border border-slate-200">
              <MoveHorizontal size={24} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}