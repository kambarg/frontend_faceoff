"use client";

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-black shadow-md relative h-[132px]">
      <a 
        href="https://42abudhabi.ae" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute top-0 left-0 z-50"
      >
        <div className="relative w-[360px] h-[132px]">
          <Image
            src="/42ad_logo.png"
            alt="42 Abu Dhabi Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
            className="brightness-200 contrast-100"
          />
        </div>
      </a>
      <div className="container mx-auto h-full relative pl-[380px]">
        <nav className="flex items-center justify-end h-full">
          <div className="flex items-center space-x-8 py-4 px-6">
            <Link href="/" className="text-white hover:text-42-blue font-medium text-lg">
              Home
            </Link>
            <Link href="/events" className="text-white hover:text-42-blue font-medium text-lg">
              Events
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 