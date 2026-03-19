import Image from "next/image";

export default function EngineeringServices() {
  const sections = [
    {
      title: "Engineering Designs & Drawings",
      description:
        "We provide detailed engineering drawings and layouts required for construction, installation and project execution.",
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
        "Our engineering team performs technical calculations and system evaluations.",
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
        "We prepare detailed engineering documentation required for project execution.",
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
        "We develop detailed 3D engineering models and digital visualizations.",
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
        "Structured planning, scheduling, and monitoring for project success.",
      image: "/services/planning.png",
      items: [
        "Project Organization Chart",
        "WBS Development",
        "Schedule Development",
        "Cost Flow Analysis",
        "S-Curve Generation",
        "Progress Monitoring",
      ],
    },
    {
      title: "Procurement Support",
      description:
        "Supporting procurement through technical documentation and vendor coordination.",
      image: "/services/Procurement.png",
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
            "Material Requisition (MR)",
            "Vendor Offer Comparison",
            "PO Technical Attachments",
          ],
        },
        {
          heading: "Material Management",
          items: [
            "MTO Verification",
            "VDR Management",
            "ITP Review",
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-[#004373] text-white">
      <div className="max-w-7xl mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Engineering Services
        </h1>

        <div className="grid md:grid-cols-2 gap-16">
          {sections.map((section, index) => (
            
            <div
              key={index}
              className="sticky top-10 w-full"
              style={{
                zIndex: 20 + index,
                    }}
            >
              <div className="relative bg-[#287BAE] p-6 md:p-6 p-5 rounded-xl shadow-2xl overflow-hidden h-[580px] md:h-[580px]">

                {/* TEXT */}
                <div className="relative z-10 max-w-[70%] md:max-w-[65%] h-full overflow-y-auto pr-2">
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
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  )}

                  {/* GROUP ITEMS (PROCUREMENT) */}
                  {section.groups &&
                    section.groups.map((group, i) => (
                      <div key={i} className="mt-4">
                        <h3 className="font-semibold">{group.heading}</h3>
                        <ul className="space-y-2 text-blue-100">
                          {group.items.map((item, j) => (
                            <li key={j}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>

                {/* IMAGE RIGHT BOTTOM */}
                <div className="absolute bottom-15 right-0 w-[55%] h-[60%]">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* LEFT GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#287BAE] via-[#287BAE]/90 to-transparent"></div>

                {/* TOP FADE */}
                <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-[#287BAE] via-[#287BAE]/80 to-transparent"></div>

              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}