import React from 'react';
import { Button } from './Button';
import { Scissors } from 'lucide-react';
import { CHECKOUT_LINK } from '../constants';

export const Hero: React.FC = () => {
  const handleCheckout = () => {
    window.open(CHECKOUT_LINK, '_blank');
  };

  return (
    <section className="relative w-full bg-slate-950 text-white pt-10 pb-16 md:py-24 overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 text-yellow-500 mb-6 tracking-widest uppercase font-bold text-sm">
          <Scissors className="w-5 h-5" />
          <span>Curso Profissionalizante</span>
          <Scissors className="w-5 h-5 transform rotate-180" />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-7xl font-oswald font-bold leading-tight mb-6 uppercase">
          VEJA COMO SE TORNAR UM <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">BARBEIRO PROFISSIONAL</span> COMEÇANDO DO ABSOLUTO ZERO
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl max-w-4xl mb-10 leading-relaxed">
          Aprenda as melhores técnicas de corte mesmo que você <span className="text-white font-semibold">NUNCA TENHA PEGADO EM UMA TESOURA.</span><br className="hidden md:block" />
          Chegue a faturar entre <span className="text-yellow-500 font-bold">R$ 3.100,00 à R$ 8.000,00</span> por mês no mercado que mais cresce no Brasil.
        </p>

        <Button onClick={handleCheckout} className="animate-bounce-slow">
          QUERO ME TORNAR BARBEIRO AGORA
        </Button>
      </div>
    </section>
  );
};