import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useTopSectionDetector } from './ColorDetector';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Use our custom hook that detects the background at the top of the page
    const isDarkMode = useTopSectionDetector();
    
    // Determine navbar class based on the background color
    const navbarClass = isDarkMode ? 'navbar dark-mode' : 'navbar light-mode';
    
    // Remove the About menu item from the links array or navigation options
    // For example, if your Navbar has something like:
    const navLinks = [
        { name: 'Home', path: '/' },
        // Removing the About link below
        // { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
        // ... other links ...
    ];
    
    return (
        <nav className={navbarClass}>
            <div className="navbar-container">
                <div className="navbar-branding">
                    <Link to="/" className="navbar-logo" onClick={closeMenu}>
                        SID BANSAL
                    </Link>
                    <div className="navbar-subtitle">SWE @ Capital One</div>
                </div>
                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="navbar-item" onClick={closeMenu}>Home</Link>
                    <Link to="/projects" className="navbar-item" onClick={closeMenu}>Projects</Link>
                    <Link to="/coffee" className="navbar-item" onClick={closeMenu}>Coffee</Link>
                    <Link to="/contact" className="navbar-item" onClick={closeMenu}>Contact</Link>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 