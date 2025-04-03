import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import { Users, Heart, BookOpen, GraduationCap, Calendar, Award } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2020",
      title: "Foundation Year",
      description: "The Muslim Righteous Movement was founded by a dedicated group of Muslims at Apata Kekere Mosque in Ibadan."
    },
    {
      year: "2021",
      title: "First Major Initiative",
      description: "Launched our first annual Ramadan lecture series and began hospital visitation programs."
    },
    {
      year: "2022",
      title: "Community Expansion",
      description: "Expanded our initiatives to include weekly Islamic gatherings and formed the women's wing (Asalatu)."
    },
    {
      year: "2023",
      title: "Growing Impact",
      description: "Successfully supported over 20 families with medical bills and other urgent needs."
    }
  ];

  const leaders = [
    {
      name: "Sen. Sharafadeen Abiodun Alli",
      role: "Ekarun Balodun of Ibadanland",
      image: "/sara.png"
    },
    {
      name: "Hon. (Engr.) Aderemi Oseni",
      role: "Federal Lawmaker",
      image: "/aderemi.png"
    },
    {
      name: "Alhaji (Hon.) Taofiq Adesina",
      role: "Senator",
      image: "/taofiq.png"
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
      <main className="min-h-screen">
        <Hero
          title="About Us"
          description="Learn about our mission, history, and the people behind The Muslim Righteous Movement."
          backgroundImage="https://images.unsplash.com/photo-1588624509638-8151fb946c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          showCta={false}
        />
        
        {/* Our Story */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
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
                  Our Story
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
                    The Muslim Righteous Movement (TMRM) was founded in 2020 by a dedicated group of Muslims at the Apata Kekere Mosque in Ibadan, Nigeria. Our founders recognized the pressing needs in their community and felt called to action by the Islamic principles of charity (Sadaqah) and mandatory giving (Zakat).
                  </p>
                  <p>
                    What began as a small initiative to support local families in need has grown into a broader movement dedicated to alleviating suffering and promoting Islamic values through action. Our community-centered approach ensures that we understand and effectively address the specific challenges faced by those we serve.
                  </p>
                  <p>
                    Today, TMRM continues to operate from our spiritual home at Apata Kekere Mosque, but our impact extends throughout Ibadan and beyond. We remain committed to our founding principles while expanding our reach and capacity to help those in need.
                  </p>
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
                    src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                    alt="Muslim community gathering" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-24 bg-tmrm-green text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern-light.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="section-title text-white mb-6">Our Mission</h2>
                <p className="text-lg text-white/90">
                  To alleviate the suffering of underprivileged people through Islamic charity and community service, embodying the principles of compassion and righteousness taught by Islam.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="section-title text-white mb-6">Our Vision</h2>
                <p className="text-lg text-white/90">
                  To create a society where no Muslim suffers from preventable hardship, and where the principles of Islamic charity foster unity, compassion, and mutual support within our community.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Timeline */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-center mb-16">Our Journey</h2>
              
              <div className="relative mt-12">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-tmrm-green/20"></div>
                
                {timeline.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="relative mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="md:w-1/2 p-4">
                        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-tmrm-gold hover:shadow-xl transition-shadow duration-300">
                          <h3 className="text-2xl font-bold text-tmrm-green mb-4">{item.title}</h3>
                          <p className="text-gray-700 text-lg">{item.description}</p>
                        </div>
                      </div>
                      
                      {/* Year marker */}
                      <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 my-4 md:my-0">
                        <div className="w-16 h-16 rounded-full bg-tmrm-green text-white flex items-center justify-center text-xl font-bold shadow-lg z-10 relative hover:scale-110 transition-transform duration-300">
                          {item.year}
                        </div>
                      </div>
                      
                      {/* Empty space for alternate layout */}
                      <div className="md:w-1/2"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Leadership */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern-light.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-center mb-16">Our Leadership</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leaders.map((leader, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative h-72 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                        <p className="text-white/90">{leader.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-center mb-16">Our Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Compassion",
                    description: "We approach all our work with genuine care and empathy for those in need.",
                    icon: <Heart className="w-8 h-8" />
                  },
                  {
                    title: "Integrity",
                    description: "We conduct our work with transparency, accountability, and ethical principles.",
                    icon: <Award className="w-8 h-8" />
                  },
                  {
                    title: "Community",
                    description: "We believe in the power of unity and collective action to create meaningful change.",
                    icon: <Users className="w-8 h-8" />
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-tmrm-green/10 flex items-center justify-center mx-auto mb-6">
                      <div className="text-tmrm-green">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-tmrm-green mb-4">{value.title}</h3>
                    <p className="text-gray-700 text-lg">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
