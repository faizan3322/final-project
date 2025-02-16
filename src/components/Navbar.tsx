import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#3A7D44] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src='/src/modified_image_red-removebg-preview.png' className="h-12" />
            <span className="font-bold text-xl text-gray-300">Melano Check</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="bg-white text-[#384b3d] px-4 py-2 rounded-md hover:bg-[#3F4F44] hover:text-white hover:border-2 hover:border-white">
              Home
            </Link>
            {user ? (
              <>
                <Link to="/detection" className="text-white hover:text-gray-300">Detection</Link>
                <button
                  onClick={logout}
                  className="bg-white text-[#384b3d] px-4 py-2 rounded-md hover:bg-[#3F4F44] hover:text-white hover:border-2 hover:border-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="bg-white text-[#384b3d] px-4 py-2 rounded-md hover:bg-[#3F4F44] hover:text-white hover:border-2 hover:border-white">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-white text-[#384b3d] px-4 py-2 rounded-md hover:bg-[#3F4F44] hover:text-white hover:border-2 hover:border-white"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4 bg-[#3A7D44]">
            <Link to="/" className="text-white text-center">Home</Link>
            {user ? (
              <>
                <Link to="/detection" className="text-white text-center">Detection</Link>
                <button onClick={logout} className="text-white text-center">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white text-center">Login</Link>
                <Link to="/signup" className="text-white text-center">Sign Up</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
