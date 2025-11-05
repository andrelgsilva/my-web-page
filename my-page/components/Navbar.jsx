"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false); // Fechar o menu mobile ao clicar
    const target = document.getElementById(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <h1 className="text-lg font-semibold tracking-tight text-primary select-none cursor-default">
          André Gomes
        </h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>
            <a 
              href="#home" 
              className="hover:text-gray-400 transition-colors duration-300" 
              onClick={(e) => handleSmoothScroll(e, 'home')}
              >
                Home
              </a>
            </li>
          <li><a href="#projects" className="hover:text-primary transition-colors duration-300" onClick={(e) => handleSmoothScroll(e, 'projetos')}>Projetos</a></li>
          <li><a href="#sobre" className="hover:text-primary transition-colors duration-300" onClick={(e) => handleSmoothScroll(e, 'sobre')}>Sobre</a></li>
          <li><a href="#experiencia" className="hover:text-primary transition-colors duration-300" onClick={(e) => handleSmoothScroll(e, 'experiencia')}>Experiências</a></li>
          <li><a href="#meugitub" className="hover:text-primary transition-colors duration-300" onClick={(e) => handleSmoothScroll(e, 'github')}>Meu Github</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors duration-300" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contato</a></li>
        </ul>

        {/* Botão Menu Mobile */}
        <button 
          className="md:hidden text-primary p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden shadow-lg">
            <ul className="flex flex-col gap-0 p-4 text-sm font-medium">
              <li>
                <a 
                  href="#home" 
                  className="block py-3 hover:text-gray-400 transition-colors duration-300 border-b border-border" 
                  onClick={(e) => handleSmoothScroll(e, 'home')}
                > 
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="block py-3 hover:text-gray-400 transition-colors duration-300 border-b border-border" 
                  onClick={(e) => handleSmoothScroll(e, 'projetos')}
                >
                    Projetos
                  </a>
                </li>
              <li>
                <a 
                  href="#sobre" 
                  className="block py-3 hover:text-gray-400 transition-colors duration-300 border-b border-border" 
                  onClick={(e) => handleSmoothScroll(e, 'sobre')}
                >
                  Sobre
                 </a>
              </li>
              <li>
                <a href="#experiencia" className="block py-3 hover:text-gray-400 transition-colors duration-300 border-b border-border" 
                onClick={(e) => handleSmoothScroll(e, 'experiencia')}
                  >
                    Experiências
                </a>
              </li>
              <li>
                <a 
                  href="#github" 
                  className="block py-3 hover:text-gray-400 transition-colors duration-300 border-b border-border" 
                  onClick={(e) => handleSmoothScroll(e, 'github')}
                >
                  Meu GitHub
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-3 hover:text-gray-400 transition-colors duration-300" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                  >
                    Contato
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}