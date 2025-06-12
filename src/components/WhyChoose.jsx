import { useState } from "react";

const WhyChoose = () => {
  const [hoveredSection, setHoveredSection] = useState(0);

  const reasons = [
    {
      id: "skilled-builders",
      title: "Skilled product builders Only",
      description:
        "RevLabs is a curated team of product and tech experts, featuring top talent from India's leading unicorns like Flipkart, Swiggy, and Ola, and alumni from IITs, NITs, and IIMs—all with a proven record of driving business growth.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "drive-growth",
      title: "Drive growth, without growing costs",
      description:
        "We follow iterative development process and expertise in open source platform. Thus we help you maximise your ROI with quicker go-to-market, but without growing your tech cost.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "fast-delivery",
      title: "Fast kickoff, faster deliver",
      description:
        "We in-house team allow us to get the project kickoff within 3-5 days. Years of experience further enable us to build projects quickly and deliver results fast.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-20">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            {/* Header */}
            <div className="mb-12">
              <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4 font-montserrat">
                WHAT LEAD US
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-text-primary font-montserrat">
                Why Choose RevLabs Only
              </h2>
            </div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div
                  key={reason.id}
                  className={`relative pl-8 transition-all duration-300 cursor-pointer ${
                    hoveredSection === index ? "opacity-100" : "opacity-40"
                  }`}
                  onMouseEnter={() => setHoveredSection(index)}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-2 w-4 h-4 rounded-full transition-all duration-300 ${
                      hoveredSection === index ? "bg-primary" : "bg-gray-300"
                    }`}
                  ></div>

                  {/* Timeline line */}
                  {index < reasons.length - 1 && (
                    <div className="absolute left-2 top-6 w-px h-16 bg-gray-200"></div>
                  )}

                  {/* Content */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 font-montserrat">
                      {reason.title}
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed font-montserrat">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Content */}
          <div className="relative">
            {/* Image Gallery */}
            <div className="relative h-full py-10 rounded-2xl overflow-hidden shadow-lg">
              {reasons.map((reason, index) => (
                <img
                  key={reason.id}
                  src={reason.image}
                  alt={reason.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === hoveredSection ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Decorative dots */}
              <div className="absolute top-4 right-4">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-white/50 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
