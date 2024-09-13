'use client';

import localFont from "next/font/local";
import "./globals.css";
import Image from 'next/image';
import { useState } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [color, setColor] = useState('text-black');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleColorChange = () => {
    if (color === 'text-black') {
      setColor('text-orange-500');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 bg-white shadow-lg shadow-slate-10 z-10 flex flex-col tablet:px-4 laptop:px-[126px] Laptop:py-3 tablet:py-[14px]">
          <div className="flex w-full h-73 justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="LOGO"
                width={75}
                height={75}
                className="rounded-md"
              />
              <div>
                <p className="text-[35px] leading-6">IRO</p>
                <p className="text-[10px]">
                  Igire Rwanda <br></br>organization
                </p>
              </div>
            </div>
            
            <button 
              className={`tablet:hidden p-2 text-gray-600 ${menuOpen ? 'hidden' : 'block'}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            
            <nav className={`flex flex-col tablet:flex-row laptop:gap-[75px] tablet:gap-10 text-[16px] tablet:text-[20px] ${color} ${menuOpen ? 'flex-1 block' : 'hidden'} tablet:flex tablet:flex-row`}>
              <a onClick={handleColorChange} href="/">Home</a>
              <a onClick={handleColorChange} href="/about">About</a>
              <a onClick={handleColorChange} href="/program">Programs</a>
              <a onClick={handleColorChange} href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
