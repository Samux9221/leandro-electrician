"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => setIsOpen(false);

  // Efeito avançado: impede a rolagem do site quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
        
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="text-2xl font-bold tracking-tight text-slate-900 hover:opacity-80 transition-opacity">
          Leandro<span className="text-amber-600">.</span>
        </Link>

        {/* Links de Navegação (Desktop) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <Link href="/services" className="hover:text-amber-600 transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-amber-600 transition-colors">Our Work</Link>
          <Link href="/#contact" className="hover:text-amber-600 transition-colors">Contact</Link>
        </div>

        {/* Botão Call Now (Desktop) */}
        <div className="hidden md:block">
          <a 
            href="tel:+11234567890" 
            className="flex items-center gap-2 bg-amber-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 shadow-sm"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Botão Hambúrguer (Mobile) */}
        <button 
          className="md:hidden p-2 text-slate-900 transition-transform active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay do Menu Mobile (O Efeito Apple) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-0 pt-24 bg-slate-50/95 backdrop-blur-2xl z-40 flex flex-col items-center h-screen w-full"
          >
            <div className="flex flex-col items-center gap-8 mt-10 text-3xl font-bold text-slate-900">
              <Link href="/" onClick={closeMenu} className="hover:text-amber-600 transition-colors">Home</Link>
              <Link href="/services" onClick={closeMenu} className="hover:text-amber-600 transition-colors">Services</Link>
              <Link href="/portfolio" onClick={closeMenu} className="hover:text-amber-600 transition-colors">Our Work</Link>
              <Link href="/#contact" onClick={closeMenu} className="hover:text-amber-600 transition-colors">Contact</Link>
              
              <div className="w-16 h-px bg-slate-300 my-4"></div> {/* Linha divisória charmosa */}

              <a 
                href="tel:+11234567890" 
                onClick={closeMenu}
                className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-slate-800 transition-all shadow-xl"
              >
                <Phone size={24} className="text-amber-500" />
                <span>(201) 555-0123</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}