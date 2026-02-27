import heroImage from "@/assets/hero-fruits.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh tropical fruits from the Philippines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <p className="text-secondary font-body font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
            Philippines' Finest Produce
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Fresh Harvest
            <br />
            <span className="text-secondary">Philippines</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed max-w-lg mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Committed to quality, sustainability, and strong partnerships with local farmers — delivering the freshest Cavendish bananas, golden pineapples, and more.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <a
              href="#products"
              className="inline-block bg-secondary text-secondary-foreground font-body font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore Our Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
