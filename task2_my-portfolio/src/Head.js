import React, { useState } from 'react';

const Head = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 py-4 md:py-8 px-4 md:px-8">
      <nav className="flex justify-between items-center">
        <div className="text-white font-semibold text-xl md:text-2xl font-poppins">
          Com
        </div>

        <div className="navbar">
          <div className="block md:hidden">
            <button
              aria-label="Toggle navigation"
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex space-x-8 text-white items-center">
              <li className="hover:text-[#A3A3ff] transition duration-300">Home</li>
              <li className="hover:text-[#A3A3ff] transition duration-300">About</li>
              <li className="hover:text-[#A3A3ff] transition duration-300">Services</li>
              <li className="hover:text-[#A3A3ff] transition duration-300">Portfolio</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Head;
