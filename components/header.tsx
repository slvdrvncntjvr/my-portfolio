import React from 'react';

const Header: React.FC = () => (
  <header className="flex justify-between p-4 bg-gray-800 text-white">
    <h1 className="text-xl">My Portfolio</h1>
    <nav>
      <a href="#projects" className="px-2">Projects</a>
      <a href="#contact" className="px-2">Contact</a>
    </nav>
  </header>
);

export default Header;