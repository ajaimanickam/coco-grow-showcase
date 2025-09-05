import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = '404 Page Not Found - Nature\'s Coir Pith';
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-section">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-6xl mb-6">🌱</div>
        <h1 className="text-4xl font-serif font-bold text-primary mb-4">404</h1>
        <h2 className="text-xl font-semibold text-primary mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for seems to have grown in a different direction. 
          Let's get you back to our garden of content.
        </p>
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-block bg-gradient-button text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-smooth"
          >
            Return to Home
          </Link>
          <div className="text-sm text-muted-foreground">
            <Link to="/products" className="text-primary hover:underline mx-2">Products</Link>
            <Link to="/about" className="text-primary hover:underline mx-2">About</Link>
            <Link to="/contact" className="text-primary hover:underline mx-2">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
