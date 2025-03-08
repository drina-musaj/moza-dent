import React from 'react';
import logo from "../assets/MozaDent-logo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-[#074a65] text-white sticky top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Moza Dent Logo" className="h-16 md:h-20 w-auto" />
        </a>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:space-x-4">
            <li>
              <a href="#home" className="block py-2 px-4 rounded text-lg hover:text-[#4DCCBD] hover:font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="block py-2 px-4 rounded text-lg hover:text-[#4DCCBD] hover:font-semibold">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="block py-2 px-4 rounded text-lg hover:text-[#4DCCBD] hover:font-semibold">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#location" className="block py-2 px-4 rounded text-lg hover:text-[#4DCCBD] hover:font-semibold">
                Location
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-4 rounded text-lg hover:text-[#4DCCBD] hover:font-semibold">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
