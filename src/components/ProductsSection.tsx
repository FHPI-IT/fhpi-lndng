import { useState } from "react";
import { Apple, Flower2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import durianIcon from "@/assets/durian-icon.png";
import papayaIcon from "@/assets/papaya-icon.png";
import bananaIcon from "@/assets/banana-icon.png";
import pineappleIcon from "@/assets/pineapple-icon.png";
import appleIcon from "@/assets/apple-icon.png";
import bananaPhoto from "@/assets/cavendish-banana.jpg";
import pineapplePhoto from "@/assets/pineapple-photo.png";
import papayaPhoto from "@/assets/papaya-photo.png";
import durianPhoto from "@/assets/durian-photo.png";
import applePhoto from "@/assets/apple-photo.png";
import gingerPhoto from "@/assets/ginger-photo.png";
import garlicPhoto from "@/assets/garlic-photo.png";
import onionPhoto from "@/assets/onion-photo.png";

interface Product {
  name: string;
  emoji: string;
  icon?: string;
  description: string;
  origin: string;
  season: string;
  category: string;
  badge?: string;
  variety?: string;
  grade?: string;
  harvestStage?: string;
  packaging?: string;
  tags?: string[];
  bgColor: string;
  photo?: string;
}

const fruits: Product[] = [
  { name: "Cavendish Bananas", emoji: "", icon: bananaIcon, photo: bananaPhoto, category: "Fresh Fruit", badge: "Signature Product", description: "The world's most beloved banana variety — grown in the fertile Philippine lowlands and processed with precision for peak shelf life and flavor. Our Cavendish bananas are harvested at optimal green maturity, ensuring maximum shelf life for both domestic and export markets.", origin: "Mindanao, Philippines", season: "Year-round", variety: "Cavendish (AAA)", grade: "Grade A / Export Quality", harvestStage: "Green Mature", packaging: "13 kg & 3 kg Carton Box", tags: ["No pesticide residue", "Cold chain handled", "Consistent sizing", "Export certified"], bgColor: "#f5c518" },
  { name: "Fresh Pineapple", emoji: "", icon: pineappleIcon, photo: pineapplePhoto, category: "Fresh Fruit", description: "Philippine pineapples are prized for their exceptional sweetness and juiciness. Grown in the tropical highlands, they offer a perfect balance of tangy and sweet flavors.", origin: "Bukidnon & South Cotabato", season: "Year-round", variety: "MD2 / Sweet Gold", grade: "Grade A", harvestStage: "Ripe Mature", packaging: "10 kg Carton Box", tags: ["Naturally sweet", "Rich in Vitamin C", "Export quality", "Farm fresh"], bgColor: "#e8a317" },
  { name: "Papaya", emoji: "", icon: papayaIcon, photo: papayaPhoto, category: "Fresh Fruit", description: "Philippine papayas are naturally sweet with vibrant orange flesh, packed with vitamins A and C. Perfect for fresh eating, smoothies, or as a natural meat tenderizer.", origin: "Mindanao, Philippines", season: "Year-round", variety: "Solo / Red Lady", grade: "Grade A", harvestStage: "Turning Stage", packaging: "12 kg Carton Box", tags: ["Rich in enzymes", "Naturally ripened", "Consistent quality"], bgColor: "#f4a259" },
  { name: "Durian", emoji: "", icon: durianIcon, photo: durianPhoto, category: "Fresh Fruit", badge: "Premium", description: "Known as the 'King of Fruits,' Philippine durian from Davao is famous for its rich, custard-like flesh and distinctive aroma. A delicacy sought after across Asia.", origin: "Davao Region", season: "Aug–Oct & Dec–Feb", variety: "Puyat / Arancillo", grade: "Premium Grade", harvestStage: "Naturally Fallen", packaging: "Per piece / Crate", tags: ["Hand-selected", "Peak ripeness", "Davao origin"], bgColor: "#8b9a46" },
  { name: "Apple", emoji: "", icon: appleIcon, photo: applePhoto, category: "Imported Fruit", description: "Carefully selected premium apples sourced and distributed for the Philippine market, offering crisp texture and refreshing sweetness.", origin: "Imported & Distributed", season: "Year-round", variety: "Fuji / Gala", grade: "Grade A", packaging: "20 kg Carton Box", tags: ["Premium imported", "Cold storage", "Consistent supply"], bgColor: "#c94c4c" },
];

const spices: Product[] = [
  { name: "Ginger", emoji: "🫚", photo: gingerPhoto, category: "Spice", description: "Philippine ginger is renowned for its intense, spicy-sweet flavor. Used widely in cooking, beverages, and traditional medicine.", origin: "Mindanao, Philippines", season: "Year-round", variety: "Yellow Ginger", grade: "Grade A", packaging: "20 kg Mesh Bag", tags: ["Organically grown", "High gingerol content", "Fresh harvest"], bgColor: "#d4a953" },
  { name: "Garlic", emoji: "🧄", photo: garlicPhoto, category: "Spice", description: "Locally grown Philippine garlic is smaller but more pungent than imported varieties, delivering a robust flavor essential to Filipino cuisine.", origin: "Mindanao, Philippines", season: "January – March", variety: "Native White", grade: "Grade A", packaging: "10 kg Mesh Bag", tags: ["Locally sourced", "Strong aroma", "Sun-dried"], bgColor: "#e8dcc8" },
  { name: "Onion", emoji: "🧅", photo: onionPhoto, category: "Spice", description: "Philippine red and white onions add depth and aroma to dishes. Sourced from top-producing regions, they are a kitchen staple nationwide.", origin: "Mindanao, Philippines", season: "January – April", variety: "Red Creole / White", grade: "Grade A", packaging: "25 kg Mesh Bag", tags: ["Farm direct", "Consistent sizing", "Fresh harvest"], bgColor: "#a8516e" },
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
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden gap-0">
          <div className="grid sm:grid-cols-[2fr_3fr]">
            {/* Left: Product image panel */}
            <div className="relative flex items-center justify-center p-8 min-h-[250px] sm:min-h-[400px]" style={{ backgroundColor: selectedProduct?.bgColor || '#f5c518' }}>
              {selectedProduct?.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}>
                  {selectedProduct.badge}
                </span>
              )}
            {selectedProduct?.photo ? (
                <img src={selectedProduct.photo} alt={selectedProduct.name} className="absolute inset-0 w-full h-full object-cover" />
              ) : selectedProduct?.icon ? (
                <img src={selectedProduct.icon} alt={selectedProduct.name} className="w-32 h-32 sm:w-44 sm:h-44 object-contain drop-shadow-lg" />
              ) : (
                <span className="text-8xl">{selectedProduct?.emoji}</span>
              )}
            </div>

            {/* Right: Details panel */}
            <div className="p-6 sm:p-8 flex flex-col gap-4 overflow-y-auto max-h-[70vh]">
              <DialogHeader className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {selectedProduct?.category}{selectedProduct?.badge ? ` · ${selectedProduct.badge}` : ''}
                </p>
                <DialogTitle className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-tight">
                  {selectedProduct?.name}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground leading-relaxed pt-2">
                  {selectedProduct?.description}
                </DialogDescription>
              </DialogHeader>

              {/* Detail grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {selectedProduct?.variety && (
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Variety</p>
                    <p className="text-sm font-medium text-foreground">{selectedProduct.variety}</p>
                  </div>
                )}
                {selectedProduct?.grade && (
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Grade</p>
                    <p className="text-sm font-medium text-foreground">{selectedProduct.grade}</p>
                  </div>
                )}
                {selectedProduct?.harvestStage && (
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Harvest Stage</p>
                    <p className="text-sm font-medium text-foreground">{selectedProduct.harvestStage}</p>
                  </div>
                )}
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Availability</p>
                  <p className="text-sm font-medium text-foreground">{selectedProduct?.season}</p>
                </div>
                {selectedProduct?.packaging && (
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Packaging</p>
                    <p className="text-sm font-medium text-foreground">{selectedProduct.packaging}</p>
                  </div>
                )}
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Origin</p>
                  <p className="text-sm font-medium text-foreground">{selectedProduct?.origin}</p>
                </div>
              </div>

              {/* Tags */}
              {selectedProduct?.tags && selectedProduct.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedProduct.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-primary/20 text-xs font-medium text-primary">
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 mt-auto border-t border-border">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                  Available Now · {selectedProduct?.grade || 'Premium'}
                </div>
                <a
                  href="/contact"
                  onClick={() => setSelectedProduct(null)}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                  style={{ backgroundColor: '#109a48', color: '#faf9f5' }}
                >
                  Inquire Now
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductsSection;
