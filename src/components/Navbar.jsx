import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  // Function to monitor scroll position
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  // Effect to attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full flex items-center justify-between py-4 px-6 fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        scroll ? 'bg-black text-white shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="path_to_logo" alt="Logo" className="w-10 h-10" />
        </div>

        {/* Links */}
        <ul className="flex space-x-6">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About Us</li>
          <li className="hover:underline cursor-pointer">Our Services</li>
          <li className="hover:underline cursor-pointer">Team</li>
          <li className="hover:underline cursor-pointer">Projects</li>
          <li className="hover:underline cursor-pointer">Events</li>
          <li className="hover:underline cursor-pointer">What's New?</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
