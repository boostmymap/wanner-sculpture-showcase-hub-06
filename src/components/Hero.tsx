
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-transparent to-stone-100/30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-stone-700 to-amber-800 bg-clip-text text-transparent leading-tight">
            L'Art Sculptural
            <br />
            <span className="text-4xl md:text-6xl">Réinventé</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez des œuvres sculpturales uniques qui transforment l'espace et éveillent les sens. 
            Chaque création raconte une histoire, chaque forme révèle une émotion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#gallery"
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Découvrir la Galerie
            </a>
            <a
              href="#about"
              className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-stone-50 transition-all duration-300"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-stone-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
