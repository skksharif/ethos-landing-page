import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, email, branch, service, message } = formData;

    const subject = encodeURIComponent("New Consultation Request");

    const body = encodeURIComponent(
      `You have received a new consultation request:\n\n` +
        `👤 Name: ${name}\n` +
        `📞 Phone: ${phone}\n` +
        `📧 Email: ${email || "N/A"}\n` +
        `🏢 Branch: ${branch || "N/A"}\n` +
        `🦷 Service: ${service || "N/A"}\n` +
        `📝 Message:\n${message || "N/A"}\n` +
        `Sent from Ethos Dental Web Form`
    );

    const mailtoLink = `mailto:contact@ethos.dental?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const branches = [
    "Bhimavaram",
    "Guntur",
    "Vizag",
    "Kukatpally",
    "Narsingi",
    "Mancherial",
  ];

  const services = [
    "General Consultation",
    "Dental Implants",
    "Root Canal",
    "Teeth Whitening",
    "Orthodontics",
    "Cosmetic Dentistry",
    "Emergency Care",
  ];

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

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-maroon-50 relative overflow-hidden"
    >
      {/* Traditional Background Elements */}
      <div className="absolute inset-0 opacity-4">
        {/* Temple Bell Pattern */}
        <svg
          className="absolute top-20 right-20 w-32 h-32"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path
            d="M50 20 Q60 30 50 50 Q40 30 50 20 M30 50 Q50 60 70 50 Q50 70 30 50"
            className="text-yellow-600"
          />
          <circle cx="50" cy="75" r="8" className="text-maroon-800" />
        </svg>

        {/* Kolam Pattern */}
        <img
          src="/muggu.png"
          alt="Grass"
          className="absolute bottom-20 left-10 w-40 opacity-[0.5]"
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
            {t("contact.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            variants={itemVariants}
          >
            {t("contact.subtitle")}
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-maroon-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 border border-yellow-100 relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <path
                  d="M50 10 Q70 30 50 50 Q30 30 50 10 M50 50 Q70 70 50 90 Q30 70 50 50"
                  className="text-maroon-800"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-2xl font-bold text-maroon-800 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Book Your Consultation
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Branch
                    </label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Branch</option>
                      {branches.map((branch) => (
                        <option key={branch} value={branch}>
                          {branch}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your dental concerns or preferred appointment time..."
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-maroon-800 text-white py-4 px-6 rounded-xl font-semibold hover:bg-maroon-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Quick Contact */}
            <motion.div
              className="bg-gradient-to-br from-maroon-800 to-maroon-600 rounded-3xl p-8 text-white relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
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
                <motion.h3
                  className="text-2xl font-bold mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Quick Contact
                </motion.h3>
                <div className="space-y-4">
                  <motion.a
                    href="tel:+919876543210"
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Phone className="w-6 h-6 text-yellow-400" />
                    </motion.div>
                    <div>
                      <p className="font-semibold">Emergency Hotline</p>
                      <p className="text-maroon-100">+91 98765 43210</p>
                    </div>
                  </motion.a>
                  <motion.a
                    href="mailto:contact@ethos.dental"
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={{ y: [-2, 2, -2] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Mail className="w-6 h-6 text-yellow-400" />
                    </motion.div>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-maroon-100">info@ethosdental.com</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Operating Hours */}
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-8 border border-yellow-100 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Decorative Pattern */}
              <div className="absolute bottom-0 left-0 w-20 h-20 opacity-5">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <path
                    d="M10 50 Q50 10 90 50 Q50 90 10 50"
                    className="text-maroon-800"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <motion.h3
                  className="text-xl font-bold text-maroon-800 mb-6 flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Clock className="w-6 h-6" />
                  </motion.div>
                  <span>Operating Hours</span>
                </motion.h3>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
                    { day: "Saturday", time: "9:00 AM - 6:00 PM" },
                    { day: "Sunday", time: "10:00 AM - 4:00 PM" },
                    { day: "Emergency", time: "24/7 Available", special: true },
                  ].map((schedule, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                    >
                      <span className="font-medium text-gray-700">
                        {schedule.day}
                      </span>
                      <span
                        className={
                          schedule.special
                            ? "text-green-600 font-semibold"
                            : "text-maroon-600"
                        }
                      >
                        {schedule.time}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Emergency Notice */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <motion.div
            className="bg-red-50 border border-red-200 rounded-2xl p-6 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 200"
                fill="currentColor"
              >
                <circle cx="100" cy="100" r="30" className="text-red-600" />
                <circle cx="300" cy="100" r="25" className="text-red-600" />
                <path
                  d="M50 100 Q200 50 350 100"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-red-600"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-lg font-bold text-red-800 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.7, duration: 0.6 }}
              >
                Dental Emergency?
              </motion.h3>
              <motion.p
                className="text-red-600 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.9, duration: 0.6 }}
              >
                Don't wait! Contact our 24/7 emergency helpline for immediate
                assistance.
              </motion.p>
              <motion.a
                href="tel:+919876543211"
                className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 2.1, duration: 0.6 }}
              >
                <Phone size={18} />
                <span>Call Emergency: +91 98765 43211</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
