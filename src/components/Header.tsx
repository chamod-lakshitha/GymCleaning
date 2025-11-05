import { useState, useEffect, useRef } from 'react';
import Banner from './Banner';
import Menu from './Navbar';
import Hero from './Hero';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If we are at the top, reset navbar to original state
      if (currentScrollY <= 0) {
        setIsSticky(false);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsSticky(true);
      } else if (
        currentScrollY < lastScrollY &&
        currentScrollY < (navbarRef.current?.offsetTop || 0) + 10
      ) {
        // Scrolling up near top, restore original
        setIsSticky(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* BannerBar */}
      <Banner />
      {/* Navbar */}
      <Menu isSticky={isSticky} navbarRef={navbarRef} />
      {/* Hero */}
      <Hero />
    </>
  );
}
