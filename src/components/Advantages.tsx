import { Camera, Truck, PartyPopper, Headphones } from "lucide-react";

const Advantages = () => {
  const items = [
    {
      icon: Truck,
      title: "Simple & clé en main",
      text: "Livraison et installation incluses, vous profitez." 
    },
    {
      icon: Camera,
      title: "Qualité studio",
      text: "Impressions rapides et gabarits personnalisés." 
    },
    {
      icon: PartyPopper,
      title: "Engagement garanti",
      text: "Accessoires fun pour des photos mémorables." 
    },
    {
      icon: Headphones,
      title: "Support réactif",
      text: "Technicien dédié en option pour vous assister." 
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-white" id="avantages">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow text-center">
              <item.icon className="mx-auto mb-4 text-amber-500" size={32} />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-stone-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
