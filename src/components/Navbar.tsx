import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/freshharvest-logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/#about", label: "About" },
    { to: "#products", label: "Products" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <link href="/" className="flex items-center gap-2">
          <img src={logo} alt="Fresh Harvest Philippines" className="h-20 w-auto" />
        </link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors">
              <Menu className="h-6 w-6 text-foreground" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="Fresh Harvest Philippines" className="h-12 w-auto" />
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.to}
                    href={link.to}
                    className="text-foreground hover:text-primary transition-colors font-body font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
