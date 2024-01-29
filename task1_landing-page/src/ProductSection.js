import React from 'react';
import product1 from "./images/product-1.png";
import product2 from "./images/product-2.png";
import product3 from "./images/product-3.png";

const ProductSection = () => {
  return (
    <section className="container mx-auto px-4 pt-16">
      <div className="flex flex-col md:flex-row items-start justify-between mb-16">
        <div className="w-full md:w-4/12">
          <h2 className="text-4xl font-bold mb-4">Crafted with excellent material.</h2>
          <p className="mb-8">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <a href="shop.html" className="bg-black text-white py-2 px-4 text-xl rounded-3xl">Explore</a>
        </div>
        <div className="md:w-8/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProductCard
            image={product1}
            title="Nordic Chair"
            price="$50.00"
          />
          <ProductCard
            image={product2}
            title="Kruzo Aero Chair"
            price="$78.00"
          />
          <ProductCard
            image={product3}
            title="Ergonomic Chair"
            price="$43.00"
          />
        </div>
      </div>
    </section>
  );
};

// Product card component
const ProductCard = ({ image, title, price }) => {
  return (
    <div className="group">
      <img src={image} alt={title} className="w-full rounded-md" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <strong className="block text-2xl font-semibold">{price}</strong>
        <span className="absolute top-0 right-0 m-4">
          <img src="images/cross.svg" alt="Cross" className="w-6 h-6" />
        </span>
      </div>
    </div>
  );
};

export default ProductSection;
