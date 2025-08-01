import { useState, useEffect } from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaXmark } from 'react-icons/fa6';

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
          className={`max-w-[1320px] mx-auto px-3.5 flex items-center justify-between transition-shadow duration-300 py-2.5 bg-white ${isScrolled ? 'shadow-lg rounded-b-md' : ''}`}>
          <RouterLink to="/" className="flex items-center gap-2">
            <img className="w-24 xl:w-28" src="/images/nova-logo.webp" alt="logo" />
          </RouterLink>
          {/* Mobile NavBar */}
          <ul
            className={`fixed bottom-0 right-0 top-0 z-[9999] w-2/3 bg-accent-light flex flex-col items-center justify-center gap-8
          font-Poppins-Medium text-[17px] text-dark opacity-0 translate-x-full duration-300 ease-out
          sm:text-[20px] sm:w-1/3
          xl:hidden
          ${isMobileMenuOpen ? 'mobile-nav__list--open' : ''}`}>
            <FaXmark className="mobile-nav__ham-icon" onClick={toggleMobileMenu} />
            <li className="mobile-nav__list-item">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'text-accent' : '')}>
                Home
              </NavLink>
            </li>
            <li className="mobile-nav__list-item">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-90}
                className="mobile-nav__link"
                activeClass="text-accent">
                About
              </ScrollLink>
            </li>
            <li className="mobile-nav__list-item">
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                offset={-90}
                className="mobile-nav__link"
                activeClass="text-accent">
                Services
              </ScrollLink>
            </li>
            <li className="mobile-nav__list-item">
              <ScrollLink
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-90}
                className="mobile-nav__link"
                activeClass="text-accent">
                Portfolio
              </ScrollLink>
            </li>
            <li className="mobile-nav__list-item">
              <ScrollLink
                to="team"
                smooth={true}
                duration={500}
                offset={-90}
                className="mobile-nav__link"
                activeClass="text-accent">
                Team
              </ScrollLink>
            </li>

            <li className="mobile-nav__list-item">
              <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-accent' : '')}>
                Blog
              </NavLink>
            </li>
            <li className="mobile-nav__list-item">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-90}
                className="mobile-nav__link"
                activeClass="text-accent">
                Contact
              </ScrollLink>
            </li>
          </ul>
          <div
            onClick={toggleMobileMenu}
            className={`top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-[9998] xl:hidden ${isMobileMenuOpen ? 'fixed' : ''}`}></div>
          {/* Pc NavBar */}
          <ul
            className="hidden 
        xl:flex justify-center items-center gap-8 text-heading font-Poppins-SemiBold
        2xl:gap-10
        ">
            <li className="hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'text-accent' : '')}>
                Home
              </NavLink>
            </li>
            <li className="hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-90}
                className="nav__link"
                activeClass="text-accent"
                spy={true}>
                About
              </ScrollLink>
            </li>
            <li className="hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out">
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                offset={-90}
                className="nav__link"
                activeClass="text-accent"
                spy={true}>
                Services
              </ScrollLink>
            </li>
            <li className="hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out">
              <ScrollLink
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-90}
                className="nav__link"
                activeClass="text-accent"
                spy={true}>
                Portfolio
              </ScrollLink>
            </li>
            <li className="hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out">
              <ScrollLink
                to="team"
                smooth={true}
                duration={500}
                offset={-90}
                className="nav__link"
                activeClass="text-accent"
                spy={true}>
                Team
              </ScrollLink>
            </li>
            <li className="hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out">
              <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-accent' : '')}>
                Blog
              </NavLink>
            </li>
            <li className="hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-90}
                className="nav__link"
                activeClass="text-accent"
                spy={true}>
                Contact
              </ScrollLink>
            </li>
          </ul>
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
