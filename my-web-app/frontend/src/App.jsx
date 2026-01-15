import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Info from './pages/Info';
import Header from './components/Layout/Header'
import MenuOverlay from './components/Layout/MenuOverlay'

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Always show at the very top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // 2. Hide if scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }
      // 3. Show if scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        console.log("Measured Height:", height); // Debugging
        setHeaderHeight(height);
      }
    };

    // 1. Measure after a tiny delay to allow SVG to paint
    const timeoutId = setTimeout(updateHeight, 50);

    // 2. Also measure on window resize
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      clearTimeout(timeoutId);
    };
  }, [isVisible]); // Re-measure if visibility changes to ensure accuracy

  return (

    <Router>

      <Header ref={headerRef} navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} isVisible={isVisible} />

      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} topOffset={headerHeight} />
      <main style={{ display: navbarOpen ? 'none' : 'block', paddingTop: `${headerHeight}px` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </main>
    </Router>

  );
}

export default App;