"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useRef } from "react";

const BackgroundSchema = () => {
  return (
    <svg 
      className="absolute inset-0 w-full h-full opacity-[0.03]" 
      width="100%" 
      height="100%" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#0F172A" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      
      <motion.path
        d="M -100,200 L 150,300 L 400,100 L 800,400 L 1200,200"
        stroke="#F59E0B" 
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        d="M 1300,500 L 1000,600 L 600,400 L 200,700 L -200,500"
        stroke="#64748B"
        strokeWidth="0.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default function Hero() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const linesY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <section 
      ref={targetRef}
      className="relative min-h-[calc(100vh-5rem)] mt-20 flex items-center py-8 px-6 max-w-[90rem] mx-auto overflow-hidden bg-[#FBFBFD]"
    >
      <motion.div style={{ y: linesY }} className="absolute inset-0 -z-10">
        <BackgroundSchema />
      </motion.div>

      <div className="absolute top-0 right-1/4 -z-10 w-[500px] h-[500px] bg-amber-50 rounded-full blur-[100px] opacity-60" />

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 text-left z-10"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-slate-100 shadow-sm text-slate-600 font-medium px-4 py-2 rounded-full text-sm mb-6 transition-all hover:border-amber-100">
            <ShieldCheck size={16} className="text-amber-500" />
            <span>Licensed & Insured NYC / NJ</span>
          </div>
          
          <h1 className="text-5xl lg:text-[5.5rem] xl:text-8xl font-extrabold tracking-tighter text-slate-950 leading-[0.95] mb-6">
            Intelligent Low Voltage.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500">
              Master Electrical.
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed mb-8 font-medium">
            High-performance networking and smart automation for NYC's premier properties. Fast execution, zero permit delays, and full DOB compliance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group bg-slate-950 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-lg active:scale-95">
              Get a Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="bg-white border border-slate-200 text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all text-center">
              Our Solutions
            </a>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: imageY }} 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full relative h-[40vh] lg:h-auto lg:max-h-[70vh] aspect-square lg:aspect-[4/3] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
        >
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop" 
            alt="Premier NYC Property with Integrated Technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FBFBFD] to-transparent" />
        </motion.div>
      </div>
      
    </section>
  );
}