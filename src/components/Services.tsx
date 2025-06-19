import React from "react";
import { ChevronRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      key: "service.implants",
      icon: "🦷",
      description:
        "Permanent solution for missing teeth with advanced implant technology",
      locations: ["Hyderabad", "Vizag", "Guntur"],
      color: "from-blue-500 to-blue-600",
    },
    {
      key: "service.maxillofacial",
      icon: "🔬",
      description:
        "Complex jaw and facial surgeries by experienced specialists",
      locations: ["Hyderabad", "Vizag"],
      color: "from-purple-500 to-purple-600",
    },
    {
      key: "service.oral",
      icon: "⚕️",
      description: "Safe and painless oral surgical procedures",
      locations: ["All Branches"],
      color: "from-green-500 to-green-600",
    },
    {
      key: "service.laser",
      icon: "✨",
      description:
        "Modern laser technology for precise and comfortable treatment",
      locations: ["Hyderabad", "Guntur"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      key: "service.prosthodontics",
      icon: "🔧",
      description: "Custom dentures and prosthetic solutions",
      locations: ["All Branches"],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      key: "service.endodontics",
      icon: "🩺",
      description: "Root canal treatments with advanced techniques",
      locations: ["All Branches"],
      color: "from-red-500 to-red-600",
    },
    {
      key: "service.cosmetic",
      icon: "💎",
      description: "Transform your smile with cosmetic dental procedures",
      locations: ["Hyderabad", "Vizag", "Guntur"],
      color: "from-pink-500 to-pink-600",
    },
    {
      key: "service.orthodontics",
      icon: "📐",
      description: "Straighten teeth with braces and invisible aligners",
      locations: ["All Branches"],
      color: "from-teal-500 to-teal-600",
    },
    {
      key: "service.pedodontics",
      icon: "👶",
      description: "Gentle dental care specifically for children",
      locations: ["All Branches"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      key: "service.periodontics",
      icon: "🌿",
      description: "Gum disease treatment and prevention",
      locations: ["All Branches"],
      color: "from-emerald-500 to-emerald-600",
    },
    {
      key: "service.whitening",
      icon: "⭐",
      description: "Professional teeth whitening for a brighter smile",
      locations: ["All Branches"],
      color: "from-amber-500 to-amber-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Traditional Background Elements */}
      <div className="absolute inset-0 opacity-3">
          <img src="/muggu.png" alt="indian art" className="absolute top-10 right-20 w-60 opacity-[0.4]" />
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
            {t("services.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            variants={itemVariants}
          >
            {t("services.subtitle")}
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-maroon-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-gray-100 overflow-hidden relative"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <MapPin size={12} />
                    <span>{service.locations[0]}</span>
                  </div>
                </div>

                <motion.h3
                  className="text-xl font-bold text-maroon-800 mb-3 group-hover:text-maroon-600 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  {t(service.key)}
                </motion.h3>

                <motion.p
                  className="text-gray-600 text-sm leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  {service.description}
                </motion.p>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-1 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                >
                  {service.locations.map((location, i) => (
                    <motion.span
                      key={i}
                      className="text-xs bg-yellow-100 text-maroon-700 px-2 py-1 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {location}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.button
                  className="flex items-center space-x-1 text-maroon-800 hover:text-maroon-600 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{t("service.knowmore")}</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ChevronRight size={16} />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <motion.div
            className="bg-gradient-to-r from-maroon-800 to-maroon-600 rounded-2xl p-8 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 200"
                fill="currentColor"
              >
                <path
                  d="M0 100 Q100 50 200 100 T400 100"
                  className="text-yellow-400"
                />
                <path
                  d="M0 120 Q100 70 200 120 T400 120"
                  className="text-yellow-400"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Need Specialized Care?
              </motion.h3>
              <motion.p
                className="mb-6 text-maroon-100"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                Our experts are here to help you choose the right treatment
              </motion.p>
              <motion.button
                className="bg-yellow-400 text-maroon-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                Consult Our Experts
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
