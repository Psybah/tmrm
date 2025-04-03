import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface Verse {
  id: number;
  verse_key: string;
  text_uthmani: string;
  translation: string;
}

const QuranicVerse = () => {
  const [verse, setVerse] = useState<Verse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomVerse = async () => {
    try {
      // Using the Quran API to fetch random verses
      const response = await fetch('https://api.quran.com/api/v4/verses/random?words=true&translations=131');
      const data = await response.json();
      
      if (data.verse) {
        setVerse({
          id: data.verse.id,
          verse_key: data.verse.verse_key,
          text_uthmani: data.verse.text_uthmani,
          translation: data.verse.translations[0].text
        });
      }
    } catch (error) {
      console.error('Error fetching verse:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomVerse();
    const interval = setInterval(fetchRandomVerse, 30000); // Change verse every 30 seconds
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-tmrm-green"></div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-tmrm-gold" />
        <h3 className="text-lg font-semibold text-tmrm-gold">Quranic Verse</h3>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={verse?.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="text-2xl font-arabic text-right leading-relaxed text-white">
            {verse?.text_uthmani}
          </div>
          <div className="text-gray-200 italic">
            "{verse?.translation}"
          </div>
          <div className="text-sm text-gray-400">
            Surah {verse?.verse_key.split(':')[0]}, Verse {verse?.verse_key.split(':')[1]}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuranicVerse; 