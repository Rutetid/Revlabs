import {motion} from "motion/react"

const OurServicesHeader = () => {

    const headerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
                y: 0,
                transition: {
                duration: 0.8,
                    staggerChildren: 0.4,
            },
        },
    }

  return (
      <div className=" px-16 bg-gray-100 pt-6 pb-4"
      >
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={headerVariants}
              id="our_services"
              className="scroll-mt-36"
              >


          <p className="text-primary text-md font-medium uppercase tracking-wider mb-4 font-poppins">
              OUR SERVICES
          </p>
          <h2 className="text-black text-3xl sm:text-5xl font-bold  font-poppins">
              Everything You Need to Scale.
              <span className="block">All in One Place.</span>
          </h2>
          </motion.div>
      </div>
  );
}

export default OurServicesHeader;