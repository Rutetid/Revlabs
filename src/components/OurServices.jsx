import { useState, useEffect, useRef } from "react";

const OurServices = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  const services = [
    {
      id: "strategic-growth",
      title: "Strategic Growth Consulting",
      description:
        "Market research, audience segmentation & go-to-market planning to accelerate your business growth with data-driven insights.",
      features: [
        "Market Research & Analysis",
        "Audience Segmentation",
        "Go-to-Market Planning",
        "Growth Strategy Development",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      id: "marketplace-growth",
      title: "Aggregator & Marketplace Growth",
      description:
        "Tailored strategies for Swiggy, Zomato, Talabat, Careem & more to maximize your presence and revenue on major platforms.",
      features: [
        "Swiggy & Zomato Optimization",
        "Talabat & Careem Strategies",
        "Platform-Specific Growth Hacks",
        "Revenue Optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      id: "brand-development",
      title: "Brand Development & Positioning",
      description:
        "Craft compelling brand stories that convert & scale, building a strong identity that resonates with your target audience.",
      features: [
        "Brand Strategy & Positioning",
        "Visual Identity Design",
        "Brand Storytelling",
        "Brand Guidelines & Assets",
      ],
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
          />
        </svg>
      ),
    },
    {
      id: "performance-marketing",
      title: "Performance Marketing",
      description:
        "Paid ads, SEO, influencer & retention strategy built around ROI to drive measurable growth and maximize your marketing investment.",
      features: [
        "Paid Advertising Campaigns",
        "SEO & Content Strategy",
        "Influencer Marketing",
        "Customer Retention Programs",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          />{" "}
        </svg>
      ),
    },
    {
      id: "product-tech-consulting",
      title: "Product & Tech Consulting",
      description:
        "Build scalable digital experiences that drive growth with expert guidance on product strategy and technical architecture.",
      features: [
        "Product Strategy & Roadmap",
        "Technical Architecture Review",
        "Scalability Planning",
        "Digital Experience Optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "content-strategy",
      title: "Content Strategy & Creation",
      description:
        "Creative storytelling that engages and sells, crafting compelling content that resonates with your audience and drives conversions.",
      features: [
        "Content Strategy Development",
        "Creative Storytelling",
        "Multi-Channel Content Creation",
        "Content Performance Analytics",
      ],
      image:
        "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
    },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-20">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary text-md font-medium uppercase tracking-wider mb-4 font-montserrat">
            OUR SERVICES
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 font-montserrat">
            Everything You Need to Scale.
            <span className="block">All in One Place.</span>
          </h2>
        </div>

        {/* Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content - Scrollable Sections */}
          <div className="space-y-32 mb-60">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="py-20 flex flex-col justify-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-8">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 font-montserrat">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-8 leading-relaxed font-montserrat">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-white font-medium font-montserrat">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Image - Sticky */}
          <div className="relative">
            <div className="sticky top-28 h-[80vh]">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl h-full w-10/12 relative ml-28">
                {services.map((service, index) => (
                  <img
                    key={service.id}
                    src={service.image}
                    alt={service.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      index === activeSection ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Overlay with service indicator */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="text-white font-bold text-lg font-montserrat">
                      {services[activeSection]?.title}
                    </h4>
                    <div className="flex space-x-2 mt-2">
                      {services.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            index === activeSection
                              ? "bg-primary w-8"
                              : "bg-gray-400 w-2"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
