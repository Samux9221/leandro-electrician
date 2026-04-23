"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Home, Building2, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";

export default function Portfolio() {
  // Pilar 3: A Arte da Fiação (Imagens estritamente focadas no trabalho técnico limpo)
  const technicalGallery = [
    {
      id: 1,
      title: "200A Service Upgrade",
      location: "Brooklyn, NY",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop", // Painel elétrico
      span: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto"
    },
    {
      id: 2,
      title: "Commercial Conduit Routing",
      location: "Newark, NJ",
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=2069&auto=format&fit=crop", // Conduítes industriais
      span: "md:col-span-1 md:row-span-1 aspect-square"
    },
    {
      id: 3,
      title: "EV Charging Grid",
      location: "Jersey City, NJ",
      image: "https://images.unsplash.com/photo-1663628461142-f542614b8a24?q=80&w=2070&auto=format&fit=crop", // Estação EV
      span: "md:col-span-1 md:row-span-1 aspect-square"
    },
    {
      id: 4,
      title: "Smart Panel Integration",
      location: "Manhattan, NY",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop", // Rack / Painel limpo
      span: "md:col-span-3 md:row-span-1 aspect-21/9" // Banner horizontal
    }
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFD] selection:bg-amber-100">
      <Navbar />
      
      {/* 1. HERO: A Promessa de Autoridade */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-50 rounded-full blur-[120px] -z-10 opacity-60" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-4 py-2 rounded-full text-sm mb-8 shadow-sm">
            <ShieldCheck size={18} className="text-amber-500" />
            <span>Licensed Master Electricians · NYC & NJ</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.05] mb-6">
            Precision Power. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
              Flawless Execution.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            From historic Manhattan gut-renovations to heavy-duty industrial grids in New Jersey. We engineer electrical solutions that pass every inspection and stand the test of time.
          </p>
        </motion.div>
      </section>

      {/* 2. O ESCOPO: Residencial de Luxo vs Comercial (A Divisão) */}
      <section className="px-6 pb-32 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card Residencial */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200/60 rounded-[3rem] p-10 md:p-14 shadow-xl shadow-slate-200/20 hover:border-amber-200 transition-colors group"
          >
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 transition-transform">
              <Home size={32} className="text-amber-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-950 mb-4">Luxury Residential</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Surgical upgrades for high-end properties. We specialize in preserving historic architecture while integrating 200A/400A services and modern smart home backbones.
            </p>
            <ul className="space-y-3 mb-10">
              {['Historic Gut-Renovations', 'Lutron & Smart Lighting', 'High-Capacity Panel Upgrades'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-amber-500" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card Comercial */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-950 border border-slate-800 rounded-[3rem] p-10 md:p-14 shadow-2xl hover:border-slate-700 transition-colors group"
          >
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-slate-800 group-hover:scale-110 transition-transform">
              <Building2 size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Commercial & Industrial</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Heavy-duty infrastructure designed for scale. We handle complex loads, 3-phase systems, and compliance requirements for businesses that cannot afford downtime.
            </p>
            <ul className="space-y-3 mb-10">
              {['3-Phase Power Distribution', 'Commercial EV Fleet Stations', 'DOB Violation Removals'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                  <Zap size={18} className="text-amber-500" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. A ARTE DA FIAÇÃO (A Galeria de Provas) */}
      <section className="px-6 pb-32 max-w-[90rem] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-950 mb-4">The Art of the <span className="text-amber-600">Install</span></h2>
          <p className="text-slate-600">A look behind the walls. This is what Master-Level craftsmanship looks like.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {technicalGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className={`group relative overflow-hidden rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 ${item.span}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">{item.location}</p>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. HISTÓRIA DE SUCESSO (O Case Study Real) */}
      <section className="py-32 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            {/* A Imagem do Case */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Historic Manhattan Apartment" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-sm font-bold text-slate-900 shadow-sm">
                  Upper East Side, NYC
                </div>
              </div>
            </div>

            {/* O Texto focando na "Dor e Solução" */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block bg-amber-50 border border-amber-200 text-amber-700 font-bold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-wider">
                Featured Case Study
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 leading-[1.1] mb-8">
                The Historic 1920s <br /> Overhaul.
              </h2>
              
              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" /> The Challenge
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    The client acquired a multi-million dollar historic apartment plagued with dangerous, legacy knob-and-tube wiring. The building's strict co-op board demanded a full code-compliant upgrade to 200A service, but absolutely prohibited any damage to the original 1920s plaster and crown moldings.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> The Engineered Solution
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    We executed a surgical rewiring process. Using advanced snake techniques and strategic access points, we replaced the entire electrical backbone, installed a modern smart panel, and integrated invisible Lutron automation—leaving the historic architecture completely untouched and passing DOB inspection on the first attempt.
                  </p>
                </div>
              </div>
              
              <a href="/#contact" className="group inline-flex items-center gap-3 bg-slate-950 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl active:scale-95">
                Discuss Your Project 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="bg-white h-24"></div>
      <Footer />
    </main>
  );
}