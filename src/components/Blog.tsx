import React from "react";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

const Blog: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: "Prevention is Better Than Cure: Your Guide to Oral Health",
      excerpt:
        "Learn essential daily habits that can prevent major dental problems and save you from expensive treatments.",
      author: "Dr. Ramesh Kumar",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Prevention",
      image: "🦷",
      tags: ["Oral Health", "Prevention", "Daily Care"],
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Dental Implants: Everything You Need to Know",
      excerpt:
        "Comprehensive guide to dental implants, from consultation to recovery. Understanding the process, benefits, and aftercare.",
      author: "Dr. Priya Reddy",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Implants",
      image: "🔬",
      tags: ["Implants", "Surgery", "Restoration"],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      title: "Cosmetic Dentistry: Transform Your Smile",
      excerpt:
        "Discover modern cosmetic procedures that can enhance your smile. From whitening to veneers, explore your options.",
      author: "Dr. Suresh Babu",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Cosmetic",
      image: "✨",
      tags: ["Cosmetic", "Whitening", "Veneers"],
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "Children's Dental Care: Building Healthy Habits",
      excerpt:
        "Essential tips for parents on maintaining their children's oral health and making dental visits stress-free.",
      author: "Dr. Lakshmi Devi",
      date: "2024-01-01",
      readTime: "4 min read",
      category: "Pediatric",
      image: "👶",
      tags: ["Children", "Prevention", "Habits"],
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 5,
      title: "Understanding Gum Disease: Signs and Treatment",
      excerpt:
        "Early detection and treatment of gum disease can prevent serious complications. Learn the warning signs.",
      author: "Dr. Venkat Rao",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Periodontics",
      image: "🌿",
      tags: ["Gums", "Treatment", "Prevention"],
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: 6,
      title: "Emergency Dental Care: When to Seek Immediate Help",
      excerpt:
        "Dental emergencies can happen anytime. Know when to seek immediate care and how to handle common situations.",
      author: "Dr. Rajesh Kumar",
      date: "2023-12-25",
      readTime: "5 min read",
      category: "Emergency",
      image: "🚨",
      tags: ["Emergency", "First Aid", "Care"],
      color: "from-red-500 to-red-600",
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
    <section
      id="blog"
      className="py-20 bg-gradient-to-b from-yellow-50 to-white relative overflow-hidden"
    >
      {/* Traditional Background Elements */}
      <div className="absolute inset-0 opacity-4">
        {/* Palm Leaf Pattern */}
        <img
          src="/life-tree.png"
          alt="Tree"
          className="absolute top-0 left-0  opacity-[0.2]"
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
            {t("blog.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            variants={itemVariants}
          >
            {t("blog.subtitle")}
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-maroon-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Featured Post */}
        <motion.div className="mb-16" variants={itemVariants}>
          <motion.div
            className="bg-gradient-to-r from-maroon-800 to-maroon-600 rounded-3xl overflow-hidden shadow-2xl relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 800 400"
                fill="currentColor"
              >
                <path
                  d="M0 200 Q200 150 400 200 T800 200"
                  className="text-yellow-400"
                />
                <circle cx="200" cy="150" r="30" className="text-yellow-400" />
                <circle cx="600" cy="250" r="25" className="text-yellow-400" />
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center relative z-10">
              <motion.div
                className="p-8 lg:p-12 text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <motion.span
                    className="bg-yellow-400 text-maroon-800 px-3 py-1 rounded-full text-xs font-semibold"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Featured
                  </motion.span>
                  <span className="text-maroon-200 text-sm">
                    {blogPosts[0].category}
                  </span>
                </div>
                <motion.h3
                  className="text-3xl font-bold mb-4 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {blogPosts[0].title}
                </motion.h3>
                <motion.p
                  className="text-maroon-100 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  {blogPosts[0].excerpt}
                </motion.p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-maroon-200">
                    <span className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{blogPosts[0].author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{blogPosts[0].readTime}</span>
                    </span>
                  </div>
                  <motion.button
                    className="flex items-center space-x-2 bg-yellow-400 text-maroon-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{t("blog.readmore")}</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
              <motion.div
                className="p-8 lg:p-12 flex items-center justify-center "
                initial={{ opacity: 1, scale: 0.1 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 0.8 }
                }
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <motion.div
                  className="text-8xl opacity-60"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {blogPosts[0].image}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-gray-100 overflow-hidden relative"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Header with icon and category */}
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 text-center relative overflow-hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 200 150"
                    fill="currentColor"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="20"
                      className="text-maroon-800"
                    />
                    <circle
                      cx="150"
                      cy="100"
                      r="15"
                      className="text-yellow-600"
                    />
                  </svg>
                </div>

                <motion.div
                  className="text-4xl mb-3 relative z-10"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    y: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {post.image}
                </motion.div>
                <motion.span
                  className="inline-block bg-maroon-800 text-white px-3 py-1 rounded-full text-xs font-semibold relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {post.category}
                </motion.span>
              </motion.div>

              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              >
                <motion.h3
                  className="text-xl font-bold text-maroon-800 mb-3 group-hover:text-maroon-600 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                >
                  {post.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 text-sm mb-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.1 + 0.9, duration: 0.5 }}
                >
                  {post.excerpt}
                </motion.p>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: index * 0.1 + 1.1, duration: 0.5 }}
                >
                  {post.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="text-xs bg-yellow-100 text-maroon-700 px-2 py-1 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Meta info */}
                <motion.div
                  className="flex items-center justify-between text-sm text-gray-500 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: index * 0.1 + 1.3, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <User size={12} />
                      <span>{post.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </span>
                  </div>
                  <span className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </span>
                </motion.div>

                <motion.button
                  className="w-full flex items-center justify-center space-x-2 bg-maroon-800 text-white py-3 rounded-xl font-medium hover:bg-maroon-700 transition-colors duration-300"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: index * 0.1 + 1.5, duration: 0.5 }}
                >
                  <span>{t("blog.readmore")}</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter signup */}
        <motion.div className="mt-16" variants={itemVariants}>
          <motion.div
            className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl p-8 text-center relative overflow-hidden"
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
                className="text-2xl font-bold text-maroon-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                Stay Updated with Dental Health Tips
              </motion.h3>
              <motion.p
                className="text-maroon-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 2, duration: 0.6 }}
              >
                Subscribe to our newsletter for expert advice and latest updates
              </motion.p>
              <motion.div
                className="max-w-md mx-auto flex gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: 2.2, duration: 0.6 }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-maroon-500 transition-all duration-300"
                />
                <motion.button
                  className="bg-maroon-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-maroon-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blog;
