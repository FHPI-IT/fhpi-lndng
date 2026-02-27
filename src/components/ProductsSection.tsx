import { Apple, Flower2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import durianIcon from "@/assets/durian-icon.png";
import papayaIcon from "@/assets/papaya-icon.png";
import bananaIcon from "@/assets/banana-icon.png";
import pineappleIcon from "@/assets/pineapple-icon.png";
import appleIcon from "@/assets/apple-icon.png";

const fruits = [
  { name: "Cavendish Banana", emoji: "", icon: bananaIcon },
  { name: "Fresh Pineapple", emoji: "", icon: pineappleIcon },
  { name: "Papaya", emoji: "", icon: papayaIcon },
  { name: "Durian", emoji: "", icon: durianIcon },
  { name: "Apple", emoji: "", icon: appleIcon },
];

const spices = [
  { name: "Ginger", emoji: "🫚" },
  { name: "Garlic", emoji: "🧄" },
  { name: "Onion", emoji: "🧅" },
];

const ProductCard = ({ name, emoji, icon, isVisible, delay }: { name: string; emoji: string; icon?: string; isVisible: boolean; delay: number }) => (
  <div
    className={`group bg-background rounded-xl border border-border p-6 flex items-center gap-4 hover:shadow-lg hover:border-primary/30 transition-all duration-500 ease-out cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
  >
    {icon ? <img src={icon} alt={name} className="w-10 h-10 object-contain" /> : <span className="text-4xl">{emoji}</span>}
    <span className="font-body font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{name}</span>
  </div>
);

const ProductsSection = () => {
  const { ref: fruitsRef, isVisible: fruitsVisible } = useScrollReveal();
  const { ref: spicesRef, isVisible: spicesVisible } = useScrollReveal();

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-body font-semibold tracking-widest uppercase text-sm mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            Premium tropical fruits and aromatic spices, sourced directly from Filipino farms.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div ref={fruitsRef}>
            <h3 className={`font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3 transition-all duration-500 ease-out ${fruitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/20">
                <Apple className="w-5 h-5 text-secondary" />
              </span>
              Fruits
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fruits.map((f, i) => (
                <ProductCard key={f.name} {...f} isVisible={fruitsVisible} delay={100 + i * 100} />
              ))}
            </div>
          </div>

          <div ref={spicesRef}>
            <h3 className={`font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3 transition-all duration-500 ease-out ${spicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <Flower2 className="w-5 h-5 text-primary" />
              </span>
              Spices
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {spices.map((s, i) => (
                <ProductCard key={s.name} {...s} isVisible={spicesVisible} delay={100 + i * 100} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
