import Image from "next/image";

export default function TechnologyServices() {

const sections = [
{
title: "UI / UX Design",
description:
"We design intuitive digital experiences that focus on usability, accessibility and engaging user interactions.",
image: "/services/ui-ux.png",
items: [
"Human Centered Experience Design",
"User Journey Mapping",
"Interface Design & Prototyping",
"Usability Testing & Optimization"
]
},
{
title: "Full Stack Engineering",
description:
"We build end-to-end software systems covering frontend interfaces, backend services, APIs, and database architecture.",
image: "/services/full-stack.png",
items: [
"Frontend Engineering",
"Backend Systems",
"API Integration",
"Database Architecture"
]
},
{
title: "Digital Applications",
description:
"We design and develop scalable digital applications including enterprise software, web platforms, and mobile solutions.",
image: "/services/app.png",
items: [
"Enterprise Application ",
"Web Application",
"Mobile Application",
"SaaS Platform"
]
},
{
title: "Software Testing & QA",
description:
"We ensure software quality through comprehensive testing strategies including automation, performance and security testing.",
image: "/services/testing-qa.png",
items: [
"Functional Testing",
"Automation Testing",
"Performance Testing",
"Security Testing"
]
},
{
title: "DevOps & Cloud Deployment",
description:
"Our DevOps experts implement automation pipelines and cloud deployment strategies for continuous delivery.",
image: "/services/devops.png",
items: [
"CI/CD Pipeline Implementation",
"Infrastructure Automation",
"Cloud Deployment Strategies",
"System Monitoring"
]
},
{
title: "Cyber Security",
description:
"We implement strong security frameworks that protect applications, systems and enterprise data.",
image: "/services/cyber-security.png",
items: [
"Application Security Architecture",
"Threat Monitoring & Prevention",
"Security Vulnerability Assessments"
]
}
];

return (
<>
<div className="bg-[#004373] text-white">

<div className="max-w-7xl mx-auto py-6 px-6">

<h1 className="text-4xl font-bold mb-8 text-center tracking-wide">
Technology Services
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
className="rounded-lg w-full object-cover h-[300px]"
/>

<ul className="grid grid-cols-2 gap-x-8 gap-y-1 text-blue-100 mt-4 text-sm">

{section.items.map((item,i)=>(
<li key={i} className="flex gap-3">

<span className="w-2 h-2 bg-blue-300 rounded-full mt-2"></span>

{item}

</li>
))}

</ul>

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