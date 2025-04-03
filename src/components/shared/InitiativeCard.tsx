
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface InitiativeCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({
  title,
  description,
  icon,
  image
}) => {
  return (
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      <CardHeader className={!image ? "pb-0" : ""}>
        {icon && <div className="text-tmrm-gold mb-3">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-700">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default InitiativeCard;
