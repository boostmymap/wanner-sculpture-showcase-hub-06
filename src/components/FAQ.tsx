const FAQ = () => {
  const questions = [
    {
      q: "Quel est le rayon de livraison ?",
      a: "Nous livrons gratuitement dans un rayon de 15 km autour de Nantes, puis 1,2€ par km aller-retour." },
    {
      q: "Les tirages sont-ils vraiment illimités ?",
      a: "Oui, chaque formule inclut les impressions illimitées pendant toute la durée de la location." },
    {
      q: "Peut-on personnaliser le cadre photo ?",
      a: "Bien sûr, ajoutez l'option personnalisation pour un cadre à vos couleurs." },
    {
      q: "Quel espace et quelles prises sont nécessaires ?",
      a: "Prévoyez 2×2 m et une prise 220V. Une connexion Wi-Fi est recommandée mais facultative." },
    {
      q: "Combien de temps à l'avance faut-il réserver ?",
      a: "Les week-ends partent vite, réservez dès que possible !" },
    {
      q: "Que se passe-t-il en cas de panne ?",
      a: "Un technicien est joignable 7j/7 et peut intervenir rapidement." }
  ];

  return (
    <section id="faq" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-4">
          {questions.map((item, idx) => (
            <details key={idx} className="bg-white rounded-md p-4 shadow">
              <summary className="font-semibold cursor-pointer">{item.q}</summary>
              <p className="mt-2 text-stone-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
