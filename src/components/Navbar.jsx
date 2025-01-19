import React from 'react';
import logo from "../assets/MozaDent-logo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-[#074a65] text-white sticky top-0 z-50 ">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Moza Dent Logo" className="h-16 md:h-20 w-auto" />
        </a>

        <button
          type="button"
          data-collapse-toggle="navbar-default"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#2374AB] focus:outline-none focus:ring-2 focus:ring-[#4DCCBD]"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:space-x-4">
            <li>
              <a
                href="#"
                className="block py-2 px-4 rounded text-lg hover:text-[#4DCCBD] hover:font-semibold "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 rounded text-lg  hover:text-[#4DCCBD] hover:font-semibold "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 rounded text-lg  hover:text-[#4DCCBD] hover:font-semibold "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 rounded text-lg  hover:text-[#4DCCBD] hover:font-semibold "
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 rounded text-lg  hover:text-[#4DCCBD] hover:font-semibold "
              >
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
