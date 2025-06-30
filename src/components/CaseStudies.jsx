import React, { useState } from "react";
import { motion } from "motion/react";

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const caseStudies = [
    {
      id: 1,
      companyName: "48East",
      subtitle: "ASIAN CUISINE",
      logo: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center",
      insight: "Co-founded and scaled to acquisition by Swiggy",
      result: "Successfully acquired by Swiggy",
      backgroundColor: "bg-orange-100",
    },
    {
      id: 2,
      companyName: "The Bowl Company",
      subtitle: "HOMELY",
      logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
      insight: "Built and launched under Swiggy New Supply",
      result: "Successful launch and integration",
      backgroundColor: "bg-green-100",
    },
    {
      id: 3,
      companyName: "Swiggy Moments",
      subtitle: "B2B GIFTING",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      insight: "Created Swiggy's B2B gifting vertical from scratch",
      result: "New revenue stream established",
      backgroundColor: "bg-orange-100",
    },
    {
      id: 4,
      companyName: "Swiggy Daily",
      subtitle: "MEAL SUBSCRIPTION",
      logo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&crop=center",
      insight: "Built a home-style meal subscription marketplace",
      result: "Launched subscription service",
      backgroundColor: "bg-orange-100",
    },
    {
      id: 5,
      companyName: "Domino's India",
      subtitle: "CATERING SERVICE",
      logo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&crop=center",
      insight: "Scaled catering as a service across key metros",
      result: "Expanded to multiple cities",
      backgroundColor: "bg-red-100",
    },
    {
      id: 6,
      companyName: "Bikanervala",
      subtitle: "OM SWEETS",
      logo: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center",
      insight: "Took legacy brands online; 6x revenue boost",
      result: "600% revenue increase",
      backgroundColor: "bg-yellow-100",
    },
    {
      id: 7,
      companyName: "Kitchen Centre",
      subtitle: "KITCHEN-AS-A-SERVICE",
      logo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
      insight:
        "Expanded India's largest kitchen-as-a-service from 6 to 45 locations",
      result: "650% location expansion",
      backgroundColor: "bg-purple-100",
    },
    {
      id: 8,
      companyName: "Story Coffee",
      subtitle: "TALL OAKS / EVO CAFE",
      logo: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop&crop=center",
      insight: "Full-stack branding, D2C strategy, footfall growth",
      result: "Increased footfall and brand recognition",
      backgroundColor: "bg-amber-100",
    },
    {
      id: 9,
      companyName: "White Garden",
      subtitle: "CAFE SIRI",
      logo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
      insight: "Led brand revamp and digital marketing strategy",
      result: "Successful brand transformation",
      backgroundColor: "bg-emerald-100",
    },
    // {
    //   id: 10,
    //   companyName: "Trusted by 50+ Brands",
    //   logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
    //   insight: "Delivering exceptional results across diverse industries",
    //   result: "Join our success stories",
    //   backgroundColor: "bg-indigo-100",
    //   isSpecial: true,
    // },
  ];

  // Mobile first: 1 card on mobile, 3 on desktop
  const [itemsPerView, setItemsPerView] = useState(1);

  React.useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // lg and above
      } else {
        setItemsPerView(1); // mobile and tablet
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, caseStudies.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      className="bg-gray-50 pt-20 px-4 sm:px-6 lg:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-md font-medium uppercase tracking-wider mb-4 font-poppins">
            CASE STUDIES
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-primary font-poppins">
            Growth Stories We've Engineered
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 z-10 w-8 h-8 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-4 h-4 lg:w-6 lg:h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 z-10 w-8 h-8 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-4 h-4 lg:w-6 lg:h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>{" "}
          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {" "}
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="w-full lg:w-1/3 flex-shrink-0 px-2 lg:px-4 mb-8 lg:mb-20"
                >
                  <div
                    className={`rounded-2xl overflow-hidden h-full ${
                      study.isSpecial ? "border-2 border-primary" : ""
                    }`}
                  >
                    {/* Image Section */}
                    <div
                      className={`${study.backgroundColor} h-48 lg:h-72 flex items-center justify-center relative`}
                    >
                      <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                          src={study.logo}
                          alt={study.companyName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Content Section */}
                    <div className="p-4 lg:p-6 mt-3 lg:mt-5 rounded-lg border-2">
                      {/* Company Info */}
                      <div className="mb-3 lg:mb-4">
                        <h3 className="text-primary text-base lg:text-lg font-bold font-poppins">
                          {study.companyName}
                        </h3>
                        {study.subtitle && (
                          <p className="text-xs text-gray-500 uppercase tracking-wider font-poppins mt-1">
                            {study.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Insight */}
                      <p className="text-text-secondary text-sm lg:text-md leading-relaxed mb-3 lg:mb-4 font-poppin h-10 lg:h-12">
                        {study.insight}
                      </p>

                      {/* Result */}
                      <div className="mb-4 lg:mb-6">
                        <div className="bg-primary/5 rounded-lg p-3 lg:p-4">
                          <p className="text-primary font-semibold text-xs lg:text-sm font-poppins">
                            {study.result}
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      {!study.isSpecial ? (
                        <button className="w-full border border-primary text-primary font-semibold py-2 lg:py-3 px-4 lg:px-6 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 font-poppins text-sm lg:text-base">
                          View Case Study
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button className="w-full bg-primary text-white font-semibold py-2 lg:py-3 px-4 lg:px-6 rounded-lg hover:bg-primary/80 transition-colors duration-300 flex items-center justify-center gap-2 font-poppins text-sm lg:text-base">
                          Get Started
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;
