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
      <HeroSection />
      <Testimonials />
      <H_Services />
      <Location />
      <Footer />
      
    </div>
  );
}

export default App;
