import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Header.css';

const Header = ({ setCurrentPage, currentPage }) => {
  const [isOnDarkSection, setIsOnDarkSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.page-section');
      const scrollPosition = window.scrollY + (window.innerHeight / 2);

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Check if the current section has a dark background
          const isDark = section.style.backgroundColor === '#000000' || 
                        window.getComputedStyle(section).backgroundColor === 'rgb(0, 0, 0)';
          setIsOnDarkSection(isDark);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setCurrentPage('/');
  };

  return (
    <header className={isOnDarkSection ? 'header-dark' : 'header-light'}>
      <div className="nav-area">
        <div className="logo-area">
          <a href="/" onClick={handleLogoClick} className="name">Sid Bansal</a>
          <div className="role">Software Engineer @ Capital One</div>
        </div>
        <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </header>
  );
};

export default Header;