import React, { useState, useEffect } from 'react';
import { MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const maxIndex = TESTIMONIALS.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="bg-slate-950 py-16 md:py-24 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-yellow-500/10 text-yellow-500 mb-4">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-oswald font-bold">
            Veja o Que Nossos Alunos <br /> Estão Dizendo
          </h2>
        </div>

        <div className="relative max-w-md mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((img, index) => (
                <div key={index} className="w-full flex-shrink-0 flex justify-center px-2">
                   <img 
                    src={img} 
                    alt={`Depoimento Aluno ${index + 1}`} 
                    className="w-full rounded-xl border border-white/10 shadow-lg select-none bg-black/50"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-black/70 hover:bg-yellow-500 hover:text-black p-2 rounded-full border border-white/20 transition-all z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-black/70 hover:bg-yellow-500 hover:text-black p-2 rounded-full border border-white/20 transition-all z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-6 gap-2 flex-wrap">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-yellow-500 w-6' : 'bg-white/30'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
