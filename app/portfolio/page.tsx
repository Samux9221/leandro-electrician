"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Portfolio() {
  // Dados simulados para a Galeria Visual
  const gallery = [
    { id: 1, src: "https://images.unsplash.com/photo-1621905251918-4841cbe817d5?q=80&w=800&auto=format&fit=crop", title: "Panel Upgrades" },
    { id: 2, src: "https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=800&auto=format&fit=crop", title: "Commercial Wiring" },
    { id: 3, src: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop", title: "Smart Lighting" },
    { id: 4, src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop", title: "Home Automation" },
    { id: 5, src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop", title: "EV Chargers" },
    { id: 6, src: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=800&auto=format&fit=crop", title: "Custom Installations" },
  ];

  // Dados simulados para os Estudos de Caso
  const caseStudies = [
    {
      title: "Manhattan Smart Home Integration",
      location: "Upper East Side, NY",
      challenge: "The client purchased a historic 1920s apartment with outdated knob-and-tube wiring that couldn't support modern appliances or smart home systems.",
      solution: "We performed a complete gut-renovation of the electrical system, upgrading to a 200A panel and integrating Lutron smart lighting throughout the property without damaging the original crown molding.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Commercial EV Fleet Charging Station",
      location: "Newark, NJ",
      challenge: "A local logistics company needed to transition their delivery fleet to electric vehicles, requiring massive power distribution and load management.",
      solution: "Designed and installed a scalable commercial electrical infrastructure, including sub-panels and 10 Level-2 Tesla destination chargers with dynamic load balancing.",
      image: "https://images.unsplash.com/photo-1664448007548-692ab3cceea8?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* 1. Header do Portfólio */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6"
        >
          Project <span className="text-amber-600">Showcase</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          A detailed look at our premium residential and commercial electrical upgrades across NYC and New Jersey.
        </motion.p>
      </section>

      {/* 2. Galeria Visual (O Impacto) */}
      <section className="px-6 pb-32 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-amber-400 text-sm font-bold tracking-wider uppercase mb-1">Featured</p>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Estudos de Caso (A Autoridade Técnica) */}
      <section className="py-32 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Featured <span className="text-amber-600">Case Studies</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
              Beyond the aesthetics, see how we solve complex electrical challenges with precision engineering.
            </p>
          </div>

          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                {/* Imagem do Case */}
                <div className="flex-1 w-full">
                  <div className="relative h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-slate-900 shadow-sm">
                      {study.location}
                    </div>
                  </div>
                </div>

                {/* Texto do Case */}
                <div className="flex-1 space-y-8">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="text-amber-600 font-bold mb-2 uppercase tracking-wide text-sm flex items-center gap-2">
                        <ArrowRight size={16} /> The Challenge
                      </h4>
                      <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-slate-300">
                      <h4 className="text-amber-500 font-bold mb-2 uppercase tracking-wide text-sm flex items-center gap-2">
                        <CheckCircle2 size={16} /> Our Solution
                      </h4>
                      <p className="leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  
                  <a href="/#contact" className="inline-block mt-4 text-slate-900 font-bold hover:text-amber-600 transition-colors border-b-2 border-slate-900 hover:border-amber-600 pb-1">
                    Start a similar project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Espaço final para o Footer não grudar nos cases */}
      <div className="bg-white h-20"></div>

      <Footer />
    </main>
  );
}