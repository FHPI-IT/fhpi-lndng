import logo from "@/assets/freshharvest-logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Fresh Harvest Philippines" className="h-12 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
          <a href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">Products</a>
          <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
