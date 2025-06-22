import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "CO-FOUNDER",
      company: "EATFRESH",
      quote:
        "RevLabs helped us scale our D2C brand from scratch to ₹5 Cr ARR within six months. The full-stack growth approach—strategy, tech, performance—delivered results faster than we imagined.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bgColor: "from-purple-300 to-pink-100",
    },
    {
      id: 2,
      name: "Rajat Mehra",
      position: "CEO",
      company: "KITCHEN CENTRE",
      quote:
        "Beyond launching our cloud kitchen concept digitally, RevLabs completely reimagined our brand positioning and GTM playbook. Customer acquisition is now 3× more efficient than our old model.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bgColor: "from-blue-300 to-cyan-100",
    },
    {
      id: 3,
      name: "Neha Kapoor",
      position: "MARKETING HEAD",
      company: "DOMINO'S INDIA",
      quote:
        "We approached RevLabs to build our catering vertical at scale. They devised a custom strategy, stood up operations, and helped us open 30+ corporate clients in under 90 days.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bgColor: "from-green-300 to-emerald-100",
    },
    {
      id: 4,
      name: "Aman Verma",
      position: "HEAD OF GROWTH",
      company: "SWIGGY MOMENTS",
      quote:
        "Their neutral, operator-led guidance helped us change course quickly. When scaling into marketplaces, the performance engine RevLabs built delivered a 4× increase in monthly orders.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bgColor: "from-orange-300 to-yellow-100",
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
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.section
      className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-10" variants={itemVariants}>
          <p className="text-primary text-md font-medium uppercase tracking-wider mb-4 font-poppins">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 font-poppins">
            What Our
            <br />
            <span className="text-text-primary">Satisfied Clients Say</span>
          </h2>{" "}
        </motion.div>{" "}
        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {" "}
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
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
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
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
          </button>
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-3xl h-[500px] relative">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="bg-white shadow-lg absolute inset-0"
              >
                <div
                  className={`flex flex-col md:flex-row min-h-[300px] h-[500px] bg-gradient-to-br ${testimonials[currentIndex].bgColor}`}
                >
                  {/* Left Side - Photo */}
                  <div className="md:w-2/5 relative p-5">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>

                  {/* Right Side - Content */}
                  <div className="md:w-3/5 p-8 flex flex-col justify-center relative">
                    {/* Quote Icon */}
                    <div className="pb-10">
                      <svg
                        className="w-12 h-12 text-black/80"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 text-lg leading-relaxed font-poppins mb-6 pr-16">
                      "{testimonials[currentIndex].quote}"
                    </p>

                    {/* Author Info */}
                    <div>
                      <h4 className="font-bold text-text-primary text-xl font-poppins mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-gray-600 font-poppins uppercase tracking-wide">
                        {testimonials[currentIndex].position} -{" "}
                        {testimonials[currentIndex].company}
                      </p>
                    </div>

                    {/* Company Logo/Icon - Optional */}
                    <div className="absolute bottom-6 right-6">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
