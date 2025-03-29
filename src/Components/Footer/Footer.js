import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="footer-title">Sid Bansal</h3>
          <p>
            Software engineer passionate about AI, distributed systems, and a great cup of coffee.
          </p>
          <div className="social-links">
            <a href="https://github.com/KANNAHWORLD" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/siddharth-bansal-20/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:contact@sidbansal.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="footer-section links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/coffee">Coffee</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h3 className="footer-title">Where am I now?</h3>
          <p>
            <span>Los Angeles, CA</span>
            <span>Soon to Be: Dallas, TX</span>
            <span>I Wish: New York, NY</span>
            
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Sid Bansal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 