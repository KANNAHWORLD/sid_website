import React from 'react';
import Dropdown from './Dropdown';
import { useState } from 'react';

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <a href={items.url}
          onMouseOver={() => setDropdown((prev) => !prev)}>
            {items.title}{' '}
            </a>
          <Dropdown submenus={items.submenu}
            dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;