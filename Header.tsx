import React from 'react';
import { Leaf, Grid } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-green-600" />
          <Grid className="h-8 w-8 text-green-600" />
          <span className="text-2xl font-bold text-gray-900">LeafGrid</span>
        </div>
        <div className="flex space-x-6">
          <a href="#virtual-garden" className="text-gray-700 hover:text-green-600">Virtual Garden</a>
          <a href="#plant-match" className="text-gray-700 hover:text-green-600">Plant Match</a>
          <a href="#shop" className="text-gray-700 hover:text-green-600">Shop</a>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Join Waitlist
          </button>
        </div>
      </nav>
    </header>
  );
}