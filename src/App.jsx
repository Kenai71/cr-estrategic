import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Segments from './components/Segments';
import Values from './components/Values';
import Quote from './components/Quote';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Segments />
        <Values />
        <Quote id="orcamento-final" />
      </main>
      <Footer />
      <WhatsAppBtn />
    </div>
  );
}

export default App;
