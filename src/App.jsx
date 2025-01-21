import React from 'react';
import './index.css'
import Navbar from './components/Navbar';
import HeroSection from './components/homepage/HeroSection';
import Location from './components/homepage/Location';
import Testimonials from './components/homepage/Testimonials';
import H_Services from './components/homepage/H_Services';



function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Testimonials />
      <H_Services />
      <Location />
      
    </div>
  );
}

export default App;
