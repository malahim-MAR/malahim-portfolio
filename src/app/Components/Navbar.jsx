// components/Navbar.js
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="parent-navbar">
        <div className="navbar">
          <nav className="flex justify-between items-center p-1">
            <div className="logo">
              <h1 className="text-xl font-bold">Malahim.Dev</h1>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-8">
              <li>
                <Link href="/" className="nav-link underline-animation">Home</Link>
              </li>
              <li>
                <Link href="/About" className="nav-link  underline-animation">About</Link>
              </li>
              <li>
                <Link href="/Skills" className="nav-link  underline-animation">Skills</Link>
              </li>
              <li>
                <Link href="/Projects" className="nav-link underline-animation">Projects</Link>
              </li>
              <li>
                <Link href="/Contact" className="nav-link  underline-animation">Contact</Link>
              </li>
            </ul>

            <div className="hidden md:flex gap-6 items-center">
              <div className="circle-animation">
                <FaGithub className="icon" />
              </div>
              <div className="circle-animation">
                <FaInstagram className="icon" />
              </div>
              <div className="circle-animation">
                <FaLinkedin className="icon" />
              </div>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden text-xl z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </nav>

          {/* Mobile Menu - Full Screen Overlay */}
          {isMenuOpen && (
            <div className="mobile-menu-overlay">
              <div className="mobile-menu-content">
                <ul className="flex flex-col items-center gap-10 text-2xl">
                  <li>
                    <Link href="/" className="nav-link underline-animation" onClick={() => setIsMenuOpen(false)}>Home</Link>
                  </li>
                  <li>
                    <Link href="/About" className="nav-link  underline-animation" onClick={() => setIsMenuOpen(false)}>About</Link>
                  </li>
                  <li>
                    <Link href="/Skills" className="nav-link  underline-animation" onClick={() => setIsMenuOpen(false)}>Skills</Link>
                  </li>
                  <li>
                    <Link href="/Projects" className="nav-link underline-animation" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                  </li>
                  <li>
                    <Link href="/Contact" className="nav-link  underline-animation" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                  </li>
                  <li className="flex gap-8 mt-8">
                    <div className="circle-animation">
                      <FaGithub className="icon text-2xl" />
                    </div>
                    <div className="circle-animation">
                      <FaInstagram className="icon text-2xl" />
                    </div>
                    <div className="circle-animation">
                      <FaLinkedin className="icon text-2xl" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .parent-navbar {
          padding: 10px 10px;
        }
        .navbar {
          background: linear-gradient(
            145deg,
            rgba(20, 20, 20, 0.8),
            rgba(10, 10, 10, 0.8)
          );
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
          z-index: 111;
          padding: 12px 24px;
        }

        nav, ul, li {
          cursor: pointer;
        }
        
        /* Text Link Animations */
        .nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 8px 0;
        }
        
        /* Underline Animation for Home and Projects */
        .underline-animation::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #ff8a00, #e52e71);
          border-radius: 3px;
          transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        .underline-animation:hover::after {
          width: 100%;
        }
        
        /* Floating Animation for other links */
        . underline-animation {
          transition: all 0.4s ease;
        }
        
        . underline-animation:hover {
          transform: translateY(-6px);
          text-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          color: #ffffff;
        }
        
        /* Icon Animations */
        .circle-animation {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          transition: all 0.3s ease;
        }
        
        .circle-animation::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid transparent;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .circle-animation:hover::before {
          border-color: #e52e71;
          transform: scale(1.3);
          opacity: 0.7;
        }
        
        .circle-animation:hover .icon {
          color: #e52e71;
          transform: scale(1.1);
        }
        
        .icon {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.85);
          transition: all 0.3s ease;
          z-index: 1;
        }
        
        /* Mobile Menu Styles */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease-out;
        }
        
        .mobile-menu-content {
          background: rgba(10, 10, 20, 0.9);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 40px;
          width: 90%;
          max-width: 500px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            transform: translateY(20px);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .navbar {
            padding: 10px 15px;
          }
          
          .logo h1 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar;