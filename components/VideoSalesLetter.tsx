import React from 'react';

export const VideoSalesLetter: React.FC = () => {
  return (
    <section className="bg-black py-10 md:py-16 border-t border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Container responsivo 16:9 */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-yellow-500/10 border-2 border-white/10 bg-zinc-900">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/h7-qTvlKjQw?autoplay=1&mute=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Curso de Barbeiro - Vídeo de Vendas"
            ></iframe>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2"></span>
            Assista ao vídeo para entender como funciona
          </p>
        </div>
      </div>
    </section>
  );
};