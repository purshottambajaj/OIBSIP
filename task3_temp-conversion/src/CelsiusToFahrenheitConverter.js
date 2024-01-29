import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const CelsiusToFahrenheitConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    const convertedValue = (parseFloat(value) * 9/5) + 32;
    setFahrenheit(convertedValue.toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    const convertedValue = (parseFloat(value) - 32) * 5/9;
    setCelsius(convertedValue.toFixed(2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-orange-500">
      <div className="max-w-md mx-auto p-6 bg-white border rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-teal-600">Temperature Converter</h2>

        <div className="flex flex-col mb-4">
          <label htmlFor="celsius" className="text-lg mb-2 text-teal-800">Celsius</label>
          <input
            type="number"
            id="celsius"
            value={celsius}
            onChange={handleCelsiusChange}
            className="border rounded-md p-3 text-gray-800 bg-teal-100"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="fahrenheit" className="text-lg mb-2 text-teal-800">Fahrenheit</label>
          <input
            type="number"
            id="fahrenheit"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            className="border rounded-md p-3 text-gray-800 bg-teal-100"
          />
        </div>
      </div>
    </div>
  );
};

export default CelsiusToFahrenheitConverter;
