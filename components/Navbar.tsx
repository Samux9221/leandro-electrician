"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Zap, Shield, Wifi, Home, Car, AlertOctagon, Menu, X } from "lucide-react";

// Links estruturados para autoridade imediata
const lowVoltageLinks = [
  { title: "Smart Home & AV", icon: <Home size={18} />, href: "/services/smart-home" },
  { title: "Enterprise Networking", icon: <Wifi size={18} />, href: "/services/networking" },
  { title: "Security & Access", icon: <Shield size={18} />, href: "/services/security" },
];

const electricalLinks = [
  { title: "Heavy-Duty Panels", icon: <Zap size={18} />, href: "/services/panels" },
  { title: "EV Infrastructure", icon: <Car size={18} />, href: "/services/ev-charging" },
  { title: "DOB Violations", icon: <AlertOctagon size={18} />, href: "/services/violations" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-[90rem] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="font-extrabold text-2xl tracking-tighter text-slate-950">
            LEANDRO<span className="text-amber-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="group relative">
              <button className="flex items-center gap-1 font-semibold text-slate-600 hover:text-slate-950 transition-colors py-8">
                Our Solutions <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              
              <div className="absolute top-full -left-20 pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white border border-slate-100 shadow-2xl rounded-[2rem] p-8 w-[650px] grid grid-cols-2 gap-8 relative before:absolute before:-top-2 before:left-28 before:w-4 before:h-4 before:bg-white before:border-t before:border-l before:border-slate-100 before:rotate-45">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">Low Voltage <span className="text-[10px] text-slate-400 lowercase normal-case ml-1">(Fast Deploy)</span></h4>
                    <ul className="space-y-4">
                      {lowVoltageLinks.map(link => (
                        <li key={link.title}>
                          <a href={link.href} className="flex items-center gap-3 text-slate-600 hover:text-slate-950 font-medium group/item transition-colors">
                            <span className="p-2 bg-slate-50 rounded-lg group-hover/item:bg-amber-50 group-hover/item:text-amber-600 transition-colors">{link.icon}</span>
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-l border-slate-100 pl-8">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Master Electrical</h4>
                    <ul className="space-y-4">
                      {electricalLinks.map(link => (
                        <li key={link.title}>
                          <a href={link.href} className="flex items-center gap-3 text-slate-600 hover:text-slate-950 font-medium group/item transition-colors">
                            <span className="p-2 bg-slate-50 rounded-lg group-hover/item:bg-slate-900 group-hover/item:text-white transition-colors">{link.icon}</span>
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <a href="#process" className="font-semibold text-slate-600 hover:text-slate-950 transition-colors">The NYC Process</a>
            <a href="/portfolio" className="font-semibold text-slate-600 hover:text-slate-950 transition-colors">Portfolio</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:block bg-slate-950 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-slate-800 transition-all shadow-lg">
            Get a Consultation
          </a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-950 hover:bg-slate-50 rounded-xl transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Apple-Style Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-8">
              <div className="grid grid-cols-1 gap-6">
                {[...lowVoltageLinks, ...electricalLinks].map(link => (
                  <a key={link.title} href={link.href} onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-slate-700 font-semibold py-1">
                    <span className="text-amber-600">{link.icon}</span>
                    {link.title}
                  </a>
                ))}
              </div>
              <div className="pt-6 border-t border-slate-50 space-y-4">
                <a href="#process" onClick={() => setIsOpen(false)} className="block text-xl font-bold text-slate-950">The NYC Process</a>
                <a href="/portfolio" onClick={() => setIsOpen(false)} className="block text-xl font-bold text-slate-950">Portfolio</a>
              </div>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full bg-slate-950 text-white py-4 rounded-2xl font-bold text-center">
                Get a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}