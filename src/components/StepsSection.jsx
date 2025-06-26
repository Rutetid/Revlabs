import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    step: "(Step 1)",
    title: "Discovery",
    description:
      "Together, we dive into your world. A brainstorming session where your challenges meet our creative thinking",
    subtitle: "We learn from you",
    icon: (
      <svg
        className="w-16 h-16 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
  },
  {
    step: "(Step 2)",
    title: "Analysis",
    description:
      "We craft a tailored action plan that aligns with your budget and requirements – no guesswork, just solutions",
    subtitle: "We strategize with precision",
    icon: (
      <svg
        className="w-16 h-16 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    step: "(Step 3)",
    title: "Execution",
    description:
      "It's go time. Our team gets to work, setting plans into motion, turning ideas into real-world impact",
    subtitle: "We deliver results",
    icon: (
      <svg
        className="w-16 h-16 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
        />
      </svg>
    ),
  },
];

const StepsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {steps.map((step, index) => {
          const stepLength = 1 / steps.length;
          const start = index * stepLength;
          const end = start + stepLength;

          const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);
          const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);

          return (
            <motion.div
              key={index}
              style={{
                y,
                scale,
                zIndex: index + 1,
              }}
              className="absolute top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none "
            >
              <div className="bg-black w-full mx-auto pointer-events-auto ">
                <motion.div
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className=" transition-all duration-500 pt-28 "
                >
                  <div className="flex flex-col lg:flex-row  gap-12 h-96">
                    {/* Left: Step Number and Title */}
                    <div className="lg:w-4/12 flex-row flex justify-center pl-20">
                      <div className="text-white text-xl font-medium mb-4">
                        {step.step}
                      <h3 className="text-4xl lg:text-6xl font-bold text-white leading-tight pt-2">
                        {step.title}
                      </h3>
                      </div>
                    </div>

                    {/* Right: Description */}
                    <div className="flex-1 ">
                      <div className="flex w-[800px]">
                      <h4 className="text-2xl lg:text-3xl text-white mb-12 leading-relaxed w-8/12">
                        {step.description}.
                      </h4>
                        <div className={"w-4/12 px-10 py-"}>
                          <img src="/telescope.png" alt={"img"}/>
                        </div>
                      </div>
                      <hr className="w-[800px] border-white/20"/>
                      <p className="text-white font-lg text-2xl my-6">
                        {step.subtitle}
                      </p>
                      <hr className="w-[800px] border-white/20 " />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StepsSection;
