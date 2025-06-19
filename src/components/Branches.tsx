import React from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

const Branches: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const branches = [
    {
      key: "branch.kukatpally",
      city: "Kukatpally",
      address: "KPHB Colony, Near Metro Station, Hyderabad - 500072",
      phone: "+91 98765 43213",
      image: "🚇",
      landmark: "Near Metro Station",
      timings: "9:00 AM - 9:00 PM",
      color: "from-purple-500 to-purple-600",
    },
    {
      key: "branch.narsingi",
      city: "Narsingi",
      address: "Financial District, Near DLF Cyber City, Hyderabad - 500089",
      phone: "+91 98765 43214",
      image: "🏢",
      landmark: "Financial District",
      timings: "9:00 AM - 9:00 PM",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      key: "branch.bhimavaram",
      city: "Bhimavaram",
      address: "Main Road, Near KIMS Hospital, Bhimavaram - 534201",
      phone: "+91 98765 43210",
      image: "🏛️",
      landmark: "Near KIMS Hospital",
      timings: "9:00 AM - 8:00 PM",
      color: "from-blue-500 to-blue-600",
    },
    {
      key: "branch.guntur",
      city: "Guntur",
      address: "Brodipet, Near Guntur Medical College, Guntur - 522002",
      phone: "+91 98765 43211",
      image: "🏥",
      landmark: "Near GMC",
      timings: "9:00 AM - 8:00 PM",
      color: "from-green-500 to-green-600",
    },
    {
      key: "branch.vizag",
      city: "Vizag",
      address: "Akkayyapalem, Near KGH, Visakhapatnam - 530016",
      phone: "+91 98765 43212",
      image: "🏖️",
      landmark: "Near King George Hospital",
      timings: "9:00 AM - 9:00 PM",
      color: "from-cyan-500 to-cyan-600",
    },

    {
      key: "branch.mancherial",
      city: "Mancherial",
      address: "Main Bazaar, Near District Hospital, Mancherial - 504208",
      phone: "+91 98765 43215",
      image: "🏘️",
      landmark: "Near District Hospital",
      timings: "9:00 AM - 8:00 PM",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="branches"
      className="py-20 bg-gradient-to-b from-maroon-50 to-white relative overflow-hidden"
    >
      {/* Traditional Background Elements */}
      <div className="absolute inset-0 opacity-4">
        {/* Temple-style Architecture Pattern */}
        <img
          src="/charminar.png"
          alt="charminar"
          className="absolute top-0 left-10 w-90 opacity-[0.3]"
        />

      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-4xl font-bold text-maroon-800 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("branches.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            variants={itemVariants}
          >
            {t("branches.subtitle")}
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-maroon-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Interactive Map Style Layout */}
        <div className="relative">
          {/* Enhanced Background decorative line */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-maroon-300 to-transparent"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
            variants={containerVariants}
          >
            {branches.map((branch, index) => (
              <motion.div
                key={branch.key}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-yellow-100 overflow-hidden relative"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated Header with Cultural Pattern */}
                <motion.div
                  className={`bg-gradient-to-r ${branch.color} p-6 text-white relative overflow-hidden`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                >
                  {/* Traditional Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 200 100"
                      fill="currentColor"
                    >
                      <path
                        d="M0 50 Q50 25 100 50 T200 50"
                        className="text-white"
                      />
                      <path
                        d="M0 60 Q50 35 100 60 T200 60"
                        className="text-white"
                      />
                    </svg>
                  </div>

                  <motion.div
                    className="absolute top-0 right-0 text-6xl opacity-20 transform rotate-12"
                    animate={{
                      rotate: [12, 22, 12],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    {branch.image}
                  </motion.div>

                  <div className="relative z-10">
                    <motion.h3
                      className="text-2xl font-bold mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    >
                      {t(branch.key)}
                    </motion.h3>
                    <motion.p
                      className="text-white/80 text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                    >
                      {branch.landmark}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="p-6 space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ delay: index * 0.1 + 0.9, duration: 0.5 }}
                >
                  <div className="flex items-start space-x-3">
                    <motion.div
                      animate={{ y: [-1, 1, -1] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      <MapPin className="w-5 h-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                    </motion.div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {branch.address}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.7,
                      }}
                    >
                      <Phone className="w-5 h-5 text-maroon-600" />
                    </motion.div>
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-gray-800 font-medium hover:text-maroon-600 transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 1,
                      }}
                    >
                      <Clock className="w-5 h-5 text-maroon-600" />
                    </motion.div>
                    <p className="text-gray-600 text-sm">{branch.timings}</p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-3 pt-4">
                    <motion.button
                      className="flex-1 bg-maroon-800 text-white py-3 px-4 rounded-xl font-medium hover:bg-maroon-700 transition-colors duration-300 text-sm"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t("branch.contact")}
                    </motion.button>
                    <motion.button
                      className="flex items-center justify-center w-12 h-12 bg-yellow-400 text-maroon-800 rounded-xl hover:bg-yellow-300 transition-colors duration-300"
                      whileHover={{
                        scale: 1.1,
                        rotate: 10,
                        backgroundColor: "#fbbf24",
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Navigation size={18} />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Specialty badge */}
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                  }
                  transition={{ delay: index * 0.1 + 1.1, duration: 0.3 }}
                >
                  <motion.span
                    className="bg-yellow-400 text-maroon-800 text-xs font-semibold px-3 py-1 rounded-full shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {index < 2 ? "Full Service" : "Specialty Care"}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <motion.div
            className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl p-8 text-maroon-800 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-between">
              {/* Left Image - hidden on mobile */}
              <img
                src="/coconut2.png"
                alt="coconut2"
                className="h-full hidden sm:block"
              />

              {/* Center Image - shown only on mobile */}
              <img
                src="/coconut2.png"
                alt="coconut2"
                className="h-full mx-auto block sm:hidden"
              />

              {/* Right Image - hidden on mobile */}
              <img
                src="/coconut2.png"
                alt="coconut2"
                className="h-full hidden sm:block"
              />
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                Can't Find Your Location?
              </motion.h3>
              <motion.p
                className="mb-6 text-maroon-700"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.7, duration: 0.6 }}
              >
                We're expanding across Telugu states. Contact us to know about
                upcoming branches.
              </motion.p>
              <motion.button
                className="bg-maroon-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-maroon-700 transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 1.9, duration: 0.6 }}
              >
                {t("contact.expert")}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Branches;
