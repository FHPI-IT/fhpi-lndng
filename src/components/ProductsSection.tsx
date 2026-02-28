import { useState } from "react";
import { Apple, Flower2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import durianIcon from "@/assets/durian-icon.png";
import papayaIcon from "@/assets/papaya-icon.png";
import bananaIcon from "@/assets/banana-icon.png";
import pineappleIcon from "@/assets/pineapple-icon.png";
import appleIcon from "@/assets/apple-icon.png";

interface Product {
  name: string;
  emoji: string;
  icon?: string;
  description: string;
  origin: string;
  season: string;
}

const fruits: Product[] = [
  { name: "Cavendish Banana", emoji: "", icon: bananaIcon, description: "The Philippines is one of the world's top exporters of Cavendish bananas, known for their consistent sweetness, creamy texture, and rich potassium content.", origin: "Mindanao, Philippines", season: "Year-round" },
  { name: "Fresh Pineapple", emoji: "", icon: pineappleIcon, description: "Philippine pineapples are prized for their exceptional sweetness and juiciness. Grown in the tropical highlands, they offer a perfect balance of tangy and sweet flavors.", origin: "Bukidnon & South Cotabato", season: "Year-round" },
  { name: "Papaya", emoji: "", icon: papayaIcon, description: "Philippine papayas are naturally sweet with vibrant orange flesh, packed with vitamins A and C. Perfect for fresh eating, smoothies, or as a natural meat tenderizer.", origin: "Cavite & Laguna", season: "Year-round" },
  { name: "Durian", emoji: "", icon: durianIcon, description: "Known as the 'King of Fruits,' Philippine durian from Davao is famous for its rich, custard-like flesh and distinctive aroma. A delicacy sought after across Asia.", origin: "Davao Region", season: "August – November" },
  { name: "Apple", emoji: "", icon: appleIcon, description: "Carefully selected premium apples sourced and distributed for the Philippine market, offering crisp texture and refreshing sweetness.", origin: "Imported & Distributed", season: "Year-round" },
];

const spices: Product[] = [
  { name: "Ginger", emoji: "🫚", description: "Philippine ginger is renowned for its intense, spicy-sweet flavor. Used widely in cooking, beverages, and traditional medicine.", origin: "Iloilo & Mindoro", season: "Year-round" },
  { name: "Garlic", emoji: "🧄", description: "Locally grown Philippine garlic is smaller but more pungent than imported varieties, delivering a robust flavor essential to Filipino cuisine.", origin: "Ilocos Region", season: "January – March" },
  { name: "Onion", emoji: "🧅", description: "Philippine red and white onions add depth and aroma to dishes. Sourced from top-producing regions, they are a kitchen staple nationwide.", origin: "Nueva Ecija", season: "January – April" },
];

const ProductCard = ({ product, isVisible, delay, onClick }: { product: Product; isVisible: boolean; delay: number; onClick: () => void }) => (
  <div
    onClick={onClick}
    className={`group bg-background rounded-xl border border-border p-6 flex items-center gap-4 hover:shadow-lg hover:border-primary/30 transition-all duration-500 ease-out cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
  >
    {product.icon ? <img src={product.icon} alt={product.name} className="w-10 h-10 object-contain" /> : <span className="text-4xl">{product.emoji}</span>}
    <span className="font-body font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{product.name}</span>
  </div>
);

const ProductsSection = () => {
  const { ref: fruitsRef, isVisible: fruitsVisible } = useScrollReveal();
  const { ref: spicesRef, isVisible: spicesVisible } = useScrollReveal();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-body font-semibold tracking-widest uppercase text-sm mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">Premium tropical fruits and aromatic spices, sourced directly from Filipino farms.</p>
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
                <ProductCard key={f.name} product={f} isVisible={fruitsVisible} delay={100 + i * 100} onClick={() => setSelectedProduct(f)} />
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
                <ProductCard key={s.name} product={s} isVisible={spicesVisible} delay={100 + i * 100} onClick={() => setSelectedProduct(s)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              {selectedProduct?.icon ? (
                <img src={selectedProduct.icon} alt={selectedProduct.name} className="w-12 h-12 object-contain" />
              ) : (
                <span className="text-5xl">{selectedProduct?.emoji}</span>
              )}
              <DialogTitle className="text-xl font-display">{selectedProduct?.name}</DialogTitle>
            </div>
            <DialogDescription className="text-base leading-relaxed">{selectedProduct?.description}</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="rounded-lg bg-muted p-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Origin</p>
              <p className="text-sm font-medium text-foreground">{selectedProduct?.origin}</p>
            </div>
            <div className="rounded-lg bg-muted p-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Season</p>
              <p className="text-sm font-medium text-foreground">{selectedProduct?.season}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductsSection;
