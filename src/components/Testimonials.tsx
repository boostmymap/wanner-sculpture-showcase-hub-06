const Testimonials = () => {
  const avis = [
    {
      text: "Service impeccable, nos invités ont adoré !",
      name: "Claire",
      event: "Mariage 2024"
    },
    {
      text: "Animation parfaite pour notre soirée d'entreprise.",
      name: "Julien",
      event: "Séminaire 2023"
    },
    {
      text: "Photos de qualité et équipe très pro.",
      name: "Sophie",
      event: "Anniversaire 2024"
    }
  ];

  return (
    <section id="temoignages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Ils ont adoré</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {avis.map((a, idx) => (
            <div key={idx} className="bg-amber-50 p-6 rounded-xl shadow text-stone-700">
              <p className="mb-4 italic">“{a.text}”</p>
              <p className="font-semibold">{a.name}</p>
              <p className="text-sm text-stone-500">{a.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
