import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import bananaIcon from "@/assets/banana-icon.png";
import pineappleIcon from "@/assets/pineapple-icon.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img
            src={bananaIcon}
            alt="Banana"
            className="w-16 h-16 object-contain -rotate-12 animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <span className="text-8xl md:text-9xl font-display font-bold text-primary">
            4
          </span>
          <img
            src={pineappleIcon}
            alt="Pineapple"
            className="w-20 h-20 object-contain animate-bounce"
            style={{ animationDelay: "0.3s" }}
          />
          <span className="text-8xl md:text-9xl font-display font-bold text-primary">
            4
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
          Oops! This page has gone bananas!
        </h1>
        <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
          Looks like this harvest didn't make it to market. The page you're looking for
          has slipped away like a banana peel. Let's get you back to fresh ground!
        </p>

        <Link
          to="/"
          className="inline-block font-body font-semibold px-8 py-3.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          🍌 Back to Fresh Harvest
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
