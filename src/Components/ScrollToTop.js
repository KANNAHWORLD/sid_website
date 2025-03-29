import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component will scroll the window up on every navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]); // Triggered when pathname changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;
