import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "Como funciona o curso?",
    answer: "Nosso curso é <strong>totalmente online</strong> e logo após realizar a sua inscrição, você irá receber os <strong>dados de acesso</strong> da nossa plataforma onde você terá <strong>acesso total ao curso.</strong>"
  },
  {
    question: "Como realizo a minha inscrição?",
    answer: "É muito simples, basta você clicar em qualquer “botão de inscrição” acima que você será redirecionado para a nossa página de inscrição. Depois basta você:<br/><br/><ul class='list-disc pl-5 space-y-2'><li>Preencher todas as informações</li><li>Escolher a forma de pagamento</li><li>Após confirmar o pagamento você irá receber em seu e-mail os dados de acesso ao curso.</li></ul><br/><strong>OBS.:</strong> Será através do seu e-mail que você irá acessar o curso, por isso preste bastante atenção para preencher tudo corretamente.<br/><br/>Pronto, agora basta você acessar a plataforma e assistir às aulas."
  },
  {
    question: "O que eu irei receber?",
    answer: "Você vai receber acesso exclusivo à nossa plataforma onde contém todas as <strong>videoaulas, materiais para baixar, bônus exclusivos</strong> e também o <strong>seu certificado</strong>."
  },
  {
    question: "Tenho que pagar mensalidade?",
    answer: "<strong>Não</strong>, o pagamento do curso é único e não possui mensalidades ou qualquer outra taxa adicional. Resumindo, você irá pagar apenas o valor da inscrição e nada mais do que isso."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Na hora de realizar a sua inscrição, você poderá escolher pagar com Boleto Bancário ou Cartão de Crédito ou PIX.<br/><br/><strong>Qual a diferença?</strong><br/><br/><strong>PIX:</strong> Você terá <u>acesso imediato</u> ao curso.<br/><strong>Cartão de Crédito:</strong> Você terá <u>acesso imediato</u> ao curso e também poderá parcelar em <u>até 12X.</u><br/><strong>Boleto Bancário:</strong> É necessário aguardar o banco reconhecer o pagamento e compensar o boleto, este procedimento pode levar <u>até 72 horas</u>. Não é possível parcelar no boleto."
  },
  {
    question: "Acabei de realizar a minha inscrição, o que devo fazer agora?",
    answer: "Agora basta você ficar de olho em seu email e aguardar chegar os dados de acesso ao curso, também é importante sempre verificar a <strong>caixa de spam</strong> ou <strong>lixo eletrônico</strong> caso o e-mail não chegue na caixa de entrada."
  },
  {
    question: "Como eu irei acessar o curso?",
    answer: "Você poderá acessar o curso através do seu <strong>Celular, Computador</strong> ou <strong>Tablet</strong>."
  },
  {
    question: "Em qual horário posso assistir as aulas?",
    answer: "Você poderá estudar a qualquer horário, a qualquer dia da semana, as aulas ficam disponíveis <strong>24 horas por dia.</strong>"
  },
  {
    question: "Como irei receber o meu certificado?",
    answer: "É bastante simples, assim que você concluir todo o curso e assistir todas as aulas, a própria plataforma irá liberar o certificado, depois basta você baixar e imprimi-lo."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Se durante 7 dias, você não gostar do curso, ou achar que nosso curso não é para você, basta entrar em contato conosco e pedir Reembolso que iremos devolver todo o seu dinheiro sem nenhuma enrolação."
  },
  {
    question: "Se eu tiver dúvidas durante as aulas?",
    answer: "Dentro da nossa plataforma nós temos um <strong>suporte online para dúvidas</strong>, onde respondemos todas as suas questões relacionadas ao curso."
  },
  {
    question: "Para quem é o curso?",
    answer: "Este curso é recomendado para você que já <strong>trabalha na área</strong> e quer se atualizar e também para você que está <strong>começando agora</strong> e já quer iniciar na frente de seus concorrentes com cortes e técnicas exclusivas e avançadas."
  },
  {
    question: "O curso é presencial?",
    answer: "<strong>Não</strong>, nosso treinamento é 100% online e você poderá acessá-lo do seu celular, computador ou tablet."
  },
  {
    question: "Eu conseguirei aprender apenas com vídeo aulas?",
    answer: "<strong>Sim</strong>, porém para alcançar bons resultados é ideal você aplicar tudo aquilo que irá aprender durante o curso. Lembre-se, “a prática leva à perfeição”."
  },
  {
    question: "O curso é reconhecido pelo MEC?",
    answer: "<strong>Não</strong>, apenas cursos de graduação e pós-graduação são reconhecidos pelo MEC. O nosso é um curso livre profissionalizante."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-zinc-950 py-16 text-white border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-yellow-500/10 text-yellow-500 mb-4">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-oswald font-bold uppercase">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-lg bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:border-yellow-500/30"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold font-oswald text-lg md:text-xl uppercase tracking-wide ${openIndex === index ? 'text-yellow-500' : 'text-gray-200'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                  <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};