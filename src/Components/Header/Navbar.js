import React from 'react';
import { menuItems } from '../PageManager/menuItems';
import MenuItems from './MenuItems';

const Navbar = ({ setCurrentPage, currentPage }) => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return <MenuItems 
            items={menu} 
            key={index} 
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;