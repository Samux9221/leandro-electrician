import { ArrowRight, Zap, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-24 pb-10 px-6 relative overflow-hidden">
      {/* Efeito de brilho premium na borda superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
      
      {/* Brilho radial de fundo (muito sutil) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Mega CTA (O grande diferencial de design) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-slate-800/50 pb-16 gap-10">
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Powering your <br />
              <span className="text-slate-600">next project.</span>
            </h2>
          </div>
          <a 
            href="#contact" 
            className="group flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-600 hover:text-white transition-all duration-300"
          >
            Get an Estimate 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>

        {/* Grade de Informações Limpa */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Coluna da Marca (Maior) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white mb-6">
              <Zap className="text-amber-500" fill="currentColor" size={24} />
              Leandro<span className="text-amber-500">.</span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-8">
              Setting the standard for premium electrical services in Newark and the NYC Metro area. 
            </p>
            {/* Selo de Licença Minimalista */}
            <div className="inline-flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <ShieldCheck className="text-amber-500" size={28} />
              <div>
                <p className="text-white font-bold text-sm">Fully Licensed & Insured</p>
                <p className="text-slate-500 text-xs">NJ #1234567 • NY #9876543</p>
              </div>
            </div>
          </div>

          {/* Coluna de Navegação */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white font-bold mb-6 text-lg">Navigation</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Our Services</a></li>
              <li><a href="/portfolio" className="hover:text-amber-500 transition-colors">Project Portfolio</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Coluna de Contato */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg">Get in Touch</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li>+1 (201) 555-0123</li>
              <li>quote@leandroelectric.com</li>
              <li className="pt-2">
                <span className="block text-white mb-1">Service Area:</span>
                Newark, NJ & NYC Metro
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de Copyright Super Clean */}
        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Leandro Electrical Services.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}