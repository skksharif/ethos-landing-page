import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <motion.button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'en' 
            ? 'bg-yellow-400 text-maroon-800 shadow-md' 
            : 'text-gray-600 hover:text-maroon-800'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={language === 'en' ? { 
          boxShadow: "0 4px 12px rgba(251, 191, 36, 0.3)" 
        } : {}}
        transition={{ type: "spring", stiffness: 300 }}
      >
        🇬🇧 EN
      </motion.button>
      
      <motion.div 
        className="w-px h-4 bg-gray-300"
        animate={{ scaleY: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.button
        onClick={() => setLanguage('te')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'te' 
            ? 'bg-yellow-400 text-maroon-800 shadow-md' 
            : 'text-gray-600 hover:text-maroon-800'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={language === 'te' ? { 
          boxShadow: "0 4px 12px rgba(251, 191, 36, 0.3)" 
        } : {}}
        transition={{ type: "spring", stiffness: 300 }}
      >
        తె
      </motion.button>
    </div>
  );
};

export default LanguageSwitcher;