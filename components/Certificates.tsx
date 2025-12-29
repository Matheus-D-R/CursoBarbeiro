import React from 'react';
import { Award } from 'lucide-react';
import { CERTIFICATES } from '../constants';

export const Certificates: React.FC = () => {
  return (
    <section className="bg-zinc-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-yellow-500/10 text-yellow-500 mb-4">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-oswald font-bold mb-4">
            Certificados Reconhecidos <br /> Que Valorizam Seu Currículo
          </h2>
          <p className="text-gray-400 text-lg">
            Certificados digitais inclusos após a conclusão do curso
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          {CERTIFICATES.map((cert, index) => (
            <div key={index} className="w-full md:w-1/2 group relative transform hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute inset-0 bg-yellow-500 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <img 
                src={cert} 
                alt={`Certificado Barbeiro ${index + 1}`} 
                className="relative z-10 w-full rounded-lg shadow-xl border border-white/5"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
