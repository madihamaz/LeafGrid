import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface RewardsSectionProps {
  coins: number;
}

export function RewardsSection({ coins }: RewardsSectionProps) {
  return (
    <div className="mt-8 text-center">
      <p className="text-xl font-semibold">Total Coins: {coins}</p>
      {coins >= 5 && (
        <Card className="mt-4 bg-green-50">
          <p className="text-green-700">You can redeem your coins for discounts!</p>
          <Button className="mt-2">
            Shop Refills (20% OFF)
          </Button>
        </Card>
      )}
    </div>
  );
}