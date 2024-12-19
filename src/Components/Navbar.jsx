import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'; // Import useState here

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
    <header className="fixed w-full z-10 shadow-lg text-black backdrop-blur-lg  bg-opacity-30 ">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Buddy</h1>
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-teal-700 bg-opacity-80 backdrop-blur-lg border border-teal-200">
          <ul className="space-y-2 p-4 text-center">
            <li><a href="#" className="block hover:underline">Home</a></li>
            <li><a href="#" className="block hover:underline">About</a></li>
            <li><a href="#" className="block hover:underline">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  </div>
  
  
  );
}

export default Navbar;
