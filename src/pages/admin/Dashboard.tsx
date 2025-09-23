import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/shared/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

type Donation = { id: string; donor_name: string | null; amount: number; status: string; created_at: string };
type Volunteer = { id: string; name: string; email: string | null; phone: string | null; status: string; created_at: string };

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [totals, setTotals] = useState({ donations: 0, volunteers: 0 });
  const [recentDonations, setRecentDonations] = useState<Donation[]>([]);
  const [recentVolunteers, setRecentVolunteers] = useState<Volunteer[]>([]);

  useEffect(() => {
    const bootstrap = async () => {
      const { data: isAdmin } = await supabase.rpc('is_admin');
      if (!isAdmin) {
        navigate('/admin/login');
        return;
      }
      const { count: donationsCount } = await supabase.from('donations').select('*', { count: 'exact', head: true });
      const { count: volunteersCount } = await supabase.from('volunteers').select('*', { count: 'exact', head: true });
      setTotals({ donations: donationsCount || 0, volunteers: volunteersCount || 0 });

      const { data: donations } = await supabase
        .from('donations')
        .select('id, donor_name, amount, status, created_at')
        .order('created_at', { ascending: false })
        .limit(5);
      setRecentDonations(donations || []);

      const { data: volunteers } = await supabase
        .from('volunteers')
        .select('id, name, email, phone, status, created_at')
        .order('created_at', { ascending: false })
        .limit(5);
      setRecentVolunteers(volunteers || []);
    };
    bootstrap();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero title="Admin Dashboard" description="Monitor donations and volunteers" backgroundImage="/tmrm/education.jpg" showCta={false} />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-end mb-4">
              <Button onClick={handleSignOut} variant="outline" className="border-tmrm-green text-tmrm-green">Sign Out</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Total Donations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{totals.donations}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Total Volunteers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{totals.volunteers}</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Donations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentDonations.map(d => (
                      <div key={d.id} className="flex justify-between border-b pb-2">
                        <span>{d.donor_name || 'Anonymous'}</span>
                        <span className="text-tmrm-green">₦{Number(d.amount).toLocaleString()}</span>
                        <span className="text-sm opacity-70">{d.status}</span>
                      </div>
                    ))}
                    {recentDonations.length === 0 && <div className="text-sm text-gray-500">No donations yet.</div>}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Volunteers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentVolunteers.map(v => (
                      <div key={v.id} className="flex justify-between border-b pb-2">
                        <span>{v.name}</span>
                        <span className="text-sm opacity-70">{v.status}</span>
                      </div>
                    ))}
                    {recentVolunteers.length === 0 && <div className="text-sm text-gray-500">No volunteers yet.</div>}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AdminDashboard;


