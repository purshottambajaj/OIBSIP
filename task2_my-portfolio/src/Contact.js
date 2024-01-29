// Contact.js
import React  from 'react';

const Contact = () => {

  return (
    <div className=" text-center bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-white py-16">
      <h2 className="text-4xl font-bold mb-8">Contact Us</h2>

      <p className="text-lg mb-4">
        Feel free to connect with us on GitHub, LinkedIn, or use the form below to send us a message.
      </p>

      <form className="max-w-md mx-auto" >
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-white mb-2">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            required
          ></textarea>
        </div>

        <button type="submit" className="bg-[#5959d5] text-white p-2 rounded-full hover:bg-[#8c8cff] transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
