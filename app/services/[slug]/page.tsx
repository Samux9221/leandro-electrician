import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const content: Record<string, { title: string; desc: string; tag: string }> = {
  "smart-home": {
    tag: "Low Voltage Advantage",
    title: "Smart Home & AV Systems",
    desc: "Engenharia de automação para propriedades de elite em NYC. Sistemas Lutron, Savant e áudio invisível instalados com rapidez e zero burocracia de permits."
  },
  "networking": {
    tag: "Enterprise Grade",
    title: "High-Performance Networking",
    desc: "WiFi 7 e infraestrutura de fibra óptica para ambientes comerciais e residenciais críticos. Eliminamos zonas mortas e garantimos uptime total."
  },
  "security": {
    tag: "Access Control",
    title: "Advanced Security & Surveillance",
    desc: "Vigilância com IA e sistemas Brivo/ButterflyMX. Proteção remota integrada que não exige aprovações complexas do DOB."
  },
  "panels": {
    tag: "Master Electrical",
    title: "Panel Upgrades (200A/400A)",
    desc: "Escalamos a sua infraestrutura elétrica para suportar HVAC moderno e tecnologia de alta demanda. Total conformidade com o código de NYC."
  },
  "ev-charging": {
    tag: "Master Electrical",
    title: "EV Infrastructure",
    desc: "Instalação certificada de Tesla Wall Connectors e carregadores universais. Gerenciamos a carga e a segurança do seu painel principal."
  },
  "violations": {
    tag: "NYC Compliance",
    title: "DOB & ECB Violation Removal",
    desc: "Diagnóstico rápido e correção de infraestrutura para remover violações ativas, permitindo que as suas inspeções e vendas ocorram sem atrasos."
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = content[slug];

  if (!service) notFound();

  return (
    <main className="bg-white text-slate-900 min-h-screen flex flex-col">
      <Navbar />
      <section className="pt-48 pb-24 px-6 max-w-[90rem] mx-auto w-full flex-grow">
        <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">{service.tag}</span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 max-w-4xl">{service.title}</h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-16">{service.desc}</p>
        
        {/* Placeholder para Conteúdo Técnico do Cliente */}
        <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 md:p-24 text-center">
          <p className="text-slate-400 font-semibold mb-2">Technical specifications & brands coming soon.</p>
          <p className="text-slate-300 text-sm">Consulting for: Lutron, Savant, Brivo, Tesla & more.</p>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </main>
  );
}