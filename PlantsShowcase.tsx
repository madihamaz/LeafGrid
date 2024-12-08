import React from 'react';
import { Card } from './ui/Card';
import { Leaf, Droplets, Timer } from 'lucide-react';

interface PlantInfo {
  name: string;
  image: string;
  description: string;
  growthTime: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  nutrients: string;
}

const plants: PlantInfo[] = [
  {
    name: 'Cherry Tomatoes',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=800',
    description: 'Sweet and juicy cherry tomatoes are perfect for beginners. They produce abundant fruits and are highly rewarding to grow.',
    growthTime: '60-80 days',
    difficulty: 'Easy',
    nutrients: 'High in nitrogen during vegetative growth, high in phosphorus and potassium during fruiting'
  },
  {
    name: 'Strawberries',
    image: 'https://images.unsplash.com/photo-1543528176-61b239494933?auto=format&fit=crop&q=80&w=800',
    description: 'Fresh homegrown strawberries are a delight. They thrive in hydroponic systems and can produce year-round.',
    growthTime: '60 days',
    difficulty: 'Medium',
    nutrients: 'Balanced NPK with higher potassium during fruiting'
  },
  {
    name: 'Cucumber',
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&q=80&w=800',
    description: 'Cucumbers grow quickly and produce high yields in hydroponic systems. Perfect for salads and snacking.',
    growthTime: '45-60 days',
    difficulty: 'Medium',
    nutrients: 'High nitrogen during growth, increased potassium during fruiting'
  },
  {
    name: 'Mint',
    image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&q=80&w=800',
    description: 'Mint grows vigorously in hydroponic systems. Perfect for teas, cocktails, and cooking.',
    growthTime: '30 days',
    difficulty: 'Easy',
    nutrients: 'Moderate nutrients with balanced NPK ratio'
  },
  {
    name: 'Coriander',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800',
    description: 'Fresh coriander adds flavor to many dishes. Quick growing and aromatic.',
    growthTime: '30-45 days',
    difficulty: 'Easy',
    nutrients: 'Light to moderate nutrients with balanced NPK'
  },
  {
    name: 'Lettuce',
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&q=80&w=800',
    description: 'Lettuce is one of the easiest plants to grow hydroponically. Quick results and multiple harvests.',
    growthTime: '30-45 days',
    difficulty: 'Easy',
    nutrients: 'Light nutrients with emphasis on nitrogen'
  },
  {
    name: 'Spinach',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800',
    description: 'Nutrient-rich spinach grows well in hydroponic systems. Perfect for salads and cooking.',
    growthTime: '40-50 days',
    difficulty: 'Easy',
    nutrients: 'Moderate nutrients with higher nitrogen'
  }
];

function DifficultyBadge({ difficulty }: { difficulty: PlantInfo['difficulty'] }) {
  const colors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
}

export function PlantsShowcase() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Plants You Can Grow</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <Card key={plant.name} className="overflow-hidden">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-48 object-cover -mt-6 -mx-6 mb-4"
              />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{plant.name}</h3>
                <DifficultyBadge difficulty={plant.difficulty} />
              </div>
              <p className="text-gray-600 mb-4">{plant.description}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Timer className="h-4 w-4 mr-2" />
                  <span>Growth time: {plant.growthTime}</span>
                </div>
                <div className="flex items-center">
                  <Droplets className="h-4 w-4 mr-2" />
                  <span>Nutrients: {plant.nutrients}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}