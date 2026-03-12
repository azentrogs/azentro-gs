"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {

  const [open, setOpen] = useState(false);

  return (

    <header className="w-full sticky top-0 left-0 z-50 bg-gray-100 shadow-sm">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}

        <Link href="/">
          <Image
            src="/Azentrogs-Logo.png"
            alt="Azentro"
            width={400}
            height={90}
          />
        </Link>


        {/* Navigation */}

       <nav className="flex items-center gap-10 font-medium">

  <Link href="/">Launchpad</Link>

  <Link href="/about">The Azentro Way</Link>

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

      <Link href="/services/engineering" className="block py-2 hover:text-blue-600">
        Engineering Services
      </Link>

      <Link href="/services/technology" className="block py-2 hover:text-blue-600">
        Technology Services
      </Link>

      <Link href="/services/data-ai" className="block py-2 hover:text-blue-600">
        Data & AI Intelligence
      </Link>

      <Link href="/services/digital-transformation" className="block py-2 hover:text-blue-600">
        Digital Transformation
      </Link>

    </div>

  </div>

  <Link href="/insights">Our Impact</Link>

</nav>

<Link href="/contact">
  <button className="border px-5 py-2 rounded hover:bg-gray-200">
    Let's Build
  </button>
</Link>

      </div>

    </header>

  );
}