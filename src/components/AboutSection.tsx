import { Sprout, Handshake, Award } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "Every fruit and spice passes rigorous quality checks to ensure only the finest produce reaches our partners.",
  },
  {
    icon: Sprout,
    title: "Sustainability",
    description: "We champion eco-friendly farming practices that protect the land and ensure a bountiful harvest for generations to come.",
  },
  {
    icon: Handshake,
    title: "Farmer Partnerships",
    description: "We build lasting relationships with local Filipino farmers, supporting their livelihoods and communities.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-body font-semibold tracking-widest uppercase text-sm mb-3">Our Mission</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            From Farm to the World
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            Fresh Harvest Philippines, Inc. is dedicated to supplying a consistent quantity of premium tropical fruits and spices through excellent processing and handling.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item) => (
            <div key={item.title} className="bg-background rounded-xl p-8 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
