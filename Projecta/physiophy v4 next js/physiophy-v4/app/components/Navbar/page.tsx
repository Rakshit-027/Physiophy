"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  Stethoscope,
  Calendar,
  Phone,
  HelpCircle,
  Image as LucideImage,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./Navbar.css";
import physiophyLogo from "./Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link href="/" className="logo" onClick={closeMenu}>
          <Image
            src={physiophyLogo}
            alt="PhysioHealth Logo"
            className="logo-image"
            width={150}
            height={35}
          />
        </Link>

        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              {isHomePage ? (
                <a href="#home" className="nav-link" onClick={closeMenu}>
                  <Home className="nav-icon" size={18} />
                  Home
                </a>
              ) : (
                <Link href="/" className="nav-link" onClick={closeMenu}>
                  <Home className="nav-icon" size={18} />
                  Home
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a href="#About" className="nav-link" onClick={closeMenu}>
                  <Info className="nav-icon" size={18} />
                  Why Choose Us
                </a>
              ) : (
                <Link href="/pages/About" className="nav-link" onClick={closeMenu}>
                  <Info className="nav-icon" size={18} />
                  Why Choose Us
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a href="#services" className="nav-link" onClick={closeMenu}>
                  <Stethoscope className="nav-icon" size={18} />
                  Services
                </a>
              ) : (
                <Link href="/pages/Services" className="nav-link" onClick={closeMenu}>
                  <Stethoscope className="nav-icon" size={18} />
                  Services
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a href="#bookappoitment" className="nav-link" onClick={closeMenu}>
                  <Calendar className="nav-icon" size={18} />
                  Book Now
                </a>
              ) : (
                <Link href="/pages/appointment" className="nav-link" onClick={closeMenu}>
                  <Calendar className="nav-icon" size={18} />
                  Book Now
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a href="#contact" className="nav-link" onClick={closeMenu}>
                  <Phone className="nav-icon" size={18} />
                  Contact
                </a>
              ) : (
                <Link href="/pages/Contact" className="nav-link" onClick={closeMenu}>
                  <Phone className="nav-icon" size={18} />
                  Contact
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a href="#faq" className="nav-link" onClick={closeMenu}>
                  <HelpCircle className="nav-icon" size={18} />
                  FAQs
                </a>
              ) : (
                <Link href="/pages/FAQ" className="nav-link" onClick={closeMenu}>
                  <HelpCircle className="nav-icon" size={18} />
                  FAQs
                </Link>
              )}
            </li>
            <li>
              <Link href="/media" className="nav-link" onClick={closeMenu}>
                <LucideImage className="nav-icon" size={18} />
                Media
              </Link>
            </li>
            {/* Uncomment if Blog is needed */}
            {/* <li>
              <Link href="/blog" className="nav-link" onClick={closeMenu}>
                <BookOpen className="nav-icon" size={18} />
                Blog
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;