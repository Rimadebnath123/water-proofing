import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Responsive Navigation */}
      <header className="bg-black text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-20">
        <div className="text-xl font-bold">Eastern Waterproofing</div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/services" className="hover:text-gray-400">Projects</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/expertise" className="hover:text-gray-400">Services</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars className="text-xl" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-black text-white px-6 py-4 space-y-3 z-20">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400">Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400">Projects</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400">About</Link>
          <Link to="/expertise" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400">Services</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400">Contact</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
