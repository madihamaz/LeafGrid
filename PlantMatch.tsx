import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';
import { plantMatchCards } from '../data/plants';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

export function PlantMatch() {
  const [likedPlants, setLikedPlants] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleLike = () => {
    if (currentIndex < plantMatchCards.length) {
      setLikedPlants([...likedPlants, plantMatchCards[currentIndex].name]);
      setCurrentIndex(currentIndex + 1);
      if (likedPlants.length === 2) {
        setShowResults(true);
      }
    }
  };

  const handleSkip = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Find Your Perfect Plants</h2>
        
        {!showResults && currentIndex < plantMatchCards.length ? (
          <Card className="overflow-hidden">
            <img 
              src={plantMatchCards[currentIndex].image}
              alt={plantMatchCards[currentIndex].name}
              className="w-full h-64 object-cover -mt-6 -mx-6 mb-6"
            />
            <h3 className="text-xl font-semibold mb-2">{plantMatchCards[currentIndex].name}</h3>
            <p className="text-gray-600 mb-6">{plantMatchCards[currentIndex].description}</p>
            
            <div className="flex justify-center space-x-4">
              <Button variant="secondary" onClick={handleSkip} className="p-4 rounded-full">
                <X className="h-6 w-6" />
              </Button>
              <Button variant="secondary" onClick={handleLike} className="p-4 rounded-full">
                <Heart className="h-6 w-6 text-green-600" />
              </Button>
            </div>
          </Card>
        ) : (
          <Card>
            <h3 className="text-2xl font-semibold mb-4">Your Perfect Combination!</h3>
            <div className="space-y-4">
              {likedPlants.map(plant => (
                <div key={plant} className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-green-600" />
                  <span>{plant}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button fullWidth>
                Buy Your Starter Kit Now!
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}