import React, { useState } from 'react';
import { Plant } from '../types/plants';
import { gardenPlants } from '../data/plants';
import { Card } from './ui/Card';
import { PlantSelector } from './garden/PlantSelector';
import { GrowthControls } from './garden/GrowthControls';
import { PlantGrowthAnimation } from './garden/PlantGrowthAnimation';
import { HarvestSection } from './garden/HarvestSection';
import { RewardsSection } from './garden/RewardsSection';

export function VirtualGarden() {
  const [growth, setGrowth] = useState(0);
  const [coins, setCoins] = useState(0);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [isHarvested, setIsHarvested] = useState(false);

  const handlePlantSelect = (plant: Plant) => {
    setSelectedPlant(plant);
    setGrowth(0);
    setIsHarvested(false);
  };

  const handleAction = (action: string) => {
    if (growth < 100 && selectedPlant && !isHarvested) {
      setGrowth(prev => Math.min(prev + 10, 100));
    }
  };

  const handleHarvest = () => {
    if (growth === 100 && !isHarvested && selectedPlant) {
      setCoins(prev => prev + selectedPlant.fruits);
      setIsHarvested(true);
    }
  };

  const handleReset = () => {
    setSelectedPlant(null);
    setGrowth(0);
    setIsHarvested(false);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Your Virtual Garden</h2>
        
        {!selectedPlant ? (
          <PlantSelector plants={gardenPlants} onSelect={handlePlantSelect} />
        ) : (
          <Card className="text-center">
            <PlantGrowthAnimation growth={growth} />
            <GrowthControls 
              onAction={handleAction}
              disabled={growth === 100 || isHarvested}
            />
            {growth === 100 && (
              <HarvestSection
                isHarvested={isHarvested}
                selectedPlant={selectedPlant}
                onHarvest={handleHarvest}
                onReset={handleReset}
              />
            )}
          </Card>
        )}

        <RewardsSection coins={coins} />
      </div>
    </div>
  );
}