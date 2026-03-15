"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  

 const [activeInsight, setActiveInsight] = useState(0);

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
    <section id="launchpad" className="relative min-h-[90vh] overflow-hidden text-white pt-[28px]">
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

          <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSd4iAGAITI4CLCD_ddDcsnc1ycEg1d_8EdVEKHJ86kKW4dPNA/viewform"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="bg-[#004373] text-white px-8 py-3 rounded-full font-medium shadow-md hover:scale-105 transition">
        Discuss Your Project
      </button>
    </a>

          <Link href="/#contact">
  <button className="flex items-center gap-3 px-8 py-3 rounded-full border border-white/70 hover:bg-white/10 transition">
    GET IN TOUCH ▶
  </button>
</Link>

        </div>

      </div>

    </section>
    {/* SECTION 2 — THE AZENTRO WAY */}

<section id="about" className="bg-gray-200 py-10">

<div className="max-w-7xl mx-auto px-6">

{/* SECTION TITLE */}
<div className="text-center max-w-3xl mx-auto mb-10">

<h2 className="text-3xl md:text-4xl font-semibold mb-4">
The Azentro Way
</h2>

<p className="text-gray-600 text-lg leading-relaxed">
Engineering intelligence that powers modern enterprises. At Azentro, we combine 
engineering expertise, digital innovation, and data intelligence to design scalable 
solutions that help organizations navigate complexity and build resilient digital futures.
</p>

</div>


{/* VISION */}
<div className="grid md:grid-cols-[1.8fr_0.6fr] gap-10 items-center">

<div>

<h3 className="text-2xl font-semibold mb-4">
Azentro's Vision
</h3>

<p className="text-gray-600 text-lg leading-relaxed">
To become a trusted global partner for engineering, technology, and data-driven 
innovation, enabling organizations to build intelligent digital futures and solve 
complex challenges through modern engineering solutions.
</p>

</div>

<div className="flex justify-center">

<Image
src="/images/vision-outline.png"
alt="Vision"
width={250}
height={250}
className="object-contain"
/>

</div>

</div>


{/* MISSION */}
<div className="grid md:grid-cols-[0.6fr_1.8fr] gap-10 items-center">

<div className="flex justify-center md:order-1 order-2">

<Image
src="/images/mission.png"
alt="Mission"
width={250}
height={250}
className="object-contain"
/>

</div>

<div className="md:order-2 order-1">

<h3 className="text-2xl font-semibold mb-4">
Azentro's Mission
</h3>

<p className="text-gray-600 text-lg leading-relaxed">
Our mission is to deliver scalable engineering, technology, and data intelligence 
solutions that empower organizations to innovate, transform operations, and create 
lasting value in a rapidly evolving digital world.
</p>

</div>

</div>

</div>

</section>
     {/* SECTION 3 — SERVICES OVERVIEW */}

   <section id="services" className="bg-[#004373] text-white py-12">
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

            <Link href="/services/strategy" className="group p-6 rounded-lg border border-transparent 
hover:border-blue-300 hover:bg-[#0a507f] 
transition-all duration-300 cursor-pointer">
            <Image
  src="/icons/strategy.png"
  alt="Strategy"
  width={60}
  height={60}
  className="mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
/>
              <h3 className="text-xl font-semibold mb-2">Business Strategy</h3>
              <p className="text-blue-100 text-sm">
               Business analysis, process optimization, strategic advisory, modernization and enterprise consulting services.
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-blue-200 group-hover:text-white transition-colors">
               Explore →
              </span>
            </Link>

            <Link href="/services/engineering" className="group p-6 rounded-lg border border-transparent 
hover:border-blue-300 hover:bg-[#0a507f] 
transition-all duration-300 cursor-pointer">
            <Image
    src="/icons/engineer.png"
    alt="Engineering"
    width={60}
    height={60}
    className="mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
  />
              <h3 className="text-xl font-semibold mb-2">Engineering</h3>
              <p className="text-blue-100 text-sm">
                Design, drafting, analysis, modeling, MTO and project engineering services.
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-blue-200 group-hover:text-white transition-colors">
                    Explore →
              </span>
            </Link>

            <Link href="/services/technology" className="group p-6 rounded-lg border border-transparent 
hover:border-blue-300 hover:bg-[#0a507f] 
transition-all duration-300 cursor-pointer">
            <Image
  src="/icons/globaltech.png"
  alt="Technology"
  width={60}
  height={60}
  className="mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
/>
              <h3 className="text-xl font-semibold mb-2">Technology</h3>
              <p className="text-blue-100 text-sm">
                Software development, web and mobile applications, UI/UX design, DevOps, and cybersecurity solutions.
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-blue-200 group-hover:text-white transition-colors">
               Explore →
              </span>
            </Link>

            <Link href="/services/digital-transformation" className="group p-6 rounded-lg border border-transparent 
hover:border-blue-300 hover:bg-[#0a507f] 
transition-all duration-300 cursor-pointer">
            <Image
  src="/icons/digi-trans.png"
  alt="Digital Transformation"
  width={60}
  height={60}
  className="mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
/>
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p className="text-blue-100 text-sm">
                Cloud computing, data engineering, analytics, Process automation, and AI-driven enterprise solutions.
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-blue-200 group-hover:text-white transition-colors">
               Explore →
              </span>
            </Link>

          </div>
        </div>
      </section>


      {/* SECTION 4 — WHY AZENTRO */}

<section id="impact" className="bg-gray-200 py-22">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">

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

      <div className="bg-[#004373] p-8 rounded-lg shadow-sm hover:shadow-lg transition">

        <h3 className="text-xl font-semibold mb-3 text-white">
          Deep Engineering Expertise
        </h3>

        <p className="text-white">
          Multidisciplinary engineering capabilities across energy,
          infrastructure, manufacturing, aviation, and technology sectors.
        </p>

      </div>


      {/* Card 2 */}

      <div className="bg-[#004373] p-8 rounded-lg shadow-sm hover:shadow-lg transition">

        <h3 className="text-xl font-semibold mb-3 text-white">
          Technology Innovation
        </h3>

        <p className="text-white">
          Modern technology solutions including cloud platforms,
          enterprise applications, and digital transformation initiatives.
        </p>

      </div>


      {/* Card 3 */}

      <div className="bg-[#004373] p-8 rounded-lg shadow-sm hover:shadow-lg transition">

        <h3 className="text-xl font-semibold mb-3 text-white">
          Data & Intelligence
        </h3>

        <p className="text-white">
          Advanced analytics, business intelligence, and AI-driven
          insights that empower organizations to make smarter decisions.
        </p>

      </div>

    </div>

  </div>

</section>


{/* SECTION — PERSPECTIVES */}

<section id="perspectives" className="bg-[#004373] text-white py-10">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<h2 className="text-3xl font-semibold mb-4 text-white">
Perspectives
</h2>

<p className="text-white max-w-3xl mx-auto">
Thoughts on engineering, digital transformation, and data intelligence shaping modern enterprises.
</p>

</div>


<div className="grid md:grid-cols-[0.8fr_0.7fr] gap-2 items-start">


{/* LEFT MENU */}

<div className="border-l-2 border-white ml-8 md:ml-16">
{insights.map((item, index) => (

<div
key={index}
onClick={() => setActiveInsight(index)}
className={`relative pl-6 py-4 cursor-pointer transition-all duration-300
${activeInsight === index
? "text-white font-semibold"
: "text-white hover:text-blue-200 transition-colors duration-300"}
`}
>

{activeInsight === index && (
<span className="absolute left-[-2px] top-0 h-full w-[4px] rounded-r"></span>
)}

<h4 className="text-lg">
{item.title}
</h4>

</div>

))}

</div>

{/* RIGHT CONTENT */}

<div className="bg-[#287BAE] p-10 rounded-xl shadow-sm">

<h3 className="text-2xl font-semibold mb-4 text-white">
{insights[activeInsight].title}
</h3>

<p className="text-blue-200 mb-6">
{insights[activeInsight].summary}
</p>

<p className="text-blue-200 leading-relaxed">
{insights[activeInsight].content}
</p>

</div>

</div>

</div>

</section>

{/* SECTION — INDUSTRIES */}

<section id="industries" className="bg-gray-200 py-10">

<div className="max-w-7xl mx-auto px-4">

{/* Section Header */}
<div className="text-center mb-14">

<h2 className="text-3xl md:text-4xl font-semibold text-[#004373] mb-4">
Industries We Support
</h2>

<p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
Azentro delivers engineering consulting services, enterprise technology solutions, 
and digital transformation services across multiple industries.
</p>

</div>


{/* Industry Grid */}
<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

{/* Engineering */}
<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
<h4 className="text-lg font-semibold text-[#004373] mb-2">
Engineering & Manufacturing
</h4>
<p className="text-gray-600 text-sm">
Advanced engineering consulting and industrial technology solutions.
</p>
</div>

{/* Technology */}
<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
<h4 className="text-lg font-semibold text-[#004373] mb-2">
Technology & Startups
</h4>
<p className="text-gray-600 text-sm">
Scalable digital platforms and modern software engineering support.
</p>
</div>

{/* Finance */}
<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
<h4 className="text-lg font-semibold text-[#004373] mb-2">
Financial Services & FinTech
</h4>
<p className="text-gray-600 text-sm">
Secure technology solutions and data-driven financial systems.
</p>
</div>

{/* Healthcare */}
<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
<h4 className="text-lg font-semibold text-[#004373] mb-2">
Healthcare
</h4>
<p className="text-gray-600 text-sm">
Technology solutions supporting healthcare operations and services.
</p>
</div>

{/* Education */}
<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
<h4 className="text-lg font-semibold text-[#004373] mb-2">
Education
</h4>
<p className="text-gray-600 text-sm">
Digital platforms and analytics solutions for modern education.
</p>
</div>

{/* Retail */}
<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
<h4 className="text-lg font-semibold text-[#004373] mb-2">
Retail & E-commerce
</h4>
<p className="text-gray-600 text-sm">
Technology solutions that enhance digital commerce and operations.
</p>
</div>

{/* Infrastructure */}
<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
<h4 className="text-lg font-semibold text-[#004373] mb-2">
Infrastructure
</h4>
<p className="text-gray-600 text-sm">
Engineering consulting and digital solutions for infrastructure projects.
</p>
</div>

{/* Energy */}
<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
<h4 className="text-lg font-semibold text-[#004373] mb-2">
Energy
</h4>
<p className="text-gray-600 text-sm">
Technology and engineering expertise supporting energy systems.
</p>
</div>

</div>


{/* Bottom Text */}
<p className="text-center text-gray-700 mt-14 max-w-4xl mx-auto text-lg leading-relaxed">
Our cross-industry expertise enables Azentro to develop tailored solutions that address 
unique operational and technological challenges across diverse sectors.
</p>

</div>

</section>

{/* SECTION — LET'S BUILD */}

 <section id="contact" className="bg-[#004373] text-white py-24">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

{/* LEFT SIDE — FORM */}
<div className="bg-white rounded-2xl p-6 shadow-lg">

<h3 className="text-[#004373] text-xl font-semibold mb-4">
General Enquiry
</h3>

<form className="space-y-4">

<input
type="text"
placeholder="Full Name"
className="w-full border border-gray-300 rounded-lg px-4 py-3"
/>

<input
type="email"
placeholder="Email Address"
className="w-full border border-gray-300 rounded-lg px-4 py-3"
/>

<input
type="tel"
placeholder="Phone Number"
className="w-full border border-gray-300 rounded-lg px-4 py-3"
/>

<textarea
placeholder="Message / Enquiry"
rows={4}
className="w-full border border-gray-300 rounded-lg px-4 py-3"
/>

<button className="w-full bg-[#004373] text-white py-3 rounded-lg hover:bg-[#0a507f] transition">
Submit Enquiry
</button>

</form>

</div>


{/* RIGHT SIDE — CONTENT */}
<div>

<h2 className="text-3xl md:text-4xl font-semibold mb-6">
Let's Build Together
</h2>

<p className="text-blue-100 text-lg leading-relaxed mb-8">
Azentro operates globally with engineering and technology teams based in{" "}
<span className="text-white font-semibold">United Arab Emirates</span>{" "}
and{" "}
<span className="text-white font-semibold">India</span>.{" "}
Connect with us to discuss your project requirements, consulting needs, or any general enquiry.
</p>

<div className="space-y-4 text-lg">

<p className="font-semibold text-xl">
UAE: +971 509073886
</p>

<p className="font-semibold text-xl">
India: +91 9566184889
</p>

<p className="text-blue-200">
contact@azentro.com
</p>

</div>

{/* SOCIAL ICONS */}
<div className="flex gap-6 mt-6">

<a href="#"><Image src="/icons/linkedin.png" width={40} height={40} alt="LinkedIn"/></a>
<a href="#"><Image src="/icons/instagram.png" width={40} height={40} alt="Instagram"/></a>
<a href="#"><Image src="/icons/x.png" width={40} height={40} alt="X"/></a>

</div>

</div>

</div>

</section>
      </>
  );
}