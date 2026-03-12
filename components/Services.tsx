import Link from "next/link";

export default function Services() {

  const services = [
    {
      title: "Engineering Services",
      desc: "Engineering design, drafting, analysis, modelling and project planning for energy and industrial sectors.",
      link: "/services/engineering"
    },
    {
      title: "Technology Services",
      desc: "Digital product engineering, enterprise applications, cloud platforms and technology consulting.",
      link: "/services/technology"
    },
    {
      title: "Data & AI Intelligence",
      desc: "Business intelligence, analytics platforms and AI solutions that transform enterprise data into insights.",
      link: "/services/data-ai"
    },
    {
      title: "Digital Transformation",
      desc: "Modernizing organizations through automation, digital platforms and integrated technology systems.",
      link: "/services/digital-transformation"
    }
  ];

  return (

    <section className="bg-gray-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          {services.map((service, index) => (

            <Link key={index} href={service.link}>

              <div className="bg-white p-8 shadow-sm rounded-lg hover:shadow-lg transition cursor-pointer">

                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.desc}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>

  );
}