import { useEffect } from 'react';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const TestimonialsPage = () => {
  useEffect(() => {
    document.title = 'Customer Reviews - Nature\'s Coir Pith | What Our Customers Say';
    
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
              Customer Testimonials
            </h1>
            <p className="text-xl text-natural-cream/90 max-w-3xl mx-auto animate-fade-in-up">
              Read what our satisfied customers have to say about our coir pith products 
              and the difference they've made in their gardens.
            </p>
          </div>
        </div>
        <Testimonials />
        
        {/* Call to Action */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto animate-fade-in-up">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Ready to Join Our Happy Customers?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience the difference that premium coir pith can make in your garden. 
                Order now and see why hundreds of customers trust us for their growing needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-gradient-button text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-smooth">
                  Shop Products
                </button>
                <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-smooth">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;