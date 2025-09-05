import { useEffect } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us - Nature\'s Coir Pith | Family-Run Coconut Fiber Business';
    
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
              About Nature's Coir Pith
            </h1>
            <p className="text-xl text-natural-cream/90 max-w-3xl mx-auto animate-fade-in-up">
              Discover the story behind our family-run business and our commitment to 
              providing premium coconut fiber products for sustainable gardening.
            </p>
          </div>
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;