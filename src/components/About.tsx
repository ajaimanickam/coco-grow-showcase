import { Card, CardContent } from '@/components/ui/card';
import { Heart, Leaf, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Family Heritage',
      description: 'A passionate family business rooted in traditional farming values and modern sustainable practices.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Our products are 100% natural, biodegradable, and promote sustainable gardening practices.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'We build lasting relationships with our customers through quality products and excellent service.',
    },
    {
      icon: Award,
      title: 'Quality Promise',
      description: 'Every product is carefully processed and quality-tested to ensure the best growing medium for your plants.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Heart className="text-primary" size={20} />
            <span className="text-primary font-medium">Our Story</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            About Our Business
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on the principles of sustainability and quality, Nature's Coir Pith has been 
            serving gardening enthusiasts and farmers for over 2 years with premium coconut fiber products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-6">
              From Village Roots to Your Garden
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Our journey began in the coconut groves of rural India, where our family has been 
                involved in coconut farming for generations. We recognized the incredible potential 
                of coir pith - a natural byproduct that was often overlooked.
              </p>
              
              <p className="text-lg">
                What started as a small family initiative has grown into a trusted business that 
                supplies high-quality coir pith products to gardeners, nurseries, and farmers 
                across the region. Our commitment to quality and sustainability remains unchanged.
              </p>
              
              <p className="text-lg">
                Every product that leaves our facility carries with it the dedication of our family 
                and the rich heritage of traditional coconut farming, combined with modern processing 
                techniques to ensure the best growing medium for your plants.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-natural">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-button rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2">Our Mission</h4>
                <p className="text-muted-foreground">
                  To provide sustainable, high-quality coconut fiber products that help gardeners 
                  and farmers grow healthier plants while caring for our environment.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Natural Products</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-card bg-gradient-card hover:shadow-floating transition-smooth animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-button rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;