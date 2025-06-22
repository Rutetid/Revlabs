// StepsSection.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    title: 'Step 1: Discovery',
    description:
      'Together, we dive into your world. A brainstorming session where your challenges meet our creative thinking.',
  },
  {
    title: 'Step 2: Analysis',
    description:
      'We craft a tailored action plan that aligns with your budget and requirements – no guesswork, just solutions.',
  },
  {
    title: 'Step 3: Execution',
    description:
      "It's go time. Our team gets to work, setting plans into motion, turning ideas into real-world impact.",
  },
];

export default function StepsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {steps.map((step, index) => {
          const stepLength = 1 / steps.length;
          const start = index * stepLength;
          const end = start + stepLength;

          const y = useTransform(scrollYProgress, [start, end], ['150px', '0px']);
          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);

          return (
            <motion.div
              key={index}
              style={{
                y,
                opacity,
                scale,
                zIndex: index + 1,
              }}
              className="absolute top-0 left-0 w-full h-screen flex items-end justify-center pointer-events-none"
            >
              <div className="bg-black w-full border-t border-gray-700 shadow-lg p-16 text-center pointer-events-auto">
                <h2 className="text-5xl font-extrabold mb-6 text-white">{step.title}</h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
