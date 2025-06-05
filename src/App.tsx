import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Qualifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;