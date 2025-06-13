import { useState, useEffect } from "react";
import { motion } from "motion/react";

const Stats = () => {
  const stats = [
    {
      number: 30,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      number: 20,
      suffix: "+",
      label: "Clients Served",
    },
    {
      number: 5,
      suffix: "+",
      label: "Countries & Expanding",
    },
    {
      number: 35,
      suffix: "+",
      label: "Experienced Team Members",
    },
  ];

  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0));

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

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(
          Math.round(increment * currentStep),
          stat.number
        );

        setAnimatedNumbers((prev) => {
          const newNumbers = [...prev];
          newNumbers[index] = newValue;
          return newNumbers;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, []);

  return (
    <motion.section
      className="bg-primary py-20 px-4 sm:px-6 lg:px-8 mt-10 font-poppins"
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 ">
                {animatedNumbers[index]}
                {stat.suffix}
              </div>
              <div className="text-lg text-white/80 font-medium ">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;
