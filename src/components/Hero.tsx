import React from 'react';
import { Calendar, MapPin, Phone, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
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
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-3">
      {/* Enhanced Background with Telugu Cultural Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-50 via-yellow-50 to-green-50">
        {/* Coconut tree Watermark */}
        <div className="absolute top-1/4 right-2 opacity-[0.5]">
           <img src="/coconut1.png" alt="coconut tree image" className="w-48 h-48" />
        </div>

        {/* Mandala Pattern */}
        <div className="absolute bottom-10 left-10 opacity-4">
          <img src="/muggu.png" alt="indian art" className='w-40 h-40' />
        </div>

        {/* Animated Traditional Patterns */}
        <img src="/tooth.png" alt="Tooth"  className="absolute top-20 left-15 rotate-45 left-10 w-20 opacity-10"/>
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 rounded-full border-2 border-yellow-600 opacity-15"
          animate={{ rotate: -360, y: [-10, 10, -10] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

      </div>

      <motion.div 
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-2 text-maroon-600"
                variants={itemVariants}
              >
                <Star className="w-5 h-5 fill-current" />
                <h1 className="text-sm font-medium tracking-wide">Excellence Since 2015</h1>
              </motion.div>
              
              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon-800 leading-tight"
              >
                <h2 className="bg-gradient-to-r from-maroon-800 via-maroon-600 to-yellow-600 bg-clip-text text-transparent">
                  {t('hero.title')}
                </h2>
              </div>
              
              <h1
                className="text-xl text-gray-600 leading-relaxed font-medium"
             
              >
                {t('hero.subtitle')}
              </h1>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}>
              <motion.button 
                className="bg-gradient-to-r from-maroon-800 to-maroon-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transform transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '#contact'}
              >
                {t('hero.cta1')}
              </motion.button>
              <motion.button 
                className="border-2 border-maroon-800 text-maroon-800 px-8 py-4 rounded-full font-semibold hover:bg-maroon-800 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '#branches'}
              >
                {t('hero.cta2')}
              </motion.button>
            </motion.div>

            {/* Stats with Animation */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
              variants={itemVariants}
            >
              {[
                { number: "6+", label: "Branches" },
                { number: "10k+", label: "Happy Patients" },
                { number: "15+", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-maroon-800"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Visual */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="relative bg-white rounded-3xl shadow-2xl p-8 transform"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ rotate: 0, scale: 1.02 }}
              initial={{ rotate: 3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-maroon-100 via-yellow-100 to-green-100 rounded-2xl  h-96 flex items-center justify-center relative overflow-hidden">
                {/* Kalamkari Pattern Background */}
                 <img src="/hero.png" alt="healthy family" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Quick Access Cards */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {[
            { icon: Calendar, text: t('quick.appointment') },
            { icon: MapPin, text: t('quick.branch') },
            { icon: Star, text: t('quick.treatments') },
            { icon: Phone, text: t('quick.emergency') }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer border border-yellow-100"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
              >
                <item.icon className="w-8 h-8 text-maroon-800 mx-auto mb-2" />
              </motion.div>
              <p className="text-sm font-medium text-gray-800">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;