import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';

function Navbar() {
  return (
    <nav id="nav" className="container-fluid">
      <Link to="/" className="nav__logo">
        <img src="/images/logo.png" alt="logo" />
        <h1 className="nav__logo-text">NOVA</h1>
      </Link>
      <ul className="mobile-nav__list">
        <FaXmark className="mobile-nav__ham-icon" />
        <li className="mobile-nav__list-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav__list-item--active' : 'mobile-nav__link')}>
            Home
          </NavLink>
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
        <li className="mobile-nav__list-item">
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'nav__list-item--active' : 'mobile-nav__link')}>
            Blog
          </NavLink>
        </li>
        <li className="mobile-nav__list-item">
          <a href="#" className="mobile-nav__link">
            Contact
          </a>
        </li>
      </ul>
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav__list-item--active' : 'nav__link')}>
            Home
          </NavLink>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">
            Services
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">
            Portfolio
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">
            Team
          </a>
        </li>
        <li className="nav__list-item">
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'nav__list-item--active' : 'nav__link')}>
            Blog
          </NavLink>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div className="nav__right">
        <a href="#" className="nav__cta-btn">
          Get Started
        </a>
        <FaBars className="mobile-nav__ham-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
