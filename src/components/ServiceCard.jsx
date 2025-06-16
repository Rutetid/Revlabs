import { useState } from "react";
import { motion } from "motion/react";

const ServiceCard = ({ title, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Sample back content - you can customize this
  const getBackContent = (title) => {
    const backData = {
      "Web Development": {
        description: "Full-stack web applications with modern frameworks",
        features: ["React/Next.js", "Node.js APIs", "Database Design"],
        price: "Starting from $5k",
      },
      "Mobile Development": {
        description: "Native and cross-platform mobile applications",
        features: ["iOS & Android", "React Native", "App Store Deployment"],
        price: "Starting from $8k",
      },
      "Cloud Solutions": {
        description: "Scalable cloud infrastructure and deployment",
        features: ["AWS/Azure", "DevOps", "Auto-scaling"],
        price: "Starting from $3k",
      },
      "Gen AI Product": {
        description: "AI-powered solutions and intelligent automation",
        features: ["Machine Learning", "NLP Integration", "Custom AI Models"],
        price: "Starting from $10k",
      },
      "Tech Modernisation": {
        description: "Legacy system upgrades and optimization",
        features: ["Code Refactoring", "Performance Boost", "Security Updates"],
        price: "Starting from $7k",
      },
      Consulting: {
        description: "Strategic technology guidance and planning",
        features: ["Architecture Review", "Tech Strategy", "Team Training"],
        price: "Starting from $2k",
      },
    };

    return (
      backData[title] || {
        description: "Comprehensive solution tailored to your needs",
        features: [
          "Custom Development",
          "Quality Assurance",
          "Ongoing Support",
        ],
        price: "Contact for pricing",
      }
    );
  };

  const backContent = getBackContent(title);

  return (
    <div
      className="flip-card h-48 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="flip-card-inner w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="flip-card-front absolute inset-0 w-full h-full bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-indigo-100 group"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col items-center text-center h-full justify-center">
            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-3 text-primary group-hover:bg-indigo-100 transition-colors duration-300">
              {icon}
            </div>
            <h3 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-xs text-gray-500 mt-2">Click to see details</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="flip-card-back absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-indigo-600 rounded-xl p-4 text-white shadow-md"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold">{title}</h3>
              <button className="text-white/80 hover:text-white text-xs">
                ×
              </button>
            </div>

            <p className="text-xs text-white/90 mb-3 line-clamp-2">
              {backContent.description}
            </p>

            <div className="flex-1 pb-1">
              <ul className="space-y-1">
                {backContent.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-xs text-white/80 flex items-center"
                  >
                    <span className="w-1 h-1 bg-white/60 rounded-full mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-3 border-t border-white/20">
              <p className="text-xs font-semibold text-white">
                {backContent.price}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
