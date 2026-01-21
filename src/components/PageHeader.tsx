'use client';

import Link from 'next/link';
import { useState } from 'react';

interface PageHeaderProps {
  navLinks?: Array<{
    href: string;
    label: string;
    active?: boolean;
  }>;
}

export default function PageHeader({
  navLinks = [
    { href: '/', label: 'Home' },
    { href: '/listings', label: 'Browse Painters' },
    { href: '/articles', label: 'Articles' }
  ]
}: PageHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-umich-navy shadow-md border-b-4 border-umich-maize sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <h1 className="text-3xl font-bold text-umich-maize cursor-pointer">PaintingA2</h1>
            </Link>
            <p className="text-sm text-gray-300 mt-1 hidden sm:block">
              Ann Arbor&apos;s Premier Painting Directory
            </p>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.active
                    ? 'text-umich-maize font-bold transition-colors'
                    : 'text-white hover:text-umich-maize font-medium transition-colors'
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-umich-maize focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-umich-navy border-t border-umich-maize">
          <nav className="flex flex-col px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-white hover:text-umich-maize font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
