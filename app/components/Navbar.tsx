'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Dhanuka&apos;s Portfolio
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-blue-500 transition"
              >
                {link.label}
              </Link>
            ))}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <Moon size={18} />
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <Moon size={18} />
              </button>
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-800 dark:text-white"
              aria-label="Toggle Menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="fixed top-17 left-0 w-full z-40 bg-white dark:bg-gray-900 shadow-md md:hidden">
          <div className="flex flex-col px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-2 px-4 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
