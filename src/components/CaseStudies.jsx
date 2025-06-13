import React, { useState } from "react";

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const caseStudies = [
    {
      id: 1,
      companyName: "48East",
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
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      insight: "Created Swiggy's B2B gifting vertical from scratch",
      result: "New revenue stream established",
      backgroundColor: "bg-orange-100",
    },
    {
      id: 4,
      companyName: "Swiggy Daily",
      logo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&crop=center",
      insight: "Built a home-style meal subscription marketplace",
      result: "Launched subscription service",
      backgroundColor: "bg-orange-100",
    },
    {
      id: 5,
      companyName: "Domino's India",
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
    {
      id: 10,
      companyName: "Trusted by 50+ Brands",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
      insight: "Delivering exceptional results across diverse industries",
      result: "Join our success stories",
      backgroundColor: "bg-indigo-100",
      isSpecial: true,
    },
  ];

  const itemsPerView = 3;
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

  return (
    <section className="bg-gray-50 pt-20 px-4 sm:px-6 lg:px-20">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-md font-medium uppercase tracking-wider mb-4 font-montserrat">
            CASE STUDIES
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-primary font-montserrat">
            Growth Stories We've Engineered
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
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
                <div key={study.id} className="w-1/3 flex-shrink-0 px-4 mb-20">
                  <div
                    className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full ${
                      study.isSpecial ? "border-2 border-primary" : ""
                    }`}
                  >
                    {" "}
                    {/* Image Section */}
                    <div
                      className={`${study.backgroundColor}  h-48 flex items-center justify-center relative`}
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
                    <div className="p-6">
                      {/* Company Info */}
                      <div className="mb-4">
                        <h3 className="text-primary text-lg font-bold font-montserrat">
                          {study.companyName}
                        </h3>
                        {study.subtitle && (
                          <p className="text-xs text-gray-500 uppercase tracking-wider font-montserrat mt-1">
                            {study.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Insight */}
                      <p className="text-text-secondary text-sm leading-relaxed mb-4 font-montserrat">
                        {study.insight}
                      </p>

                      {/* Result */}
                      <div className="mb-6">
                        <div className="bg-primary/10 rounded-lg p-4">
                          <p className="text-primary font-semibold text-sm font-montserrat">
                            {study.result}
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      {!study.isSpecial ? (
                        <button className="w-full border-2 border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 font-montserrat">
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
                        <button className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/80 transition-colors duration-300 flex items-center justify-center gap-2 font-montserrat">
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
    </section>
  );
};

export default CaseStudies;
