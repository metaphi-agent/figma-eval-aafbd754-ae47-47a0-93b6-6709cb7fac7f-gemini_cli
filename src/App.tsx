import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import NewArrivals from './components/NewArrivals';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Brands />
      <NewArrivals />
      
      {/* Simple Footer */}
      <footer className="bg-black text-white text-center py-4 mt-12">
        <p className="font-roboto text-sm text-gray-400">www.nickelfox.com</p>
      </footer>
    </div>
  );
}

export default App;