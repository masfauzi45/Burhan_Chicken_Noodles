import React from 'react';

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
  icon: React.ReactNode;
}

export function MenuItem({ name, price, description, icon }: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-xl font-bold text-green-600">{price}</p>
    </div>
  );
}