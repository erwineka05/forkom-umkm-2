"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfilOpen, setIsProfilOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Kiri */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-500 tracking-wider">UMKM</span>
                <span className="text-lg font-extrabold text-amber-600 leading-none">MARGODADI</span>
              </div>
            </Link>

            {/* Menu Navigasi Desktop (Disembunyikan di HP) */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="text-amber-600 font-bold border-b-2 border-amber-600 pb-1">Beranda</Link>
              
              {/* Dropdown Profil Desktop */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-600 hover:text-amber-600 font-medium py-2">
                  Profil
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
                  <Link href="/profil/desa" className="block px-4 py-3 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-600">Profil Desa</Link>
                  <Link href="/profil/pengurus" className="block px-4 py-3 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-600 border-t border-gray-50">Pengurus Forkom</Link>
                  <Link href="/profil/sejarah" className="block px-4 py-3 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-600 border-t border-gray-50">Sejarah</Link>
                </div>
              </div>

              <Link href="/kuliner" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Produk</Link>
              <Link href="/wisata" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Wisata</Link>
              <Link href="/berita" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Kabar Terbaru</Link>
            </nav>

            {/* Tombol WhatsApp Desktop */}
            <div className="hidden md:block">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" 
                 className="bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-amber-700 transition shadow-md">
                WhatsApp Kami
              </a>
            </div>

            {/* Tombol Hamburger Mobile */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-gray-900 focus:outline-none p-2"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 🌟 SIDEBAR MOBILE MENU */}
      {/* Background Overlay Hitam */}
      <div 
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Panel Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 w-[80%] max-w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header Sidebar */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
          <span className="text-xl font-extrabold text-gray-900">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-gray-800 p-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* List Menu */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-amber-600 font-bold text-lg">
            Beranda
          </Link>
          
          {/* Akordion Profil */}
          <div>
            <button 
              onClick={() => setIsProfilOpen(!isProfilOpen)} 
              className="flex justify-between items-center w-full text-left text-lg text-gray-700 hover:text-amber-600 font-medium"
            >
              <span>Profil</span>
              <svg className={`w-5 h-5 transition-transform duration-200 ${isProfilOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Sub-menu Profil */}
            <div className={`overflow-hidden transition-all duration-300 ${isProfilOpen ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 ml-2 border-l-2 border-gray-100 space-y-4 py-2">
                <Link href="/profil/desa" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-500 hover:text-amber-600">Profil Desa</Link>
                <Link href="/profil/pengurus" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-500 hover:text-amber-600">Pengurus Forkom</Link>
                <Link href="/profil/sejarah" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-500 hover:text-amber-600">Sejarah</Link>
              </div>
            </div>
          </div>

          <Link href="/kuliner" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg text-gray-700 hover:text-amber-600 font-medium">Produk</Link>
          <Link href="/wisata" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg text-gray-700 hover:text-amber-600 font-medium">Wisata</Link>
          <Link href="/berita" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg text-gray-700 hover:text-amber-600 font-medium">Kabar Terbaru</Link>
        </div>

        {/* Footer Sidebar (Tombol WhatsApp) */}
        <div className="p-6 border-t border-gray-100 mt-auto">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="block w-full bg-amber-600 text-white text-center font-bold text-lg py-3.5 rounded-full shadow-lg hover:bg-amber-700 active:scale-95 transition-all">
            WhatsApp Kami
          </a>
        </div>
      </div>
    </>
  );
}