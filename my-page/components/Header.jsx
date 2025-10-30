"use client";

export default function Header() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
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
    <header id="home" className="py-20 md:py-24 xl:py-28 text-white px-4 sm:px-6">  
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">André Luis Gomes</h1>
        <h2 className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-emerald-300 via-emerald-400 to-green-500 bg-clip-text text-transparent font-bold">
          Desenvolvedor Full-Stack
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
          <button 
            onClick={(e) => handleSmoothScroll(e, 'projetos')} 
            className="bg-gradient-to-r from-green-400 to-cyan-500 text-black px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 cursor-pointer w-full sm:w-auto text-sm md:text-base"
          >
            Ver Projetos
          </button>
          
          <a 
            href="https://github.com/andrelgsilva" 
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-green-400 text-green-400 px-6 py-3 rounded-lg font-bold hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105 cursor-pointer w-full sm:w-auto text-sm md:text-base text-center"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}