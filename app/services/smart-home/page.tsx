import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function SmartHomePage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 px-6 max-w-[90rem] mx-auto">
        <h1 className="text-6xl font-extrabold tracking-tighter mb-8">Smart Home & AV Solutions</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed mb-12">
          De sistemas de iluminação inteligente a cinemas em casa de alta fidelidade, projetamos tecnologia que se integra perfeitamente na sua residência em NYC.
        </p>
        {/* Placeholder para conteúdo que o cliente vai fornecer */}
        <div className="bg-slate-50 rounded-[3rem] p-20 border border-slate-100 text-center">
          <p className="text-slate-400 font-medium">Conteúdo detalhado sobre automação e áudio em desenvolvimento...</p>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </main>
  );
}