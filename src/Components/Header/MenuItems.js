import React from 'react';
import Dropdown from './Dropdown';
import { useState } from 'react';

// Paths that should use traditional routing
const TRADITIONAL_ROUTES = [
  '/Resources/360PiazzaDatabase',
  // Add blog paths here
];

const MenuItems = ({ items, setCurrentPage, currentPage }) => {
  const [dropdown, setDropdown] = useState(false);
  
  const handleClick = (e) => {
    e.preventDefault();
    
    // Check if this is a path that should use traditional routing
    if (TRADITIONAL_ROUTES.some(route => items.url.startsWith(route))) {
      window.location.href = items.url;
      return;
    }
    
    setCurrentPage(items.url);
    if (dropdown) {
      setDropdown(false);
    }
  };
  
  const isActive = currentPage === items.url;
  
  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <a 
            href={items.url}
            onClick={handleClick}
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            className={isActive ? 'active' : ''}
          >
            {items.title}{' '}
          </a>
          <Dropdown 
            submenus={items.submenu}
            dropdown={dropdown}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <a 
          href={items.url} 
          onClick={handleClick}
          className={isActive ? 'active' : ''}
        >
          {items.title}
        </a>
      )}
    </li>
  );
};

export default MenuItems;