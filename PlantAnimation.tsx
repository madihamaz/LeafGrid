import React from 'react';

interface PlantAnimationProps {
  growth: number;
}

export default function PlantAnimation({ growth }: PlantAnimationProps) {
  const stages = [
    { min: 0, max: 20, height: '10%' },
    { min: 21, max: 40, height: '30%' },
    { min: 41, max: 60, height: '50%' },
    { min: 61, max: 80, height: '70%' },
    { min: 81, max: 100, height: '90%' }
  ];

  const currentStage = stages.find(stage => growth >= stage.min && growth <= stage.max) || stages[0];

  return (
    <div className="relative w-48 h-48">
      {/* Soil */}
      <div className="absolute bottom-0 w-full h-8 bg-amber-900 rounded-lg" />
      
      {/* Plant Stem */}
      <div 
        className="absolute bottom-8 left-1/2 w-2 bg-green-500 transition-all duration-1000 rounded-t-full transform -translate-x-1/2"
        style={{ height: currentStage.height }}
      />
      
      {/* Leaves */}
      {growth > 20 && (
        <>
          <div className="absolute bottom-16 left-1/2 w-8 h-4 bg-green-400 rounded-full transform -translate-x-full rotate-45 origin-right transition-all duration-1000" 
               style={{ opacity: growth > 20 ? 1 : 0 }} />
          <div className="absolute bottom-16 left-1/2 w-8 h-4 bg-green-400 rounded-full transform -rotate-45 origin-left transition-all duration-1000"
               style={{ opacity: growth > 20 ? 1 : 0 }} />
        </>
      )}
      
      {/* More Leaves */}
      {growth > 40 && (
        <>
          <div className="absolute bottom-24 left-1/2 w-10 h-5 bg-green-400 rounded-full transform -translate-x-full rotate-45 origin-right transition-all duration-1000"
               style={{ opacity: growth > 40 ? 1 : 0 }} />
          <div className="absolute bottom-24 left-1/2 w-10 h-5 bg-green-400 rounded-full transform -rotate-45 origin-left transition-all duration-1000"
               style={{ opacity: growth > 40 ? 1 : 0 }} />
        </>
      )}
      
      {/* Flower/Fruit */}
      {growth > 80 && (
        <div className="absolute top-4 left-1/2 w-6 h-6 bg-red-400 rounded-full transform -translate-x-1/2 transition-all duration-1000"
             style={{ opacity: growth > 80 ? 1 : 0 }} />
      )}
    </div>
  );
}