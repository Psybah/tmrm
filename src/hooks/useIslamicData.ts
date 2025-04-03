import { useState, useEffect } from 'react';
import axios from 'axios';

interface PrayerTimes {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

interface IslamicEvent {
  date: string;
  title: string;
  description: string;
  hijriDate: string;
}

interface QuranicVerse {
  arabic: string;
  translation: string;
  reference: string;
}

export const useIslamicData = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [islamicEvents, setIslamicEvents] = useState<IslamicEvent[]>([]);
  const [dailyVerse, setDailyVerse] = useState<QuranicVerse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch prayer times
  const fetchPrayerTimes = async () => {
    try {
      // Using Aladhan API for prayer times
      const response = await axios.get('https://api.aladhan.com/v1/timingsByCity', {
        params: {
          city: 'Ibadan',
          country: 'Nigeria',
          method: 2 // Islamic Society of North America (ISNA) method
        }
      });
      
      const timings = response.data.data.timings;
      setPrayerTimes({
        fajr: timings.Fajr,
        dhuhr: timings.Dhuhr,
        asr: timings.Asr,
        maghrib: timings.Maghrib,
        isha: timings.Isha
      });
    } catch (err) {
      console.error('Error fetching prayer times:', err);
      setError('Failed to fetch prayer times');
    }
  };

  // Fetch Islamic events
  const fetchIslamicEvents = async () => {
    try {
      const currentDate = new Date();
      // Format date as DD-MM-YYYY as required by the API
      const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
      
      const response = await axios.get(`https://api.aladhan.com/v1/gToH/${formattedDate}`);

      if (response.data.code === 200 && response.data.data) {
        const hijri = response.data.data.hijri;
        
        // Create events array with current Hijri date and upcoming significant dates
        const events: IslamicEvent[] = [
          {
            date: new Date().toLocaleDateString(),
            title: 'Current Hijri Date',
            description: 'Today in Islamic Calendar',
            hijriDate: `${hijri.day} ${hijri.month.en} ${hijri.year} AH`
          }
        ];

        // Add significant Islamic dates
        const significantDates = [
          { month: 'Ramadhan', day: '1', title: 'Beginning of Ramadan' },
          { month: 'Ramadhan', day: '27', title: 'Laylat al-Qadr (expected)' },
          { month: 'Shawwal', day: '1', title: 'Eid al-Fitr' },
          { month: "Dhul Hijjah", day: '10', title: 'Eid al-Adha' },
          { month: 'Muharram', day: '1', title: 'Islamic New Year' }
        ];

        // Add upcoming events if they're in the current or next month
        significantDates.forEach(date => {
          if (date.month === hijri.month.en || 
              (hijri.month.number === 12 && date.month === 'Muharram')) {
            events.push({
              date: 'Upcoming',
              title: date.title,
              description: `${date.day} ${date.month}`,
              hijriDate: `${date.day} ${date.month} ${hijri.year} AH`
            });
          }
        });

        setIslamicEvents(events);
        setError(null); // Clear any previous errors
      }
    } catch (err) {
      console.error('Error fetching Islamic events:', err);
      setError('Failed to fetch Islamic events');
      // Set a default current date if API fails
      setIslamicEvents([{
        date: new Date().toLocaleDateString(),
        title: 'Islamic Calendar',
        description: 'Unable to fetch current Hijri date',
        hijriDate: 'Please try again later'
      }]);
    }
  };

  // Fetch daily Quranic verse
  const fetchDailyVerse = async () => {
    try {
      // Using Quran API
      const response = await axios.get('https://api.alquran.cloud/v1/ayah/random/editions/quran-uthmani,en.pickthall');
      const verses = response.data.data;
      
      if (verses && verses.length >= 2) {
        const arabicVerse = verses[0];
        const englishVerse = verses[1];
        
        setDailyVerse({
          arabic: arabicVerse.text,
          translation: englishVerse.text,
          reference: `Surah ${arabicVerse.surah.englishName} (${arabicVerse.surah.number}), Verse ${arabicVerse.numberInSurah}`
        });
      }
    } catch (err) {
      console.error('Error fetching daily verse:', err);
      setError('Failed to fetch daily verse');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([
        fetchPrayerTimes(),
        fetchIslamicEvents(),
        fetchDailyVerse()
      ]);
      setLoading(false);
    };

    fetchData();
    
    // Refresh prayer times every hour
    const prayerInterval = setInterval(fetchPrayerTimes, 3600000);
    
    // Refresh daily verse every 24 hours
    const verseInterval = setInterval(fetchDailyVerse, 86400000);
    
    // Refresh Islamic events every day
    const eventsInterval = setInterval(fetchIslamicEvents, 86400000);

    return () => {
      clearInterval(prayerInterval);
      clearInterval(verseInterval);
      clearInterval(eventsInterval);
    };
  }, []);

  return {
    prayerTimes,
    islamicEvents,
    dailyVerse,
    loading,
    error
  };
};