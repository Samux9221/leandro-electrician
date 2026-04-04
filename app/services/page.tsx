"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Zap, Home, ShieldCheck, BatteryCharging, Lightbulb, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const allServices = [
    {
      id: "panel-upgrades",
      title: "Electrical Panel Upgrades",
      description: "Older homes weren't built for today's power demands. We upgrade your panels to 200A or 400A, ensuring your property is safe, code-compliant, and ready for modern appliances.",
      features: ["Circuit Breaker Replacement", "Sub-panel Installation", "Surge Protection", "Code Violations Correction"],
      icon: <Zap className="text-amber-600" size={40} />
    },
    {
      id: "smart-home",
      title: "Smart Home Integration",
      description: "Transform your house into a responsive, energy-efficient home. We seamlessly integrate cutting-edge automation systems that you can control directly from your smartphone.",
      features: ["Smart Lighting (Lutron, Philips Hue)", "Automated Thermostats", "Security Camera Wiring", "Smart Doorbells & Locks"],
      icon: <Home className="text-amber-600" size={40} />
    },
    {
      id: "ev-chargers",
      title: "EV Charger Installation",
      description: "Charge your electric vehicle safely and up to 5x faster at home. We are specialists in installing Level 2 charging stations tailored to your vehicle's specific requirements.",
      features: ["Tesla Wall Connectors", "Universal Level 2 Chargers", "Load Calculation", "Dedicated Circuit Installation"],
      icon: <BatteryCharging className="text-amber-600" size={40} />
    },
    {
      id: "lighting-design",
      title: "Premium Lighting Design",
      description: "Lighting changes everything. We design and install custom indoor and outdoor lighting solutions that enhance the architectural beauty and security of your property.",
      features: ["Recessed LED Lighting", "Chandelier Installation", "Landscape & Outdoor Lighting", "Under-Cabinet Lighting"],
      icon: <Lightbulb className="text-amber-600" size={40} />
    },
    {
      id: "commercial",
      title: "Commercial Wiring & Build-outs",
      description: "Reliable power is the backbone of your business. We provide scalable, heavy-duty electrical solutions for offices, retail stores, and restaurants in the NYC/NJ area.",
      features: ["Office Build-outs", "Retail Display Lighting", "Heavy Machinery Wiring", "Data & Network Cabling"],
      icon: <Building2 className="text-amber-600" size={40} />
    },
    {
      id: "troubleshooting",
      title: "Diagnostics & Repair",
      description: "Flickering lights or tripping breakers? Our expert troubleshooting isolates the root cause of electrical issues quickly, prioritizing your safety and preventing fire hazards.",
      features: ["Faulty Wiring Repair", "Outlet & Switch Replacement", "Emergency Electrical Service", "Safety Inspections"],
      icon: <ShieldCheck className="text-amber-600" size={40} />
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      {/* Header da Página de Serviços */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6"
        >
          Our <span className="text-amber-600">Expertise</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Comprehensive electrical solutions tailored for the highest standards of safety, performance, and design aesthetics.
        </motion.p>
      </section>

      {/* Grid de Serviços Detalhado */}
      <section className="px-6 pb-32 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {allServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-100 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-50 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <div className="border-t border-slate-100 pt-6">
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                      <span className="text-amber-500 mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final (Call to Action) */}
      <section className="py-24 px-6 bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Need a service not listed here?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            We handle projects of all sizes. Contact us to discuss your specific electrical needs and get a custom estimate.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-500 transition-all duration-300 shadow-lg hover:shadow-amber-600/20 hover:-translate-y-1">
            Discuss Your Project <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}