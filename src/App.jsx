import React from 'react';
import './index.css'
import Navbar from './components/Navbar';
import HeroSection from './components/homepage/HeroSection';
import Location from './components/homepage/Location';
import Testimonials from './components/homepage/Testimonials';
import H_Services from './components/homepage/H_Services';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="services">
        <H_Services />
      </div>
      <div id="location">
        <Location />
      </div>
      <Footer id="contact" />
    </div>
  );
}

export default App;
