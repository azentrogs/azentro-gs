import Image from "next/image";

export default function EngineeringServices() {
  const sections = [
    {
      title: "Engineering Designs & Drawings",
      description:
        "We provide detailed engineering drawings and layouts required for construction, installation and project execution across electrical, instrumentation, piping and process engineering disciplines.",
      image: "/services/design-drawings.png",
      items: [
        "Single Line Diagrams",
        "Piping Isometric Drawings",
        "Substation Layouts",
        "Cable Routing Layouts",
        "Wiring Diagrams",
        "Process Flow Diagrams",
        "Instrument Hook-up Drawings",
      ],
    },
    {
      title: "Engineering Analysis",
      description:
        "Our engineering team performs technical calculations and system evaluations to ensure safe, reliable and optimized engineering designs.",
      image: "/services/engineering.png",
      items: [
        "Earthing Calculations",
        "Cable Sizing",
        "Power Load Calculations",
        "Voltage Drop Calculations",
        "Control Valve Sizing",
        "Pipe Stress Analysis",
        "Energy Balance Calculations",
      ],
    },
    {
      title: "Technical Documentation",
      description:
        "We prepare detailed engineering documentation including specifications, material take-offs and engineering reports required for project execution.",
      image: "/services/technical-docs1.png",
      items: [
        "Bill of Materials",
        "Electrical Data Sheets",
        "Instrument Specifications",
        "Material Take Off",
        "Piping Specifications",
        "Process Design Basis",
        "Operating Philosophy",
      ],
    },
    {
      title: "Modeling & Visualization",
      description:
        "We develop detailed 3D engineering models and digital visualizations to support design coordination and project planning.",
      image: "/services/modeling-visualization.png",
      items: [
        "PDMS / AVEVA E3D Modeling",
        "Dialux Lighting Simulation",
        "ETAP Power System Studies",
        "AutoCAD Plant 3D",
        "Navisworks Clash Detection",
        "Plant Layout Visualization",
      ],
    },
    {
      title: "Project Planning",
      description:
        "Our engineering team supports successful project execution through structured planning, scheduling, and performance monitoring.",
      image: "/planning.png",
      items: [
        "Project Organization Chart Preparation",
        "Work Breakdown Structure (WBS) Development",
        "Tentative Project Schedule Development",
        "Planned Cost Flow Analysis",
        "Planned S-Curve Generation",
        "Project Progress Monitoring",
      ],
    },
    {
      title: "Procurement Support",
      description:
        "We assist project teams during procurement by delivering precise technical documentation and ensuring smooth vendor coordination.",
      image: "/Procurement.png",
      groups: [
        {
          heading: "Vendor Documentation",
          items: [
            "Technical Requisition Preparation",
            "Vendor Data Review",
            "Technical Bid Evaluation",
          ],
        },
        {
          heading: "Procurement Engineering",
          items: [
            "Material Requisition (MR) Preparation",
            "Vendor Offer Comparison",
            "Purchase Order Technical Attachments",
          ],
        },
        {
          heading: "Material Management",
          items: [
            "Material Take-Off (MTO) Verification",
            "Vendor Document Register (VDR)",
            "Inspection & Test Plan (ITP) Review",
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-[#004373] text-white">
      <div className="max-w-7xl mx-auto py-6 px-6">
        <h1 className="text-4xl font-bold mb-8 text-center tracking-wide">
          Engineering Services
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative bg-[#287BAE] p-6 rounded-xl shadow-2xl overflow-hidden min-h-[520px]"
            >
              {/* CONTENT */}
              <div className="relative z-10 max-w-[65%]">
                <h2 className="text-2xl font-semibold mb-2">
                  {section.title}
                </h2>

                <p className="text-blue-100 mb-4">
                  {section.description}
                </p>

                {/* NORMAL ITEMS */}
                {section.items && (
                  <ul className="space-y-2 text-blue-100">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="w-2 h-2 bg-blue-300 rounded-full mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* GROUPED ITEMS (PROCUREMENT) */}
                {section.groups &&
                  section.groups.map((group, i) => (
                    <div key={i} className="mt-4">
                      <h3 className="font-semibold mb-1">
                        {group.heading}
                      </h3>
                      <ul className="space-y-2 text-blue-100">
                        {group.items.map((item, j) => (
                          <li key={j} className="flex gap-3">
                            <span className="w-2 h-2 bg-blue-300 rounded-full mt-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>

              {/* IMAGE RIGHT BOTTOM */}
              <div className="absolute bottom-0 right-0 w-[55%] h-[60%]">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* LEFT GRADIENT (TEXT CLEAR) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#287BAE] via-[#287BAE]/90 to-transparent"></div>

              {/* TOP FADE */}
              <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-[#287BAE] via-[#287BAE]/80 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}