"use client";

import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Coluna da Esquerda: Informações e Persuasão */}
        <div className="flex-1 lg:pr-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Upgrade <br /> 
            <span className="text-amber-500">Your Space?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Fill out the form with your project details or emergency needs. Our team will get back to you within 24 hours with a transparent, no-obligation estimate.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-amber-500">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Call Us 24/7</p>
                <p className="font-bold text-lg">+1 (201) 555-0123</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-amber-500">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email Us</p>
                <p className="font-bold text-lg">quote@leandroelectric.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-amber-500">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Service Area</p>
                <p className="font-bold text-lg">Newark, NJ & NYC Metro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: O Formulário de Captura */}
        <div className="flex-1">
          <form className="bg-slate-800/50 p-8 md:p-10 rounded-[2rem] border border-slate-700/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" placeholder="(555) 123-4567" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">ZIP Code</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" placeholder="07102" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Service Type</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none">
                  <option>Residential Upgrade</option>
                  <option>Commercial Wiring</option>
                  <option>Smart Home Setup</option>
                  <option>Emergency Repair</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
              <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none" placeholder="Tell us about what you need..."></textarea>
            </div>

            <button type="button" className="w-full bg-amber-600 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-500 transition-all shadow-lg hover:shadow-amber-600/20">
              Get My Free Quote <ArrowRight size={20} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}