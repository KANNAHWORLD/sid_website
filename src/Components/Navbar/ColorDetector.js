import { useEffect, useState } from 'react';

/**
 * Custom hook to detect the background color at the top of the page
 * and determine if the navbar should use light or dark mode
 * @param {number} threshold - Brightness threshold to determine light/dark (0-255)
 * @returns {boolean} - True if the navbar should use dark mode (light text)
 */
export const useTopBackgroundDetector = (threshold = 128) => {
  const [shouldUseDarkMode, setShouldUseDarkMode] = useState(true);
  
  useEffect(() => {
    const checkTopBackgroundColor = () => {
      // Check the background at the top of the page (just below the navbar)
      const navbarHeight = 60; // Adjust this value to match your navbar height
      const y = navbarHeight + 5; // 5px below navbar
      const x = window.innerWidth / 2; // Center of the screen horizontally
      
      try {
        // Create a small, hidden canvas to sample the pixel color
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Draw the current view into the canvas
        context.drawWindow(
          window, 
          window.scrollX, 
          window.scrollY, 
          window.innerWidth, 
          window.innerHeight, 
          'rgb(255, 255, 255)'
        );
        
        // Get the pixel data at the sampling point
        const pixelData = context.getImageData(x, y, 1, 1).data;
        
        // Calculate brightness using a common formula
        const brightness = (0.299 * pixelData[0] + 0.587 * pixelData[1] + 0.114 * pixelData[2]);
        
        // If bright background, use dark text (false), otherwise use light text (true)
        setShouldUseDarkMode(brightness < threshold);
        
        // Clean up
        canvas.remove();
      } catch (error) {
        // Fallback method if drawWindow is not available (most browsers)
        // This is an alternative approach using element detection
        const elements = document.elementsFromPoint(x, y);
        
        // Find the first element with a background color
        for (let element of elements) {
          const bgColor = getComputedStyle(element).backgroundColor;
          
          // Skip transparent backgrounds
          if (bgColor === 'transparent' || bgColor === 'rgba(0, 0, 0, 0)') {
            continue;
          }
          
          // Parse the background color
          let brightness = 255; // Default to light background
          
          if (bgColor.startsWith('rgb')) {
            const rgbValues = bgColor.match(/\d+/g);
            if (rgbValues && rgbValues.length >= 3) {
              brightness = (0.299 * parseInt(rgbValues[0]) + 
                           0.587 * parseInt(rgbValues[1]) + 
                           0.114 * parseInt(rgbValues[2]));
            }
          }
          
          // Determine mode based on brightness
          setShouldUseDarkMode(brightness < threshold);
          break;
        }
      }
    };
    
    // Check immediately and then on scroll
    checkTopBackgroundColor();
    
    window.addEventListener('scroll', checkTopBackgroundColor);
    window.addEventListener('resize', checkTopBackgroundColor);
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', checkTopBackgroundColor);
      window.removeEventListener('resize', checkTopBackgroundColor);
    };
  }, [threshold]);
  
  return shouldUseDarkMode;
};

/**
 * Alternative approach: checks sections to determine navbar color
 * This is more reliable than pixel sampling
 */
export const useTopSectionDetector = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    const checkTopSection = () => {
      const navbarHeight = 60; // Adjust to match navbar height
      const scrollPosition = window.scrollY + navbarHeight;
      
      // Get all page sections that could affect navbar color
      const sections = Array.from(document.querySelectorAll('.page-section, .profile-section, .home-background'));
      
      // Find the section that's currently at the top of the viewport
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = rect.bottom + window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          // Check if this section has a dark background
          const bgColor = getComputedStyle(section).backgroundColor;
          
          // Check for black, dark colors, or sections with dark class
          const isDarkBg = section.classList.contains('posts-section') || 
                           bgColor.includes('0, 0, 0') ||
                           bgColor.includes('17, 17, 17') ||
                           bgColor.includes('25, 25, 25') ||
                           section.classList.contains('home-background');
          
          setIsDarkMode(isDarkBg);
          return;
        }
      }
    };
    
    // Check immediately and then on scroll
    checkTopSection();
    
    window.addEventListener('scroll', checkTopSection);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', checkTopSection);
    };
  }, []);
  
  return isDarkMode;
}; 