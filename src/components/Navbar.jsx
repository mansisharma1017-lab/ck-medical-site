"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* ===== Top Corporate Bar ===== */}
      <div className="bg-[var(--ck-blue)] text-white text-sm">
        <div className="container-ck flex justify-between items-center py-2">
          <span>Precision Medical & Surgical Devices Manufacturer</span>

          <div className="flex gap-4 items-center">
            <a
              href="https://wa.me/91-9899366774"
              target="_blank"
              className="hover:underline"
            >
              WhatsApp Support
            </a>
            <Link href="/contact" className="hover:underline">
              Quick Enquiry
            </Link>
          </div>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <div className="container-ck flex items-center justify-between py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" width={52} height={52} alt="CK Medical" />
          <div className="leading-tight">
            <div className="font-bold text-lg text-slate-900">
              CK Medical
            </div>
            <div className="text-xs text-slate-500">
              Medical Systems
            </div>
          </div>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-semibold text-[15px]">

          <Link href="/" className="hover:text-[var(--ck-blue)]">
            Home
          </Link>

          <Link href="/about" className="hover:text-[var(--ck-blue)]">
            About
          </Link>

          {/* ===== Products Mega Dropdown ===== */}
            <div className="group relative">
             <span className="cursor-pointer">
               Products ▾
             </span>

             {/* Hover bridge */}
            <div className="absolute left-0 top-full h-3 w-full" />

            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-xl p-5 rounded-xl w-64 z-50">


              <div className="grid grid-cols-2 gap-6 text-sm">

                <div>
                  <p className="font-bold mb-3 text-slate-800">
                    Product Categories
                  </p>

                  <Link href="/products" className="block mb-2 hover:text-[var(--ck-blue)]">
                    All Products
                  </Link>

                  <Link href="/products?cat=respiratory" className="block mb-2 hover:text-[var(--ck-blue)]">
                    Respiratory Care
                  </Link>

                  <Link href="/products?cat=monitoring" className="block mb-2 hover:text-[var(--ck-blue)]">
                    Patient Monitoring
                  </Link>

                  <Link href="/products?cat=clinical" className="block hover:text-[var(--ck-blue)]">
                    Clinical Devices
                  </Link>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="font-bold mb-2">
                    Need Product Details?
                  </p>
                  <p className="text-slate-600 text-xs mb-3">
                    Download brochures or send enquiry for specifications and pricing.
                  </p>

                  <Link href="/contact" className="btn-primary text-sm inline-block">
                    Send Enquiry
                  </Link>
                </div>

              </div>
            </div>
          </div>

          <Link href="/certifications" className="hover:text-[var(--ck-blue)]">
            Certifications
          </Link>

          <Link href="/contact" className="hover:text-[var(--ck-blue)]">
            Contact
          </Link>

          {/* CTA Button */}
          <Link href="/contact" className="btn-primary">
            Get Quote
          </Link>

        </nav>
      </div>

      {/* ===== Mobile Menu ===== */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-5">

          <nav className="flex flex-col gap-4 font-medium text-lg">

            <Link href="/" onClick={()=>setOpen(false)} className="py-2 border-b">
              Home
            </Link>

            <Link href="/about" onClick={()=>setOpen(false)} className="py-2 border-b">
              About
            </Link>

            <Link href="/products" onClick={()=>setOpen(false)} className="py-2 border-b">
              Products
            </Link>

            <Link href="/certifications" onClick={()=>setOpen(false)} className="py-2 border-b">
              Certifications
            </Link>

            <Link href="/contact" onClick={()=>setOpen(false)} className="py-2">
              Contact
            </Link>

            {/* Mobile CTA */}
            <a
              href="https://wa.me/91-9899366774"
              className="mt-4 bg-[var(--ck-blue)] text-white text-center py-3 rounded-lg font-semibold">
                 WhatsApp
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}
