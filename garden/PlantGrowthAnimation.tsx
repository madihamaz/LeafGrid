import React from 'react';

interface PlantGrowthAnimationProps {
  growth: number;
}

export function PlantGrowthAnimation({ growth }: PlantGrowthAnimationProps) {
  return (
    <div className="mb-8">
      <div className="relative w-48 h-48 mx-auto">
        <div 
          className="absolute bottom-0 w-full bg-green-500 transition-all duration-1000 rounded-t-full"
          style={{ height: `${growth}%` }}
        />
      </div>
      <p className="mt-4">Growth: {growth}%</p>
    </div>
  );
}