
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const partnerLinks = [
    {
      name: "Alafac",
      url: "https://alafac.fr",
      description: "Partenaire artistique"
    },
    {
      name: "Pampa Décoration", 
      url: "https://pampa-decoration.fr",
      description: "Décoration d'intérieur"
    }
  ];

  return (
    <footer id="contact" className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-amber-400" size={20} />
                <span>contact@sculpturebywanner.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-400" size={20} />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-amber-400" size={20} />
                <span>Atelier d'Art, Paris, France</span>
              </div>
            </div>
          </div>

          {/* Partenaires */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Nos Partenaires</h3>
            <div className="space-y-4">
              {partnerLinks.map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-stone-300 hover:text-amber-400 transition-colors duration-300 group"
                >
                  <ExternalLink className="group-hover:text-amber-400" size={18} />
                  <div>
                    <div className="font-semibold">{partner.name}</div>
                    <div className="text-sm text-stone-400">{partner.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* À propos */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-400">SculptureByWanner</h3>
            <p className="text-stone-300 leading-relaxed mb-6">
              Créateur d'œuvres sculpturales uniques, alliant tradition artisanale et 
              vision contemporaine pour transformer l'espace et émouvoir les âmes.
            </p>
            <div className="text-sm text-stone-400">
              © 2024 SculptureByWanner.com - Tous droits réservés
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 mt-12 pt-8 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            SculptureByWanner.com
          </div>
          <p className="text-stone-400 mt-2">L'art sculptural à son apogée</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
