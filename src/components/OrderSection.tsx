import React from 'react';
import { ShoppingBag } from 'lucide-react';

const deliveryLinks = [
  {
    name: 'GoFood',
    url: 'https://gofood.co.id/burhan-chicken-noodle',
    bgColor: 'bg-green-500',
    hoverColor: 'hover:bg-green-600'
  },
  {
    name: 'GrabFood',
    url: 'https://food.grab.com/burhan-chicken-noodle',
    bgColor: 'bg-green-600',
    hoverColor: 'hover:bg-green-700'
  },
  {
    name: 'ShopeeFood',
    url: 'https://shopee.co.id/food/burhan-chicken-noodle',
    bgColor: 'bg-orange-500',
    hoverColor: 'hover:bg-orange-600'
  }
];

export function OrderSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Order Now</h2>
        <p className="text-center text-gray-600 mb-8">Available on your favorite delivery platforms</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {deliveryLinks.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${platform.bgColor} ${platform.hoverColor} text-white px-8 py-4 rounded-lg flex items-center transition-colors duration-300`}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Order on {platform.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}