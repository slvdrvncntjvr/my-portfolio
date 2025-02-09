import React from 'react';

const Footer: React.FC = () => (
  <footer className="p-4 bg-gray-800 text-white text-center">
    © {new Date().getFullYear()} Your Name
  </footer>
);

export default Footer;