import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Award, Users } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Marquee Text */}
          <div className="inline-flex items-center space-x-2 bg-natural-cream/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 overflow-hidden">
            <span className="text-natural-cream font-medium animate-marquee whitespace-nowrap">
              🌱 100% Organic • Premium Coco Peat • Sustainable Farming • Global Exports • Trusted Quality 🌱
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-natural-cream mb-6 leading-tight">
            Prime{' '}
            <span className="text-grass-green-light">Coco Peat</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-natural-cream/90 mb-8 max-w-3xl mx-auto font-light">
            Handpicked with care and utmost quality from Pollachi. 
            Sustainable coco peat & coir pith products for global markets.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10">
            <div className="flex items-center space-x-2 text-natural-cream/80">
              <Award size={20} className="text-grass-green-light" />
              <span>2+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 text-natural-cream/80">
              <Users size={20} className="text-grass-green-light" />
              <span>500+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2 text-natural-cream/80">
              <Leaf size={20} className="text-grass-green-light" />
              <span>100% Natural Products</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-gradient-button border-0 hover:opacity-90 shadow-button text-lg px-8 py-4 transition-bounce"
            >
              Explore Products
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-natural-cream text-natural-cream hover:bg-natural-cream hover:text-primary text-lg px-8 py-4 bg-transparent backdrop-blur-sm transition-bounce"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-natural-cream/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-natural-cream/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-natural-cream/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;