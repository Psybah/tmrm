import React from 'react';
import Hero from '@/components/shared/Hero';
import InitiativeCard from '@/components/shared/InitiativeCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Calendar, Users, CircleDollarSign, Link as LinkIcon, MessageCircle, BookOpen, Clock, CalendarDays } from 'lucide-react';
import ScrollToTop from '@/components/shared/ScrollToTop';
import TestimonialsCarousel from '@/components/shared/TestimonialsCarousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useIslamicData } from '@/hooks/useIslamicData';
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const { prayerTimes, islamicEvents, dailyVerse, loading, error } = useIslamicData();
  
  const testimonials = [
    {
      id: 1,
      quote: "When my daughter fell ill and I couldn't afford her hospital bills, JJSN stepped in and covered all expenses. I don't know what I would have done without their support.",
      author: "Aisha Lawal",
      role: "Beneficiary"
    },
    {
      id: 2,
      quote: "The monthly hospital visits organized by JJSN have brought so much comfort to patients who often feel forgotten. Their compassion is truly inspiring.",
      author: "Dr. Ibrahim Olatunde",
      role: "Hospital Staff"
    },
    {
      id: 3,
      quote: "As a volunteer, I've witnessed firsthand the positive impact JJSN has on our community. Their dedication to helping others embodies the true spirit of Islam.",
      author: "Mohammed Abdullahi",
      role: "Volunteer"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero
          title="Jamuhiyat Jalalullahi Society of Nigeria"
          subtitle="منارة الأمل والرحمة"
          description="Guided by Divine Light, Serving with Compassion"
          backgroundImage="/lovable-uploads/hero.jpeg"
        />
        
        {/* About Section */}
        <section className="py-16 bg-pattern-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h2 className="section-title">Who We Are</h2>
                <p className="text-lg">
                  Jamuhiyat Jalalullahi Society of Nigeria (JJSN) is a charitable organization founded in 2020 by a dedicated group of Muslims committed to serving humanity through the principles of Islam.
                </p>
                <p>
                  Our mission is to alleviate the suffering of underprivileged communities and individuals through sustainable development projects, educational initiatives, and humanitarian aid. Based at the Apata Kekere Mosque in Ibadan, Nigeria, we strive to be a beacon of hope and compassion.
                </p>
                <div className="pt-2">
                  <Button asChild variant="outline" className="border-tmrm-green text-tmrm-green hover:bg-tmrm-green hover:text-white">
                    <Link to="/about">
                      Learn More About Us
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/tmrm/mosque.jpg" 
                  alt="Mosque" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Initiatives Section */}
        <section className="py-16 bg-tmrm-green-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">Our Initiatives</h2>
              <p className="text-lg">
                We organize various programs and initiatives to support our community and spread Islamic knowledge and values.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InitiativeCard
                title="Annual Ramadan Lectures"
                description="Educational sessions during the holy month of Ramadan, focusing on spiritual growth and Islamic knowledge."
                icon={<Calendar size={24} />}
              />
              <InitiativeCard
                title="Weekly Sunday Gatherings"
                description="Regular gatherings to discuss Islamic teachings and their application in contemporary society."
                icon={<Users size={24} />}
              />
              <InitiativeCard
                title="Sisters' Prayer Circle"
                description="Special prayer sessions organized by our women's wing, fostering spiritual connection and community bonding."
                icon={<Users size={24} />}
              />
              <InitiativeCard
                title="Monthly Hospital Visits"
                description="Regular visits to local hospitals to provide comfort, support, and financial assistance to patients in need."
                icon={<CircleDollarSign size={24} />}
              />
            </div>
            
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="border-white text-white hover:bg-white text-tmrm-green-dark hover:text-tmrm-green-dark">
                <Link to="/volunteer">
                  Register as Volunteer
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Impact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">Our Impact</h2>
              <p className="text-lg">
                Through the generous support of our donors, we have been able to make a significant difference in our community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-tmrm-gold hover:shadow-lg transition-all">
                <div className="text-5xl font-bold text-tmrm-green mb-2">+100</div>
                <div className="text-lg">Families Supported</div>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-tmrm-gold hover:shadow-lg transition-all">
                <div className="text-5xl font-bold text-tmrm-green mb-2">24</div>
                <div className="text-lg">Hospital Bills Covered</div>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-tmrm-gold hover:shadow-lg transition-all">
                <div className="text-5xl font-bold text-tmrm-green mb-2">3</div>
                <div className="text-lg">Years of Service</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Muslim Features & Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">Islamic Resources & Testimonials</h2>
              <p className="text-lg">
                Stay connected with your faith and hear from those whose lives have been touched by our work.
              </p>
            </div>
            
            {/* Muslim Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Quranic Verse Card */}
              <Card className="bg-white hover:shadow-lg transition-shadow border-t-4 border-t-tmrm-gold">
                <CardHeader>
                  <div className="flex items-center gap-2 text-tmrm-gold mb-2">
                    <BookOpen size={20} />
                    <CardTitle className="text-lg">Verse of the Day</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="space-y-4">
                      <Skeleton className="h-8 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  ) : error ? (
                    <p className="text-red-500 text-sm">{error}</p>
                  ) : dailyVerse ? (
                    <>
                      <div className="text-right mb-4 font-arabic text-xl leading-relaxed">
                        {dailyVerse.arabic}
                      </div>
                      <p className="text-gray-700 italic mb-2">
                        "{dailyVerse.translation}"
                      </p>
                      <p className="text-sm text-gray-500">
                        {dailyVerse.reference}
                      </p>
                    </>
                  ) : null}
                </CardContent>
              </Card>

              {/* Prayer Times Card */}
              <Card className="bg-white hover:shadow-lg transition-shadow border-t-4 border-t-tmrm-gold">
                <CardHeader>
                  <div className="flex items-center gap-2 text-tmrm-gold mb-2">
                    <Clock size={20} />
                    <CardTitle className="text-lg">Prayer Times</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="space-y-2">
                      {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="h-6 w-full" />
                      ))}
                    </div>
                  ) : error ? (
                    <p className="text-red-500 text-sm">{error}</p>
                  ) : prayerTimes ? (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Fajr</span>
                        <span className="text-tmrm-green">{prayerTimes.fajr}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Dhuhr</span>
                        <span className="text-tmrm-green">{prayerTimes.dhuhr}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Asr</span>
                        <span className="text-tmrm-green">{prayerTimes.asr}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Maghrib</span>
                        <span className="text-tmrm-green">{prayerTimes.maghrib}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Isha</span>
                        <span className="text-tmrm-green">{prayerTimes.isha}</span>
                      </div>
                    </div>
                  ) : null}
                </CardContent>
              </Card>

              {/* Islamic Calendar Card */}
              <Card className="bg-white hover:shadow-lg transition-shadow border-t-4 border-t-tmrm-gold">
                <CardHeader>
                  <div className="flex items-center gap-2 text-tmrm-gold mb-2">
                    <CalendarDays size={20} />
                    <CardTitle className="text-lg">Islamic Calendar</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="space-y-2">
                          <Skeleton className="h-4 w-1/3" />
                          <Skeleton className="h-4 w-2/3" />
                          <Skeleton className="h-3 w-1/2" />
                        </div>
                      ))}
                    </div>
                  ) : error ? (
                    <p className="text-red-500 text-sm">{error}</p>
                  ) : islamicEvents.length > 0 ? (
                    <div className="space-y-4">
                      {islamicEvents.slice(0, 3).map((event, index) => (
                        <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
                          <div className="text-sm text-tmrm-green font-medium">{event.date}</div>
                          <div className="font-medium">{event.title}</div>
                          <div className="text-sm text-gray-600">{event.hijriDate}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </div>
            
            {/* Existing Testimonials */}
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-tmrm-green text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Your support can help us continue our mission of serving humanity through Islamic principles of charity and compassion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-tmrm-gold hover:bg-tmrm-gold-light text-white">
                <Link to="/donate">
                  Donate Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-tmrm-green-dark hover:bg-white hover:text-tmrm-green-dark">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-tmrm-green-dark hover:bg-white hover:text-tmrm-green-dark">
                <a href="https://wa.me/23480335352530" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MessageCircle size={18} className="mr-2" /> 
                  Join Our WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
