import React from 'react';

const Controls = ({ onShuffle, onSort, isSorting, sorted, setSpeed }) => {
  const handleSort = (algorithm) => {
    onSort(algorithm);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-6">
      <button
        onClick={onShuffle}
        className={`bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-300 ${isSorting ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isSorting}
      >
        {sorted ? 'Shuffle Again' : 'Shuffle Array'}
      </button>
      <button
        onClick={() => handleSort('quick_sort')}
        className={`bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300 ${isSorting || sorted ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isSorting || sorted}
      >
        Quick Sort
      </button>
      <button
        onClick={() => handleSort('bubble_sort')}
        className={`bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-300 ${isSorting || sorted ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isSorting || sorted}
      >
        Bubble Sort
      </button>
      <div className="flex items-center gap-2">
        <label htmlFor="speed" className="text-white font-semibold">Speed:</label>
        <input
          type="range"
          id="speed"
          min="50"
          max="2000"
          defaultValue={500}
          onChange={(e) => setSpeed(e.target.value)}
          className="slider"
        />
      </div>
    </div>
  );
};

export default Controls;
