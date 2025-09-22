import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/shared/Hero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TestimonialsCarousel from '@/components/shared/TestimonialsCarousel';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Photo gallery items
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1584652584192-7a341a52d227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Ramadan Lecture",
      category: "events"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1603738116595-bcb14db28c35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Weekly Meeting",
      category: "events"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1603122553884-71ee6dde0b81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Islamic Studies Class",
      category: "events"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Hospital Visit",
      category: "outreach"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1525695230005-efd074980869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Community Support",
      category: "outreach"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1604922824961-87cebeb270b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Mosque Gathering",
      category: "mosque"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1563804446461-b8abfca96d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Women's Prayer Group",
      category: "events"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Food Distribution",
      category: "outreach"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Mosque Interior",
      category: "mosque"
    }
  ];
  
  // Testimonials
  const testimonials = [
    {
      id: 1,
      quote: "Jamuhiyat Jalalullahi Society of Nigeria stepped in when I had nowhere else to turn. My daughter needed urgent medical treatment, and I couldn't afford the hospital bills. They not only paid for her treatment but also followed up to ensure her recovery. I'm forever grateful for their compassion.",
      author: "Aisha Lawal",
      role: "Mother of hospital bill beneficiary"
    },
    {
      id: 2,
      quote: "As a volunteer with JJSN, I've witnessed firsthand the impact of their work in the community. From hospital visits to educational support, they truly embody the Islamic principles of compassion and charity. It's an honor to be part of this movement.",
      author: "Ibrahim Adewale",
      role: "Volunteer"
    },
    {
      id: 3,
      quote: "The educational support provided by JJSN changed my life. When my family couldn't afford my school fees, JJSN stepped in and ensured I could continue my education. Today, I'm studying medicine and hope to give back to my community in the future.",
      author: "Fatima Olatunji",
      role: "Student beneficiary"
    },
    {
      id: 4,
      quote: "The monthly hospital visits by JJSN volunteers bring so much joy and comfort to our patients. Beyond the financial support they provide, their presence and prayers make a significant difference in the recovery journey of many patients.",
      author: "Dr. Kabir Mohammed",
      role: "Local hospital staff"
    }
  ];

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero
          title="Photo Gallery"
          description="Explore photos from our events, initiatives, and testimonials from those we've helped."
          backgroundImage="https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          showCta={false}
        />
        
        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Photo Gallery</h2>
            <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
              Browse through images of our events, community outreach programs, and other activities.
            </p>
            
            <Tabs defaultValue="all" className="w-full mb-8">
              <div className="flex justify-center overflow-x-auto pb-2">
                <TabsList className="inline-flex h-auto flex-wrap justify-center">
                  <TabsTrigger value="all">All Photos</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="outreach">Community Outreach</TabsTrigger>
                  <TabsTrigger value="mosque">Mosque</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photos.map((photo) => (
                    <div 
                      key={photo.id}
                      className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => handleImageClick(photo.src)}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={photo.src} 
                          alt={photo.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{photo.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="events" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photos
                    .filter(photo => photo.category === 'events')
                    .map((photo) => (
                      <div 
                        key={photo.id}
                        className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                        onClick={() => handleImageClick(photo.src)}
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src={photo.src} 
                            alt={photo.title} 
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium">{photo.title}</h3>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="outreach" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photos
                    .filter(photo => photo.category === 'outreach')
                    .map((photo) => (
                      <div 
                        key={photo.id}
                        className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                        onClick={() => handleImageClick(photo.src)}
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src={photo.src} 
                            alt={photo.title} 
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium">{photo.title}</h3>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="mosque" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photos
                    .filter(photo => photo.category === 'mosque')
                    .map((photo) => (
                      <div 
                        key={photo.id}
                        className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                        onClick={() => handleImageClick(photo.src)}
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src={photo.src} 
                            alt={photo.title} 
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium">{photo.title}</h3>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Testimonials</h2>
            <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
              Read about the experiences of those who have benefited from our initiatives.
            </p>
            
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
        
        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Success Stories</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
              These stories demonstrate the real impact of our work in the community.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-tmrm-gold hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-tmrm-green mb-4">The Farmer's Daughter</h3>
                <p className="mb-4">
                  When a farmer's daughter was hospitalized with a severe viral infection and inflammation, her family found themselves unable to pay the hospital bills. Her father was a farmer and her mother worked as a small trader, making them financially constrained.
                </p>
                <p className="mb-4">
                  We came across this case during one of our regular monthly hospital visits. We covered the entire hospital bill, enabling the girl to receive the treatment she needed without delay. Additional support was provided for follow-up care and medications.
                </p>
                <p>
                  Today, the farmer's daughter has fully recovered and is a university student. The family has kept in touch, with the father now volunteering at community events as a way of giving back to the community.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-tmrm-gold hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-tmrm-green mb-4">The Medical Student</h3>
                <p className="mb-4">
                  Fatima was a bright student with dreams of becoming a doctor, but her family's financial challenges threatened to end her education early. With her father unemployed and her mother working as a small trader, the family couldn't afford her secondary school fees.
                </p>
                <p className="mb-4">
                  Through our educational support program, we provided a scholarship covering her tuition and arranged for a medical student to mentor her throughout her educational journey.
                </p>
                <p>
                  Five years later, Fatima graduated from secondary school with excellent grades and secured admission to study medicine at university. She now serves as an inspiration to younger students in our community and plans to return to help her community after completing her medical studies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeModal}>
          <div className="max-w-4xl max-h-[90vh] p-2 bg-white rounded-lg overflow-hidden">
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default Gallery;
