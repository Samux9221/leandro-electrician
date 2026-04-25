import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import LowVoltagePrimary from "../components/LowVoltagePrimary"; 
import BeforeAfter from "../components/BeforeAfter";
import CoreElectrical from "../components/CoreElectrical"; // <-- AQUI! O novo componente escuro
import Testimonials from "../components/Testimonials";
import MeetThePro from "../components/MeetThePro";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Process from "../components/Process";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFD] text-slate-900 selection:bg-amber-100">
      <Navbar />
      <Hero />
      <TrustBar />
      <LowVoltagePrimary /> 
      <Process /> {/* Nova secção adicionada aqui */}
      <BeforeAfter />
      <CoreElectrical /> {/* Quebra o design com o fundo Dark, excelente para retenção */}
      <Testimonials />
      <MeetThePro />
      <TrustBar />
        <ContactForm />
      <Footer />
    </main>
  );
}