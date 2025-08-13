import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white via-rose-50 to-amber-50">
      <div className="container mx-auto px-4 text-center relative z-10 py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
          Location Photobooth Nantes – Mariages, Entreprises & Événements
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-8">
          Des souvenirs instantanés et une animation festive pour vos invités.
          Installation clé en main, tirages illimités, zéro stress.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="#simulateur"
            className="bg-gradient-to-r from-amber-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-transform hover:scale-105"
          >
            Simuler mon prix
          </a>
          <a
            href="#contact"
            className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition-colors"
          >
            Demander un devis
          </a>
        </div>
        <div className="text-sm text-stone-600 font-medium">
          <span className="inline-block bg-white/80 px-4 py-2 rounded-full shadow">
            Dispo Week-end • Installation incluse • Tirages illimités
          </span>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-stone-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
