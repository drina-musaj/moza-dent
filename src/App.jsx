
import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/homepage/HeroSection';
import Location from './components/homepage/Location';
import Testimonials from './components/homepage/Testimonials';
import H_Services from './components/homepage/H_Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="services">
          <H_Services />
        </section>
        <section id="location">
          <Location />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
