
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { UserCircle2 } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
}) => {
  return (
    <Card className="overflow-hidden h-full hover:shadow-lg transition-all hover:border-tmrm-gold">
      <CardContent className="pt-6">
        <div className="mb-4 text-tmrm-gold">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.03a4.41 4.41 0 0 1 1.46-.99c.318-.132.765-.23 1.33-.29.42-.065.823-.097 1.21-.097.778 0 1.356.17 1.735.512.448.394.667.948.667 1.66 0 .757-.198 1.412-.594 1.966-.396.545-.963.94-1.7 1.185-.42.145-.92.222-1.486.23-.75.02-1.35.117-1.8.327-.48.195-.9.475-1.26.84-.38.337-.65.678-.81 1.02-.16.343-.25.673-.25.99 0 .722.19 1.304.59 1.748.39.444.93.667 1.62.667.69 0 1.31-.23 1.87-.69.56-.458 1-1.118 1.33-1.98.15-.39.28-.803.37-1.24.1-.435.15-.826.15-1.17z"/>
            <path d="M21.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.825-.55-.13-1.07-.132-1.54-.008-.16-.95.1-1.626.41-2.03a4.41 4.41 0 0 1 1.46-.99c.32-.132.77-.23 1.34-.29.42-.065.82-.097 1.2-.097.78 0 1.36.17 1.74.512.44.394.66.948.66 1.66 0 .757-.19 1.412-.59 1.966-.4.545-.97.94-1.7 1.185-.42.145-.92.222-1.49.23-.75.02-1.35.117-1.8.327-.48.195-.9.475-1.26.84-.38.337-.65.685-.81 1.027-.16.345-.25.673-.25.99 0 .722.19 1.304.59 1.748.39.444.93.667 1.62.667.69 0 1.32-.23 1.87-.69.56-.458 1-1.118 1.33-1.98.15-.4.28-.81.37-1.25.09-.44.15-.83.15-1.17z"/>
          </svg>
        </div>
        <p className="mb-4 text-gray-700">{quote}</p>
      </CardContent>
      <CardFooter className="border-t pt-4 flex items-center">
        <div className="text-tmrm-green mr-3">
          <UserCircle2 size={40} />
        </div>
        <div>
          <div className="font-medium">{author}</div>
          {role && <div className="text-sm text-gray-500">{role}</div>}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
