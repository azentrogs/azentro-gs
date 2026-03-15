import Image from "next/image";

export default function BusinessStrategy() {

const sections = [
{
title: "Business Analysis",
description:
"We help organizations understand their business requirements, map operational processes, and analyze performance to enable informed decision making.",
image: "/services/business-analysis.png",
items: [
"Requirement Gathering & Stakeholder Analysis",
"Business Process Mapping",
"Functional & Technical Documentation",
"Operational Performance Analysis"
]
},
{
title: "Business Process Optimization",
description:
"We improve operational efficiency by analyzing workflows, eliminating inefficiencies and implementing process automation strategies.",
image: "/services/process-optimization.png",
items: [
"Workflow Optimization",
"Process Automation Strategies",
"Operational Efficiency Improvements",
"Digital Process Transformation"
]
},
{
title: "Strategic Advisory",
description:
"Our consultants support leadership teams with strategic insights, market analysis and technology roadmaps to enable sustainable growth.",
image: "/services/strategic-advisory.png",
items: [
"Market Analysis & Competitive Positioning",
"Product & Technology Strategy",
"Digital Transformation Roadmaps",
"Business Model Innovation"
]
},
{
title: "Enterprise Solutions Consulting",
description:
"We guide organizations in implementing enterprise systems and technology platforms aligned with long-term business objectives.",
image: "/services/enterprise-solutions.png",
items: [
"Enterprise Systems Implementation",
"ERP & Technology Platform Advisory",
"Organizational Transformation Strategies",
"Enterprise Architecture Planning"
]
}
];

return (
<>
<div className="bg-[#004373] text-white">

<div className="max-w-7xl mx-auto py-6 px-6">

<h1 className="text-4xl font-bold mb-8 text-center tracking-wide">
Business Strategy & Solutions
</h1>

<div className="grid md:grid-cols-2 gap-10">

{sections.map((section, index) => (

<div
key={index}
className="sticky top-6 bg-[#287BAE] p-6 rounded-xl shadow-2xl overflow-hidden min-h-[500px]"
>

<h2 className="text-2xl font-semibold mb-2">
{section.title}
</h2>

<p className="text-blue-100 text-base leading-relaxed mb-4">
{section.description}
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">

<Image
  src={section.image}
  alt={section.title}
  width={700}
  height={400}
  className={`rounded-lg w-full h-[200px] md:h-[350px] ${
    index % 2 !== 0 ? "md:order-2" : ""
  } object-contain md:object-cover`}
/>

{section.items.length > 0 && (

<ul
className={`grid grid-cols-1 gap-y-2 text-blue-100 text-[15px] md:text-[16px] leading-relaxed ${
index % 2 !== 0 ? "md:order-1" : ""
}`}
>

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

))}

</div>

</div>

</div>
</>
);
}