import React, { useState, useEffect } from 'react';
import Visualizer from './components/Visualizer';
import Controls from './components/Controls';
import Header from './components/Header';
import { fetchSortingSteps } from './services/sortingService';

function App() {
  const [bars, setBars] = useState([]);
  const [steps, setSteps] = useState([]);  // Store sorting steps
  const [currentStep, setCurrentStep] = useState(0);  // Current step in sorting
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(500);  // Speed of sorting (ms)
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    shuffleArray();
  }, []);

  const shuffleArray = () => {
    const shuffled = Array.from({ length: 40 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
    setBars(shuffled);
    setSteps([]);
    setCurrentStep(0);
    setSorted(false);
  };

  const sortArray = async (algorithm) => {
    if (isSorting) return;

    setIsSorting(true);
    setCurrentStep(0);

    const steps = await fetchSortingSteps(bars, algorithm);
    setSteps(steps);
    setIsSorting(true);
  };

  useEffect(() => {
    if (isSorting && steps.length > 0 && currentStep < steps.length) {
      const timeout = setTimeout(() => {
        setBars(steps[currentStep].array);
        setCurrentStep((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentStep === steps.length) {
      setIsSorting(false);
    }
  }, [isSorting, steps, currentStep, speed]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white flex flex-col items-center p-6">
      <Header />
      <Controls 
        onShuffle={shuffleArray} 
        onSort={sortArray} 
        isSorting={isSorting} 
        sorted={sorted} 
        setSpeed={setSpeed} 
      />
      <Visualizer bars={bars} />
    </div>
  );
}

export default App;
