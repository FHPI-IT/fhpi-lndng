import { Apple, Citrus, Cherry, Flower2 } from "lucide-react";
import durianIcon from "@/assets/durian-icon.png";

const fruits = [
  { name: "Cavendish Banana", emoji: "🍌" },
  { name: "Fresh Pineapple", emoji: "🍍" },
  { name: "Papaya", emoji: "🥭" },
  { name: "Durian", emoji: "", icon: durianIcon },
  { name: "Apple", emoji: "🍎" },
];

const spices = [
  { name: "Ginger", emoji: "🫚" },
  { name: "Garlic", emoji: "🧄" },
  { name: "Onion", emoji: "🧅" },
];

const ProductCard = ({ name, emoji, icon }: { name: string; emoji: string; icon?: string }) => (
  <div className="group bg-background rounded-xl border border-border p-6 flex items-center gap-4 hover:shadow-lg hover:border-primary/30 transition-all cursor-default">
    {icon ? <img src={icon} alt={name} className="w-10 h-10 object-contain" /> : <span className="text-4xl">{emoji}</span>}
    <span className="font-body font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{name}</span>
  </div>
);

const ProductsSection = () => {
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
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/20">
                <Apple className="w-5 h-5 text-secondary" />
              </span>
              Fruits
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fruits.map((f) => (
                <ProductCard key={f.name} {...f} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <Flower2 className="w-5 h-5 text-primary" />
              </span>
              Spices
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {spices.map((s) => (
                <ProductCard key={s.name} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
