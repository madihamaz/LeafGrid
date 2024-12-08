import React from 'react';
import { Button } from '../ui/Button';
import { Plant } from '../../types/plants';

interface HarvestSectionProps {
  isHarvested: boolean;
  selectedPlant: Plant;
  onHarvest: () => void;
  onReset: () => void;
}

export function HarvestSection({ 
  isHarvested, 
  selectedPlant, 
  onHarvest, 
  onReset 
}: HarvestSectionProps) {
  if (!isHarvested) {
    return (
      <Button onClick={onHarvest}>
        Harvest
      </Button>
    );
  }

  return (
    <div className="mt-8">
      <p className="text-xl mb-4">
        Congratulations! You earned {selectedPlant.fruits} coins!
      </p>
      <Button onClick={onReset}>
        Grow Another Plant
      </Button>
    </div>
  );
}