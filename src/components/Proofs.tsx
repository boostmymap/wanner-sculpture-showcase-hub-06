import { Star } from "lucide-react";

const Proofs = () => {
  const logos = [
    "https://dummyimage.com/120x50/f5f5f5/aaa.webp&text=Mariage",
    "https://dummyimage.com/120x50/f5f5f5/aaa.webp&text=Entreprise",
    "https://dummyimage.com/120x50/f5f5f5/aaa.webp&text=Soiree",
    "https://dummyimage.com/120x50/f5f5f5/aaa.webp&text=Evenement"
  ];

  return (
    <section className="py-16 bg-white" id="logos">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-amber-400" size={24} />
            ))}
          </div>
          <p className="text-stone-700 font-medium">
            Note moyenne <strong>5/5</strong> – 120+ événements à Nantes et alentours
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Logo client ${idx + 1}`}
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proofs;
