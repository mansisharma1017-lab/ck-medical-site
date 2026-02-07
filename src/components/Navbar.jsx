"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" width={48} height={48} alt="CK Medical" />
          <span className="font-bold text-lg">
            CK Medical Systems
          </span>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-medium items-center">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          {/* Products Dropdown */}
          <div className="group relative cursor-pointer">

            <span>Products ▾</span>

            <div className="absolute hidden group-hover:block bg-white shadow-lg p-5 rounded-xl w-64 top-8">

              <Link href="/products" className="block mb-2 hover:text-blue-600">
                All Products
              </Link>

              <Link href="/products" className="block mb-2 hover:text-blue-600">
                Respiratory Care
              </Link>

              <Link href="/products" className="block mb-2 hover:text-blue-600">
                Patient Monitoring
              </Link>

              <Link href="/products" className="block hover:text-blue-600">
                Clinical Devices
              </Link>

            </div>
          </div>

          <Link href="/certifications">Certifications</Link>
          <Link href="/contact">Contact</Link>

        </nav>

      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 pb-4 space-y-3 font-medium">

          <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
          <Link href="/about" onClick={()=>setOpen(false)}>About</Link>
          <Link href="/products" onClick={()=>setOpen(false)}>Products</Link>
          <Link href="/certifications" onClick={()=>setOpen(false)}>Certifications</Link>
          <Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link>

        </div>
      )}

    </header>
  );
}
