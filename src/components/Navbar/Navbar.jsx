import React from 'react';

function Navbar() {
  return (
    <nav id="nav">
      <div className="nav__logo"></div>
      <ul className="mobile-nav__list">
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
    </nav>
  );
}

export default Navbar;
