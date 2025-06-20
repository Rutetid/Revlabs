import { motion } from "motion/react";

const TrustedBrands = () => {  const brands = [
    {
      name: "48 East",
      logo: "/48East.png",
    },
    {
      name: "Bikanerwala",
      logo: "/BikanerWala_Logo.png",
    },
    {
      name: "Domino's",
      logo: "/Dominos-logo.png",
    },
    {
      name: "Story Coffee",
      logo: "/Story-Coffee.png",
    },
    {
      name: "Swiggy",
      logo: "/Swiggy_logo.png",
    },
    {
      name: "Unacademy",
      logo: "/Unacademy_Logo.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <motion.section
      className="bg-secondary-light py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-lg font-medium uppercase tracking-wider mb-4 font-poppins">
            TRUSTED BY
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 font-poppins">
            30+ Brands Across India & Dubai
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed font-poppins">
            From digital-first startups and consumer brands to legacy
            powerhouses—we’ve helped ambitious businesses scale faster and
            launch with impact.
          </p>
        </div>{" "}
        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-64 px-4"
              >
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter  transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TrustedBrands;
