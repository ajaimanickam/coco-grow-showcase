import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 80129 42377'],
      description: 'Mon-Sat: 9 AM - 7 PM',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@primecocopeat.com'],
      description: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Prakash', 'Pollachi, Coimbatore', 'Tamil Nadu, India'],
      description: 'Open for visits by appointment',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9 AM - 7 PM', 'Sunday: 10 AM - 5 PM'],
      description: 'Always here to help you',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <MessageCircle className="text-primary" size={20} />
            <span className="text-primary font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Contact Us
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our products or need a custom quote? We're here to help! 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-card bg-gradient-card hover:shadow-floating transition-smooth animate-fade-in-up">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-button rounded-full flex items-center justify-center">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <CardTitle className="text-lg text-primary">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-muted-foreground font-medium">{detail}</div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground/80">{info.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp Button */}
            <Card className="border-0 shadow-card bg-gradient-button text-white hover:shadow-floating transition-smooth animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <MessageCircle className="mx-auto mb-3" size={32} />
                <h3 className="text-lg font-semibold mb-2">Quick WhatsApp</h3>
                <p className="text-white/90 text-sm mb-4">Get instant quotes and support</p>
                <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-natural bg-gradient-card animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Product inquiry, quote request, etc."
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, quantity needed, delivery location, etc."
                      rows={5}
                      required
                      className="border-border focus:ring-primary resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-button border-0 hover:opacity-90 text-lg py-3">
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="mt-6 border-0 shadow-card bg-gradient-card animate-fade-in-up">
              <CardContent className="p-0">
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="mx-auto mb-2" size={48} />
                    <p className="text-lg font-medium">Our Location</p>
                    <p className="text-sm">Interactive map will be embedded here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;