import React from 'react';
import { Users } from 'lucide-react';
import { STUDENT_RESULTS } from '../constants';

export const StudentResults: React.FC = () => {
  return (
    <section className="bg-black py-16 text-white border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center p-3 rounded-full bg-yellow-500/10 text-yellow-500 mb-4">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-4xl font-oswald font-bold uppercase leading-tight text-yellow-500">
            CURSO QUE ESTÁ MUDANDO A VIDA <br className="hidden md:block"/> DE MILHARES DE ALUNOS!
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {STUDENT_RESULTS.map((img, index) => (
            <div key={index} className="rounded-lg overflow-hidden border border-white/20 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg bg-zinc-900">
              <img
                src={img}
                alt={`Resultado Aluno ${index + 1}`}
                className="w-full h-full object-cover aspect-[9/16]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};