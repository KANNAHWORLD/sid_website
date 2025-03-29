import React from "react";
import "./Components.css";

// Paths that should use traditional routing
const TRADITIONAL_ROUTES = [
  '/Resources/360PiazzaDatabase',
  // Add blog paths here
];

const Dropdown = ({ submenus, dropdown, setCurrentPage }) => {
  const handleClick = (e, url) => {
    // Check if this is a path that should use traditional routing
    if (TRADITIONAL_ROUTES.some(route => url.startsWith(route))) {
      // Let the default behavior happen (full page navigation)
      return;
    }
    
    // Otherwise prevent default and use SPA navigation
    e.preventDefault();
    setCurrentPage(url);
  };

  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <a 
            href={submenu.url} 
            onClick={(e) => handleClick(e, submenu.url)}
          >
            {submenu.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;