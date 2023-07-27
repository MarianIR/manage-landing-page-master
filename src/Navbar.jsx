import { useState } from "react";
import React from "react";
import logo from "/src/images/logo.svg";
import openMenu from "/src/images/icon-hamburger.svg";
import closeMenu from "/src/images/icon-close.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="page-header">
      <img
        src={logo}
        alt="This is the header logo"
        className="logo"
        width={120}
        height={30}
      />
      <button className="menu-btn" onClick={toggleMenu}>
        {isOpen ? (
          <img src={openMenu} alt="Open menu button" className="open-menu" />
        ) : (
          <img src={closeMenu} alt="Close menu button" className="close-menu" />
        )}
      </button>
      {!isOpen && (
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-element">
              <a href="#" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-element">
              <a href="#" className="nav-link">
                Product
              </a>
            </li>
            <li className="nav-element">
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-element">
              <a href="#" className="nav-link">
                Careers
              </a>
            </li>
            <li className="nav-element">
              <a href="#" className="nav-link">
                Community
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* {!isOpen && (
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-element">
              <a href="#" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-element">
              <a href="#" className="nav-link">
                Product
              </a>
            </li>
            <li className="nav-element">
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-element">
              <a href="#" className="nav-link">
                Careers
              </a>
            </li>
            <li className="nav-element">
              <a href="#" className="nav-link">
                Community
              </a>
            </li>
          </ul>
        </nav>
      )} */}
      {/* <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-element">
            <a href="#" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-element">
            <a href="#" className="nav-link">
              Product
            </a>
          </li>
          <li className="nav-element">
            <a href="#" className="nav-link">
              About Us
            </a>
          </li>
          <li className="nav-element">
            <a href="#" className="nav-link">
              Careers
            </a>
          </li>
          <li className="nav-element">
            <a href="#" className="nav-link">
              Community
            </a>
          </li>
        </ul>
      </nav> */}
      <button className="get-started-btn">Get Started</button>
    </header>
  );
};

export default Navbar;
