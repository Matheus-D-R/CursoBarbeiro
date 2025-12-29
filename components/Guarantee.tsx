import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
             <div className="w-32 h-32 md:w-40 md:h-40 bg-black text-yellow-500 rounded-full flex flex-col items-center justify-center border-4 border-yellow-500 shadow-xl relative">
                <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 mb-1" />
                <span className="font-oswald font-bold text-2xl md:text-3xl leading-none">7</span>
                <span className="text-xs uppercase font-bold tracking-wider">Dias</span>
             </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-oswald font-bold mb-4">Garantia Incondicional de 7 Dias</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              O risco é todo nosso! Inscreva-se agora e tenha acesso a todo o conteúdo. 
              Se por qualquer motivo você não gostar do curso ou achar que não é para você, 
              nós devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
