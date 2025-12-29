import React from 'react';
import { Button } from './Button';
import { Countdown } from './Countdown';
import { AlertTriangle, CheckCircle, CreditCard } from 'lucide-react';
import { CHECKOUT_LINK } from '../constants';

export const Offer: React.FC = () => {
  const handleCheckout = () => {
    window.open(CHECKOUT_LINK, '_blank');
  };

  return (
    <section id="offer-section" className="bg-gradient-to-b from-zinc-900 to-black py-20 text-white relative overflow-hidden">
       {/* Decorative glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-3xl mx-auto bg-zinc-900/80 backdrop-blur-sm border-2 border-yellow-500 rounded-2xl p-6 md:p-12 shadow-2xl shadow-yellow-500/10 text-center">
          
          {/* Scarcity Alert */}
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-8">
             <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-red-500 font-bold uppercase tracking-wide">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 animate-pulse" />
                  <span>Atenção: A promoção está esgotando!</span>
                </div>
             </div>
             <p className="text-red-400 text-sm mt-1">Poucas vagas com esse valor promocional.</p>
          </div>

          <h2 className="text-3xl md:text-5xl font-oswald font-bold mb-6">
            Torne-se um Barbeiro Profissional
          </h2>

          <div className="mb-8">
             <p className="text-gray-400 text-lg line-through decoration-red-500 decoration-2">De R$ 97,00</p>
             <p className="text-6xl md:text-7xl font-bold text-yellow-500 my-2">R$ 47,00</p>
             <p className="text-xl text-white">Ou <span className="font-bold">11x de R$ 5,22*</span></p>
          </div>

          <div className="flex justify-center mb-8">
             <Countdown />
          </div>

          <Button onClick={handleCheckout} fullWidth className="text-xl md:text-2xl py-6 animate-pulse hover:animate-none">
            GARANTIR MINHA VAGA AGORA
          </Button>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
               <CheckCircle className="w-4 h-4 text-green-500" />
               <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
               <CheckCircle className="w-4 h-4 text-green-500" />
               <span>Certificado Incluso</span>
            </div>
            <div className="flex items-center gap-2">
               <CheckCircle className="w-4 h-4 text-green-500" />
               <span>Compra Segura</span>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center items-center gap-2 text-xs text-gray-500">
             <CreditCard className="w-4 h-4" />
             <span>Pagamento processado via Hotmart/Eduzz/Kiwify</span>
          </div>

        </div>
      </div>
    </section>
  );
};