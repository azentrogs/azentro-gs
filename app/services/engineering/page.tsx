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
"Instrument Hook-up Drawings"
]
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
"Energy Balance Calculations"
]
},
{
title: "Technical Documentation",
description:
"We prepare detailed engineering documentation including specifications, material take-offs and engineering reports required for project execution.",
image: "/services/technical-docs.png",
items: [
"Bill of Materials",
"Electrical Data Sheets",
"Instrument Specifications",
"Material Take Off",
"Piping Specifications",
"Process Design Basis",
"Operating Philosophy"
]
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
"Plant Layout Visualization"
]
},
{
title: "Project Planning",
description:
"Our engineering team supports project planning including schedule development, cost analysis and project monitoring.",
image: "/services/project-planning.png",
items: []
},
{
title: "Procurement Support",
description:
"We assist procurement processes including technical requisitions, vendor evaluation and documentation review.",
image: "/services/procurement-support.png",
items: []
}
];

return (
<>
<div className="bg-[#004373] text-white">

<div className="max-w-7xl mx-auto py-6 px-6">

<h1 className="text-4xl font-bold mb-8 text-center tracking-wide">
Engineering Services
</h1>

<div className="grid md:grid-cols-2 gap-10">

{sections.map((section, index) => (

<div
key={index}
className="sticky top-6 bg-[#287BAE] p-4 rounded-xl shadow-2xl overflow-hidden"
>

<div className="grid grid-cols-1 gap-4">

<h2 className="text-2xl font-semibold">
{section.title}
</h2>

<p className="text-blue-100 text-base leading-relaxed">
{section.description}
</p>

<div className="mt-2">

<Image
  src={section.image}
  alt={section.title}
  width={900}
  height={400}
  className={`rounded-lg w-full object-cover ${
    section.items.length === 0 ? "h-[400px]" : "h-[300px]"
  }`}
/>

{section.items.length > 0 && (

<ul className="grid grid-cols-2 gap-x-8 gap-y-1 text-blue-100 mt-4 text-sm">

{section.items.map((item,i)=>(
<li key={i} className="flex gap-3">

<span className="w-2 h-2 bg-blue-300 rounded-full mt-2"></span>

{item}

</li>
))}

</ul>

)}

</div>

</div>

</div>

))}

</div>

</div>

</div>
</>
);
}