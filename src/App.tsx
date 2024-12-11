import React from 'react';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { OrderSection } from './components/OrderSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Menu />
      <OrderSection />
      <Footer />
    </div>
  );
}

export default App;