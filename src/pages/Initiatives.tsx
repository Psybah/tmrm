import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/shared/Hero';
import InitiativeCard from '@/components/shared/InitiativeCard';
import { Calendar, Users, CircleDollarSign, BookOpen, Presentation, HeartHandshake, School, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Initiatives = () => {
  const initiatives = [
    {
      title: "Annual Ramadan Lectures",
      description: "Our annual Ramadan lectures provide a platform for deep exploration of Islamic teachings during this holy month. We invite respected scholars to offer insights that help Muslims grow spiritually and apply Islamic principles in their daily lives.",
      icon: <Calendar size={24} />,
      image: "https://images.unsplash.com/photo-1584652584192-7a341a52d227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      title: "Weekly Sunday Meetings",
      description: "Every Sunday, we host gatherings at Apata Kekere Mosque to discuss Islamic teachings and their application in contemporary society. These meetings foster community bonds and ensure continuous learning and growth.",
      icon: <Users size={24} />,
      image: "https://images.unsplash.com/photo-1603738116595-bcb14db28c35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "bg-purple-500/10 text-purple-400"
    },
    {
      title: "Asalatu Prayers",
      description: "Led by our women's wing, Asalatu prayer sessions provide a dedicated space for women in our community to connect spiritually, support each other, and organize charitable activities focused on the unique needs of women and children.",
      icon: <Users size={24} />,
      image: "https://images.unsplash.com/photo-1563804446461-b8abfca96d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "bg-pink-500/10 text-pink-400"
    },
    {
      title: "Monthly Hospital Visits",
      description: "Our volunteers regularly visit local hospitals to provide emotional and financial support to patients in need. These visits have helped numerous individuals cover their medical expenses when they had nowhere else to turn.",
      icon: <CircleDollarSign size={24} />,
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "bg-green-500/10 text-green-400"
    },
    {
      title: "Islamic Education",
      description: "We organize regular classes on Quranic studies, Hadith interpretation, and Islamic jurisprudence for all age groups, ensuring our community has access to authentic Islamic knowledge.",
      icon: <BookOpen size={24} />,
      image: "https://images.unsplash.com/photo-1603122553884-71ee6dde0b81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "bg-yellow-500/10 text-yellow-400"
    },
    {
      title: "Community Outreach",
      description: "Through regular outreach activities, we identify and assist vulnerable community members with food, clothing, and other essential needs, embodying the Islamic principle of caring for one's neighbors.",
      icon: <HeartHandshake size={24} />,
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "bg-red-500/10 text-red-400"
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
          title="Our Initiatives"
          description="Discover the programs and activities through which we serve our community and promote Islamic values."
          backgroundImage="https://images.unsplash.com/photo-1599475769344-9eeebbfd18e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          showCta={false}
        />
        
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-center mb-16">Our Programs</h2>
              <p className="text-center text-lg mb-16 max-w-3xl mx-auto text-gray-600">
                Through these initiatives, we aim to support our community spiritually, educationally, and financially,
                embodying the Islamic principles of charity and compassion.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {initiatives.map((initiative, index) => (
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
                      image={initiative.image}
                      className={`${initiative.color} hover:scale-105 transition-transform duration-300`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern-light.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title text-center mb-16">How to Participate</h2>
                <p className="text-center text-lg mb-16 text-gray-600">
                  There are many ways you can get involved with our initiatives and contribute to our mission.
                </p>
                
                <div className="space-y-8">
                  {[
                    {
                      title: "Attend Our Programs",
                      description: "Join our weekly Sunday meetings, Ramadan lectures, or Asalatu prayers to learn and grow with our community. All are welcome to attend our public programs.",
                      icon: <Users className="w-6 h-6" />
                    },
                    {
                      title: "Volunteer Your Time",
                      description: "We welcome volunteers who can assist with our hospital visits, community outreach, and educational programs. Your time and skills can make a meaningful difference in someone's life.",
                      icon: <HeartHandshake className="w-6 h-6" />
                    },
                    {
                      title: "Donate to Support Our Work",
                      description: "Your financial contributions enable us to continue and expand our initiatives. 100% of donations go directly to supporting those in need within our community.",
                      icon: <CircleDollarSign className="w-6 h-6" />
                    },
                    {
                      title: "Spread Awareness",
                      description: "Help us reach more people by sharing information about our work with your friends, family, and on social media. Increased awareness leads to greater impact.",
                      icon: <Presentation className="w-6 h-6" />
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-tmrm-green"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-tmrm-green/10 flex items-center justify-center text-tmrm-green">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-tmrm-green mb-2">{item.title}</h3>
                          <p className="text-gray-700 text-lg">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="py-24 bg-tmrm-green text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern-light.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-center mb-16">Impact Stories</h2>
              <p className="text-center text-lg mb-16 max-w-3xl mx-auto text-white/90">
                These stories illustrate how our initiatives have made a real difference in people's lives.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-tmrm-gold mb-4">Hospital Bill Relief</h3>
                  <p className="mb-4 text-lg text-white/90">
                    When a local barber's daughter needed urgent medical care, the family couldn't afford the hospital bills.
                    Through our monthly hospital visitation program, we were able to cover the entire cost of her treatment,
                    allowing her to receive the care she needed without her family falling into financial hardship.
                  </p>
                  <div className="text-sm opacity-80">- Supported through our Hospital Visitation Initiative</div>
                </motion.div>
                
                <motion.div
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-tmrm-gold mb-4">Educational Support</h3>
                  <p className="mb-4 text-lg text-white/90">
                    A promising student was at risk of dropping out of school due to inability to pay fees. Our community
                    rallied together to not only cover his immediate educational expenses but also establish a scholarship
                    fund to ensure his education could continue uninterrupted.
                  </p>
                  <div className="text-sm opacity-80">- Supported through our Community Outreach Initiative</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Initiatives;
