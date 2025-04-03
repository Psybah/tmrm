import React from 'react';
import Hero from '@/components/shared/Hero';
import InitiativeCard from '@/components/shared/InitiativeCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Calendar, Users, CircleDollarSign, Link as LinkIcon, MessageCircle, ArrowRight, Heart, BookOpen, GraduationCap } from 'lucide-react';
import ScrollToTop from '@/components/shared/ScrollToTop';
import TestimonialsCarousel from '@/components/shared/TestimonialsCarousel';
import { motion } from 'framer-motion';
import QuranicVerse from '@/components/shared/QuranicVerse';
import PrayerTimes from '@/components/shared/PrayerTimes';
import IslamicCalendar from '@/components/shared/IslamicCalendar';
import DynamicTheme from '@/components/shared/DynamicTheme';

const Index = () => {
  const testimonials = [
    {
      id: 1,
      quote: "When my daughter fell ill and I couldn't afford her hospital bills, TMRM stepped in and covered all expenses. I don't know what I would have done without their support.",
      author: "Aisha Lawal",
      role: "Beneficiary"
    },
    {
      id: 2,
      quote: "The monthly hospital visits organized by TMRM have brought so much comfort to patients who often feel forgotten. Their compassion is truly inspiring.",
      author: "Dr. Ibrahim Olatunde",
      role: "Hospital Staff"
    },
    {
      id: 3,
      quote: "As a volunteer, I've witnessed firsthand the positive impact TMRM has on our community. Their dedication to helping others embodies the true spirit of Islam.",
      author: "Mohammed Abdullahi",
      role: "Volunteer"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Navbar />
      <DynamicTheme />
      <main className="min-h-screen">
        <Hero
          title="Welcome to TMRM"
          description="The Muslim Righteous Movement - Empowering communities through faith and action."
          backgroundImage="https://images.unsplash.com/photo-1599475769344-9eeebbfd18e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-center mb-16">Daily Inspiration</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <QuranicVerse />
                <PrayerTimes />
                <IslamicCalendar />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-24 bg-pattern-light relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <motion.h2 
                  className="section-title relative inline-block"
                  {...fadeInUp}
                >
                  Who We Are
                  <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-tmrm-gold"></div>
                </motion.h2>
                <motion.div 
                  className="prose prose-lg max-w-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p>
                    The Muslim Righteous Movement (TMRM) is a charitable organization founded in 2020 by a dedicated group of Muslims committed to serving humanity through the principles of Islam.
                  </p>
                  <p>
                    Our mission is to alleviate the suffering of underprivileged communities through sustainable development projects, educational initiatives, and humanitarian aid. Based at the Apata Kekere Mosque in Ibadan, Nigeria, we strive to be a beacon of hope and compassion.
                  </p>
                </motion.div>
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Button asChild variant="outline" className="group border-tmrm-green text-tmrm-green hover:bg-tmrm-green hover:text-white transition-all duration-300">
                    <Link to="/about" className="flex items-center">
                      Learn More About Us
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute -inset-4 bg-tmrm-green/10 rounded-lg blur-xl"></div>
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/251840ba-72c4-4efd-903f-a4e7c83cc30a.png" 
                    alt="Mosque" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Initiatives Section */}
        <section className="py-24 bg-tmrm-green-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern-light.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-white">Our Initiatives</h2>
              <p className="text-lg text-white/90">
                We organize various programs and initiatives to support our community and spread Islamic knowledge and values.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Annual Ramadan Lectures",
                  description: "Educational sessions during the holy month of Ramadan, focusing on spiritual growth and Islamic knowledge.",
                  icon: <Calendar size={24} />,
                  color: "bg-blue-500/10 text-blue-400"
                },
                {
                  title: "Weekly Sunday Gatherings",
                  description: "Regular gatherings to discuss Islamic teachings and their application in contemporary society.",
                  icon: <Users size={24} />,
                  color: "bg-purple-500/10 text-purple-400"
                },
                {
                  title: "Sisters' Prayer Circle",
                  description: "Special prayer sessions organized by our women's wing, fostering spiritual connection and community bonding.",
                  icon: <Heart size={24} />,
                  color: "bg-pink-500/10 text-pink-400"
                },
                {
                  title: "Monthly Hospital Visits",
                  description: "Regular visits to local hospitals to provide comfort, support, and financial assistance to patients in need.",
                  icon: <CircleDollarSign size={24} />,
                  color: "bg-green-500/10 text-green-400"
                }
              ].map((initiative, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <InitiativeCard
                    title={initiative.title}
                    description={initiative.description}
                    icon={initiative.icon}
                    className={`${initiative.color} hover:scale-105 transition-transform duration-300`}
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button asChild variant="outline" className="group border-white text-white hover:bg-white hover:text-tmrm-green-dark transition-all duration-300">
                <Link to="/initiatives" className="flex items-center">
                  View All Initiatives
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Impact Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Impact</h2>
              <p className="text-lg text-gray-600">
                Through the generous support of our donors, we have been able to make a significant difference in our community.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: "+100",
                  label: "Families Supported",
                  icon: <Users className="w-8 h-8" />
                },
                {
                  number: "24",
                  label: "Hospital Bills Covered",
                  icon: <CircleDollarSign className="w-8 h-8" />
                },
                {
                  number: "3",
                  label: "Years of Service",
                  icon: <Calendar className="w-8 h-8" />
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-tmrm-green/10 flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-bold text-tmrm-green mb-2">{stat.number}</div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern-light.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Testimonials</h2>
              <p className="text-lg text-gray-600">
                Hear from those whose lives have been touched by our work.
              </p>
            </motion.div>
            
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-24 bg-tmrm-green text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern-light.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
              <p className="text-xl mb-12 text-white/90">
                Your support can help us continue our mission of serving humanity through Islamic principles of charity and compassion.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="group bg-tmrm-gold hover:bg-tmrm-gold-light text-white">
                  <Link to="/donate" className="flex items-center">
                    Donate Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="group border-white text-white hover:bg-white hover:text-tmrm-green-dark">
                  <Link to="/contact" className="flex items-center">
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="group border-white text-white hover:bg-white hover:text-tmrm-green-dark">
                  <a href="https://wa.me/2347055034490" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <MessageCircle size={18} className="mr-2" /> 
                    Join Our WhatsApp
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
