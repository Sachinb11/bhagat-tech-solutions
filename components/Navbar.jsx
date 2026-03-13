'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useNavScroll } from '@/hooks/useNavScroll';
import ThemeToggle from '@/components/ThemeToggle';
import Logo       from '@/components/Logo';

const NAV_LINKS = [
  { href: '#home',      label: 'Home' },
  { href: '#about',     label: 'About' },
  { href: '#services',  label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#team',      label: 'Team' },
  { href: '#contact',   label: 'Contact' },
];

export default function Navbar() {
  const { scrolled, activeSection } = useNavScroll();
  const [menuOpen, setMenuOpen]     = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">

          {/* Logo */}
          <Link href="#home" className="nav-logo" onClick={closeMenu}>
            <Logo size={48} />
            <div className="logo-text">
              Bhagat Tech Solutions
              <span>Digital &amp; Software Solutions</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeSection === href.replace('#', '') ? 'active' : ''}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="nav-cta">
            <ThemeToggle />
            <a href="#contact" className="btn btn-ghost" style={{ padding: '10px 22px', fontSize: '.82rem' }}>
              Contact
            </a>
            <a
              href="https://wa.me/918459449727"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '10px 22px', fontSize: '.82rem' }}
            >
              <i className="fab fa-whatsapp" /> WhatsApp
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <div className="mobile-theme-row">
          <span className="mobile-theme-label">Theme</span>
          <ThemeToggle />
        </div>
        <a
          href="https://wa.me/918459449727"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-wa"
          style={{ marginTop: '12px', justifyContent: 'center' }}
          onClick={closeMenu}
        >
          <i className="fab fa-whatsapp" /> WhatsApp Chat
        </a>
      </div>
    </nav>
  );
}
