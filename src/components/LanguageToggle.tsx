import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-lg text-sm font-medium transition-colors"
      style={{ 
        backgroundColor: '#4F46E5',
        color: '#FFFFFF'
      }}
    >
      {language.toUpperCase()}
    </button>
  );
};

export default LanguageToggle;