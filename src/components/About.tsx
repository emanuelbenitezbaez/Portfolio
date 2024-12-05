import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  SiSpring, 
  SiMongodb, 
  SiPostgresql,
  SiDocker,
  SiGit,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiAmazonaws
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const About: React.FC = () => {
  const { theme } = useTheme();
  const { translations: t } = useLanguage();

  const technologies = [
    { icon: DiJava, name: 'Java' },
    { icon: SiSpring, name: 'Spring Boot' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: SiMysql, name: 'MySQL' },
    { icon: SiRedis, name: 'Redis' },
    { icon: SiDocker, name: 'Docker' },
    { icon: SiKubernetes, name: 'Kubernetes' },
    { icon: SiGit, name: 'Git' },
    { icon: SiAmazonaws, name: 'AWS' }
  ];

  return (
    <section 
      id="about" 
      className="min-h-screen py-20 transition-colors"
      style={{ backgroundColor: theme.secondaryBg }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8" style={{ color: theme.text }}>
            {t.about.title} <span style={{ color: theme.primary }}>{t.about.me}</span>
          </h2>
          
          <div className="mb-12">
            <h3 className="text-2xl mb-4" style={{ color: theme.textLight }}>
              {t.about.role}
            </h3>
            <p className="text-lg mb-6" style={{ color: theme.textLight }}>
              {t.about.description}
            </p>
            
            <div className="space-y-4 mb-12" style={{ color: theme.textLight }}>
              <p className="flex items-center">
                <span className="mr-2">🎓</span> {t.about.education}
              </p>
              <p className="flex items-center">
                <span className="mr-2">📝</span> {t.about.certification}
              </p>
              <p className="flex items-center">
                <span className="mr-2">💡</span> {t.about.learning}
              </p>
              <p className="flex items-center">
                <span className="mr-2">🤝</span> {t.about.teamwork}
              </p>
            </div>
          </div>

          <div>
            <h3 
              className="text-2xl font-bold mb-6"
              style={{ color: theme.text }}
            >
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                  style={{ backgroundColor: theme.background }}
                >
                  <tech.icon 
                    className="w-12 h-12 mb-2"
                    style={{ color: theme.primary }}
                  />
                  <span 
                    className="text-sm text-center"
                    style={{ color: theme.textLight }}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;