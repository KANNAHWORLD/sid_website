import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
          SB
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;