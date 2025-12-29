import React from 'react';
import { Check, Scissors } from 'lucide-react';

const CURRICULUM_ITEMS = [
  "Materiais de uso",
  "Técnica de tesoura",
  "Técnica de navalha",
  "MANUSEIO DA MÁQUINA",
  "Corte social (Máquina)",
  "Corte social (Tesoura)",
  "Técnica do pezinho",
  "Técnica da sobrancelha",
  "Técnicas de Fade/Degradê",
  "High Fade (Degradê alto)",
  "Mid Fade (Degradê médio)",
  "Low Fade (Degradê baixo)",
  "Entenda Os 3 tons do degradê",
  "Entenda o que são linhas de recessão",
  "Aprenda a fazer um 'Fade Limpo'",
  "Como tirar todas as marcações no degradê",
  "Corte navalhado",
  "Corte em V",
  "Razor Part",
  "Burst Fade (Moicano disfarçado Europeu)",
  "Taper Fade (Corte americano)",
  "Flat Top (Corte do Will Smith)",
  "Pigmentação permanente",
  "Platinado",
  "Reflexo alinhado",
  "Limpeza de máquina",
  "Lâmina de cerâmica (Troca)",
  "Freestyle 3D",
  "Desenhos animes",
  "E muito mais..."
];

export const Curriculum: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-16 border-t border-b border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-oswald font-bold text-white mb-6 uppercase leading-tight">
            ACESSO IMEDIATO A <span className="text-yellow-500">+70 DE AULAS</span> QUE VÃO MUDAR A SUA VIDA!
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Você vai aprender muito mais do que apenas cortar cabelo, você vai <strong className="text-white">DOMINAR TODAS AS TÉCNICAS</strong> PARA SE TORNAR UM BARBEIRO PROFISSIONAL COMPLETO.
          </p>
          <p className="text-yellow-500 font-bold mt-4 uppercase tracking-widest text-sm">
            VEJA ABAIXO O QUE VOCÊ VAI APRENDER:
          </p>
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {CURRICULUM_ITEMS.map((item, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300">
                  <Check className="w-3 h-3 text-yellow-500 group-hover:text-black font-bold" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm bg-black/40 px-4 py-2 rounded-full border border-white/10">
                <Scissors className="w-4 h-4 text-yellow-500" />
                <span>Curso 100% Online com Acesso Vitalício</span>
            </div>
        </div>
      </div>
    </section>
  );
};
