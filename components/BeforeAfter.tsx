"use client";

import { useState } from "react";
import { MoveHorizontal, ImageOff } from "lucide-react";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section className="py-24 px-6 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Electrical <span className="text-amber-600">Craftsmanship</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            In NYC, safety is non-negotiable. We transform hazardous wiring into perfectly organized, code-compliant systems.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto h-[450px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 group select-none bg-slate-100">
          
          {/* FUNDO: O TRABALHO IMPECÁVEL (DEPOIS) */}
          <div className="absolute inset-0 w-full h-full bg-slate-900 flex flex-col items-center justify-center text-slate-700">
             {/* Fallback caso a imagem não exista na pasta public */}
             <ImageOff size={48} className="mb-4 opacity-50" />
             <span className="font-bold">Foto do DEPOIS não encontrada</span>
             <span className="text-sm">Salve a imagem como public/depois.jpg</span>
          </div>
          <img 
            src="/depois.jpg" 
            alt="Clean electrical panel after" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
            onError={(e) => e.currentTarget.style.display = 'none'} // Oculta a imagem quebrada
          />
          
          <div className="absolute top-6 right-6 bg-amber-600/95 backdrop-blur-md text-white px-5 py-2 rounded-full text-xs font-black tracking-widest z-0">
            PREMIUM STANDARD
          </div>

          {/* FRENTE: A BAGUNÇA (ANTES) - Sofre o corte do slider */}
          <div 
            className="absolute inset-0 w-full h-full z-10"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <div className="absolute inset-0 w-full h-full bg-slate-800 flex flex-col items-center justify-center text-slate-500">
               <ImageOff size={48} className="mb-4 opacity-50" />
               <span className="font-bold">Foto do ANTES não encontrada</span>
               <span className="text-sm">Salve a imagem como public/antes.jpg</span>
            </div>
            <img 
              src="/antes.jpg" 
              alt="Messy outdated wiring" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
              onError={(e) => e.currentTarget.style.display = 'none'} // Oculta a imagem quebrada
            />
            <div className="absolute top-6 left-6 bg-slate-950/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-xs font-black tracking-widest z-20">
              OUTDATED & UNSAFE
            </div>
          </div>

          {/* Slider Input (Motor) */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={position} 
            onChange={(e) => setPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />

          {/* Barra Visual */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none z-20 shadow-[0_0_15px_rgba(0,0,0,0.3)]" 
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-slate-900 border-4 border-slate-50">
              <MoveHorizontal size={28} strokeWidth={2.5} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}