import { useState } from "react";

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Demander un devis</h2>
        {sent ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-md text-center">
            Merci ! Nous vous recontactons très vite.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input required name="name" placeholder="Nom" className="border p-2 rounded-md" />
              <input required name="email" type="email" placeholder="Email" className="border p-2 rounded-md" />
              <input required name="phone" placeholder="Téléphone" className="border p-2 rounded-md" />
              <input required name="date" type="date" className="border p-2 rounded-md" />
              <input required name="lieu" placeholder="Lieu" className="border p-2 rounded-md md:col-span-2" />
              <input name="type" placeholder="Type d'événement" className="border p-2 rounded-md md:col-span-2" />
            </div>
            <textarea name="message" placeholder="Votre message" className="border p-2 rounded-md w-full h-32"></textarea>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" required />
              J'accepte que mes données soient utilisées pour être recontacté.
            </label>
            <button
              type="submit"
              className="bg-amber-500 text-white px-6 py-3 rounded-md font-semibold"
            >
              Envoyer ma demande
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
