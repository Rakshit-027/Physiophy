import React, { useState, useEffect } from "react";
import { Menu, X, LogIn, LogOut, User, Settings, UserCircle } from "lucide-react";
import { Link } from "react-scroll";
import Logo from './Logo.png';
import './Navbar.css'

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
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="logo"
        >
          <img src={Logo} alt="PhysioHealth Logo" className="logo-image" />
          <span className="logo-text"></span>
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about-hero"
              spy={true}
              smooth={true}
              offset={-49}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="services-page"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="appointment-container"
              spy={true}
              smooth={true}
              offset={-59}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Appointment Booking
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact-container"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="faqs"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="blog"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item auth-item">
            {isLoggedIn ? (
              <div className="user-profile" onClick={() => setShowUserMenu(!showUserMenu)}>
                <div className="user-avatar">
                  <UserCircle size={24} />
                </div>
                <span className="username">John Doe</span>
                {showUserMenu && (
                  <div className="user-dropdown">
                    <a href="#profile" className="dropdown-item">
                      <User size={16} />
                      <span>My Profile</span>
                    </a>
                    <a href="#settings" className="dropdown-item">
                      <Settings size={16} />
                      <span>Settings</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" onClick={handleLogout} className="dropdown-item logout">
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