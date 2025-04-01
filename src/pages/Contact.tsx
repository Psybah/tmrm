
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/shared/Hero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Users, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // In a real implementation, this would send the form data to a server
    toast({
      title: "Message Sent",
      description: "We've received your message and will respond shortly.",
    });
    
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero
          title="Contact Us"
          description="Reach out to us with questions, feedback, or to learn more about our work."
          backgroundImage="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          showCta={false}
        />
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="section-title">Get in Touch</h2>
                  <p className="text-lg mb-8">
                    Have questions about our initiatives or want to get involved? 
                    Reach out to us using any of the methods below.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-10 w-10 rounded-full bg-tmrm-green/10 flex items-center justify-center">
                          <MapPin size={20} className="text-tmrm-green" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Our Location</h3>
                        <p className="text-gray-600">
                          Apata Kekere Mosque,<br />
                          Ibadan, Oyo State, Nigeria
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-10 w-10 rounded-full bg-tmrm-green/10 flex items-center justify-center">
                          <Phone size={20} className="text-tmrm-green" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Phone</h3>
                        <p className="text-gray-600">
                          <a href="tel:+2347055034490" className="hover:text-tmrm-green">+234 705 503 4490</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-10 w-10 rounded-full bg-tmrm-green/10 flex items-center justify-center">
                          <Mail size={20} className="text-tmrm-green" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:contact@tmrm.org" className="hover:text-tmrm-green">contact@tmrm.org</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-10 w-10 rounded-full bg-tmrm-green/10 flex items-center justify-center">
                          <Users size={20} className="text-tmrm-green" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Join Our Community</h3>
                        <p className="text-gray-600">
                          <a 
                            href="https://wa.me/2347055034490" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-tmrm-green"
                          >
                            WhatsApp Community Group <ExternalLink size={14} className="ml-1" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="section-title">Send a Message</h2>
                  {formSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <CheckCircle size={48} className="text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully</h3>
                      <p className="text-green-700 mb-4">
                        Thank you for reaching out to us. We'll respond to your message as soon as possible.
                      </p>
                      <Button 
                        onClick={() => setFormSubmitted(false)} 
                        className="bg-tmrm-green hover:bg-tmrm-green-light"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="What is your message about?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Write your message here..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-tmrm-green hover:bg-tmrm-green-light"
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="section-title text-center">Find Us</h2>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-md">
                {/* In a real implementation, this would be replaced with an actual map */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <div className="text-center p-8">
                    <MapPin size={48} className="text-tmrm-green mx-auto mb-4" />
                    <p className="text-lg font-medium">Apata Kekere Mosque</p>
                    <p>Ibadan, Oyo State, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Volunteer Section */}
        <section className="py-16 bg-tmrm-green text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Become a Volunteer</h2>
              <p className="text-lg mb-8 max-w-3xl mx-auto">
                Join us in our mission to serve the community. As a volunteer, you'll have the opportunity to make
                a real difference in people's lives while growing spiritually and personally.
              </p>
              
              <Button 
                asChild
                size="lg" 
                className="bg-tmrm-gold hover:bg-tmrm-gold-light text-white"
              >
                <a href="https://forms.gle/volunteer" target="_blank" rel="noopener noreferrer">
                  Register as Volunteer
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
