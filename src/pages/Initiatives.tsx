import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/shared/Hero';
import InitiativeCard from '@/components/shared/InitiativeCard';
import { Calendar, Users, CircleDollarSign, BookOpen, Presentation, HeartHandshake, School } from 'lucide-react';

const Initiatives = () => {
  const initiatives = [
    {
      title: "Annual Ramadan Lectures",
      description: "Our annual Ramadan lectures provide a platform for deep exploration of Islamic teachings during this holy month. We invite respected scholars to offer insights that help Muslims grow spiritually and apply Islamic principles in their daily lives.",
      icon: <Calendar size={24} />,
      image: "/tmrm/ramadan-lectures.jpg"
    },
    {
      title: "Weekly Sunday Meetings",
      description: "Every Sunday, we host gatherings at Apata Kekere Mosque to discuss Islamic teachings and their application in contemporary society. These meetings foster community bonds and ensure continuous learning and growth.",
      icon: <Users size={24} />,
      image: "/tmrm/gathering.jpg"
    },
    {
      title: "Asalatu Prayers",
      description: "Led by our women's wing, Asalatu prayer sessions provide a dedicated space for women in our community to connect spiritually, support each other, and organize charitable activities focused on the unique needs of women and children.",
      icon: <Users size={24} />,
      image: " /tmrm/asalatu.jpg "
      
    },
    {
      title: "Monthly Hospital Visits",
      description: "Our volunteers regularly visit local hospitals to provide emotional and financial support to patients in need. These visits have helped numerous individuals cover their medical expenses when they had nowhere else to turn.",
      icon: <CircleDollarSign size={24} />,
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Islamic Education",
      description: "We organize regular classes on Quranic studies, Hadith interpretation, and Islamic jurisprudence for all age groups, ensuring our community has access to authentic Islamic knowledge.",
      icon: <BookOpen size={24} />,
      image: " /tmrm/education.jpg"
    },
    {
      title: "Community Outreach",
      description: "Through regular outreach activities, we identify and assist vulnerable community members with food, clothing, and other essential needs, embodying the Islamic principle of caring for one's neighbors.",
      icon: <HeartHandshake size={24} />,
      image: " /tmrm/outreach.jpg"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero
          title="Our Initiatives"
          description="Discover the programs and activities through which we serve our community and promote Islamic values."
          backgroundImage="/tmrm/initiative.jpg"
          showCta={false}
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Our Programs</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
              Through these initiatives, we aim to support our community spiritually, educationally, and financially,
              embodying the Islamic principles of charity and compassion.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiatives.map((initiative, index) => (
                <InitiativeCard
                  key={index}
                  title={initiative.title}
                  description={initiative.description}
                  icon={initiative.icon}
                  image={initiative.image}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center">How to Participate</h2>
              <p className="text-center text-lg mb-12">
                There are many ways you can get involved with our initiatives and contribute to our mission.
              </p>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-tmrm-green">
                  <h3 className="text-xl font-bold text-tmrm-green mb-2">Attend Our Programs</h3>
                  <p className="text-gray-700">
                    Join our weekly Sunday meetings, Ramadan lectures, or Asalatu prayers to learn and grow with our community.
                    All are welcome to attend our public programs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-tmrm-green">
                  <h3 className="text-xl font-bold text-tmrm-green mb-2">Volunteer Your Time</h3>
                  <p className="text-gray-700">
                    We welcome volunteers who can assist with our hospital visits, community outreach, and educational programs.
                    Your time and skills can make a meaningful difference in someone's life.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-tmrm-green">
                  <h3 className="text-xl font-bold text-tmrm-green mb-2">Donate to Support Our Work</h3>
                  <p className="text-gray-700">
                    Your financial contributions enable us to continue and expand our initiatives. 100% of donations go directly
                    to supporting those in need within our community.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-tmrm-green">
                  <h3 className="text-xl font-bold text-tmrm-green mb-2">Spread Awareness</h3>
                  <p className="text-gray-700">
                    Help us reach more people by sharing information about our work with your friends, family, and on social media.
                    Increased awareness leads to greater impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-tmrm-green text-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Impact Stories</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
              These stories illustrate how our initiatives have made a real difference in people's lives.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold text-tmrm-gold mb-3">Hospital Bill Relief</h3>
                <p className="mb-4">
                  When a local barber's daughter needed urgent medical care, the family couldn't afford the hospital bills.
                  Through our monthly hospital visitation program, we were able to cover the entire cost of her treatment,
                  allowing her to receive the care she needed without her family falling into financial hardship.
                </p>
                <div className="text-sm opacity-80">- Supported through our Hospital Visitation Initiative</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold text-tmrm-gold mb-3">Educational Support</h3>
                <p className="mb-4">
                  A promising student was at risk of dropping out of school due to inability to pay fees. Our community
                  rallied together to not only cover his immediate educational expenses but also establish a scholarship
                  fund to ensure his education could continue uninterrupted.
                </p>
                <div className="text-sm opacity-80">- Supported through our Community Outreach Initiative</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Initiatives;
