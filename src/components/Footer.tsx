import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const { translations: t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-8 text-center"
      style={{ backgroundColor: theme.background }}
    >
      <div className="container mx-auto px-4">
        <p className="mb-2" style={{ color: theme.textLight }}>
          © {currentYear} - {t.footer.role}
        </p>
        <p style={{ color: theme.textLight }}>
          {t.footer.createdBy} Emanuel
        </p>
      </div>
    </footer>
  );
};

export default Footer;