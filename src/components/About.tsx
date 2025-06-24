
import { Palette, Award, Users } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Palette,
      title: "20+ Années",
      description: "d'expérience artistique"
    },
    {
      icon: Award,
      title: "50+ Œuvres",
      description: "créées et exposées"
    },
    {
      icon: Users,
      title: "Collectionneurs",
      description: "privés et publics"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-stone-700 bg-clip-text text-transparent">
                L'Artiste Wanner
              </h2>
              
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Sculpteur passionné depuis plus de deux décennies, je façonne la matière pour révéler 
                l'âme cachée de chaque création. Mon travail explore les frontières entre tradition 
                et modernité, entre force brute et délicatesse artistique.
              </p>
              
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Chaque sculpture naît d'une vision, d'une émotion, d'un dialogue intime avec la matière. 
                Du bronze au marbre, de l'acier à la pierre, je donne vie à des formes qui transcendent 
                le temps et touchent l'universel.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <achievement.icon className="w-8 h-8 text-amber-600 mx-auto" />
                    </div>
                    <h4 className="font-bold text-stone-800 mb-1">{achievement.title}</h4>
                    <p className="text-sm text-stone-600">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=750&fit=crop"
                  alt="Atelier de sculpture"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <p className="text-stone-600 italic">
                  "Chaque coup de ciseau est une note dans la symphonie de la création"
                </p>
                <p className="text-amber-600 font-semibold mt-2">- Wanner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
