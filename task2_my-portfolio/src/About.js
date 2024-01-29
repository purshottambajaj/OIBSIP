import React from 'react';
import aboutImage from './img/about-us.png';
import { BiRightArrow } from 'react-icons/bi';

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-white mx-auto"> 
      <div className="container ">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-7/12 px-24">
            <div className="about_img">
              <img className="" src={aboutImage} alt="About Us" />
            </div>
          </div>

          <div className="lg:w-5/12 px-10 py-28 ">
            <div className="text-xl text-left">
              <h2>Let’s  Introduce about myself</h2>
              <p>
              Enthusiastic Software Engineer with demonstrated skills in programming and software development, focusing on application development. 
              <br />Quick learner of new technical concepts, passionate about development, and adept at simplifying complex problems.
              <br />Development: Accomplished in creating apps using React Native and Android, including TODO List and weather forecast applications. and hands on project on website React.
              <br /> Team Collaboration: Detail-oriented team player with strong organizational skills, capable of handling multiple projects simultaneously while ensuring a high degree of accuracy.
              </p>
              <button className=" bg-[#A3A3ff] py-2 px-4 rounded-full focus:outline-none hover:bg-[#8c8cff] transition duration-300 my-5">
                  Hire me
                </button>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
