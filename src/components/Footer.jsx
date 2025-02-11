import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import backgroundF from '../assets/bg-footer.png'

const Footer = () => {
  return (
    <footer className="bg-[#e3eff0] py-16 px-8 sm:px-16 lg:px-32 bg-cover"
    style={{ backgroundImage: `url(${backgroundF})` }}>
      <h1 className="text-4xl font-peachi font-semibold text-left mb-16 text-[#074a65]">
        Moza Dent
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h1 className="text-2xl font-peachi font-semibold mb-5 text-[#074a65]">
            Questions?
          </h1>
          <p className="font-poppins text-[#074a65]">+355 682022778</p>
          <p className="font-poppins text-[#074a65]">mozamusaj@gmail.com</p>
        </div>

        <div>
          <h1 className="text-2xl font-peachi font-semibold mb-5 text-[#074a65]">
            Navigation
          </h1>
          <ul className="font-poppins text-[#074a65] space-y-2">
            <li className="hover:text-[#4DCCBD] cursor-pointer transition">About</li>
            <li className="hover:text-[#4DCCBD] cursor-pointer transition">Services</li>
            <li className="hover:text-[#4DCCBD] cursor-pointer transition">Pricing</li>
            <li className="hover:text-[#4DCCBD] cursor-pointer transition">Contact</li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-peachi font-semibold mb-5 text-[#074a65]">
            Follow Us
          </h1>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#074a65] hover:text-[#4DCCBD] transition text-2xl">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#074a65] hover:text-[#4DCCBD] transition text-2xl">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#074a65] hover:text-[#4DCCBD] transition text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <p className='mt-20 text-right'>© 2025</p>
    </footer>
  );
};

export default Footer;
