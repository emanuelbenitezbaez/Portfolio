import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  CommandLineIcon,
  CircleStackIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const { theme } = useTheme();
  const { translations: t } = useLanguage();

  const services = [
    {
      title: t.services.apiDev.title,
      description: t.services.apiDev.description,
      icon: CommandLineIcon
    },
    {
      title: t.services.database.title,
      description: t.services.database.description,
      icon: CircleStackIcon
    },
    {
      title: t.services.serverless.title,
      description: t.services.serverless.description,
      icon: CloudIcon
    }
  ];

  return (
    <section 
      id="services" 
      className="min-h-screen py-20 transition-colors"
      style={{ backgroundColor: theme.background }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12" style={{ color: theme.text }}>
          {t.services.title} <span style={{ color: theme.primary }}>{t.services.skills}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg p-6 transition-colors"
              style={{ backgroundColor: theme.secondaryBg }}
            >
              <service.icon 
                className="h-16 w-16 mb-4"
                style={{ color: theme.primary }}
              />
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: theme.text }}
              >
                {service.title}
              </h3>
              <p 
                className="mb-6"
                style={{ color: theme.textLight }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;