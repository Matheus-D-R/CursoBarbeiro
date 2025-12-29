import React from 'react';
import { Button } from './Button';
import { CHECKOUT_LINK } from '../constants';

const STEPS = [
  {
    step: "1º Passo",
    title: "Realize a sua inscrição",
    image: "https://www.fabricabarbeiros3.online/images/profissional/como-funciona-01.jpg",
    description: "Primeiramente você irá preencher os seus dados na página de inscrição e escolher a sua forma de pagamento."
  },
  {
    step: "2º Passo",
    title: "Acesse nossa plataforma",
    image: "https://www.fabricabarbeiros3.online/images/profissional/como-funciona-02.1.jpg",
    description: "Assim que confirmar a sua inscrição, você irá receber em seu e-mail os dados de acesso da nossa plataforma exclusiva."
  },
  {
    step: "3º Passo",
    title: "Assista suas aulas",
    image: "https://www.fabricabarbeiros3.online/images/profissional/como-funciona-03.jpg",
    description: "Pronto! Basta você acessar nossa plataforma, assistir as aulas passo a passo e começar a praticar."
  }
];

export const HowItWorks: React.FC = () => {
  const handleCheckout = () => {
    window.open(CHECKOUT_LINK, '_blank');
  };

  return (
    <section className="bg-black py-16 md:py-24 text-white relative">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block h-1 w-20 bg-yellow-500 mb-6"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-oswald font-bold uppercase leading-tight max-w-4xl mx-auto">
            Como Funciona Nosso <br />
            <span className="text-yellow-500">Curso de Barbeiro Profissional?</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {STEPS.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              
              {/* Step Number Badge */}
              <div className="mb-6 relative">
                <span className="font-oswald text-5xl font-bold text-zinc-800 absolute -top-8 -left-4 z-0 opacity-50 select-none group-hover:text-yellow-500/20 transition-colors duration-300">
                  0{index + 1}
                </span>
                <span className="relative z-10 bg-yellow-500 text-black font-bold px-4 py-1 rounded-full uppercase text-sm tracking-wider shadow-lg shadow-yellow-500/20">
                  {item.step}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-4 font-oswald uppercase tracking-wide min-h-[3.5rem] flex items-center justify-center">
                {item.title}
              </h3>

              {/* Image Container */}
              <div className="w-full mb-6 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[4/3]">
                <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button onClick={handleCheckout} className="md:px-12 md:py-5 text-lg">
            SIM, QUERO ME TORNAR ALUNO TAMBÉM!
          </Button>
        </div>

      </div>
    </section>
  );
};