import React from 'react';
import { Camera } from 'lucide-react';
import { CUTS_GALLERY } from '../constants';

export const Gallery: React.FC = () => {
  return (
    <section className="bg-zinc-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-yellow-500/10 text-yellow-500 mb-4">
            <Camera className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-oswald font-bold mb-4">
            Cortes Que Você Vai Aprender
          </h2>
          <p className="text-gray-400">
            Técnicas passo a passo para dominar qualquer estilo
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {CUTS_GALLERY.map((img, index) => (
            <div 
              key={index} 
              className={`relative group overflow-hidden rounded-lg aspect-[3/4] ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <img 
                src={img} 
                alt={`Corte ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
