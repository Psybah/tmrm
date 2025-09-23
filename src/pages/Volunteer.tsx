import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/shared/Hero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabaseClient';

const Volunteer = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occupation: '',
    availability: '',
    interests: '',
    message: '',
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      toast({ title: 'Consent required', description: 'Please agree to be contacted.' });
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.from('volunteers').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        occupation: formData.occupation,
        availability: formData.availability,
        interests: formData.interests,
        message: formData.message,
      });
      if (error) throw error;
      toast({ title: 'Registration received', description: 'We will contact you shortly.' });
      setFormData({
        name: '', email: '', phone: '', occupation: '', availability: '', interests: '', message: '', agree: false,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero
          title="Volunteer"
          description="Join JJSN: Guided by Divine Light, Serving with Compassion"
          backgroundImage="/tmrm/outreach.jpg"
          showCta={false}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title text-center">Register as a Volunteer</h2>
              <p className="text-center text-lg text-gray-700 mb-10">
                Share a few details and we will reach out with next steps.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Input id="availability" name="availability" placeholder="e.g., weekends, evenings" value={formData.availability} onChange={handleChange} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="interests">Areas of Interest</Label>
                    <Input id="interests" name="interests" placeholder="e.g., outreach, education" value={formData.interests} onChange={handleChange} className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={5} placeholder="Tell us why you'd like to volunteer" value={formData.message} onChange={handleChange} className="mt-1" />
                </div>

                <div className="flex items-start gap-2">
                  <input id="agree" name="agree" type="checkbox" checked={formData.agree} onChange={handleChange} className="mt-1" />
                  <Label htmlFor="agree">I agree to be contacted via phone or email for volunteering.</Label>
                </div>

                <div className="pt-2">
                  <Button type="submit" disabled={submitting} className="bg-tmrm-green hover:bg-tmrm-green-light">
                    {submitting ? 'Submitting...' : 'Submit Registration'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Volunteer;


