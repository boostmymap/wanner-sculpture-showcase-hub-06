
const Gallery = () => {
  const sculptures = [
    {
      id: 1,
      title: "Élan Moderne",
      material: "Bronze et Acier",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=800&fit=crop",
      description: "Une fusion harmonieuse entre tradition et modernité",
      dimensions: "180 x 90 x 60 cm",
      year: "2024"
    },
    {
      id: 2,
      title: "Fragments d'Éternité",
      material: "Marbre de Carrare",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=800&fit=crop",
      description: "L'exploration du temps figé dans la pierre",
      dimensions: "150 x 120 x 80 cm",
      year: "2023"
    },
    {
      id: 3,
      title: "Mouvement Perpétuel",
      material: "Acier Corten",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=800&fit=crop",
      description: "La danse de la matière dans l'espace",
      dimensions: "200 x 150 x 100 cm",
      year: "2024"
    },
    {
      id: 4,
      title: "Symphonie Minérale",
      material: "Pierre et Métal",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=800&fit=crop",
      description: "Un dialogue entre textures naturelles et industrielles",
      dimensions: "170 x 110 x 75 cm",
      year: "2023"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-stone-700 bg-clip-text text-transparent">
            Galerie d'Œuvres Sculpturales
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-8">
            Chaque sculpture est une exploration unique de la forme, de la matière et de l'espace, 
            créée avec passion et précision artisanale dans l'atelier Wanner.
          </p>
          
          {/* SEO Text */}
          <div className="max-w-4xl mx-auto text-stone-700 leading-relaxed">
            <p className="mb-4">
              La collection présente des <strong>sculptures contemporaines</strong> réalisées dans des matériaux nobles : 
              <strong>bronze patiné</strong>, <strong>marbre de Carrare</strong> sélectionné pour sa pureté, et 
              <strong>acier corten</strong> aux reflets chaleureux. Chaque œuvre d'art est conçue pour s'intégrer 
              harmonieusement dans des espaces privés, publics ou institutionnels.
            </p>
            <p>
              L'approche artistique de Wanner conjugue techniques traditionnelles de la sculpture classique 
              et vision contemporaine, créant des pièces uniques qui transcendent les époques et marquent l'espace de leur présence.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sculptures.map((sculpture, index) => (
            <article
              key={sculpture.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={sculpture.image}
                  alt={`${sculpture.title} - Sculpture ${sculpture.material} par Wanner (${sculpture.year})`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2">{sculpture.title}</h3>
                  <p className="text-amber-300 font-medium mb-1">{sculpture.material}</p>
                  <p className="text-sm opacity-90 mb-1">{sculpture.dimensions}</p>
                  <p className="text-sm opacity-75 mb-2">{sculpture.year}</p>
                  <p className="text-sm opacity-90">{sculpture.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Additional SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-stone-800 mb-4">Commandes Personnalisées</h3>
          <p className="text-stone-600 leading-relaxed">
            L'atelier SculptureByWanner réalise des <strong>commandes sur mesure</strong> pour des projets spécifiques. 
            Que ce soit pour un espace architectural, un jardin de sculpture, ou une collection privée, 
            chaque projet fait l'objet d'une étude personnalisée et d'un accompagnement complet, 
            de l'esquisse à l'installation finale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
