import { ThumbsDown, Shield } from "lucide-react";

import {
  Users,
  HeartHandshake,
  TrendingUp,
  Activity,
  Star,
  CalendarCheck,
  Wallet,
  MapPin,
  CalendarHeart,
  Megaphone,
  PenTool,
  Handshake,
} from "lucide-react";

import { motion } from "framer-motion";

 
import { useState } from "react";

function Evo() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-fit pt-6 pb-10 px-8">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-10"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="p-4 bg-white h-full">
            <div className="space-y-4 text-justify  ">
              {/* Headings */}
              <div className="leading-tight">
                <p className="text-2xl md:text-[40px] font-roboto  text-black">
                  Evo
                </p>
                <h1 className="text-2xl md:text-[40px]  font-roboto text-blue-600">
                  Case Study
                </h1>
              </div>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-black mt-6">
                How We Built a Premium Vegetarian Brand From Scratch and Drove
                200+ Covers in Its First Weekend.
              </p>

              {/* Description */}
              <p className="text-gray-700 mt-4">
                Evo is a premium vegetarian fine dining restaurant located in
                Jayanagar, Bangalore. Built for a discerning niche, primarily
                Brahmin and Marwadi families, Evo blends global vegetarian
                cuisine with an elegant, refined dining experience.
              </p>

              {/* Challenge section */}
              <div className="bg-white rounded-xl space-y-2 mt-8">
                <h3 className="text-xl font-semibold text-blue-600">
                  Key Business Challenge
                </h3>
                <p className="text-gray-700">
                  When Evo approached us, there was no name, no logo, no brand —
                  just a strong vision. The goal was to launch a high-end
                  vegetarian restaurant that felt personal, not pretentious.
                  They needed more than marketing; they needed a brand built
                  from scratch, with depth and clarity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center mt-7"
        >
          <div className="bg-white flex flex-col items-center px-2">
            {/* Image */}
            <img
              src="./Hubble.png"
              alt="Hubble App"
              className="rounded-t-2xl w-full max-w-[545px] h-auto object-cover"
            />

            {/* Bottom Info */}
            <div className="w-full max-w-[530px] h-auto rounded-b-2xl pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-stretch gap-4 text-sm text-gray-700">
              {[
                {
                  title: "Campaign:",
                  content:
                    "Event-led Campaigns, New Menu Launches, Brand Positioning & Awareness",
                },
                {
                  title: "Industry:",
                  content: "F&B – Restaurant & Events",
                },
                {
                  title: "Key Growth Levers:",
                  content: "Event Marketing | Social Media Presence",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="w-full sm:flex-1 min-h-[100px] flex flex-col justify-start rounded-md bg-blue-50 p-2 text-sm"
                >
                  <p className="text-base font-semibold text-blue-600 mb-1">
                    {item.title}
                  </p>
                  <p className="line-clamp-3 overflow-hidden leading-snug text-gray-700">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Diagnostic Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mt-16 px-2"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-2xl md:text-[45px]  text-black">
            Before Scaling We Conducted
          </p>
          <p className="text-2xl md:text-[45px] font-bold text-blue-500 mt-8">
            A Detailed Diagnostic Exercise
          </p>
        </div>

        {/* Cards Container */}
        <div className="w-full max-w-[1080px] mx-auto flex flex-col gap-6">
          <div className="flex flex-wrap justify-center items-stretch gap-x-6 gap-y-10">
            {[
              {
                title: "Concept Development",
                description:
                  "We helped name the brand, define its personality, and create a narrative around 'elevated vegetarian dining.' The tone was warm, premium, and niche-friendly.",
                tag: "Branding",
              },
              {
                title: "Visual Identity & Brand Voice",
                description:
                  "Designed a visual system and content voice that felt both aspirational and grounded — no loud colours or overdone copy. Every detail was curated.",
                tag: "Design",
              },
              {
                title: "Launch Strategy",
                description:
                  "From pre-launch teasers to opening weekend campaigns, we built a calendar that generated curiosity without feeling massy. (Can show the Grid)",
                tag: "Strategy",
              },
              {
                title: "Social Media Setup & Content Production",
                description:
                  "Crafted everything in-house from food photography to storytelling reels to copy that spoke directly to Evo’s core audience. (Can add content production samples as a slideshow card)",
                tag: "Social",
              },
              {
                title: "Community Activation",
                description:
                  "Invited the right people — small, trusted, culturally aligned influencers — for previews and soft buzz. Focused on word-of-mouth credibility over paid hype.",
                tag: "Community",
              },
              {
                title: "Offline Launch Moments",
                description:
                  "Designed family-style offline activations to build goodwill with the exact communities Evo wanted to serve. (Can attach the flyers made)",
                tag: "Events",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] lg:w-[320px] group perspective"
              >
                <div className="card-inner relative h-full min-h-[150px]">
                  {/* Front Side */}
                  <div className="absolute w-full h-full bg-white shadow-md rounded-xl border border-blue-400 p-5 backface-hidden z-10 flex flex-col justify-center items-center">
                    <h3 className="text-lg font-semibold text-black text-center">
                      {card.title}
                    </h3>
                    <span className="mt-3 inline-block px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
                      #{card.tag}
                    </span>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full bg-white shadow-md rounded-xl border border-blue-400 px-5 py-2 backface-hidden rotate-y-180  flex   justify-center">
                    <p className="text-gray-700 text-sm whitespace-pre-wrap">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Cards Section */}

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full px-4 mt-32 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
          Impact <span className="text-blue-600">(Data-Driven Results)</span>
        </h2>
      </motion.div>

      {/* Single Row Layout - 4 Cards */}
      <div className="mt-12 max-w-6xl mx-auto overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-w-[700px]">
          {[
            {
              title: "200+ Covers in Opening Weekend",
              description:
                "Strong bookings without deep discounts purely on the back of brand presence and buzz.",
            },
            {
              title: "Social Media Foundation Set",
              description:
                "Followers and engagement were built entirely organically. Premium content + storytelling ensured real traction from Day 1.",
            },
            {
              title: "Brand Perception Win",
              description:
                "Core audience (Brahmin, Marwadi, and vegetarian diners) praised Evo as “premium, but personal” – exactly what we aimed for.",
            },
            {
              title: "Community-Led Growth",
              description:
                "Early footfall included large family groups and regulars who connected with the brand’s values, not just the food.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-b from-blue-600 to-white rounded-xl shadow-lg border border-blue-100 text-center"
            >
              <p className="text-black font-bold text-xl md:text-2xl">
                {item.title}
              </p>
              <p className="text-gray-700 mt-2 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full px-4 mt-16 flex justify-center"
      >
        <p className="text-lg sm:text-xl text-center max-w-3xl text-black">
          Evo didn’t need loud marketing. It needed the right kind of presence,
          elegant, niche-aware, and culturally intuitive. We didn’t chase
          virality, we built resonance.
        </p>
      </motion.div>
    </div>
  );
}

export default Evo;