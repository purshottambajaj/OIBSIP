import React from 'react';
import serviceImage1 from './img/s1.png';
import serviceImage2 from './img/s2.png';
import serviceImage3 from './img/s3.png';

const serviceData = [
  { image: serviceImage1, title: 'Wp developing', description: "Creeping for female light years that lesser can't evening heaven isn't bearing tree" },
  { image: serviceImage2, title: 'UI/UX design', description: "Creeping for female light years that lesser can't evening heaven isn't bearing tree" },
  { image: serviceImage3, title: 'Web design', description: "Creeping for female light years that lesser can't evening heaven isn't bearing tree" },
  
];

const Features = () => {
  return (
    <section className="features_area 
    bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-white py-16 mx-auto">
      <div className="container justify-between mx-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Service Offers</h2>
          <p className="text-lg">
            Is give may shall likeness made yielding spirit a itself together created after sea is in
            beast beginning signs open god you're gathering ithe
          </p>
        </div>

        <div className="flex  gap-8 px-1 mt-10
        justify-between">
          {serviceData.map((service, index) => (
            <div key={index} className="justify-items-center">
              <img src={service.image} alt={service.title} className="w-30 h-20 object-cover " />
              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
