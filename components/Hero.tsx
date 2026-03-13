"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  

  const [activeInsight, setActiveInsight] = useState<number | null>(null);

  const insights = [
    {
      title: "Future of Data-Driven Decision Making",
      summary: "How organizations transform complex data into actionable intelligence.",
      content:
        "Modern enterprises generate massive volumes of data. Advanced analytics and intelligent dashboards enable organizations to predict trends, optimize operations, and make faster strategic decisions."
    },
    {
      title: "Intelligent Automation",
      summary: "Leveraging automation to streamline operations and improve efficiency.",
      content:
        "Automation technologies reduce manual effort and improve operational reliability. Intelligent automation allows organizations to scale faster while empowering teams to focus on innovation."
    },
    {
      title: "Scalable Digital Architecture",
      summary: "Designing technology ecosystems that support enterprise growth.",
      content:
        "Scalable digital architectures ensure reliable integrations, secure data flows, and high performance across systems as organizations expand."
    },
    {
      title: "Engineering Digital Transformation",
      summary: "Building modern systems that drive innovation and agility.",
      content:
        "Digital transformation requires modernizing systems, processes, and data platforms to help organizations adapt faster and innovate continuously."
    },
    {
      title: "Data to Strategic Intelligence",
      summary: "Turning raw data into meaningful business insights.",
      content:
        "Combining data engineering, analytics, and visualization technologies enables organizations to convert complex datasets into strategic insights."
    }
  ];



  return (
     <>
    <section id="launchpad" className="relative min-h-[95vh] overflow-hidden text-white pt-[28px]">
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

      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-10 lg:pl-20 pt-24 md:pt-32">
        <h1 className="leading-tight">

  <span className="block text-3xl md:text-[36px] font-light tracking-wide">
    ENGINEERING
  </span>

  <span className="block text-4xl md:text-[48px] font-bold text-[#cc8146] leading-[1.1]">
    INTELLIGENT
  </span>

  <span className="block text-3xl md:text-[40px] font-semibold tracking-wide">
    DIGITAL FUTURES
  </span>

</h1>


        <p className="mt-6 max-w-xl text-lg">
          We design, develop and deliver scalable engineering,
          digital and technology solutions for modern enterprises.
        </p>


        {/* Buttons */}

        <div className="mt-10 flex flex-col sm:flex-row gap-6">

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
    {/* SECTION 2 — THE AZENTRO WAY */}

<section id="about" className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Section Title */}

    <div className="text-center mb-20">

      <h2 className="text-3xl font-semibold mb-4">
        The Azentro Way
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto">
        Engineering intelligence that powers modern enterprises.
        At Azentro, we combine engineering expertise, digital innovation,
        and data intelligence to design scalable solutions that help
        organizations navigate complexity and build resilient digital futures.
      </p>

    </div>


    {/* Vision */}

    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

      <div>

        <h3 className="text-2xl font-semibold mb-4">
          Our Vision
        </h3>

        <p className="text-gray-600 leading-relaxed">
          To become a trusted global partner for engineering,
          technology, and data-driven innovation, enabling
          organizations to build intelligent digital futures
          and solve complex challenges through modern
          engineering solutions.
        </p>

      </div>


      <div className="flex justify-center">

        <Image
          src="/images/vision-outline.png"
          alt="Azentro Vision"
          width={420}
          height={320}
          className="object-contain"
        />

      </div>

    </div>


    {/* Mission */}

    <div className="grid md:grid-cols-2 gap-16 items-center">

      <div className="flex justify-center md:order-1 order-2">

        <Image
          src="/images/mission-outline.png"
          alt="Azentro Mission"
          width={420}
          height={320}
          className="object-contain"
        />

      </div>


      <div className="md:order-2 order-1">

        <h3 className="text-2xl font-semibold mb-4">
          Our Mission
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Our mission is to deliver scalable engineering,
          technology, and data intelligence solutions that
          empower organizations to innovate, transform
          operations, and create lasting value in a rapidly
          evolving digital world.
        </p>

      </div>

    </div>

  </div>

</section>
     {/* SECTION 3 — SERVICES OVERVIEW */}

      <section id="services" className="bg-[#004373] text-white py-20">
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


      {/* SECTION 4 — WHY AZENTRO */}

<section id="impact" className="bg-gray-100 py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <h2 className="text-3xl font-semibold mb-4">
        Why Organizations Choose Azentro
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto">
        Azentro brings together engineering excellence, technology
        innovation, and data intelligence to help organizations
        solve complex challenges and build future-ready capabilities.
      </p>

    </div>


    <div className="grid md:grid-cols-3 gap-10">

      {/* Card 1 */}

      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">

        <Image
          src="/icons/expertise.png"
          alt="Engineering Expertise"
          width={60}
          height={60}
          className="mb-6"
        />

        <h3 className="text-xl font-semibold mb-3">
          Deep Engineering Expertise
        </h3>

        <p className="text-gray-600">
          Multidisciplinary engineering capabilities across energy,
          infrastructure, manufacturing, aviation, and technology sectors.
        </p>

      </div>


      {/* Card 2 */}

      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">

        <Image
          src="/icons/innovation-tech.png"
          alt="Technology Innovation"
          width={60}
          height={60}
          className="mb-6"
        />

        <h3 className="text-xl font-semibold mb-3">
          Technology Innovation
        </h3>

        <p className="text-gray-600">
          Modern technology solutions including cloud platforms,
          enterprise applications, and digital transformation initiatives.
        </p>

      </div>


      {/* Card 3 */}

      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">

        <Image
          src="/icons/data-intelligence.png"
          alt="Data Intelligence"
          width={60}
          height={60}
          className="mb-6"
        />

        <h3 className="text-xl font-semibold mb-3">
          Data & Intelligence
        </h3>

        <p className="text-gray-600">
          Advanced analytics, business intelligence, and AI-driven
          insights that empower organizations to make smarter decisions.
        </p>

      </div>

    </div>

  </div>

</section>

     {/* SECTION 5 — INSIGHTS */}

<section id="perspectives" className="py-20 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <h2 className="text-3xl font-semibold mb-4">
        Perspectives
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto">
        Perspectives on engineering, technology, and data intelligence shaping the future of modern enterprises.
      </p>
    </div>


    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {insights.map((item, index) => (

        <div
          key={index}
          onClick={() =>
            setActiveInsight(activeInsight === index ? null : index)
          }
          className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition cursor-pointer"
        >

          <h3 className="text-xl font-semibold mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600">
            {item.summary}
          </p>

          {activeInsight === index && (
            <p className="mt-4 text-gray-700 leading-relaxed">
              {item.content}
            </p>
          )}

        </div>

      ))}

    </div>

  </div>

</section>

      {/* SECTION 6 — CALL TO ACTION */}

      <section id="contact" className="bg-[#004373] text-white py-20 text-center">

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