import React from 'react';
import { FaBars } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';

function Navbar() {
  return (
    <nav id="nav" className="cu-container">
      <div className="nav__logo">
        <img src="/images/logo.png" alt="logo" />
        <h1 className="nav__logo-text">NOVA</h1>
      </div>
      <ul className="mobile-nav__list">
        <FaXmark className="mobile-nav__ham-icon" />
        <li className="mobile-nav__list-item">
          <a href="#" className="mobile-nav__link">
            Home
          </a>
        </li>
        <li className="mobile-nav__list-item">
          <a href="#" className="mobile-nav__link">
            About
          </a>
        </li>
        <li className="mobile-nav__list-item">
          <a href="#" className="mobile-nav__link">
            Services
          </a>
        </li>
        <li className="mobile-nav__list-item">
          <a href="#" className="mobile-nav__link">
            Portfolio
          </a>
        </li>
        <li className="mobile-nav__list-item">
          <a href="#" className="mobile-nav__link">
            Team
          </a>
        </li>
      </ul>
      <a href="#" className="nav__cta-btn">
        Get Started
      </a>
      <FaBars className="mobile-nav__ham-icon" />
    </nav>
  );
}

export default Navbar;
