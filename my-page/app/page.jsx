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
            Confira alguns dos meus trabalhos mais recentes
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Projeto 1 */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-green-500/20 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Jogo da Forca (Hangman Game)</h3>
              <p className="text-gray-300 mb-4 text-justify leading-relaxed text-sm sm:text-base">Jogo da Forca desenvolvido em React com NextJS com intuito de desenvolver habilidades e se ambientar com React. Jogo simples mas bem didático.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-500/20 text-green-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">React</span>
                <span className="bg-blue-500/20 text-blue-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">Next.JS</span>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-green-500/20 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Nome do Projeto 2</h3>
              <p className="text-gray-300 mb-4 text-justify leading-relaxed text-sm sm:text-base">Descrição mais elaborada do projeto e o que ele faz.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-500/20 text-green-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">Next.js</span>
                <span className="bg-purple-500/20 text-purple-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">Tailwind</span>
              </div>
            </div>

            {/* Projeto 3 */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-green-500/20 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Nome do Projeto 3</h3>
              <p className="text-gray-300 mb-4 text-justify leading-relaxed text-sm sm:text-base">Descrição mais elaborada do projeto e o que ele faz.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-500/20 text-green-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">TypeScript</span>
                <span className="bg-yellow-500/20 text-yellow-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">MongoDB</span>
              </div>
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