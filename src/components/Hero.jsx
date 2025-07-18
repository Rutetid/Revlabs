import { motion } from "motion/react";

const Hero = () => {
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

  return (
    <motion.section
      className="bg-white pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border-gray-200 border text-black text-md font-medium font-poppins">
            <svg className="w-4 h-4 mr-2" fill="blue" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Let's Talk Growth
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight font-poppins tracking-tight">
          Unlocking Business Growth
          <span className="block">Through Innovation{" "}</span>
           
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-lg text-text-secondary mb-7 max-w-4xl mx-auto leading-relaxed font-poppins">
          We’re an outsourced growth lab that integrates strategy, tech, and
          marketing to scale startups and consumer brands. Built by operators,
          powered by results.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center bg-primary text-white hover:bg-primary-dark px-6 py-3 text-lg font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm hover:shadow-md font-po">
            Schedule Your Growth Audit
            <svg
              className="ml-2 w-5 h-5"
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
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
