import React from 'react';

import background from '../../assets/hero-background.png';
import background2 from '../../assets/bg2.png';
import icon1 from "../../assets/1.png";
import icon2 from "../../assets/2.png";
import icon3 from "../../assets/3.png";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-20 min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="relative max-w-7xl mx-auto text-center z-10 h-full flex items-center justify-center">
          <div>
            <h1 className="text-6xl font-peachi font-bold mb-4">
              Welcome to Moza Dent
            </h1>
            <p className="text-lg font-poppins mb-6">
              Your trusted partner for quality dental care.
            </p>
            <button 
              onClick={scrollToNextSection} 
              className="mt-6 bg-[#4DCCBD] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2374AB] transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section id="next-section" className="relative bg-cover bg-center bg-no-repeat py-20 min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${background2})` }}>
        <h1 className="text-6xl font-peachi font-bold mb-28 text-[#074a65]">
          A Small Clinic with Big Care
        </h1>

        <div className="space-y-12 max-w-4xl items-center">
          <div className="flex items-center space-x-4 justify-start">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img src={icon1} alt="Icon 1" className="w-full h-full object-cover" />
            </div>
            <div className='space-y-2'>
              <p className="text-3xl font-peachi font-semibold text-[#074a65]">
                30 Years of Perfecting Smiles
              </p>
              <p className="text-xl font-poppins text-[#074a65]">
                Three Decades of Trust, Care, and Happy Patients
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 justify-start">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img src={icon2} alt="Icon 2" className="w-full h-full object-cover" />
            </div>
            <div className='space-y-2'>
              <p className="text-3xl font-peachi font-semibold text-[#074a65]">
                Smiles for the Whole Family
              </p>
              <p className="text-xl font-poppins text-[#074a65]">
                Gentle Dentistry for All Ages
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 justify-start">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img src={icon3} alt="Icon 3" className="w-full h-full object-cover" />
            </div>
            <div className='space-y-2'>
              <p className="text-3xl font-peachi font-semibold text-[#074a65]">
                Modern Technology, Timeless Care
              </p>
              <p className="text-xl font-poppins text-[#074a65]">
                Advanced Dentistry with a Human Touch
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
