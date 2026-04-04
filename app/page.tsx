import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Services from "../components/Services";
import BeforeAfter from "../components/BeforeAfter";
import Testimonials from "../components/Testimonials";
import MeetThePro from "../components/MeetThePro";
import ContactForm from "../components/ContactForm"; // Novo
import Footer from "../components/Footer"; // Novo

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <MeetThePro />
      <ContactForm />
      <Footer />
    </main>
  );
}