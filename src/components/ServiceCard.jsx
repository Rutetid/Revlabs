import { useState } from "react";
import { motion } from "motion/react";

const ServiceCard = ({ title, icon, flipContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Use the flipContent passed as prop, or fallback content
  const backContent = flipContent || {
    description: "Comprehensive solution tailored to your needs",
    tagline: "Let's build something amazing together.",
  };

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
        </div>{" "}
        {/* Back Side */}
        <div
          className="flip-card-back absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-indigo-600 rounded-xl p-4 text-white shadow-md"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex flex-col h-full justify-center">
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-xs text-white/95 mb-1 leading-relaxed">
                {backContent.description}
              </p>

              <div className="mt-auto pt-1 border-t border-white/20">
                <p className="text-xs font-semibold text-white/90 italic">
                  {backContent.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
