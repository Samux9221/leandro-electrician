// components/Navbar.tsx (Conceito Premium)
"use client";

import { motion } from "framer-motion";
import { ChevronDown, Zap, Shield, Wifi, Home, Car, AlertOctagon } from "lucide-react";

const lowVoltageLinks = [
  { title: "Smart Home", icon: <Home size={18} />, href: "/services/smart-home" },
  { title: "Networking", icon: <Wifi size={18} />, href: "/services/networking" },
  // ...outros
];

const electricalLinks = [
  { title: "Panel Upgrades", icon: <Zap size={18} />, href: "/services/panels" },
  { title: "EV Chargers", icon: <Car size={18} />, href: "/services/ev-charging" },
  { title: "Code Violations", icon: <AlertOctagon size={18} />, href: "/services/violations" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-[90rem] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo - Estilo Minimalista */}
          <a href="/" className="font-extrabold text-2xl tracking-tighter text-slate-950">
            LEANDRO<span className="text-amber-500">.</span>
          </a>

          {/* Navigation Links com Mega Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="group relative">
              <button className="flex items-center gap-1 font-semibold text-slate-600 hover:text-slate-950 transition-colors">
                Solutions <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              
              {/* Mega Menu Dropdown */}
              <div className="absolute top-full -left-20 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white border border-slate-100 shadow-2xl rounded-[2rem] p-8 w-[600px] grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">Low Voltage</h4>
                    <ul className="space-y-4">
                      {lowVoltageLinks.map(link => (
                        <li key={link.title}>
                          <a href={link.href} className="flex items-center gap-3 text-slate-600 hover:text-slate-950 font-medium group/item">
                            <span className="p-2 bg-slate-50 rounded-lg group-hover/item:bg-amber-50 transition-colors">{link.icon}</span>
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
                          <a href={link.href} className="flex items-center gap-3 text-slate-600 hover:text-slate-950 font-medium group/item">
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
            {/* Outros links de navegação */}
          </div>
        </div>

        <a href="#contact" className="bg-slate-950 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-slate-800 transition-all shadow-lg active:scale-95">
          Request Estimate
        </a>
      </div>
    </nav>
  );
}