import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

const Footer: React.FC = () => {
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
        staggerChildren: 0.1,
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

  return (
    <footer className="bg-gradient-to-b from-maroon-900 to-maroon-800 text-white relative overflow-hidden">
      {/* Traditional Background Elements */}
      <div className="absolute inset-0 opacity-5">

      </div>

      {/* Enhanced Decorative Kolam pattern */}
      <motion.div
        className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <img src="/ethos-dental.png" alt="ethos-dental logo" className="bg-white border rounded-md" />

            <motion.p
              className="text-gray-300 text-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {t("footer.tagline")}
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-maroon-800 hover:bg-yellow-300 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ y: [-2, 2, -2] }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    },
                    hover: { type: "spring", stiffness: 400 },
                  }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-semibold mb-4 text-yellow-300"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t("footer.quicklinks")}
            </motion.h4>
            <ul className="space-y-2">
              {[
                { key: "nav.about", href: "#about" },
                { key: "nav.services", href: "#services" },
                { key: "nav.branches", href: "#branches" },
                { key: "nav.stories", href: "#stories" },
                { key: "nav.blog", href: "#blog" },
              ].map((link, index) => (
                <motion.li
                  key={link.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-300 transition-colors"
                    whileHover={{ x: 5, color: "#fcd34d" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {t(link.key)}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-semibold mb-4 text-yellow-300"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t("nav.contact")}
            </motion.h4>
            <ul className="space-y-3">
              {[
                {
                  icon: Phone,
                  text: "+91 98765 43210",
                  href: "tel:+919876543210",
                },
                {
                  icon: Mail,
                  text: "info@ethosdental.com",
                  href: "mailto:info@ethosdental.com",
                },
                {
                  icon: MapPin,
                  text: "Multiple locations across Andhra Pradesh & Telangana",
                  href: "#branches",
                },
              ].map((contact, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 1,
                      ease: "easeInOut",
                    }}
                  >
                    <contact.icon size={16} className="text-yellow-400" />
                  </motion.div>
                  <motion.a
                    href={contact.href}
                    className="text-gray-300 text-sm hover:text-yellow-300 transition-colors"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {contact.text}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-semibold mb-4 text-yellow-300"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {t("quick.emergency")}
            </motion.h4>
            <motion.div
              className="bg-maroon-700 rounded-lg p-4 border border-yellow-400/20 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <circle cx="50" cy="50" r="40" className="text-yellow-400" />
                  <circle cx="50" cy="50" r="25" className="text-yellow-400" />
                </svg>
              </div>

              <div className="relative z-10">
                <motion.p
                  className="text-yellow-300 font-semibold mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  24/7 Emergency
                </motion.p>
                <motion.p
                  className="text-white text-lg font-bold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  +91 98765 43211
                </motion.p>
                <motion.p
                  className="text-gray-300 text-xs mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  Available round the clock
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="border-t border-maroon-700 mt-8 pt-8 text-center relative"
          variants={itemVariants}
        >
          {/* Traditional Decorative Line */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : { width: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
          />

          <motion.p
            className="text-gray-300 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            {t("footer.copyright")}
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
