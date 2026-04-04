import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      
      {/* Coluna da Esquerda: Copy e Conversão */}
      <div className="flex-1 text-left mt-10 lg:mt-0">
        {/* Selo de Confiança */}
        <div className="inline-block bg-slate-100 text-slate-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 border border-slate-200">
          Licensed & Insured in NJ & NYC
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
          Flawless Electrical Work for <span className="text-amber-600">Your Space.</span>
        </h1>
        
        <p className="mt-6 text-lg text-slate-600 max-w-lg leading-relaxed">
          Fast response times, transparent pricing, and uncompromising safety. We deliver premium residential and commercial solutions done right the first time.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Request a Quote <ArrowRight size={20} />
          </a>
          <a href="#services" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all text-center">
            Our Services
          </a>
        </div>
      </div>

      {/* Coluna da Direita: Imagem Placeholder Premium */}
      <div className="flex-1 w-full relative h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
        {/* Usando uma imagem temporária do Unsplash que passa a ideia de precisão */}
        <img 
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" 
          alt="Precision Electrical Work" 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        {/* Overlay sutil para a imagem não competir com o texto e manter o ar sofisticado */}
        <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay pointer-events-none"></div>
      </div>
      
    </section>
  );
}