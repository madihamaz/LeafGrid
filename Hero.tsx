import React from 'react';
import { Sprout, Droplet, Sun } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Grow More in Less Space
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience the future of indoor gardening with our spiral hydroponic system.
            Maximize your space, minimize your effort.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <Sprout className="h-12 w-12 text-green-600 mb-2" />
              <span className="text-gray-700">Space Efficient</span>
            </div>
            <div className="flex flex-col items-center">
              <Droplet className="h-12 w-12 text-blue-600 mb-2" />
              <span className="text-gray-700">Water Saving</span>
            </div>
            <div className="flex flex-col items-center">
              <Sun className="h-12 w-12 text-yellow-500 mb-2" />
              <span className="text-gray-700">Optimal Growth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}