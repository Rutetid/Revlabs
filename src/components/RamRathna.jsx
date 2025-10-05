import {
  Users,
  HeartHandshake,
  TrendingUp,
  Activity,
  Star,
  MapPin,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
 

function RamRathna() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-fit pt-6 pb-10 px-8 font-poppins">
      {/* Hero Section */}
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
              <div className="leading-tight">
                <p className="text-2xl md:text-[40px] text-black">RamRathna</p>
                <h1 className="text-2xl md:text-[40px] font-bold text-blue-600">
                  Case Study
                </h1>
              </div>

              <p className="text-lg md:text-xl text-black mt-6">
                How We Built RamRathna From Scratch, and Turned Slow-Moving SKUs
                Into Sell-Out Specials With the Right Strategy.
              </p>

              <p className="text-gray-700 mt-4">
                RamRathna is a neighborhood café built on founder Ramya’s
                childhood food memories — from Coorg-style Akki Roti to Sunday
                meals that shaped her palate. It blends comfort, nostalgia, and
                regional roots into a café setting that feels like home.
              </p>

              {/* Challenge */}
              <div className="bg-white rounded-xl space-y-2 mt-8">
                <h3 className="text-xl font-semibold text-blue-600">
                  Business Challenge
                </h3>
                <p className="text-gray-700">
                  RamRathna came to us with nothing but a story — no name, no
                  logo, no plan. The idea was emotionally powerful, but we had
                  to turn it into a brand that could thrive in a competitive
                  café market. We needed to create identity, build discovery,
                  drive footfall, and make sure that even the slow-moving menu
                  items sold.
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
            <img
              src="./Hubble.png"
              alt="Hubble App"
              className="rounded-t-2xl w-full max-w-[545px] h-auto object-cover"
            />
            <div className="w-full max-w-[530px] h-auto rounded-b-2xl pt-8 flex flex-col sm:flex-row justify-between gap-4 text-sm text-gray-700">
              {[
                { title: "Campaign:", content: "Brand Building & Launch" },
                {
                  title: "Industry:",
                  content: "F&B – Restaurant & Casual Dining",
                },
                {
                  title: "Key Growth Levers:",
                  content:
                    "Hyperlocal Marketing | Storytelling | Aggregator Strategy",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="w-full sm:flex-1 min-h-[100px] flex flex-col justify-start rounded-md bg-blue-50 p-2 text-sm"
                >
                  <p className="text-base font-semibold text-blue-600 mb-1">
                    {item.title}
                  </p>
                  <p className="leading-snug text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Process Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mt-16 px-2"
      >
        <div className="text-center mb-10">
          <p className="text-2xl md:text-[45px] text-black">Our Process</p>
          <p className="text-2xl md:text-[45px] font-bold text-blue-500 mt-8">
            What We Did
          </p>
        </div>

        {/* Process Cards */}
        <div className="w-full max-w-[1080px] mx-auto flex flex-wrap justify-center gap-6">
          {[
            {
              title: "Brand Creation From the Ground Up",
              description:
                "Named the café RamRathna, in memory of the founder’s grandparents, anchoring the brand in legacy and warmth. Built a distinct brand voice rooted in nostalgia, regional pride, and everyday comfort. Delivered logo, brand guide, menu, interiors, and storytelling.",
              tag: "Branding",
            },
            {
              title: "Menu Strategy + Offer Engineering",
              description:
                "Launched Sunday Specials to promote low-selling products. These offers turned slow-movers into sell-outs, with a 150% increase in sales.",
              tag: "Menu",
            },
            {
              title: "End-to-End Social Media Management",
              description:
                "Content, design, reels, and captions crafted to feel personal, not promotional. Highlighted everyday rituals, regional dishes, and emotional connect.",
              tag: "Social",
            },
            {
              title: "Aggregator Handling",
              description:
                "Optimized presence across Swiggy & Zomato with curated menus, updated photos, and listing hygiene to boost discoverability.",
              tag: "Aggregators",
            },
            {
              title: "Hyperlocal BTL Marketing",
              description:
                "Tricycle branding across local hotspots built early awareness. Ground activations made the café feel embedded in the community.",
              tag: "BTL",
            },
            {
              title: "Influencer Marketing & Local Buzz",
              description:
                "Launch-day buzz via culturally aligned creators. Post-launch content kept footfall consistent. Organic buzz drove a housefull Day One.",
              tag: "Influencers",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[320px] group perspective"
            >
              <div className="card-inner relative h-full min-h-[180px]">
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
      </motion.div>

      {/* Impact Section */}

      {/* Results Grid */}
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
        <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          From zero awareness to strong community traction — we matched the
          emotion of the idea with a solid strategy across content, local
          marketing, and operations.
        </p>
      </motion.div>

      {/* Single Row Layout - 4 Cards */}
      <div className="mt-12 max-w-6xl mx-auto overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-w-[700px]">
          {[
            {
              title: "Zero-to-One Brand Recall",
              description:
                "Built brand awareness from scratch through storytelling and hyperlocal activation.",
            },
            {
              title: "Consistent Footfall",
              description:
                "Early visits converted into regulars, helped by aggregator presence and offline visibility.",
            },
            {
              title: "150% Sales Growth",
              description:
                "Sunday offers turned slow movers into sell-outs with a 150% lift in sales.",
            },
            {
              title: "Organic Social Media Growth",
              description:
                "Full social media management led to strong early traction with zero ad spend.",
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

      {/* Closing Takeaway */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full px-4 mt-20 flex justify-center text-center"
      >
        <p className="text-xl sm:text-2xl max-w-4xl text-black">
          Good brands don’t just speak — they remember. RamRathna is proof that
          storytelling and strategy, when rooted in emotion, can drive both
          identity and impact.
          <br />
          {/* <span className="font-bold text-blue-600 mt-4 block">— RevLabs</span> */}
        </p>
      </motion.div>
    </div>
  );
}

export default RamRathna;