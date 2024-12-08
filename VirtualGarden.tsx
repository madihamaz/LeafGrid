import React, { useState, useEffect } from 'react';
import { Droplets, Sun, Beaker, Coins } from 'lucide-react';
import PlantAnimation from './PlantAnimation';


interface PlantState {
  growth: number;
  water: number;
  sunlight: number;
  nutrients: number;
  fruits: number;
}

export default function VirtualGarden() {
  const [coins, setCoins] = useState(0);
  const [plant, setPlant] = useState<PlantState>({
    growth: 0,
    water: 50,
    sunlight: 50,
    nutrients: 50,
    fruits: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setPlant(prev => ({
        ...prev,
        water: Math.max(0, prev.water - 1),
        sunlight: Math.max(0, prev.sunlight - 1),
        nutrients: Math.max(0, prev.nutrients - 1)
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (plant.water > 30 && plant.sunlight > 30 && plant.nutrients > 30) {
      setPlant(prev => ({
        ...prev,
        growth: Math.min(100, prev.growth + 0.5)
      }));
    }
  }, [plant.water, plant.sunlight, plant.nutrients]);

  const addWater = () => {
    setPlant(prev => ({ ...prev, water: Math.min(100, prev.water + 30) }));
  };

  const addSunlight = () => {
    setPlant(prev => ({ ...prev, sunlight: Math.min(100, prev.sunlight + 30) }));
  };

  const addNutrients = () => {
    setPlant(prev => ({ ...prev, nutrients: Math.min(100, prev.nutrients + 30) }));
  };

  const harvestFruit = () => {
    if (plant.growth === 100) {
      setCoins(prev => prev + 1);
      setPlant({
        growth: 0,
        water: 50,
        sunlight: 50,
        nutrients: 50,
        fruits: 0
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Your Virtual Garden</h2>
          <div className="flex items-center space-x-2">
            <Coins className="w-6 h-6 text-yellow-500" />
            <span className="text-xl font-bold">{coins}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex justify-center mb-8">
            <PlantAnimation growth={plant.growth} />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="mb-2">Water: {plant.water}%</div>
              <button
                onClick={addWater}
                className="p-4 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors transform hover:scale-105"
              >
                <Droplets className="w-6 h-6 text-blue-500" />
              </button>
            </div>
            <div className="text-center">
              <div className="mb-2">Sunlight: {plant.sunlight}%</div>
              <button
                onClick={addSunlight}
                className="p-4 bg-yellow-100 rounded-full hover:bg-yellow-200 transition-colors transform hover:scale-105"
              >
                <Sun className="w-6 h-6 text-yellow-500" />
              </button>
            </div>
            <div className="text-center">
              <div className="mb-2">Nutrients: {plant.nutrients}%</div>
              <button
                onClick={addNutrients}
                className="p-4 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors transform hover:scale-105"
              >
                <Beaker className="w-6 h-6 text-purple-500" />
              </button>
            </div>
          </div>

          {plant.growth === 100 && (
            <div className="text-center">
              <button
                onClick={harvestFruit}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105"
              >
                Harvest
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}