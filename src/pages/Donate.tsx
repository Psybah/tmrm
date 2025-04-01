
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/shared/Hero';
import DonationCard from '@/components/shared/DonationCard';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CircleDollarSign, CreditCard, Wallet, Award, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Donate = () => {
  const [searchParams] = useSearchParams();
  const donationType = searchParams.get('type') || 'one-time';
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [activeTab, setActiveTab] = useState(donationType);

  // Past donor data
  const pastDonors = [
    { name: "Ahmed Yusuf", amount: "₦50,000", date: "March 2023" },
    { name: "Fatima Ibrahim", amount: "₦100,000", date: "December 2022" },
    { name: "Malik Johnson", amount: "₦75,000", date: "October 2022" },
    { name: "Aisha Mohammed", amount: "₦20,000", date: "August 2022" },
    { name: "Ibrahim Ahmed", amount: "₦150,000", date: "July 2022" },
    { name: "Zainab Oladele", amount: "₦30,000", date: "June 2022" },
  ];

  const handleAmountSelect = (value: string) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount('custom');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = amount === 'custom' ? customAmount : amount;
    console.log(`Donating ${finalAmount} ${activeTab}`);
    alert('This is a demo. In a real implementation, this would connect to a payment provider.');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar />
      <motion.main 
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero
          title="Support Our Mission"
          description="Your donation helps us continue our work of alleviating suffering and spreading compassion."
          backgroundImage="https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          showCta={false}
        />
        
        {/* Donation Options */}
        <motion.section 
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2 className="section-title text-center" variants={itemVariants}>Ways to Give</motion.h2>
              <motion.p className="text-center text-lg mb-12" variants={itemVariants}>
                Choose the donation option that works best for you. 100% of donations go directly to supporting those in need.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div variants={itemVariants}>
                  <DonationCard
                    title="One-Time Donation"
                    description="Make an immediate impact with a single donation of any amount to support our initiatives."
                    type="one-time"
                    icon={<CircleDollarSign size={24} className="text-tmrm-gold" />}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <DonationCard
                    title="Monthly Support"
                    description="Become a regular supporter by setting up a recurring monthly donation to sustain our work."
                    type="recurring"
                    icon={<Wallet size={24} className="text-tmrm-gold" />}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <DonationCard
                    title="Zakat & Sadaqah"
                    description="Fulfill your religious obligation with Zakat or give voluntary charity (Sadaqah)."
                    type="zakat"
                    icon={<CreditCard size={24} className="text-tmrm-gold" />}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Featured Donors */}
        <motion.section 
          className="py-16 bg-gray-50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2 variants={itemVariants} className="section-title text-center">Featured Donors</motion.h2>
              <motion.p variants={itemVariants} className="text-center text-lg mb-10 max-w-2xl mx-auto">
                We are grateful to all our donors who make our work possible. Here are some of the generous individuals who have supported our cause.
              </motion.p>
              
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {pastDonors.map((donor, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 pl-4">
                      <motion.div 
                        className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow h-full"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex justify-center mb-4">
                          <div className="rounded-full bg-tmrm-green/10 p-3">
                            <User className="h-8 w-8 text-tmrm-green" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-lg">{donor.name}</h3>
                        <p className="text-tmrm-gold font-bold mt-2">{donor.amount}</p>
                        <p className="text-gray-500 text-sm">{donor.date}</p>
                        <div className="mt-3 flex justify-center">
                          <Award className="text-tmrm-green h-5 w-5" />
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 gap-2">
                  <CarouselPrevious className="static translate-y-0 mx-2" />
                  <CarouselNext className="static translate-y-0 mx-2" />
                </div>
              </Carousel>
            </div>
          </div>
        </motion.section>
        
        {/* Donation Form */}
        <motion.section 
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.h2 variants={itemVariants} className="section-title text-center">Make a Donation</motion.h2>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md p-6 md:p-8"
              >
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <div className="overflow-x-auto">
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger value="one-time">One-Time</TabsTrigger>
                      <TabsTrigger value="recurring">Monthly</TabsTrigger>
                      <TabsTrigger value="zakat">Zakat/Sadaqah</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <div className="mt-8">
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-medium mb-2 block">Select Amount</Label>
                          <div className="grid grid-cols-3 gap-3 mb-3">
                            {['5000', '10000', '20000'].map((value) => (
                              <Button
                                key={value}
                                type="button"
                                variant={amount === value ? "default" : "outline"}
                                className={amount === value ? "bg-tmrm-green hover:bg-tmrm-green-light" : ""}
                                onClick={() => handleAmountSelect(value)}
                              >
                                ₦{value}
                              </Button>
                            ))}
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            {['50000', '100000', 'custom'].map((value) => (
                              <Button
                                key={value}
                                type="button"
                                variant={amount === value ? "default" : "outline"}
                                className={amount === value ? "bg-tmrm-green hover:bg-tmrm-green-light" : ""}
                                onClick={() => handleAmountSelect(value)}
                              >
                                {value === 'custom' ? 'Custom' : `₦${value}`}
                              </Button>
                            ))}
                          </div>
                          
                          {amount === 'custom' && (
                            <div className="mt-4">
                              <Label htmlFor="custom-amount">Enter custom amount (₦)</Label>
                              <Input
                                id="custom-amount"
                                type="number"
                                placeholder="Enter amount in Naira"
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                                className="mt-1"
                              />
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <Label className="text-base font-medium mb-2 block">Personal Information</Label>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="first-name">First Name</Label>
                                <Input id="first-name" placeholder="Your first name" className="mt-1" />
                              </div>
                              <div>
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input id="last-name" placeholder="Your last name" className="mt-1" />
                              </div>
                            </div>
                            
                            <div>
                              <Label htmlFor="email">Email Address</Label>
                              <Input id="email" type="email" placeholder="Your email address" className="mt-1" />
                            </div>
                            
                            <div>
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input id="phone" placeholder="Your phone number" className="mt-1" />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <Label className="text-base font-medium mb-2 block">Payment Method</Label>
                          <RadioGroup defaultValue="paystack" className="space-y-3">
                            <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                              <RadioGroupItem value="paystack" id="paystack" />
                              <Label htmlFor="paystack" className="flex items-center cursor-pointer w-full">
                                <span>Paystack</span>
                                <span className="ml-auto text-sm text-gray-500">(Card, Bank Transfer)</span>
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <div className="pt-4">
                          <Button 
                            type="submit" 
                            className="w-full bg-tmrm-green hover:bg-tmrm-green-light"
                            disabled={!amount || (amount === 'custom' && !customAmount)}
                          >
                            Complete Donation
                          </Button>
                          
                          <p className="text-center text-sm mt-4 text-gray-500">
                            100% of your donation goes directly to supporting those in need.
                            <br />Donations are secure and encrypted.
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </Tabs>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Transparency Section */}
        <motion.section 
          className="py-16 bg-tmrm-green text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">Our Commitment to Transparency</motion.h2>
              <motion.p variants={itemVariants} className="text-lg mb-8">
                We are committed to using 100% of your donations for charitable purposes. Our operational costs are covered by separate funds,
                ensuring that your contributions go directly to those who need them most.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={containerVariants}
              >
                <motion.div 
                  className="p-6 bg-white/10 rounded-lg backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl font-bold text-tmrm-gold mb-2">100%</div>
                  <div className="text-lg">Of donations go to charitable causes</div>
                </motion.div>
                
                <motion.div 
                  className="p-6 bg-white/10 rounded-lg backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl font-bold text-tmrm-gold mb-2">24</div>
                  <div className="text-lg">Hospital bills covered in 2023</div>
                </motion.div>
                
                <motion.div 
                  className="p-6 bg-white/10 rounded-lg backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl font-bold text-tmrm-gold mb-2">100+</div>
                  <div className="text-lg">Families supported annually</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.main>
      <Footer />
    </>
  );
};

export default Donate;
