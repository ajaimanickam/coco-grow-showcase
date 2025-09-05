import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Aarav Horticulture',
      role: 'Nursery',
      location: 'Pune',
      rating: 5,
      text: 'Consistent quality and excellent expansion. Our nursery yields improved within weeks.',
      image: '🌱',
    },
    {
      name: 'GreenRoots Imports',
      role: 'Importer',
      location: 'UAE',
      rating: 5,
      text: 'Reliable exports and great communication — a partner we trust.',
      image: '🌍',
    },
    {
      name: 'HydroGrow Farms',
      role: 'Hydroponic Grower',
      location: 'Bengaluru',
      rating: 5,
      text: 'Low EC and clean product. Reduced our prep time significantly.',
      image: '💧',
    },
  ];

  return (
    <section className="py-20 bg-gradient-section overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-secondary/20 rounded-full px-4 py-2 mb-4">
            <Star className="text-secondary" size={20} />
            <span className="text-secondary font-medium">Customer Reviews</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            What Our Customers Say
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about our coir pith products and service.
          </p>
        </div>

        {/* Continuous Scrolling Testimonials */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          
          {/* Scrolling Container */}
          <div className="flex space-x-6 animate-slide-right">
            {/* Duplicate testimonials for continuous scroll */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="min-w-[350px] border-0 shadow-card bg-gradient-card hover:shadow-floating transition-smooth">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="text-secondary/30 mb-4" size={32} />
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{testimonial.image}</div>
                    <div>
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-natural max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Repeat Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24hrs</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;