import React, { useState, useEffect } from "react";
import { Menu, X, LogIn, LogOut, User, Settings, UserCircle } from "lucide-react";
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling
import { Link as RouterLink } from "react-router-dom"; // For routing
import Logo from './Logo.png';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogin, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    onLogout();
    setShowUserMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo with routing */}
        <RouterLink to="/" className="logo">
          <img src={Logo} alt="PhysioHealth Logo" className="logo-image" />
          <span className="logo-text"></span>
        </RouterLink>

        {/* Hamburger Menu */}
        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {/* Smooth scrolling links */}
          <li className="nav-item">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="about-hero"
              spy={true}
              smooth={true}
              offset={-49}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="services-page"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Services
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="appointment-container"
              spy={true}
              smooth={true}
              offset={-59}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Appointment Booking
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="contact-container"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="faq-container"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="blog"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </ScrollLink>
          </li>

          {/* Authentication and User Menu */}
          <li className="nav-item auth-item">
            {isLoggedIn ? (
              <div
                className="user-profile"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <div className="user-avatar">
                  <UserCircle size={24} />
                </div>
                <span className="username">John Doe</span>
                {showUserMenu && (
                  <div className="user-dropdown">
                    <RouterLink to="/profile" className="dropdown-item">
                      <User size={16} />
                      <span>My Profile</span>
                    </RouterLink>
                    <RouterLink to="/settings" className="dropdown-item">
                      <Settings size={16} />
                      <span>Settings</span>
                    </RouterLink>
                    <div className="dropdown-divider"></div>
                    <a
                      href="#"
                      onClick={handleLogout}
                      className="dropdown-item logout"
                    >
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <button className="login-button" onClick={onLogin}>
                <LogIn size={20} />
                <span>Sign In</span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;