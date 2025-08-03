'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#a-propos', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#actualites', label: 'Actualités' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-kamray-green/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="KAMRAY - Retour à l'accueil"
          >
            <Image
              src="/kamray_logo.svg"
              alt="KAMRAY Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-kamray-green transition-colors font-medium"
                onClick={handleCloseMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#contact"
              className="bg-kamray-green hover:bg-kamray-green/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Consultation gratuite
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-kamray-green transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-kamray-green transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'mb-1'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-kamray-green transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 border-t border-kamray-green/20">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-kamray-green transition-colors font-medium py-2"
                  onClick={handleCloseMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-kamray-green/20">
                <Link
                  href="#contact"
                  className="bg-kamray-green hover:bg-kamray-green/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors block text-center"
                  onClick={handleCloseMobileMenu}
                >
                  Consultation gratuite
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;