import { useEffect } from 'react';
import Header from '@/components/Header';
import Products from '@/components/Products';
import Footer from '@/components/Footer';

const ProductsPage = () => {
  useEffect(() => {
    document.title = 'Products - Nature\'s Coir Pith | Coco Pith Bricks, Loose Coco Pith & Grow Bags';
    
    // Scroll animation setup
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-fade-in-up');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-natural-cream mb-6 animate-fade-in-up">
              Our Products
            </h1>
            <p className="text-xl text-natural-cream/90 max-w-3xl mx-auto animate-fade-in-up">
              Explore our range of premium coconut fiber products, each carefully processed 
              to provide the best growing medium for your plants and gardens.
            </p>
          </div>
        </div>
        <Products />
        
        {/* Additional Product Information */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8">
                Why Choose Coir Pith for Your Garden?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Environmental Benefits</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 100% natural and biodegradable</li>
                    <li>• Reduces waste from coconut processing</li>
                    <li>• Sustainable alternative to peat moss</li>
                    <li>• Carbon-neutral growing medium</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Growing Advantages</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Excellent water retention and drainage</li>
                    <li>• pH neutral (6.0-6.8)</li>
                    <li>• Naturally resistant to fungi and bacteria</li>
                    <li>• Improves soil aeration and structure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;