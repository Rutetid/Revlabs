import { motion } from "framer-motion";
 

function TallOaks() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-fit pt-6 pb-10 px-8">
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
              {/* Headings */}
              <div className="leading-tight">
                <p className="text-2xl md:text-[40px] font-roboto text-black">
                  Tall Oaks
                </p>
                <h1 className="text-2xl md:text-[40px] font-roboto text-blue-600">
                  Case Study
                </h1>
              </div>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-black mt-6">
                How We Helped Tall Oaks Increase Footfall, Visibility, and
                Revenue With the Right Kind of Marketing.
              </p>

              {/* Description */}
              <p className="text-gray-700 mt-4">
                Tall Oaks is a nature-led dining destination in Whitefield,
                Bangalore. Known for its sprawling open-air space, it's a
                restaurant that blurs the lines between a meal out and a
                slow-living experience, perfect for families, groups, and solo
                diners alike.
              </p>

              {/* Challenge */}
              <div className="bg-white rounded-xl space-y-2 mt-8">
                <h3 className="text-xl font-semibold text-blue-600">
                  Brand Challenge
                </h3>
                <p className="text-gray-700">
                  When we started working with Tall Oaks, the brand had
                  potential but lacked traction, both online and offline. The
                  problem? Low social presence, an unclear brand voice, weak
                  visibility for events, and no strong recall in a crowded
                  market. People liked it once they discovered it, but
                  discoverability was the issue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Snapshot */}
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
                  content:
                    "Event Marketing | Social Media Presence | Collaborations | Influencer + OOH Strategy",
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

      {/* Our Process Section */}
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
            What We Did To Reframe Tall Oaks
          </p>mt-8
          <p className="text-2xl md:text-[45px] font-bold text-blue-500 ">
            Our Process
          </p>
        </div>

        {/* Cards */}
        <div className="w-full max-w-[1080px] mx-auto flex flex-wrap justify-center items-stretch gap-x-6 gap-y-10">
          {[
            {
              title: "Brand Communication Reboot",
              description:
                "Streamlined the messaging across platforms — focused on ‘nature as luxury’ instead of just food. Reframed Tall Oaks as a calm experience, not just a restaurant.",
              tag: "Branding",
            },
            {
              title: "Content-Led Social Strategy",
              description:
                "Built content around ambient dining, nature sounds, and soulful storytelling. Strong push on Reels + stories shifted perception to a weekend ritual.",
              tag: "Social",
            },
            {
              title: "Event Marketing",
              description:
                "Curated campaigns like Hug A Tree (Earth Day), Coastal Fiesta, and Weekend Breakfast Launch — driving footfall and unlocking new revenue streams.",
              tag: "Events",
            },
            {
              title: "Collaborations & IRL Experiences",
              description:
                "Partnered with the Run Scene, hosted workshops (like dumpling making), and increased dwell time through experiential dining.",
              tag: "Experiential",
            },
            {
              title: "Influencer & OOH Strategy",
              description:
                "Worked with aligned creators and pushed local recall with outdoor ads in Whitefield — reinforcing visual identity and discovery.",
              tag: "Growth",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[320px] group perspective"
            >
              <div className="card-inner relative h-full min-h-[150px]">
                {/* Front */}
                <div className="absolute w-full h-full bg-white shadow-md rounded-xl border border-blue-400 p-5 backface-hidden z-10 flex flex-col justify-center items-center">
                  <h3 className="text-lg font-semibold text-black text-center">
                    {card.title}
                  </h3>
                  <span className="mt-3 inline-block px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
                    #{card.tag}
                  </span>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full bg-white shadow-md rounded-xl border border-blue-400 px-5 py-2 backface-hidden rotate-y-180 flex justify-center">
                  <p className="text-gray-700 text-sm whitespace-pre-wrap">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
          Impact <span className="text-blue-600">(Data-Driven Results)</span>
        </h2>
      </motion.div>

      {/* Pyramid Layout */}
      <div className="mt-12 max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Social Growth */}
          <div className="p-6 bg-gradient-to-b from-blue-600 to-white rounded-xl shadow-lg border border-blue-100 text-center">
            <p className="text-black font-bold text-3xl md:text-4xl">
              450% Growth
            </p>
            <p className="text-gray-700 mt-2">
              Grew from ~500 to 2800+ followers organically without heavy ad
              spends.
            </p>
          </div>

          {/* Engagement Uplift */}
          <div className="p-6 bg-gradient-to-b from-blue-600 to-white rounded-xl shadow-lg border border-blue-100 text-center">
            <p className="text-black font-bold text-3xl md:text-4xl">
              4x Uplift
            </p>
            <p className="text-gray-700 mt-2">
              Hug A Tree reels, Coastal Fiesta Campaign + stories drove 4x
              increase in shares & saves vs regular content.
            </p>
          </div>

          {/* Event Visibility */}
          <div className="p-6 bg-gradient-to-b from-blue-600 to-white rounded-xl shadow-lg border border-blue-100 text-center">
            <p className="text-black font-bold text-3xl md:text-4xl">
              ↑ Visibility
            </p>
            <p className="text-gray-700 mt-2">
              Weekend events sold out; branded events like <i>Lights Off</i>,{" "}
              <i>Dine In</i>, <i>Hug a Tree</i>, and breakfast surrounded by
              nature drew people for the experience, not just the food.
            </p>
          </div>
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
          {/* Revenue Streams */}
          <div className="p-6 bg-gradient-to-b from-blue-600 to-white rounded-xl shadow-lg border border-blue-100 text-center">
            <p className="text-black font-bold text-3xl md:text-4xl">
              New Revenue
            </p>
            <p className="text-gray-700 mt-2">
              Breakfast service (weekends only) started from early demand → now
              a steady footfall source before 11 AM.
            </p>
          </div>

          {/* Discoverability */}
          <div className="p-6 bg-gradient-to-b from-blue-600 to-white rounded-xl shadow-lg border border-blue-100 text-center">
            <p className="text-black font-bold text-3xl md:text-4xl">
              ↑ Discoverability
            </p>
            <p className="text-gray-700 mt-2">
              Increased footfall via offline + digital visibility — customers
              now see the space as more than just a restaurant.
            </p>
          </div>
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
        {/* <p className="text-3xl md:text-[44px] font-medium text-black m-0 p-0 leading-none">
          Our Learnings
        </p> */}
        <p className="text-lg md:text-2xl text-black mt-2 text-center max-w-4xl">
          We didn’t just say “Tall Oaks is a vibe” – we showed it through slow
          experiences, collaborations, nature-driven content, and experiential
          storytelling. At RevLabs, we don’t just run campaigns. We build what
          the brand needs — thoughtfully, creatively, and always with the
          client’s goals at the centre.
        </p>
      </motion.div>
    </div>
  );
}

export default TallOaks;