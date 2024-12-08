import React from 'react';
import { Droplet, Sun, Beaker } from 'lucide-react';
import { Button } from '../ui/Button';

interface GrowthControlsProps {
  onAction: (action: string) => void;
  disabled: boolean;
}

export function GrowthControls({ onAction, disabled }: GrowthControlsProps) {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <Button
        variant="secondary"
        onClick={() => onAction('water')}
        disabled={disabled}
        className="p-3 rounded-full"
      >
        <Droplet className="h-6 w-6 text-blue-600" />
      </Button>
      <Button
        variant="secondary"
        onClick={() => onAction('sun')}
        disabled={disabled}
        className="p-3 rounded-full"
      >
        <Sun className="h-6 w-6 text-yellow-600" />
      </Button>
      <Button
        variant="secondary"
        onClick={() => onAction('nutrients')}
        disabled={disabled}
        className="p-3 rounded-full"
      >
        <Beaker className="h-6 w-6 text-purple-600" />
      </Button>
    </div>
  );
}