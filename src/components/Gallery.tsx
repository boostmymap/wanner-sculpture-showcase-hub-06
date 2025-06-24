
const Gallery = () => {
  const sculptures = [
    {
      id: 1,
      title: "Élan Moderne",
      material: "Bronze et Acier",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=800&fit=crop",
      description: "Une fusion harmonieuse entre tradition et modernité"
    },
    {
      id: 2,
      title: "Fragments d'Éternité",
      material: "Marbre de Carrare",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=800&fit=crop",
      description: "L'exploration du temps figé dans la pierre"
    },
    {
      id: 3,
      title: "Mouvement Perpétuel",
      material: "Acier Corten",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=800&fit=crop",
      description: "La danse de la matière dans l'espace"
    },
    {
      id: 4,
      title: "Symphonie Minérale",
      material: "Pierre et Métal",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=800&fit=crop",
      description: "Un dialogue entre textures naturelles et industrielles"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-stone-700 bg-clip-text text-transparent">
            Galerie d'Œuvres
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Chaque sculpture est une exploration unique de la forme, de la matière et de l'espace, 
            créée avec passion et précision artisanale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sculptures.map((sculpture, index) => (
            <div
              key={sculpture.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={sculpture.image}
                  alt={sculpture.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2">{sculpture.title}</h3>
                  <p className="text-amber-300 font-medium mb-2">{sculpture.material}</p>
                  <p className="text-sm opacity-90">{sculpture.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
