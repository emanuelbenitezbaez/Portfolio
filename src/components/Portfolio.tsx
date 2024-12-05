import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio: React.FC = () => {
  const { theme } = useTheme();
  const { translations: t } = useLanguage();

  const projects = [
    {
      title: t.portfolio.restApi.title,
      description: t.portfolio.restApi.description,
      image: '/project-api.jpg',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'JUnit', 'Swagger'],
      github: 'https://github.com/username/rest-api',
      live: 'https://api-demo.com'
    },
    {
      title: t.portfolio.microservice.title,
      description: t.portfolio.microservice.description,
      image: '/project-microservice.jpg',
      tech: ['Spring Cloud', 'Docker', 'Kubernetes', 'MongoDB', 'RabbitMQ'],
      github: 'https://github.com/username/microservices',
      live: 'https://microservices-demo.com'
    },
    {
      title: t.portfolio.database.title,
      description: t.portfolio.database.description,
      image: '/project-database.jpg',
      tech: ['Java', 'MySQL', 'Redis', 'Hibernate', 'Spring Data JPA'],
      github: 'https://github.com/username/database-project',
      live: 'https://database-demo.com'
    }
  ];

  return (
    <section 
      id="portfolio" 
      className="min-h-screen py-20 transition-colors"
      style={{ backgroundColor: theme.secondaryBg }}
    >
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl font-bold text-center mb-12"
          style={{ color: theme.text }}
        >
          {t.portfolio.title} <span style={{ color: theme.primary }}>{t.portfolio.projects}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              style={{ backgroundColor: theme.background }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: theme.text }}
                >
                  {project.title}
                </h3>
                <p 
                  className="mb-4"
                  style={{ color: theme.textLight }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-sm rounded"
                      style={{ 
                        backgroundColor: theme.primary + '20',
                        color: theme.primary 
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-colors hover:text-indigo-500"
                    style={{ color: theme.textLight }}
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-colors hover:text-indigo-500"
                    style={{ color: theme.textLight }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;