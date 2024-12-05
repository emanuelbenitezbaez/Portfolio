import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const { translations: t } = useLanguage();

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center transition-colors"
      style={{ backgroundColor: theme.background }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-2xl mb-2" style={{ color: theme.textLight }}>
            {t.hero.greeting}
          </h2>
          <h1 className="text-5xl font-bold mb-4" style={{ color: theme.text }}>
            Ema!
          </h1>
          <h3 className="text-2xl mb-6">
            <span style={{ color: theme.text }}>Junior</span>{' '}
            <span style={{ color: theme.primary }}>Backend Developer</span>
          </h3>
          <p className="mb-8 max-w-lg" style={{ color: theme.textLight }}>
            {t.hero.description}
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/emanuelbenitezbaez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors hover:text-indigo-500"
              style={{ color: theme.textLight }}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/emanuel-benitez-baez-26464314a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors hover:text-indigo-500"
              style={{ color: theme.textLight }}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative">
            <div className="w-72 h-72 rounded-full overflow-hidden border-4" style={{ borderColor: theme.primary }}>
              <img
                src="/LinkedIn.jpg"
                alt="Emanuel - Backend Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: `${theme.primary}20` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;