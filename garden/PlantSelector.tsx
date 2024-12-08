import React from 'react';
import { Plant } from '../../types/plants';
import { Button } from '../ui/Button';

interface PlantSelectorProps {
  plants: Plant[];
  onSelect: (plant: Plant) => void;
}

export function PlantSelector({ plants, onSelect }: PlantSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {plants.map(plant => (
        <Button
          key={plant.name}
          variant="secondary"
          onClick={() => onSelect(plant)}
          className="p-4 border hover:border-green-500"
        >
          {plant.name}
        </Button>
      ))}
    </div>
  );
}