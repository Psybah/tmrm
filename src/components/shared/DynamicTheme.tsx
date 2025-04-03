import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const themes = [
  {
    primary: 'from-emerald-600 to-teal-600',
    secondary: 'from-amber-500 to-yellow-500',
    accent: 'from-rose-500 to-pink-500'
  },
  {
    primary: 'from-blue-600 to-indigo-600',
    secondary: 'from-purple-500 to-violet-500',
    accent: 'from-cyan-500 to-blue-500'
  },
  {
    primary: 'from-orange-600 to-red-600',
    secondary: 'from-yellow-500 to-orange-500',
    accent: 'from-red-500 to-rose-500'
  },
  {
    primary: 'from-violet-600 to-purple-600',
    secondary: 'from-pink-500 to-rose-500',
    accent: 'from-purple-500 to-indigo-500'
  }
];

const DynamicTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTheme((prev) => (prev + 1) % themes.length);
    }, 300000); // Change theme every 5 minutes

    // Show theme change notification after 4.5 minutes
    const notificationTimer = setTimeout(() => {
      setIsVisible(true);
    }, 270000);

    return () => {
      clearInterval(interval);
      clearTimeout(notificationTimer);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const theme = themes[currentTheme];
    
    root.style.setProperty('--primary-gradient', theme.primary);
    root.style.setProperty('--secondary-gradient', theme.secondary);
    root.style.setProperty('--accent-gradient', theme.accent);
  }, [currentTheme]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20"
        >
          <p className="text-white text-sm">
            Theme updated for a fresh experience
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DynamicTheme; 