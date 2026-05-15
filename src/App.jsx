import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Segments from './components/Segments';
import Values from './components/Values';
import Quote from './components/Quote';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="app-container">
      <Header onContactClick={openContact} />
      <main>
        <Hero />
        <About />
        <Segments />
        <Values />
        <Quote onContactClick={openContact} />
      </main>
      <Footer />
      <WhatsAppBtn />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}

export default App;
