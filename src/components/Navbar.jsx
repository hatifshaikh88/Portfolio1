import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { X } from "lucide-react"; // Matches the screenshot style

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-200 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 border-b border-gray-700">
        {/* Logo */}
        <div>
          <a href="#" className="text-3xl font-bold text-white">
            Hatif<span className="text-purple"> Shaikh</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
              >
                <span>{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setShowMenu(true)} className="text-white">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-50 h-93 bg-dark-200 flex flex-col md:hidden">
          {/* Top Bar */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
            <h1 className="text-2xl font-bold text-white">
              <a href="#" className="text-3xl font-bold text-white">
                Hatif<span className="text-purple"> Shaikh</span>
              </a>
            </h1>
            <button
              onClick={() => setShowMenu(false)}
              className="text-white hover:text-purple-400 transition"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col items-center justify-center flex-grow gap-6 hover:bg-purple-500">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setShowMenu(false)}
                className="text-lg text-white hover:text-purple-400 transition"
              >
                {item}
              </a>
            ))}
          </div>
            <hr className="border-t border-purple-600 my-4" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
