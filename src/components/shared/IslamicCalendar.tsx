import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star } from 'lucide-react';

interface IslamicDate {
  day: number;
  month: string;
  year: number;
}

const IslamicCalendar = () => {
  const [date, setDate] = useState<IslamicDate | null>(null);
  const [nextEvent, setNextEvent] = useState<string>('');

  useEffect(() => {
    const fetchIslamicDate = async () => {
      try {
        const response = await fetch('https://api.aladhan.com/v1/gToH');
        const data = await response.json();
        
        const hijri = data.data.hijri;
        setDate({
          day: hijri.day,
          month: hijri.month.en,
          year: hijri.year
        });

        // Calculate next major Islamic event
        const today = new Date();
        const events = [
          { name: 'Ramadan', date: new Date(today.getFullYear(), 2, 10) },
          { name: 'Eid al-Fitr', date: new Date(today.getFullYear(), 3, 9) },
          { name: 'Hajj', date: new Date(today.getFullYear(), 5, 14) },
          { name: 'Eid al-Adha', date: new Date(today.getFullYear(), 5, 16) },
          { name: 'Islamic New Year', date: new Date(today.getFullYear(), 6, 19) }
        ];

        const nextEvent = events.find(event => event.date > today);
        if (nextEvent) {
          const daysUntil = Math.ceil((nextEvent.date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
          setNextEvent(`${nextEvent.name} in ${daysUntil} days`);
        }
      } catch (error) {
        console.error('Error fetching Islamic date:', error);
      }
    };

    fetchIslamicDate();
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-tmrm-gold" />
        <h3 className="text-lg font-semibold text-tmrm-gold">Islamic Calendar</h3>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <div className="text-3xl font-bold text-white mb-2">
          {date?.day} {date?.month}
        </div>
        <div className="text-xl text-gray-300">
          {date?.year} AH
        </div>
      </motion.div>

      {nextEvent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 p-3 bg-tmrm-gold/10 rounded-lg"
        >
          <Star className="w-5 h-5 text-tmrm-gold" />
          <span className="text-white">{nextEvent}</span>
        </motion.div>
      )}
    </div>
  );
};

export default IslamicCalendar; 