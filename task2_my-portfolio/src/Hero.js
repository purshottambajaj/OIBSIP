import React from 'react';
import home from './img/home-right.png';

const Hero = () => {
  return (
    <section className="p-28 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-7/12">
            <div className="banner_content">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Hello</h3>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">I am Purshottam Bajaj</h1>
              <h5 className="text-lg md:text-xl lg:text-2xl font-medium">Full Stack Web Developer (MERN)</h5>
              <div className="mt-4 flex items-center space-x-4">
                <button className="bg-[#A3A3ff] py-2 px-4 rounded-full focus:outline-none hover:bg-[#8c8cff] transition duration-300">
                  Hire me
                </button>
                <button className="bg-[#A3A3ff] py-2 px-4 rounded-full focus:outline-none hover:bg-[#8c8cff] transition duration-300">
                  Get CV
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12  mx-auto px-24">
            <div className="home_right_img">
              <img className="w-full " src={home} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
