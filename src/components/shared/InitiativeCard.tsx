import React from 'react';
import { motion } from 'framer-motion';

interface InitiativeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  className?: string;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({
  title,
  description,
  icon,
  image,
  className = ''
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-white text-4xl">
            {icon}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default InitiativeCard;
