import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-8 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center text-white">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 2L2 22h20L12 2zm0 4l6.5 13h-13L12 6z" />
          </svg>
        </div>
        <span className="font-black text-xl tracking-wider">FASHION</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-8 font-medium text-sm tracking-wide">
        <li><a href="#" className="hover:text-gray-600 transition-colors">CATALOGUE</a></li>
        <li><a href="#" className="hover:text-gray-600 transition-colors">FASHION</a></li>
        <li><a href="#" className="hover:text-gray-600 transition-colors">FAVOURITE</a></li>
        <li><a href="#" className="hover:text-gray-600 transition-colors">LIFESTYLE</a></li>
      </ul>

      {/* Sign Up Button */}
      <button className="bg-black text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
        SIGN UP
      </button>
    </nav>
  );
};

export default Navbar;