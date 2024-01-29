import React from 'react';
import envelopeImage from './images/envelope-outline.svg';
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section bg-[#3B5D50] text-white py-12">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                <span className="me-2">
                  <img src={envelopeImage} alt="Envelope" className="w-6" />
                </span>
                Subscribe to Newsletter
              </h3>

              <form className="flex flex-col md:flex-row items-center md:space-x-2">
                <input
                  type="text"
                  className="mb-2 md:mb-0 px-4 py-2 bg-[#3B5D50] text-white rounded focus:outline-none placeholder-gray-500"
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  className="mb-2 md:mb-0 px-4 py-2 bg-[#3B5D50] text-white rounded focus:outline-none placeholder-gray-500"
                  placeholder="Enter your email"
                />
                <button className="border-t-zinc-900">
                  <FaPaperPlane/>
                </button>
              </form>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-8">
              <div className="footer-logo-wrap mb-4">
                <a href="app.js" className="text-white footer-logo text-2xl md:text-3xl lg:text-4xl font-bold">
                  Furni.
                </a>
              </div>
              <p className="mb-4">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
                Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                Pellentesque habitant
              </p>
            </div>
          </div>
        </div>

      
      </div>
    </footer>
  );
};

export default Footer;
