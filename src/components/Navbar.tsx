import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const { translations: t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { key: 'home', label: t.nav.home },
    { key: 'about', label: t.nav.about },
    { key: 'services', label: t.nav.services },
    { key: 'portfolio', label: t.nav.portfolio },
    { key: 'contact', label: t.nav.contact }
  ];

  return (
    <nav 
      className="fixed w-full z-50 py-4 transition-colors"
      style={{ backgroundColor: `${theme.background}CC` }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-bold text-2xl" style={{ color: theme.primary }}>
          Emanuel Benitez Baez
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.key}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer transition-colors hover:text-indigo-500"
                  style={{ color: theme.text }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            style={{ color: theme.text }}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="md:hidden absolute top-full left-0 w-full py-4 shadow-lg transition-colors"
          style={{ backgroundColor: theme.background }}
        >
          <ul className="container mx-auto px-4 space-y-4">
            {menuItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.key}
                  smooth={true}
                  duration={500}
                  className="block cursor-pointer transition-colors hover:text-indigo-500"
                  style={{ color: theme.text }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;