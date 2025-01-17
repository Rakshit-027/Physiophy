import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import Logo from './Logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
              to="portal"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Patient Portal
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;