import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Leaf, Heart, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Story', path: '/about' },
      { name: 'Quality Promise', path: '/about' },
    ],
    products: [
      { name: 'Coco Pith Bricks', path: '/products' },
      { name: 'Loose Coco Pith', path: '/products' },
      { name: 'Grow Bags', path: '/products' },
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Customer Reviews', path: '/testimonials' },
      { name: 'FAQ', path: '/contact' },
    ],
  };

  return (
    <footer className="bg-gradient-hero text-natural-cream">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-natural-cream/20 rounded-full flex items-center justify-center">
                <Leaf className="text-grass-green-light" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold">Nature's Coir Pith</h3>
                <p className="text-natural-cream/80 text-sm">Premium Coconut Fiber</p>
              </div>
            </div>
            
            <p className="text-natural-cream/90 mb-6 leading-relaxed">
              A trusted family business providing high-quality, sustainable coconut fiber products 
              for modern gardening and farming needs.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-natural-cream/20 rounded-full flex items-center justify-center hover:bg-natural-cream/30 transition-smooth">
                <Facebook size={20} className="text-natural-cream" />
              </a>
              <a href="#" className="w-10 h-10 bg-natural-cream/20 rounded-full flex items-center justify-center hover:bg-natural-cream/30 transition-smooth">
                <Instagram size={20} className="text-natural-cream" />
              </a>
              <a href="#" className="w-10 h-10 bg-natural-cream/20 rounded-full flex items-center justify-center hover:bg-natural-cream/30 transition-smooth">
                <Twitter size={20} className="text-natural-cream" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-natural-cream/80 hover:text-natural-cream transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-natural-cream/80 hover:text-natural-cream transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-natural-cream/80 hover:text-natural-cream transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="py-8 border-t border-natural-cream/20">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="text-grass-green-light" size={20} />
              <div>
                <div className="font-medium">Call Us</div>
                <div className="text-natural-cream/80 text-sm">+91 98765 43210</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="text-grass-green-light" size={20} />
              <div>
                <div className="font-medium">Email Us</div>
                <div className="text-natural-cream/80 text-sm">info@naturescoirpith.com</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <MapPin className="text-grass-green-light" size={20} />
              <div>
                <div className="font-medium">Visit Us</div>
                <div className="text-natural-cream/80 text-sm">Salem, Tamil Nadu</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-natural-cream/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-natural-cream/80 text-sm text-center md:text-left">
              © {currentYear} Nature's Coir Pith. All rights reserved. 
              <span className="inline-flex items-center ml-2">
                Made with <Heart className="mx-1 text-grass-green-light" size={16} /> for nature lovers
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-natural-cream/80">
              <a href="#" className="hover:text-natural-cream transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-natural-cream transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-natural-cream transition-smooth">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;