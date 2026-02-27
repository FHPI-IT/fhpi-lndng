import logo from "@/assets/freshharvest-logo.svg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Fresh Harvest Philippines" className="h-12 w-auto" />
            </div>
            <p className="text-primary-foreground/70 font-body leading-relaxed">
              Supplying premium tropical fruits and spices from the heart of the Philippines to the world.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-primary-foreground/70">
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-secondary transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Get in Touch</h4>
            <p className="text-primary-foreground/70 font-body leading-relaxed">
              Philippines
              <br />
              info@freshharvestph.com
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/50 font-body text-sm">
          © {new Date().getFullYear()} Fresh Harvest Philippines, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
