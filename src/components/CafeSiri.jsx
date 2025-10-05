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

function CafeSiri() {
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
            <div className="space-y-4 text-justify">
              {/* Headings */}
              <div className="leading-tight">
                <p className="text-2xl md:text-[40px] font-roboto text-black">
                  Café Siri
                </p>
                <h1 className="text-2xl md:text-[40px] font-roboto text-blue-600">
                  Case Study
                </h1>
              </div>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-black mt-6">
                From Local Favourite to Foodie Destination: A Brand Reset That
                Worked
              </p>

              {/* Description */}
              <p className="text-gray-700 mt-4">
                Café Siri is a South Indian café in AECS Layout, Bangalore,
                known for its millet-first menu, comforting flavours, and
                no-fuss vibe. It’s the kind of place that keeps families,
                students, and professionals coming back for food that feels both
                familiar and wholesome.
              </p>

              {/* Challenge section */}
              <div className="bg-white rounded-xl space-y-2 mt-8">
                <h3 className="text-xl font-semibold text-blue-600">
                  Brand Challenge
                </h3>
                <p className="text-gray-700">
                  Café Siri had strong recall offline but limited digital
                  traction. Its social presence was generic, aggregator listings
                  unoptimised, and perception boxed it in as “just another South
                  Indian place.” The challenge was to broaden the appeal without
                  losing what made it special — while converting visibility into
                  orders and footfall.
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
                    "Digital Brand Reset – Influencer Marketing, Instagram Overhaul, Aggregator Optimisation, Offer-led Conversions",
                },
                {
                  title: "Industry:",
                  content: "F&B – Casual Dining",
                },
                {
                  title: "Key Growth Levers:",
                  content:
                    "Influencer Marketing | Content Refresh | Aggregator Optimisation | Offer Campaigns",
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
          <p className="text-2xl md:text-[45px] text-black">
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
                title: "Influencer Campaigns",
                description:
                  "Reframed Café Siri as more than just a traditional spot, highlighting fusion items, street-style dishes, and crowd-pleasers.",
                tag: "Influencers",
              },
              {
                title: "Instagram Overhaul",
                description:
                  "Built a consistent visual direction with reels, static posts, and menu storytelling that captured the café’s variety.",
                tag: "Social",
              },
              {
                title: "Aggregator Optimisation",
                description:
                  "Refined Swiggy, Zomato, and Google My Business listings for photos, accuracy, and improved discoverability.",
                tag: "Digital",
              },
              {
                title: "Offer-driven Campaigns",
                description:
                  "Designed content around offers to directly drive orders, redemptions, and offline conversions.",
                tag: "Growth",
              },
              {
                title: "Brand Positioning Reset",
                description:
                  "Shifted the perception from “just another South Indian place” to “Café Siri has it all.”",
                tag: "Branding",
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
                  <div className="absolute w-full h-full bg-white shadow-md rounded-xl border border-blue-400 px-5 py-2 backface-hidden rotate-y-180 flex justify-center">
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

      {/* Results Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full px-4 mt-32 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
          Within 9 Months of Brand Reset
          <br />
          Here Were Our <span className="text-blue-600">Results</span>
        </h2>
      </motion.div>

      <div className="mt-12 max-w-5xl mx-auto flex flex-col md:flex-row text-center bg-gradient-to-b from-blue-600 to-white rounded-xl overflow-hidden shadow-lg">
        <div className="flex-1 p-6 border-b md:border-b-0 md:border-r sm:border-blue-400 border-blue-100">
          <p className="text-black font-bold text-4xl md:text-5xl">2x</p>
          <p className="text-gray-700 mt-2">
            Increase in dish visibility & clicks on aggregators
          </p>
        </div>
        <div className="flex-1 p-6 border-b md:border-b-0 md:border-r sm:border-blue-400 border-blue-100">
          <p className="text-black font-bold text-4xl md:text-5xl">
            ↑ Footfall
          </p>
          <p className="text-gray-700 mt-2">
            Significant student & group diner growth post campaigns
          </p>
        </div>
        <div className="flex-1 p-6">
          <p className="text-black font-bold text-4xl md:text-5xl">Boost</p>
          <p className="text-gray-700 mt-2">
            In offer redemptions via influencer collabs & promos
          </p>
        </div>
      </div>

      {/* Takeaway */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 ml-4 flex flex-col justify-center items-center leading-tight text-center md:text-left"
      >
        <p className="text-lg md:text-2xl text-black mt-2 text-center max-w-4xl">
          Café Siri didn’t need a rebrand — it just needed to be seen clearly.
          With the right stories, sharper content, and strategic partnerships,
          we shifted perception without changing the soul of the place.
        </p>
      </motion.div>
    </div>
  );
}

export default CafeSiri;