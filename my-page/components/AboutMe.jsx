"use client";

import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="py-12 lg:py-20 px-4 sm:px-6 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
           Sobre Mim
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Coluna da foto */}
          <div className="flex justify-center"> 
            {/* colocando a foto centralizada */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <Image 
                src="/myPic.jpg" 
                alt="André Gomes"
                fill
                className="rounded-full object-cover border-4 border-blue-400 shadow-lg shadow-blue-500/40"
               />
              
            </div>
          </div>
          
          {/* Coluna do texto */}
          <div className="text-gray-300">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center lg:text-left">
              André Gomes
            </h3>
            
            <p className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 leading-relaxed text-justify lg:text-left">
                Sou um desenvolvedor{" "}
                <span className="text-blue-400 font-semibold">Full-Stack</span>{" "}
                apaixonado por tecnologia e inovação. Tenho experiência em criar
                soluções web modernas e eficientes, unindo design, desempenho e
                propósito. Trabalho com React, JavaScript, HTML, CSS e Tailwind no front-end, além de Node.js, Java, Python e bancos de dados no back-end. Busco sempre aprender novas tecnologias e evoluir como profissional, desenvolvendo aplicações completas e bem estruturadas — do front-end intuitivo ao back-end robusto.
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed text-justify lg:text-left">
              Atualmente focado em{" "}
              <span className="text-blue-400 font-semibold">React</span>,{" "} 
              <span className="text-blue-400 font-semibold">Next.js</span>{" "} e{" "} 
              <span className="text-blue-400 font-semibold">Node.js</span>. 
              Sempre buscando aprender novas tecnologias e me atualizar com 
              as melhores práticas de desenvolvimento.
            </p>
            
            <div className="mb-4 sm:mb-6">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 text-center lg:text-left">Tecnologias:</h4>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="bg-green-500/20 text-green-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">JavaScript</span>
                <span className="bg-blue-500/20 text-blue-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">TypeScript</span>
                <span className="bg-cyan-500/20 text-cyan-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">React</span>
                <span className="bg-purple-500/20 text-purple-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">Next.js</span>
                <span className="bg-yellow-500/20 text-yellow-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">Node.js</span>
                <span className="bg-red-500/20 text-red-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">Tailwind</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 text-center lg:text-left">Interesses:</h4>
              <p className="text-sm sm:text-base text-gray-400 text-center lg:text-left">
                Desenvolvimento Web • UI/UX • Open Source • Aprendizado Contínuo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}