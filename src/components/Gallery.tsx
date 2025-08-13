const Gallery = () => {
  const photos = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1554062614-75a46e27ba33?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1529626992239-182b85b8b7a0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1603570419874-f91532139d99?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <section id="galerie" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Galerie</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Photo booth exemple ${idx + 1}`}
              className="rounded-xl object-cover w-full h-64"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
