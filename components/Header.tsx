"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {

  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-gray-100 shadow-sm">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/Azentrogs-Logo.png"
            alt="Azentro"
            width={220}
            height={80}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium">

          <Link href="/#launchpad" className="hover:text-blue-300 transition-colors duration-300">Launchpad</Link>
          <Link href="/#about" className="hover:text-blue-300 transition-colors duration-300">
The Azentro Way
</Link>
          {isHome ? (

<Link href="/#services">What We Engineer</Link>

) : (

<div className="relative group">

<span className="cursor-pointer">
What We Engineer
</span>

{/* Invisible bridge to prevent gap issue */}
  <div className="absolute left-0 top-full w-full h-3"></div>

  <div className="absolute left-0 top-full bg-[#004373] text-white rounded-lg shadow-xl w-56 hidden group-hover:block">

<Link href="/services/strategy" className="block px-4 py-3 hover:bg-[#0a507f]">
Business Strategy
</Link>

<Link href="/services/engineering" className="block px-4 py-3 hover:bg-[#0a507f]">
Engineering
</Link>

<Link href="/services/technology" className="block px-4 py-3 hover:bg-[#0a507f]">
Technology
</Link>

<Link href="/services/digital-transformation" className="block px-4 py-3 hover:bg-[#0a507f]">
Digital Transformation
</Link>

</div>

</div>

)}
          <Link href="/#impact" className="hover:text-blue-300 transition-colors duration-300">Why Azentro</Link>
          <Link href="/#perspectives" className="hover:text-blue-300 transition-colors duration-300">Perspectives</Link>
          <Link href="/#industries" className="hover:text-blue-300 transition-colors duration-300">Industries</Link>

        </nav>

        {/* Desktop CTA */}
        <Link href="/#contact" className="hidden md:block">
          <button className="border px-4 py-2 rounded hover:bg-gray-200">
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

          <Link href="/#launchpad" onClick={() => setOpen(false)}>
            Launchpad
          </Link>

          <Link href="/#about" onClick={() => setOpen(false)}>
            The Azentro Way
          </Link>

          <Link href="/#services" onClick={() => setOpen(false)}>
            What We Engineer
          </Link>

          <Link href="/#impact" onClick={() => setOpen(false)}>
            Why Azentro
          </Link>

          <Link href="/#perspectives" onClick={() => setOpen(false)}>
            Perspectives
          </Link>

          <Link href="/#contact" onClick={() => setOpen(false)}>
            Let's Build
          </Link>

        </div>
      )}

    </header>
  );
}