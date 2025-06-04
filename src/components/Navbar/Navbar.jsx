import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';

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
          <Link to='/' className='flex items-center gap-2'>
            <img className='w-24 xl:w-28' src='/images/nova-logo.webp' alt='logo' />
          </Link>
          {/* Mobile NavBar */}
          <ul
            className={`fixed bottom-0 right-0 top-0 z-[9999] w-2/3 bg-accent-light flex flex-col items-center justify-center gap-8
          font-Poppins-Medium text-[17px] text-dark opacity-0 translate-x-full duration-300 ease-out
          sm:text-[20px] sm:w-1/3
          xl:hidden
          ${isMobileMenuOpen ? 'mobile-nav__list--open' : ''}`}>
            <FaXmark className='mobile-nav__ham-icon' onClick={toggleMobileMenu} />
            <li className='mobile-nav__list-item'>
              <NavLink to='/' className={({ isActive }) => (isActive ? 'text-accent' : '')}>
                Home
              </NavLink>
            </li>
            <li className='mobile-nav__list-item'>
              <a href='#' className='mobile-nav__link'>
                About
              </a>
            </li>
            <li className='mobile-nav__list-item'>
              <a href='#' className='mobile-nav__link'>
                Services
              </a>
            </li>
            <li className='mobile-nav__list-item'>
              <a href='#' className='mobile-nav__link'>
                Portfolio
              </a>
            </li>
            <li className='mobile-nav__list-item'>
              <a href='#' className='mobile-nav__link'>
                Team
              </a>
            </li>

            <li className='mobile-nav__list-item'>
              <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-accent' : '')}>
                Blog
              </NavLink>
            </li>
            <li className='mobile-nav__list-item'>
              <a href='#' className='mobile-nav__link'>
                Contact
              </a>
            </li>
          </ul>
          <div
            onClick={toggleMobileMenu}
            className={`top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-[9998] xl:hidden ${isMobileMenuOpen ? 'fixed' : ''}`}></div>
          {/* Pc NavBar */}
          <ul
            className='hidden 
        xl:flex justify-center items-center gap-8 text-heading font-Poppins-SemiBold
        2xl:gap-10
        '>
            <li className='hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out'>
              <NavLink to='/' className={({ isActive }) => (isActive ? 'text-accent' : '')}>
                Home
              </NavLink>
            </li>
            <li className='hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out'>
              <a href='#' className='nav__link'>
                About
              </a>
            </li>
            <li className='hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out'>
              <a href='#' className='nav__link'>
                Services
              </a>
            </li>
            <li className='hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out'>
              <a href='#' className='nav__link'>
                Portfolio
              </a>
            </li>
            <li className='hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out'>
              <a href='#' className='nav__link'>
                Team
              </a>
            </li>
            <li className='hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out'>
              <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-accent' : '')}>
                Blog
              </NavLink>
            </li>
            <li className='hover:text-accent hover:cursor-pointer transition-all duration-300 ease-out'>
              <a href='#' className='nav__link'>
                Contact
              </a>
            </li>
          </ul>
          <div className='flex items-center gap-3'>
            <a href='#' className='primary__btn'>
              Get Started
            </a>
            <div>
              <FaBars className='text-2xl text-accent inline-block xl:hidden' onClick={toggleMobileMenu} />
            </div>
          </div>
        </nav>
      </div>
      {isScrolled && <div style={{ height: '72px' }}></div>}
    </>
  );
}

export default Navbar;
