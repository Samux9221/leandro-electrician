import { ArrowRight, ShieldCheck } from "lucide-react";

export default function HeroPremium() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50">
      
      {/* Background Abstrato/Suave para destacar a tipografia */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-200/50 via-slate-50 to-slate-50 -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col relative z-10 pt-20">
        
        {/* Etiqueta de Status */}
        <div className="flex items-center gap-2 mb-8 animate-fade-in-up">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-sm font-medium tracking-widest uppercase text-slate-500">
            Available for emergency dispatch in NYC
          </span>
        </div>

        {/* Tipografia "Sleek" e Imponente */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9] max-w-4xl">
          Engineered for <br />
          <span className="text-slate-400">Absolute Safety.</span>
        </h1>
        
        <p className="mt-8 text-xl text-slate-600 max-w-xl leading-relaxed font-light">
          Master-level electrical contracting for high-end residential and commercial properties. Licensed, insured, and uncompromising on code compliance.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <a href="#contact" className="bg-slate-900 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all flex items-center gap-3">
            Request an Inspection <ArrowRight size={20} />
          </a>
        </div>

        {/* Card de Autoridade com Glassmorphism e Espaço Negativo */}
        <div className="absolute right-0 bottom-[-100px] lg:bottom-10 hidden lg:flex flex-col gap-4">
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 rounded-3xl w-72 transform rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-slate-900 text-white p-2 rounded-xl">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-slate-900 leading-tight">Master <br/>Electrician</h3>
            </div>
            <p className="text-sm text-slate-600">Fully Licensed & Insured to operate across all NYC boroughs and New Jersey.</p>
            <div className="mt-4 pt-4 border-t border-slate-200/50 flex justify-between items-center">
               <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">License #</span>
               <span className="text-sm font-mono text-slate-900">NYC-88392</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}