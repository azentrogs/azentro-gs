import Image from "next/image";

export default function DigitalTransformation() {

const sections = [
{
title: "Cloud Computing Solutions",
description:
"We design and implement scalable cloud architectures that enable organizations to modernize infrastructure and accelerate digital innovation.",
image: "/services/cloud-data.png",
items: [
"Cloud Architecture Design",
"Cloud Migration Strategies",
"Multi-Cloud & Hybrid Cloud Environments",
"Cloud Infrastructure Management"
]
},
{
title: "Data Engineering",
description:
"We develop enterprise data pipelines and integration frameworks to enable efficient data processing and analytics.",
image: "/services/data-engineering.png",
items: [
"Data Pipeline Development",
"Enterprise Data Integration",
"Real Time Data Processing",
"ETL & ELT Implementation"
]
},
{
title: "Data Analytics",
description:
"Our analytics platforms provide actionable insights through business intelligence dashboards and predictive analytics models.",
image: "/services/data-analytics.png",
items: [
"Business Intelligence Dashboards",
"Predictive Analytics",
"Decision Support Systems",
"KPI Monitoring Platforms"
]
},
{
title: "Automation",
description:
"We implement automation technologies that streamline operations and reduce manual effort across enterprise workflows.",
image: "/services/automation.png",
items: [
"Robotic Process Automation",
"Business Workflow Automation",
"Intelligent Process Automation"
]
},
{
title: "Artificial Intelligence & Machine Learning",
description:
"We develop AI powered systems that enable predictive insights, automation and intelligent decision making.",
image: "/services/ai-ml.png",
items: [
"Predictive Modeling",
"AI Driven Decision Systems",
"Natural Language Processing"
]
},
{
title: "Enterprise System Integration",
description:
"We integrate enterprise platforms and digital ecosystems through secure APIs and scalable architecture.",
image: "/services/system-integration.png",
items: [
"API Integration",
"Enterprise Platform Integration",
"Digital Ecosystem Development"
]
}
];

return (
<>
<div className="bg-[#004373] text-white">

<div className="max-w-7xl mx-auto py-6 px-6">

<h1 className="text-4xl font-bold mb-8 text-center tracking-wide">
Digital Transformation
</h1>

<div className="grid md:grid-cols-2 gap-10">

{sections.map((section, index) => (

<div
key={index}
className="sticky top-8 bg-[#287BAE] p-6 rounded-xl shadow-2xl overflow-hidden min-h-[500px]"
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
  width={1000}
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