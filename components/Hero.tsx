"use client";

import Image from "next/image";
import Link from "next/link";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {

  return (
     <>
    <section className="relative h-[95vh] overflow-hidden text-white pt-[28px]">
      {/* Background */}

      <Image
        src="/Hero1.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
        />

      <div className="absolute inset-0 bg-black/20 z-10"></div>


      {/* Particles */}

      <div className="absolute inset-0 z-20">
        <ParticlesBackground />
      </div>


      {/* Content */}

      <div className="relative z-30 max-w-7xl mx-auto pl-20 pr-6 pt-32">
        <h1 className="leading-tight">

  <span className="block text-[36px] font-light tracking-wide">
    ENGINEERING
  </span>

  <span className="block text-[48px] font-bold text-[#cc8146] leading-[1.1]">
    INTELLIGENT
  </span>

  <span className="block text-[40px] font-semibold tracking-wide">
    DIGITAL FUTURES
  </span>

</h1>


        <p className="mt-6 max-w-xl text-lg">
          We design, develop and deliver scalable engineering,
          digital and technology solutions for modern enterprises.
        </p>


        {/* Buttons */}

        <div className="mt-10 flex gap-6">

          <Link href="/contact">
            <button className="flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg hover:scale-105 transition">
              DISCUSS YOUR PROJECT →
            </button>
          </Link>

          <Link href="/services/engineering">
            <button className="flex items-center gap-3 px-8 py-3 rounded-full border border-white/70 hover:bg-white/10 transition">
              EXPLORE SERVICES ▶
            </button>
          </Link>

        </div>

      </div>

    </section>
     {/* SECTION 2 — SERVICES OVERVIEW */}

      <section className="bg-[#004373] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-4">
            What We Engineer
          </h2>

          <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
            Azentro combines engineering expertise, digital technology,
            and data intelligence to solve complex business and
            infrastructure challenges.
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            <Link href="/services/engineering" className="p-6 rounded-lg">
            <Image
    src="/icons/engineer.png"
    alt="Engineering"
    width={60}
    height={60}
    className="mx-auto mb-4"
  />
              <h3 className="text-xl font-semibold mb-2">Engineering</h3>
              <p className="text-blue-100 text-sm">
                Design, analysis, modeling, and project engineering services.
              </p>
            </Link>

            <Link href="/services/technology" className="p-6 rounded-lg">
            <Image
  src="/icons/globaltech.png"
  alt="Technology"
  width={60}
  height={60}
  className="mx-auto mb-4"
/>
              <h3 className="text-xl font-semibold mb-2">Technology</h3>
              <p className="text-blue-100 text-sm">
                Enterprise applications, cloud engineering, and software development.
              </p>
            </Link>

            <Link href="/services/data-ai" className="p-6 rounded-lg">
            <Image
  src="/icons/data.png"
  alt="Data & AI"
  width={60}
  height={60}
  className="mx-auto mb-4"
/>
              <h3 className="text-xl font-semibold mb-2">Data & AI</h3>
              <p className="text-blue-100 text-sm">
                Business intelligence, analytics, and machine learning solutions.
              </p>
            </Link>

            <Link href="/services/digital-transformation" className="p-6 rounded-lg">
            <Image
  src="/icons/digi-trans.png"
  alt="Digital Transformation"
  width={60}
  height={60}
  className="mx-auto mb-4"
/>
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p className="text-blue-100 text-sm">
                Process automation, modernization, and digital strategy.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* SECTION 3 — INDUSTRIES */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-12">
            Industries We Support
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-gray-700">

            <div>Energy & Utilities</div>
            <div>Oil & Gas</div>
            <div>Infrastructure & Construction</div>
            <div>Manufacturing</div>
            <div>Technology Enterprises</div>
            <div>Aviation & Transportation</div>

          </div>

        </div>
      </section>

      {/* SECTION 4 — WHY AZENTRO */}

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-12">
            Why Organizations Partner With Azentro
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="font-semibold mb-2">Engineering Expertise</h3>
              <p>Multidisciplinary engineering capabilities across industries.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Digital Innovation</h3>
              <p>Modern technology solutions built for scalability and resilience.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Data Intelligence</h3>
              <p>Transforming data into insights that drive strategic decisions.</p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5 — INSIGHTS */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-12">
            Our Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>Engineering Knowledge</div>
            <div>Technology Innovation</div>
            <div>Data & AI Capabilities</div>

          </div>

        </div>
      </section>

      {/* SECTION 6 — CALL TO ACTION */}

      <section className="bg-[#004373] text-white py-20 text-center">

        <h2 className="text-3xl font-semibold mb-4">
          Let's Build the Future Together
        </h2>

        <p className="mb-6">
          Partner with Azentro to deliver engineering excellence,
          digital transformation, and intelligent technology solutions.
        </p>

        <button className="bg-white text-[#004373] px-6 py-3 rounded-md">
          Discuss Your Project
        </button>

      </section>
      </>
  );
}