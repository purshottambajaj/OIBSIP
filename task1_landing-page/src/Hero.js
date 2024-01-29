import React from 'react';
import couch from './images/couch.png';

const Hero= () => {
  return (
    <div className="hero bg-[#3B5D50]">
      <div className="container mx-auto py-10">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="intro-excerpt">
              <h1 className="text-4xl font-bold mb-2 text-white">Modern Interior <span className="d-block">Design Studio</span></h1>
              <p className="mb-4 text-white">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              <p>
                <button className="bg-yellow-400 
              hover:bg-yellow-500 text-black py-2 px-4 rounded-lg" >Shop Now </button>
             <button className="bg-transparent border-solid border-black text-white py-2 px-4 rounded-lg">
               Explore
               </button>
    </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="hero-img-wrap">
              <img src={couch} alt="Couch" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
