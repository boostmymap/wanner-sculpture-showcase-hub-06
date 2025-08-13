import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Proofs from "@/components/Proofs";
import Advantages from "@/components/Advantages";
import Gallery from "@/components/Gallery";
import PriceSimulator from "@/components/PriceSimulator";
import Info from "@/components/Info";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-amber-50">
      <Header />
      <Hero />
      <Proofs />
      <Advantages />
      <Gallery />
      <PriceSimulator />
      <Info />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
