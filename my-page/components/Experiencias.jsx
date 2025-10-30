"use client";

import Image from "next/image";

export default function Experiencias() {
  return (
    <section id="experiencia" className="py-12 lg:py-20 px-4 sm:px-6 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
           Experiências
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
         {/* Projetos Pessoais */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500/20 hover:border-green-400 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Image 
                  src="/person.png" 
                  alt="Projetos Pessoais"
                  width={70}
                  height={70}
                  className="rounded-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-300">Projetos Pessoais</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded-lg p-4 sm:p-5">
                <h4 className="font-semibold text-white mb-2">Jogo da Forca</h4>
                <p className="text-gray-300 text-sm line-clamp-3 sm:line-clamp-none">Jogo interativo desenvolvido com React e Next.js para praticar habilidades em front-end.</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Next.js</span>
                </div>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4 sm:p-5">
                <h4 className="font-semibold text-white mb-2">Portfólio Pessoal</h4>
                <p className="text-gray-300 text-sm line-clamp-3 sm:line-clamp-none">Site pessoal desenvolvido com Next.js e Tailwind CSS para showcase de projetos.</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Next.js</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Tailwind</span>
                </div>
              </div>
            </div>
          </div>

          {/* Projetos em Equipe */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Image 
                  src="/colab1.png" 
                  alt="Projetos colaborativos"
                  width={70}
                  height={70}
                  className="rounded-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-300">Projetos Colaborativos</h3>
            </div>
            
            <div className="space-y-4">
              {/* alerta urbano */}
              <div className="bg-gray-700/50 rounded-lg p-4 sm:p-5">
                <h4 className="font-semibold text-white mb-2">Alerta Urbano - App Web e Mobile</h4>
                <p className="text-gray-300 text-sm line-clamp-3 sm:line-clamp-none">
                  Plataforma que permite que cidadãos relatem problemas urbanos (buracos, lixo, enchentes, árvores caídas). 
                  Integra mapa interativo e notificações.
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Supabase</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Back4App</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Mapas Interativos</span>
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  <strong>Destaque colaborativo:</strong> Trabalho em equipe para identificar problemas urbanos e propor soluções digitais; coordenação de features entre front e back-end.
                </p>
              </div>

              {/* <-- Robô Educacional --> */}
              <div className="bg-gray-700/50 rounded-lg p-4 sm:p-5">
                <h4 className="font-semibold text-white mb-2">Robô Educacional com Arduino</h4>
                <p className="text-gray-300 text-sm line-clamp-3 sm:line-clamp-none">
                  Robô com dois Arduínos, controle via Bluetooth, telas LCD "expressivas", LEDs e sensor de proximidade. 
                  Voltado para ensino de robótica para alunos do 6º e 7º ano.
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Arduino</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">C++</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Bluetooth</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Hardware</span>
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  <strong>Destaque colaborativo:</strong> Trabalho em equipe para unir hardware, software e experiência educacional; divisão de tarefas para funcionalidades diferentes.
                </p>
              </div>

              {/* Protótipo Cultural */}
              <div className="bg-gray-700/50 rounded-lg p-4 sm:p-5">
                <h4 className="font-semibold text-white mb-2">Protótipo Cultural: Tecnologia Impulsionando a Cultura</h4>
                <p className="text-gray-300 text-sm line-clamp-3 sm:line-clamp-none">
                  Aplicação focada na preservação do patrimônio cultural usando tecnologia sustentável.
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Figma</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Prototipagem</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">UX/UI</span>
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  <strong>Destaque colaborativo:</strong> Trabalho em equipe de estudantes, com divisão de funções e foco em impacto cultural e sustentabilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna 3: Certificados */}
          <div className="bg-gray-800 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Image 
                  src="/achievement.png" 
                  alt="Certificados"
                  width={70}
                  height={70}
                  className="rounded-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Achievement</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded-lg p-4 sm:p-5">
                <h4 className="font-semibold text-white mb-2">Training Camp para Analista Funcional - Salesforce</h4>
                <p className="font-bold text-gray-300 text-justify leading-relaxed">
                  Dream XP • Setembro
              
                </p>
                <p className="text-gray-300 text-sm line-clamp-3 sm:line-clamp-none">
                  Programa intensivo de capacitação com foco em levantamento de requisitos, análise de processos de negócio e comunicação entre equipes técnicas e de negócio.
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Salesforce</span>
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Azure DevOps</span>
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Gestão de Requisitos</span>
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Scrum</span>
                </div>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4 sm:p-5">
                <h4 className="font-semibold text-white mb-2">React com Node.js e Next.js</h4>
                <p className="font-bold text-gray-300 text-justify leading-relaxed">
                  Trilha Embarque Digital • Agosto de 2025
                
                </p>
                <p className="text-gray-300 text-sm line-clamp-3 sm:line-clamp-none">
                  Certificação em desenvolvimento full-stack utilizando as principais tecnologias do mercado moderno.
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">JavaScript</span>
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Node.js</span>
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Next.js</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}