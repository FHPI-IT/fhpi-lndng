import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/freshharvest-logo.svg";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      if (location.pathname === "/") {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Fresh Harvest Philippines" className="h-20 w-auto" />
            </div>
            <p className="text-primary-foreground/70 font-body leading-relaxed">
              Supplying premium tropical fruits and spices from the heart of the Philippines to the world.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-primary-foreground/70">
              <li><a href="/#about" onClick={(e) => handleNavClick(e, "/#about")} className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="/#products" onClick={(e) => handleNavClick(e, "/#products")} className="hover:text-secondary transition-colors">Products</a></li>
              <li><a href="/contact" onClick={(e) => handleNavClick(e, "/contact")} className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Get in Touch</h4>
            <p className="text-primary-foreground/70 font-body leading-relaxed">Philippines
              <br />
              info@freshharvestphil.com <br />
              exports@freshharvestphil.com
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
