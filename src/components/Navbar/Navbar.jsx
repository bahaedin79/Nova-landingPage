import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className={isScrolled ? 'fixed top-0 left-0 w-full z-[10000]' : ''}>
        <nav
          className={`max-w-[1320px] mx-auto px-3.5 flex items-center justify-between transition-shadow duration-300 py-2.5 bg-white ${
            isScrolled ? 'shadow-lg rounded-b-md' : ''
          }`}>
          <RouterLink to="/" className="flex items-center gap-2">
            <img className="w-24 xl:w-28" src="/images/nova-logo.webp" alt="logo" />
          </RouterLink>
          <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
          <DesktopMenu />
          <div className="flex items-center gap-3">
            <a href="#" className="primary__btn">
              Get Started
            </a>
            <div>
              <FaBars className="text-2xl text-accent inline-block xl:hidden" onClick={toggleMobileMenu} />
            </div>
          </div>
        </nav>
      </div>
      {isScrolled && <div style={{ height: '72px' }}></div>}
    </>
  );
}

export default Navbar;
