import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Sunrise, Sun, Sunset, Moon } from 'lucide-react';

interface PrayerTime {
  name: string;
  time: string;
  icon: React.ReactNode;
}

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        // Using the Aladhan API to fetch prayer times
        const response = await fetch('https://api.aladhan.com/v1/timingsByCity?city=Lagos&country=Nigeria&method=4');
        const data = await response.json();
        
        const timings = data.data.timings;
        setPrayerTimes([
          { name: 'Fajr', time: timings.Fajr, icon: <Sunrise className="w-5 h-5" /> },
          { name: 'Dhuhr', time: timings.Dhuhr, icon: <Sun className="w-5 h-5" /> },
          { name: 'Asr', time: timings.Asr, icon: <Sun className="w-5 h-5" /> },
          { name: 'Maghrib', time: timings.Maghrib, icon: <Sunset className="w-5 h-5" /> },
          { name: 'Isha', time: timings.Isha, icon: <Moon className="w-5 h-5" /> }
        ]);
      } catch (error) {
        console.error('Error fetching prayer times:', error);
      }
    };

    fetchPrayerTimes();
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-tmrm-gold" />
        <h3 className="text-lg font-semibold text-tmrm-gold">Prayer Times</h3>
      </div>
      
      <div className="text-center mb-6">
        <div className="text-2xl font-bold text-white">{currentTime}</div>
        <div className="text-sm text-gray-400">Current Time</div>
      </div>

      <div className="space-y-4">
        {prayerTimes.map((prayer, index) => (
          <motion.div
            key={prayer.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="text-tmrm-gold">
                {prayer.icon}
              </div>
              <span className="text-white">{prayer.name}</span>
            </div>
            <span className="text-gray-300">{prayer.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PrayerTimes; 