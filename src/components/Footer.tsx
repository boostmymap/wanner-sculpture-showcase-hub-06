import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Contact</h3>
            <div className="space-y-4 text-stone-300">
              <div className="flex items-center space-x-3">
                <Mail className="text-amber-400" size={20} />
                <span>contact@photobooth-nantes.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-400" size={20} />
                <span>+33 2 40 00 00 00</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-amber-400" size={20} />
                <span>Place Royale, 44000 Nantes</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Zone couverte</h3>
            <p className="text-stone-300">
              Nantes, Rezé, Saint-Herblain, Orvault, Carquefou, Vertou,
              La Chapelle-sur-Erdre et toute la Loire-Atlantique.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Photobooth Nantes</h3>
            <p className="text-stone-300 mb-6">
              Service de location de bornes photo pour mariages,
              entreprises et événements festifs.
            </p>
            <div className="space-x-4 text-sm">
              <a href="#simulateur" className="hover:text-amber-400">
                Simuler mon prix
              </a>
              <a href="#contact" className="hover:text-amber-400">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-700 mt-12 pt-8 text-center text-sm text-stone-400">
          © 2024 Photobooth Nantes –
          <a href="#" className="hover:text-amber-400"> Mentions légales</a> •
          <a href="#" className="hover:text-amber-400"> Politique de confidentialité</a> •
          <a href="#" className="hover:text-amber-400"> CGV</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
