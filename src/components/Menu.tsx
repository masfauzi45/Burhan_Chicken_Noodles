import React from 'react';
import { Bowl, Dumbbell, UtensilsCrossed } from 'lucide-react';
import { MenuItem } from './MenuItem';

const menuItems = [
  {
    name: 'Signature Chicken Noodle',
    price: 'Rp 35.000',
    description: 'Hand-pulled noodles with tender chicken and special broth',
    icon: <Bowl className="w-6 h-6" />
  },
  {
    name: 'Premium Meatballs',
    price: 'Rp 30.000',
    description: 'Juicy beef meatballs in rich savory soup',
    icon: <Dumbbell className="w-6 h-6" />
  },
  {
    name: 'Homemade Dumplings',
    price: 'Rp 25.000',
    description: 'Handcrafted dumplings with minced chicken and vegetables',
    icon: <UtensilsCrossed className="w-6 h-6" />
  }
];

export function Menu() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}