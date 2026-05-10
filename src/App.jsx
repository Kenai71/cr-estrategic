import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
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
        <Values />
        <Quote />
      </main>
      <Footer />
      <WhatsAppBtn />
    </div>
  );
}

export default App;
