'use client';

import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header style={{ 
        background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        padding: '1.5rem 0'
      }} className="text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xl font-bold tracking-wide transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
            Juunis kõik transpordihinnad -25%
          </span>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Kontakt
              </h3>
              <div className="mt-4 space-y-4">
                <p className="text-base text-gray-500">
                  Tartu Vedu OÜ
                </p>
                <p className="text-base text-gray-500">
                  Tel: +372 5661 7774
                </p>
                <p className="text-base text-gray-500">
                  Email: info@tartuvedu.ee
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Teenused
              </h3>
              <div className="mt-4 space-y-4">
                <Link href="#teenused" className="text-base text-gray-500 hover:text-gray-900 block">
                  Vana kola äravedu
                </Link>
                <Link href="#teenused" className="text-base text-gray-500 hover:text-gray-900 block">
                  Vana mööbli ja kodutehnika vedu
                </Link>
                <Link href="#teenused" className="text-base text-gray-500 hover:text-gray-900 block">
                  Ehitusprahi äravedu
                </Link>
                <Link href="#teenused" className="text-base text-gray-500 hover:text-gray-900 block">
                  Korteri tühjendamine
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Järgi meid
              </h3>
              <div className="mt-4 space-y-4">
                <a href="https://www.facebook.com/profile.php?id=61567034047713" className="text-base text-gray-500 hover:text-gray-900 block" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              © {new Date().getFullYear()} Tartu Vedu OÜ. Kõik õigused kaitstud.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 