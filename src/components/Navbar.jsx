import React, { useState } from 'react';
import logo from '../assets/MozaDent-logo.jpg';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#074a65] text-white sticky top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Moza Dent Logo" className="h-16 md:h-20 w-auto" />
        </a>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:block md:w-auto">
          <ul className="flex flex-row space-x-6">
            <li><a href="#home" className="py-2 px-4 hover:text-[#4DCCBD] hover:font-semibold">Home</a></li>
            <li><a href="#services" className="py-2 px-4 hover:text-[#4DCCBD] hover:font-semibold">Services</a></li>
            <li><a href="#testimonials" className="py-2 px-4 hover:text-[#4DCCBD] hover:font-semibold">Testimonials</a></li>
            <li><a href="#location" className="py-2 px-4 hover:text-[#4DCCBD] hover:font-semibold">Location</a></li>
            <li><a href="#contact" className="py-2 px-4 hover:text-[#4DCCBD] hover:font-semibold">Contact</a></li>
          </ul>
        </nav>
        {/* Mobile Navigation */}
        <nav
          className={`fixed top-0 right-0 w-2/3 sm:w-1/2 bg-[#074a65] text-white transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden z-40`}
        >
          <ul className="flex flex-col mt-20 space-y-6 px-6">
            <li><a href="#home" onClick={toggleMenu} className="text-lg hover:text-[#4DCCBD]">Home</a></li>
            <li><a href="#services" onClick={toggleMenu} className="text-lg hover:text-[#4DCCBD]">Services</a></li>
            <li><a href="#testimonials" onClick={toggleMenu} className="text-lg hover:text-[#4DCCBD]">Testimonials</a></li>
            <li><a href="#location" onClick={toggleMenu} className="text-lg hover:text-[#4DCCBD]">Location</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="text-lg hover:text-[#4DCCBD]">Contact</a></li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
