import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Package, Droplets, Sprout } from 'lucide-react';
import cocoPithBricks from '@/assets/coco-pith-bricks.jpg';
import looseCocoPith from '@/assets/loose-coco-pith.jpg';
import growBags from '@/assets/grow-bags.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Coco Peat Blocks (5kg)',
      image: cocoPithBricks,
      price: 'MOQ: 1 x 20ft container',
      description: 'High-density 5kg blocks that expand to ~15-18 L. Low EC options available. Ideal for potting mixes & propagation.',
      features: ['30 x 30 x 12 cm', 'EC: < 0.5 mS/cm', 'Compression: 5:1', 'Shrink-wrapped'],
      icon: Package,
      popular: true,
    },
    {
      id: 2,
      name: 'Grow Bags',
      image: growBags,
      price: 'MOQ: 5,000 bags',
      description: 'Pre-filled grow bags for vegetables & flowers. Custom mixes & perforations available for greenhouse applications.',
      features: ['100 x 20 x 15 cm', 'EC: < 0.5 mS/cm', 'Pre-expanded ready', 'Poly bag packaging'],
      icon: Sprout,
      popular: false,
    },
    {
      id: 3,
      name: 'Loose Coco Peat',
      image: looseCocoPith,
      price: 'MOQ: 500 bags',
      description: 'Screened loose substrate for blending and top-dressing. Great water retention and aeration characteristics.',
      features: ['Bulk / Custom size', 'EC: < 1.0 mS/cm', 'Loose fill format', '25kg / 50kg bags'],
      icon: Droplets,
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-secondary/20 rounded-full px-4 py-2 mb-4">
            <Package className="text-secondary" size={20} />
            <span className="text-secondary font-medium">Our Products</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Export Quality Coco Peat Products
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our range of export-quality coco peat products, engineered for consistent 
            expansion, excellent water retention and low EC levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`border-0 shadow-card hover:shadow-floating transition-smooth animate-fade-in-up bg-gradient-card overflow-hidden ${product.popular ? 'ring-2 ring-secondary/50' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-button text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-smooth hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coconut-brown/20 to-transparent"></div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-gradient-button rounded-full flex items-center justify-center">
                    <product.icon className="text-white" size={20} />
                  </div>
                  <span className="text-lg font-semibold text-secondary">{product.price}</span>
                </div>
                <CardTitle className="text-xl text-primary">{product.name}</CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-gradient-button border-0 hover:opacity-90 text-sm">
                    <ShoppingCart size={16} className="mr-2" />
                    Order Now
                  </Button>
                  <Button variant="outline" size="sm" className="px-4">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-natural max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
              Why Choose Our Coir Pith Products?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🌱</div>
                <h4 className="font-semibold text-primary mb-2">100% Natural</h4>
                <p className="text-muted-foreground text-sm">Made from pure coconut fiber with no additives or chemicals</p>
              </div>
              <div>
                <div className="text-2xl mb-2">💧</div>
                <h4 className="font-semibold text-primary mb-2">Superior Water Retention</h4>
                <p className="text-muted-foreground text-sm">Holds up to 10x its weight in water while providing excellent drainage</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🚚</div>
                <h4 className="font-semibold text-primary mb-2">Fresh & Direct</h4>
                <p className="text-muted-foreground text-sm">Sourced directly from our processing facility, ensuring freshness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;