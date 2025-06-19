import React from 'react';
import { Heart, Award, Users, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Traditional Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <img src='/muggu1.png' alt='muggu' />
           <img src='/coconut2.png' alt='muggu'  className="absolute bottom-20 right-10 w-40 h-40"/>
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
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('about.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            variants={itemVariants}
          >
            {t('about.subtitle')}
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-maroon-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div 
              className="bg-gradient-to-r from-yellow-100 to-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg shadow-md"
              variants={cardVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-2xl font-semibold text-maroon-800 italic leading-relaxed">
                "{t('about.tagline')}"
              </p>
            </motion.div>

            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              variants={itemVariants}
            >
              {t('about.description')}
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {[
                { icon: Heart, title: "Compassionate Care", desc: "Phobia-free treatment with warmth" },
                { icon: Award, title: "Excellence", desc: "World-class dental standards" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 2 }}
                  >
                    <item.icon className="w-12 h-12 text-maroon-800 mx-auto mb-4" />
                  </motion.div>
                  <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Visual Elements */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                {[
                  { icon: Users, number: "10,000+", text: "Happy Patients", gradient: "from-maroon-800 to-maroon-600", textColor: "text-white" },
                  { icon: Stethoscope, number: "Expert Doctors", text: "Specialized Care", gradient: "from-yellow-400 to-yellow-300", textColor: "text-maroon-800" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 ${item.textColor} transform transition-all duration-300 shadow-lg`}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: index % 2 === 0 ? 2 : -2,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                  >
                    <motion.div
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 1.5 }}
                    >
                      <item.icon className="w-12 h-12 mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2">{item.number}</h4>
                    <p className={index === 0 ? "text-maroon-100" : "text-maroon-700"}>{item.text}</p>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6 mt-12">
                {[
                  { icon: Award, number: "15+ Years", text: "Experience", gradient: "from-green-600 to-green-500", textColor: "text-white" },
                  { icon: Heart, number: "6 Branches", text: "Serving Telugu States", gradient: "from-blue-600 to-blue-500", textColor: "text-white" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 ${item.textColor} transform transition-all duration-300 shadow-lg`}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: index % 2 === 0 ? -2 : 2,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: index * 2 }}
                    >
                      <item.icon className="w-12 h-12 mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2">{item.number}</h4>
                    <p className={index === 0 ? "text-green-100" : "text-blue-100"}>{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Decorative elements */}
            <motion.div 
              className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-300 rounded-full opacity-20"
              animate={{ 
                y: [-10, 10, -10],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-maroon-300 rounded-full opacity-20"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;