import Image from "next/image";
 
import Header from "@/components/Header"; 
import Sobre from "@/components/AboutMe";
import Experiencias from "@/components/Experiencias"
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      
      <section id="projetos" className="py-12 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Meus Projetos
          </h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 text-base sm:text-lg">
            Confira alguns dos meus projetos mais recentes
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Projeto 1 */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-green-500/20 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
              <a 
                href="https://github.com/andrelgsilva/hangman_game_react" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
              
              <h3 className="font-semibold text-white mb-2">
                Jogo da Forca (Hangman Game)
              </h3>

              <p className="text-gray-300 leading-relaxed mb-2">
                uma versão moderna do clássico jogo da forca utilizando React e Next.js. 
                O jogo conta com interface dinâmica, sistema de pontuação e diferentes categorias de 
                palavras para desafiar os jogadores. Implementei lógica para controle de tentativas 
                e feedback visual em tempo real.
              </p>
              </a>

              <div className="flex flex-wrap gap-2">
                <span className="bg-green-500/20 text-green-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">React</span>
                <span className="bg-blue-500/20 text-blue-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">Next.JS</span>
              </div>
              <p className="text-gray-400 text-xs mt-10">
                <strong>Destaques:</strong> Sistema de tentativas, animações suaves, múltiplas categorias, 
                contador de vitórias/derrotas e design responsivo para todos os dispositivos.
              </p>
            </div>

            {/* Projeto 2 */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-green-500/20 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
            
            <a 
              href="https://github.com/andrelgsilva/meu-quiz"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >

            <h2 className="font-semibold text-white mb-2">Quiz Matemático</h2>
              <p className="text-gray-300 leading-relaxed mb-2">
                Plataforma interativa estilo BuzzFeed com questões matemáticas de múltipla escolha. 
                Desenvolvido para oferecer uma experiência educativa onde o usuário responde perguntas 
                e recebe um diagnóstico final sobre seu desempenho (Excelente, Bom, Regular ou Precisa de Reforço).</p>
              </a>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-500/20 text-green-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">JavaScript</span>
                <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">HTML5 Semântico</span>
                <span className="bg-pink-500/20 text-pink-400 px-2 py-1 rounded text-xs">CSS3 Flexbox/Grid</span>
                <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">Manipulação DOM</span>

              </div>
                <p className="text-gray-400 text-xs mt-2">
                  <strong>Destaques:</strong> Sistema de cálculo de pontuação em tempo real, transições suaves, 
                  design intuitivo e feedback educativo personalizado baseado no desempenho do usuário.
                </p>
            </div>

            {/* Projeto 3 */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-green-500/20 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
              <a
                href="https://github.com/ailtu/AlertaUrbano"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Alerta Urbano</h3>
              <p className="text-gray-300 leading-relaxed mb-2">Desenvolvi, junto com colegas, uma aplicação web e mobile que permite aos cidadãos reportarem problemas urbanos 
                como buracos nas ruas, lixo acumulado, enchentes e árvores caídas. A plataforma integra 
                um mapa interativo onde os usuários visualizam incidentes reportados em tempo real e 
                recebem notificações sobre o status das solicitações.</p>
              </a>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Supabase</span>
                <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">Back4App</span>
                <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">Mapas Interativos</span>
                <span className="bg-teal-500/20 text-teal-400 px-2 py-1 rounded text-xs">PWA</span>
              </div>
              <p className="text-gray-400 text-xs mt-2">
                <strong>Destaques:</strong> Geolocalização integrada, sistema de notificações push, 
                interface responsiva para mobile, e dashboard administrativo para gestão dos reports.
              </p>  
            </div>
          </div>
        </div>
      </section>

      <Sobre />

      <Experiencias />

      <Contact />

    </>
  );
}