
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DonationCardProps {
  title: string;
  description: string;
  amount?: string;
  type: 'one-time' | 'recurring' | 'zakat';
  icon?: React.ReactNode;
}

const DonationCard: React.FC<DonationCardProps> = ({
  title,
  description,
  amount,
  type,
  icon
}) => {
  return (
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow border-t-4 border-t-tmrm-green">
      <CardHeader>
        {icon && <div className="text-tmrm-gold mb-3">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
        {amount && (
          <div className="mt-3 text-2xl font-bold text-tmrm-green">{amount}</div>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-700">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-tmrm-green hover:bg-tmrm-green-light">
          <Link to={`/donate?type=${type}`}>Donate {type === 'recurring' ? 'Monthly' : 'Now'}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DonationCard;
