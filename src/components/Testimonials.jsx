import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useCallback, useRef } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);
  const cardWidth = 420; // Card width + gap
  const cardsToShow = 2; // Number of cards to display at once
  const autoAdvanceInterval = 3000; // 3 seconds

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "CO-FOUNDER",
      company: "EATFRESH",
      quote:
        "RevLabs helped us scale our D2C brand from scratch to ₹5 Cr ARR within six months. The full-stack growth approach—strategy, tech, performance—delivered results faster than we imagined.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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

  const moduloIndex = (index) =>
    ((index % testimonials.length) + testimonials.length) % testimonials.length;

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
  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => moduloIndex(prevIndex + 1));
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => moduloIndex(prevIndex - 1));
  }, []);

  // Setup auto-advance interval
  useEffect(() => {
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Only set up the interval if not paused
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, autoAdvanceInterval);
    }

    // Clean up on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextTestimonial, isPaused]);

  // Pause auto-advance when user interacts with the carousel
  const handleUserInteraction = () => {
    setIsPaused(true);
    // Resume after 5 seconds of inactivity
    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  return (
    <motion.section
      className="bg-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      onHoverStart={() => setIsPaused(true)}
      onHoverEnd={() => setIsPaused(false)}
      id="testimonials"
    >
      <div className="mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 lg:mb-10"
          variants={itemVariants}
        >
          <p className="text-primary text-sm lg:text-md font-medium uppercase tracking-wider mb-4 font-poppins">
            TESTIMONIALS
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-6 font-poppins">
            What Our
            <br />
            <span className="text-text-primary">Satisfied Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={() => {
              prevTestimonial();
              handleUserInteraction();
            }}
            className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-2 lg:p-3 shadow-lg transition-all duration-300 hover:scale-110"
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
            onClick={() => {
              nextTestimonial();
              handleUserInteraction();
            }}
            className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-2 lg:p-3 shadow-lg transition-all duration-300 hover:scale-110"
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
          </button>

          {/* Testimonial Cards Container */}
          <div className="overflow-hidden h-[300px] md:h-[350px] lg:h-[450px] px-8 lg:px-16">
            <div className="flex gap-6 h-full items-center">
              <AnimatePresence initial={false} custom={direction}>
                {/* Mobile: Show only current card, Desktop: Show multiple cards */}
                {(isMobile ? [0] : [-1, 0, 1]).map((offset) => {
                  const adjustedIndex = moduloIndex(currentIndex + offset);
                  const testimonial = testimonials[adjustedIndex];

                  return (
                    <motion.div
                      key={`testimonial-${adjustedIndex}`}
                      custom={direction}
                      initial={{
                        opacity: 0,
                        x: direction * 500,
                      }}
                      animate={{
                        opacity: 1,
                        x: isMobile ? 0 : offset * cardWidth,
                        zIndex: offset === 0 ? 1 : 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: direction * -500,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className={`${
                        isMobile ? "relative" : "absolute"
                      } flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[400px] h-[280px] sm:h-[320px] lg:h-[400px] bg-gradient-to-br ${
                        testimonial.bgColor
                      } rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden`}
                      style={!isMobile ? { left: "calc(50% - 200px)" } : {}}
                    >
                      <div className="flex h-full flex-col md:flex-row">
                        {/* Image */}
                        <div className="w-full md:w-2/5 h-1/3 md:h-full relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl lg:rounded-l-3xl"
                          />
                        </div>
                        {/* Content */}
                        <div className="w-full md:w-3/5 p-4 lg:p-6 flex flex-col justify-center relative h-2/3 md:h-full">
                          {/* Quote Icon */}
                          <div className="mb-2">
                            <svg
                              className="w-4 h-4 lg:w-6 lg:h-6 text-gray-800"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                            </svg>
                          </div>

                          {/* Quote */}
                          <p className="text-gray-800 text-xs sm:text-sm lg:text-sm leading-relaxed mb-3 lg:mb-4 line-clamp-3 lg:line-clamp-4">
                            "{testimonial.quote}"
                          </p>

                          {/* Author Info */}
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm lg:text-base mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-xs lg:text-xs text-gray-700 uppercase tracking-wide">
                              {testimonial.position} - {testimonial.company}
                            </p>
                          </div>

                          {/* Company Logo */}
                          <div className="absolute bottom-3 lg:bottom-4 right-3 lg:right-4">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white/20 rounded-full flex items-center justify-center">
                              <svg
                                className="w-2 h-2 lg:w-3 lg:h-3 text-gray-700"
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
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 lg:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(
                    index > currentIndex % testimonials.length ? 1 : -1
                  );
                  setCurrentIndex(index);
                  handleUserInteraction();
                }}
                className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                  currentIndex % testimonials.length === index
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
