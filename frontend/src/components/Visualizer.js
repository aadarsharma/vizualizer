import React from 'react';

const Visualizer = ({ bars }) => {
  return (
    <div className="flex justify-center items-end h-96 border-4 border-gray-700 bg-gray-800 rounded-lg shadow-xl mx-auto p-4 space-x-1 w-full max-w-4xl">
      {bars.map((bar, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-blue-400 to-blue-600 mx-1 text-center text-white rounded-lg shadow-md"
          style={{ height: `${bar * 8}px`, width: 'calc(100% / 40)' }}
        >
          <span className="block transform rotate-90 -translate-y-1/2 translate-x-full">{bar}</span>
        </div>
      ))}
    </div>
  );
};

export default Visualizer;
