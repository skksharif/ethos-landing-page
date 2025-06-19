import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

const Stories: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stories = [
    {
      name: "Lakshmi Reddy",
      age: 45,
      location: "Guntur",
      treatment: "Dental Implants",
      story:
        "I was hesitant about dental implants, but the team at Ethos made me feel so comfortable. Now I can smile confidently again!",
      rating: 5,
      image: "👩",
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Rajesh Kumar",
      age: 38,
      location: "Hyderabad",
      treatment: "Root Canal",
      story:
        "The painless root canal treatment was amazing. I couldn't believe how comfortable the entire procedure was.",
      rating: 5,
      image: "👨",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Priya Sharma",
      age: 28,
      location: "Vizag",
      treatment: "Cosmetic Dentistry",
      story:
        "My teeth whitening results exceeded expectations. The staff was professional and caring throughout.",
      rating: 5,
      image: "👩‍🦱",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Venkat Rao",
      age: 52,
      location: "Bhimavaram",
      treatment: "Dentures",
      story:
        "Getting custom dentures changed my life. I can eat my favorite foods again without any discomfort.",
      rating: 5,
      image: "👴",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Anitha Devi",
      age: 35,
      location: "Mancherial",
      treatment: "Orthodontics",
      story:
        "The braces treatment for my daughter was handled with such care. She loves her new smile!",
      rating: 5,
      image: "👩‍👧",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Suresh Babu",
      age: 42,
      location: "Kukatpally",
      treatment: "Gum Treatment",
      story:
        "My gum disease was treated effectively with laser therapy. The results were visible within weeks.",
      rating: 5,
      image: "👨‍💼",
      color: "from-teal-500 to-teal-600",
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="stories"
      className="py-20 bg-gradient-to-b from-white to-yellow-50 relative overflow-hidden"
    >
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
            {t("stories.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            variants={itemVariants}
          >
            {t("stories.subtitle")}
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-maroon-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform border-2 border-transparent hover:border-yellow-200 overflow-hidden relative"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Enhanced Decorative header with traditional pattern */}
              <motion.div
                className={`h-2 bg-gradient-to-r ${story.color}`}
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
              />

              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              >
                {/* Quote icon and rating */}
                <div className="flex justify-between items-start mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <Quote className="w-8 h-8 text-yellow-400" />
                  </motion.div>
                  <div className="flex space-x-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          inView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{
                          delay: index * 0.1 + 0.7 + i * 0.1,
                          duration: 0.3,
                        }}
                      >
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Story content */}
                <motion.blockquote
                  className="text-gray-700 text-sm leading-relaxed mb-6 italic"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.1 + 0.9, duration: 0.6 }}
                >
                  "{story.story}"
                </motion.blockquote>

                {/* Patient info */}
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: index * 0.1 + 1.1, duration: 0.5 }}
                >
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${story.color} rounded-full flex items-center justify-center text-2xl shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="filter brightness-200">{story.image}</span>
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-maroon-800">
                      {story.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {story.age} years, {story.location}
                    </p>
                    <p className="text-xs text-maroon-600 font-medium">
                      {story.treatment}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Traditional footer decoration */}
              <motion.div
                className={`h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 1.3, duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Statistics */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {[
            {
              number: "98%",
              label: "Patient Satisfaction",
              color: "text-green-600",
            },
            {
              number: "10k+",
              label: "Success Stories",
              color: "text-blue-600",
            },
            {
              number: "4.9",
              label: "Average Rating",
              color: "text-yellow-600",
            },
            { number: "95%", label: "Referral Rate", color: "text-purple-600" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={statsVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className={`text-3xl font-bold ${stat.color} mb-2`}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
              >
                {stat.number}
              </motion.div>
              <motion.div
                className="text-sm text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.7 + index * 0.2, duration: 0.5 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <motion.div
            className="bg-gradient-to-r from-maroon-800 to-maroon-600 rounded-2xl p-8 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-between">
              {/* Left Image - hidden on mobile */}
              <img
                src="/gopuram.png"
                alt="Gopuram"
                className="h-full hidden sm:block"
              />

              {/* Center Image - shown only on mobile */}
              <img
                src="/gopuram.png"
                alt="Gopuram"
                className="h-full mx-auto block sm:hidden"
              />

              {/* Right Image - hidden on mobile */}
              <img
                src="/gopuram.png"
                alt="Gopuram"
                className="h-full hidden sm:block"
              />
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 2, duration: 0.6 }}
              >
                Ready to Start Your Transformation?
              </motion.h3>
              <motion.p
                className="mb-6 text-maroon-100"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 2.2, duration: 0.6 }}
              >
                Join thousands of satisfied patients who trust Ethos Dental
              </motion.p>
              <motion.button
                className="bg-yellow-400 text-maroon-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 2.4, duration: 0.6 }}
              >
                Book Your Consultation
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stories;
