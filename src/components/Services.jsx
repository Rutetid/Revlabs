import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Growth Strategy & GTM",
      flipContent: {
        description:
          "We craft category-defining GTM strategies rooted in market insights, audience behavior & competitive positioning.",
        tagline: "Your product deserves a winning launch.",
      },
      icon: (
        <svg
          className="w-8 h-8"
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
      title: "Aggregator & Marketplace Growth",
      flipContent: {
        description:
          "Scale on platforms like Swiggy, Zomato, Talabat & Careem with deep expertise in performance, ranking & conversion.",
        tagline: "Aggregator dominance, decoded.",
      },
      icon: (
        <svg
          className="w-8 h-8"
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
      title: "Brand Building & Positioning",
      flipContent: {
        description:
          "From zero to cult—we build brands that connect, convert, and scale.",
        tagline: "Clarity + Creativity = Breakthrough Positioning.",
      },
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
          <circle
            cx="12"
            cy="12"
            r="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
          <circle
            cx="12"
            cy="12"
            r="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
        </svg>
      ),
    },
    {
      title: "D2C & Omni-channel Playbooks",
      flipContent: {
        description:
          "Launch and grow your D2C business across q-commerce, retail, and delivery.",
        tagline: "Seamless strategy meets scalable channels.",
      },
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      title: "Creative Content & Performance Marketing",
      flipContent: {
        description:
          "High-converting ads, influencer campaigns, SEO & social content tailored to your growth stage.",
        tagline: "Every click, calculated.",
      },
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="px-10 mx-auto">
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              flipContent={service.flipContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
