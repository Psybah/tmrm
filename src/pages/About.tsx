
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/shared/Hero';

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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="section-title">Our Story</h2>
                <div className="prose max-w-none">
                  <p>
                    The Muslim Righteous Movement (TMRM) was founded in 2020 by a dedicated group of Muslims at the Apata Kekere Mosque in Ibadan, Nigeria. Our founders recognized the pressing needs in their community and felt called to action by the Islamic principles of charity (Sadaqah) and mandatory giving (Zakat).
                  </p>
                  <p>
                    What began as a small initiative to support local families in need has grown into a broader movement dedicated to alleviating suffering and promoting Islamic values through action. Our community-centered approach ensures that we understand and effectively address the specific challenges faced by those we serve.
                  </p>
                  <p>
                    Today, TMRM continues to operate from our spiritual home at Apata Kekere Mosque, but our impact extends throughout Ibadan and beyond. We remain committed to our founding principles while expanding our reach and capacity to help those in need.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Muslim community gathering" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16 bg-tmrm-green text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="section-title">Our Mission</h2>
                <p className="text-lg">
                  To alleviate the suffering of underprivileged people through Islamic charity and community service, embodying the principles of compassion and righteousness taught by Islam.
                </p>
              </div>
              <div>
                <h2 className="section-title">Our Vision</h2>
                <p className="text-lg">
                  To create a society where no Muslim suffers from preventable hardship, and where the principles of Islamic charity foster unity, compassion, and mutual support within our community.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center">Our Journey</h2>
              
              <div className="relative mt-12">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-tmrm-green/20"></div>
                
                {timeline.map((item, index) => (
                  <div key={index} className="relative mb-12">
                    <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="md:w-1/2 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-tmrm-gold">
                          <h3 className="text-xl font-bold text-tmrm-green mb-2">{item.title}</h3>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                      
                      {/* Year marker */}
                      <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 my-4 md:my-0">
                        <div className="w-12 h-12 rounded-full bg-tmrm-green text-white flex items-center justify-center font-bold shadow-md z-10 relative">
                          {item.year}
                        </div>
                      </div>
                      
                      {/* Empty space for alternate layout */}
                      <div className="md:w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Leadership */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Our Leadership</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {leaders.map((leader, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-tmrm-green mb-1">{leader.name}</h3>
                    <p className="text-gray-700">{leader.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 bg-pattern-light">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="h-16 w-16 rounded-full bg-tmrm-green/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tmrm-green">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tmrm-green mb-3">Compassion</h3>
                <p className="text-gray-700">We approach all our work with genuine care and empathy for those in need.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="h-16 w-16 rounded-full bg-tmrm-green/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tmrm-green">
                    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tmrm-green mb-3">Integrity</h3>
                <p className="text-gray-700">We conduct our work with transparency, accountability, and ethical principles.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="h-16 w-16 rounded-full bg-tmrm-green/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tmrm-green">
                    <path d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0h3.15m-3.15 0v-1.5a1.575 1.575 0 0 0-3.15 0v1.5m3.15 0h-3.15"></path>
                    <path d="M7.5 10.5h9v9a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.25 2.25 0 0 1 7.5 19.5v-9Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tmrm-green mb-3">Community</h3>
                <p className="text-gray-700">We believe in the power of unity and collective action to create meaningful change.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
