import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, LogIn, UserPlus, Home, Camera, LogOut, User } from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    setIsLoggingOut(true);

    setTimeout(() => {
      localStorage.removeItem("user");
      setUser(null);
      setIsLoggingOut(false);
      navigate("/login");
    }, 1500); // Simulating a logout delay
  };

  return (
    <nav
      className={`w-full top-0 sticky z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#2C5F34] shadow-lg" : "bg-[#3A7D44]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/src/modified_image_red-removebg-preview.png"
              className="h-14 transition-transform duration-300 group-hover:scale-110"
              alt="Logo"
            />
            <span className="font-bold text-2xl text-white tracking-wide group-hover:text-gray-200 transition-colors">
              Melano Check
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white text-lg font-medium hover:text-gray-200 transition-colors"
            >
              <Home size={20} />
              <span>Home</span>
            </Link>

            {user ? (
              <>
                <div className="flex items-center space-x-2 text-gray-200 text-lg font-medium">
                  <User size={20} />
                  <span>{user.name}</span>
                </div>

                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoggingOut ? (
                    <div className="animate-spin h-5 w-5 border-t-2 border-white rounded-full"></div>
                  ) : (
                    <>
                      <LogOut size={20} />
                      <span>Logout</span>
                    </>
                  )}
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <LogIn size={20} />
                  <span>Login</span>
                </Link>

                <Link
                  to="/signup"
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  <UserPlus size={20} />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none hover:text-gray-200 transition-colors"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-6 items-center bg-[#2C5F34] rounded-b-2xl shadow-lg">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white text-lg font-medium hover:text-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>

            {user ? (
              <>
                <Link
                  to="/detection"
                  className="flex items-center space-x-2 text-white text-lg font-medium hover:text-gray-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Camera size={20} />
                  <span>Detection</span>
                </Link>

                <div className="flex items-center space-x-2 text-gray-200 text-lg font-medium">
                  <User size={20} />
                  <span>{user.name}</span>
                </div>

                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  disabled={isLoggingOut}
                  className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoggingOut ? (
                    <div className="animate-spin h-5 w-5 border-t-2 border-white rounded-full"></div>
                  ) : (
                    <>
                      <LogOut size={20} />
                      <span>Logout</span>
                    </>
                  )}
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn size={20} />
                  <span>Login</span>
                </Link>

                <Link
                  to="/signup"
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <UserPlus size={20} />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
