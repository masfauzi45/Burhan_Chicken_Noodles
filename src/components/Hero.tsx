import React from 'react';
import { MapPin, Clock } from 'lucide-react';

export function Hero() {
  return (
    <div 
      className="relative h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Burhan Chicken Noodle</h1>
            <p className="text-xl mb-8">Authentic taste of traditional chicken noodles with a modern twist</p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>10:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}