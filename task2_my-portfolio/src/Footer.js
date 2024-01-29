import React from 'react';
import { BiLogoGithub ,BiLogoLinkedinSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-white py-16">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
           <a href="https://github.com/purshottambajaj" className="hover:text-gray-300 transition duration-300">
              <BiLogoGithub className='w-10 h-20'/> </a>
           <a href="https://www.linkedin.com/in/purshottam-bajaj/" className="hover:text-gray-300 transition duration-300">
             <BiLogoLinkedinSquare className='w-10 h-20' /> </a>
               <p className="bg-[#5959d5] p-2 rounded-full focus:outline-none hover:bg-[#8c8cff] transition duration-300">
                  7023130108
              </p>
              
         </div>
       

        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
