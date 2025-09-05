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
            Founded by Prakash in Pollachi, Prime Coco Peat provides export-quality coco peat products 
            engineered for consistent expansion, excellent water retention and low EC.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-6">
              From Pollachi to Global Markets
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Founded by Prakash in Pollachi, Prime Coco Peat provides export-quality coco peat products 
                engineered for consistent expansion, excellent water retention and low EC.
              </p>
              
              <p className="text-lg">
                We serve nurseries, hydroponic growers and exporters around the world with reliable, 
                sustainably processed coir products. Our commitment to quality ensures every batch 
                meets international standards.
              </p>
              
              <p className="text-lg">
                Our products feature low EC, screened & buffered options on request, with uniform expansion 
                and high water retention. We also offer custom packaging and private labeling to meet 
                your specific business needs.
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