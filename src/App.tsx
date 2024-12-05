import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="transition-colors">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;