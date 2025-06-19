import { motion } from "motion/react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Siddharth Srikant",
      role: "Co-founder, RevLabs · Ex-Swiggy · Growth Strategist",
      description:
        "Built and scaled brands like 48East (acquired by Swiggy), The Bowl Company, Homely, and Swiggy Daily",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Ambar Mukherjee",
      role: "Co-founder, RevLabs · Ex-Domino’s · Brand Builder",
      description:
        "Scaled Domino’s catering, led Kitchen Centre’s growth from 6 to 45 units, and digitized brands like Bikanervala.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-poppins"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {" "}
        {/* Header */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <p className="text-primary text-lg font-medium uppercase tracking-wider mb-4">
            OUR TEAM
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Meet the Visionaries Behind RevLabs
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            At RevLabs, our team of 35+ tech experts thrives on innovation.
            <br />
            We create solutions that meet needs and drive success.
          </p>
        </motion.div>{" "}
        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group cursor-pointer"
              variants={index === 0 ? leftItemVariants : rightItemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${member.image})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">

                  {/* Text Content */}
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-2 font-script">
                      {member.name}
                    </h3>
                    <p className="text-xl font-semibold mb-3 text-white/90">
                      {member.role}
                    </p>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>{" "}
        {/* CTA Section */}
        <motion.div className="text-center mt-16" variants={headerVariants}>
          <p className="text-text-secondary mb-6">
            Want to join our team of visionaries?
          </p>
          <button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Team;
