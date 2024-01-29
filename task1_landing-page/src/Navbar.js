import React, { useState } from 'react';
import userIcon from './images/user.svg';
import cartIcon from './images/cart.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuClasses = `md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`;

  return (
    <nav className="bg-[#3B5D50] px-20 flex items-center justify-between">
      <a href="app.js" className="text-white text-lg font-bold">
        Furni<span className="text-gray-300">.</span>
      </a>

      <button
        className="md:hidden focus:outline-none"
        type="button"
        aria-label="Toggle navigation"
        onClick={toggleMobileMenu}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className={mobileMenuClasses}>
        <ul className="flex flex-col items-center">
          <NavItem href="app.js">Home</NavItem>
          <NavItem href="app.js">Shop</NavItem>
          <NavItem href="app.js">About us</NavItem>
          <NavItem href="app.js">Services</NavItem>
          <NavItem href="app.js">Blog</NavItem>
          <NavItem href="app.js">Contact us</NavItem>
        </ul>
      </div>

      <div className="hidden md:flex items-center">
        <DesktopNavLinks />

        <ul className="flex items-center space-x-4">
          <NavItem href="#">
            <img src={userIcon} alt="User" />
          </NavItem>
          <NavItem href="cart.html">
            <img src={cartIcon} alt="Cart" />
          </NavItem>
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ href, children }) => (
  <li className="nav-item">
    <a href={href} className="text-white hover:text-gray-300 px-4 py-2">
      {children}
    </a>
  </li>
);

const DesktopNavLinks = () => (
  <ul className="flex">
    <NavItem href="app.js">Home</NavItem>
    <NavItem href="app.js">Shop</NavItem>
    <NavItem href="app.js">About us</NavItem>
    <NavItem href="app.js">Services</NavItem>
    <NavItem href="app.js">Blog</NavItem>
    <NavItem href="app.js">Contact us</NavItem>
  </ul>
);

export default Navbar;
