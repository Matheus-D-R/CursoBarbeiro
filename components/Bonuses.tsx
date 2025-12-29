import React from 'react';
import { Gift } from 'lucide-react';
import { BONUSES } from '../constants';

export const Bonuses: React.FC = () => {
  return (
    <section className="bg-slate-950 py-16 text-white border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-yellow-500/10 text-yellow-500 mb-4 animate-bounce">
            <Gift className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-oswald font-bold mb-4 uppercase">
            Bônus Exclusivos
          </h2>
          <p className="text-yellow-500 font-bold text-xl uppercase tracking-wider">
            +5 Bônus Incríveis Totalmente Grátis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {BONUSES.map((img, index) => (
            <div key={index} className="bg-zinc-900 rounded-xl overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-colors shadow-lg">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={img} 
                  alt={`Bonus ${index + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                 <p className="text-gray-400 text-sm">Bônus #{index + 1}</p>
                 <p className="font-bold text-lg mt-1">Liberado Automaticamente</p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-400 mt-10">
          * Esses bônus são liberados automaticamente após a compra na área de membros.
        </p>
      </div>
    </section>
  );
};