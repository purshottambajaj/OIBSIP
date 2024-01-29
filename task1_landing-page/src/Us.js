import React from 'react';
import truck from './images/truck.svg'
import bag from './images/bag.svg'
import support from './images/support.svg'
import returns from './images/return.svg'
import us from './images/why-choose-us-img.jpg'

const WhyChooseUs = () => {
  return (
    <div className="why-choose-section bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <h2 className="section-title text-4xl mb-4">Why Choose Us</h2>
            <p className="mb-8">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="feature">
                <div className="icon">
                  <img src={truck} alt="Image" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast &amp; Free Shipping</h3>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>

              <div className="feature">
                <div className="icon">
                  <img src={bag} alt="Image" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy to Shop</h3>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>

              <div className="feature">
                <div className="icon">
                  <img src={support} alt="Image" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>

              <div className="feature">
                <div className="icon">
                  <img src={returns} alt="Image" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hassle Free Returns</h3>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="img-wrap">
              <img src={us} alt="Image" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
