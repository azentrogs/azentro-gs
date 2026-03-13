"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-gray-100 shadow-sm">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/Azentrogs-Logo.png"
            alt="Azentro"
            width={220}
            height={60}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-medium">

          <Link href="/">Launchpad</Link>

          <Link href="#about">The Azentro Way</Link>

          {/* Services Dropdown */}
          <div className="relative group">

            <span className="cursor-pointer">
              What We Engineer
            </span>

            <div
              className="
                absolute left-0 top-full mt-2
                w-64 bg-white shadow-lg rounded-lg p-4
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
              "
            >

              <Link href="#engineering" className="block py-2 hover:text-blue-600">
                Engineering Services
              </Link>

              <Link href="#technology" className="block py-2 hover:text-blue-600">
                Technology Services
              </Link>

              <Link href="#data-ai" className="block py-2 hover:text-blue-600">
                Data & AI Intelligence
              </Link>

              <Link href="#digital" className="block py-2 hover:text-blue-600">
                Digital Transformation
              </Link>

            </div>

          </div>

          <Link href="#impact">Our Impact</Link>

        </nav>

        {/* Desktop CTA */}
        <Link href="#contact" className="hidden md:block">
          <button className="border px-5 py-2 rounded hover:bg-gray-200">
            Let's Build
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
  <div className="md:hidden bg-white shadow-md px-6 py-6 flex flex-col gap-6 font-medium">

    {!servicesOpen ? (
      <>
        <Link href="/" onClick={() => setOpen(false)}>
          Launchpad
        </Link>

        <Link href="#about" onClick={() => setOpen(false)}>
          The Azentro Way
        </Link>

        <button
          onClick={() => setServicesOpen(true)}
          className="text-left"
        >
          What We Engineer {"→"}
        </button>

        <Link href="#impact" onClick={() => setOpen(false)}>
          Our Impact
        </Link>

        <Link href="#contact" onClick={() => setOpen(false)}>
          Let's Build
        </Link>
      </>
    ) : (
      <>
        <button
          onClick={() => setServicesOpen(false)}
          className="text-left font-semibold"
        >
          ← Back
        </button>

        <Link href="#engineering" onClick={() => setOpen(false)}>
          Engineering Services
        </Link>

        <Link href="#technology" onClick={() => setOpen(false)}>
          Technology Services
        </Link>

        <Link href="#data-ai" onClick={() => setOpen(false)}>
          Data & AI Intelligence
        </Link>

        <Link href="#digital" onClick={() => setOpen(false)}>
          Digital Transformation
        </Link>
      </>
    )}

  </div>
)}

    </header>
  );
}