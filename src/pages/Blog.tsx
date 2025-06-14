import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen, Heart, Smile, Shield } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 'dental-implants-guide',
      title: 'Complete Guide to Dental Implants: Everything You Need to Know',
      excerpt: 'Discover the benefits, process, and aftercare of dental implants. Learn why they are considered the gold standard for tooth replacement.',
      author: 'Dr. Mahesh Chinta',
      date: '2024-01-15',
      category: 'Treatment Guide',
      image: 'https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read',
      tags: ['Dental Implants', 'Tooth Replacement', 'Oral Surgery']
    },
    {
      id: 'oral-hygiene-tips',
      title: '10 Essential Oral Hygiene Tips for a Healthy Smile',
      excerpt: 'Simple daily practices that can transform your oral health. Expert tips from our dental professionals for maintaining optimal dental hygiene.',
      author: 'Dr. Charishma',
      date: '2024-01-10',
      category: 'Prevention',
      image: 'https://images.pexels.com/photos/6812589/pexels-photo-6812589.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
      tags: ['Oral Hygiene', 'Prevention', 'Daily Care']
    },
    {
      id: 'cosmetic-dentistry-trends',
      title: 'Latest Trends in Cosmetic Dentistry: Transform Your Smile',
      excerpt: 'Explore the newest cosmetic dental procedures that can enhance your smile. From veneers to teeth whitening, discover your options.',
      author: 'Dr. Naresh Kumar',
      date: '2024-01-05',
      category: 'Cosmetic Dentistry',
      image: 'https://images.pexels.com/photos/6812571/pexels-photo-6812571.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read',
      tags: ['Cosmetic Dentistry', 'Smile Makeover', 'Aesthetics']
    },
    {
      id: 'children-dental-care',
      title: 'Pediatric Dental Care: Setting the Foundation for Lifelong Oral Health',
      excerpt: 'Essential guide for parents on maintaining their children\'s dental health. Tips for making dental visits positive experiences.',
      author: 'Dr. Shravanthi',
      date: '2024-01-01',
      category: 'Pediatric Dentistry',
      image: 'https://images.pexels.com/photos/6812582/pexels-photo-6812582.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min read',
      tags: ['Pediatric Dentistry', 'Children', 'Prevention']
    },
    {
      id: 'root-canal-myths',
      title: 'Debunking Root Canal Myths: The Truth About Endodontic Treatment',
      excerpt: 'Separating fact from fiction about root canal treatment. Learn why modern endodontics is comfortable and highly successful.',
      author: 'Dr. Mahesh Chinta',
      date: '2023-12-28',
      category: 'Endodontics',
      image: 'https://images.pexels.com/photos/6812564/pexels-photo-6812564.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read',
      tags: ['Root Canal', 'Endodontics', 'Pain Management']
    },
    {
      id: 'gum-disease-prevention',
      title: 'Preventing Gum Disease: Your Guide to Healthy Gums',
      excerpt: 'Understanding periodontal health and how to prevent gum disease. Early signs, treatment options, and maintenance strategies.',
      author: 'Dr. Charishma',
      date: '2023-12-25',
      category: 'Periodontics',
      image: 'https://images.pexels.com/photos/6812548/pexels-photo-6812548.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
      tags: ['Gum Disease', 'Periodontics', 'Prevention']
    }
  ];

  const categories = ['All', 'Treatment Guide', 'Prevention', 'Cosmetic Dentistry', 'Pediatric Dentistry', 'Endodontics', 'Periodontics'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-saffron-50 via-orange-50 to-red-50 bg-indian-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-saffron-500 to-maroon-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-heading text-5xl font-bold text-gray-800 mb-6">
            Dental Health <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest in dental health, treatments, and oral care tips. 
            Expert insights from our experienced dental professionals.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-saffron-500 to-maroon-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-saffron-50 hover:text-saffron-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-gray-800 mb-8 text-center">
              Featured <span className="text-gradient">Article</span>
            </h2>
            
            <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-3xl overflow-hidden shadow-lg border border-saffron-100 hover-scale">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-saffron-500 to-maroon-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-saffron-100 text-saffron-700 px-3 py-1 rounded-full text-xs font-medium">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
                  </div>
                  
                  <h3 className="font-heading text-3xl font-bold text-gray-800 mb-4 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${blogPosts[0].id}`}
                      className="flex items-center text-saffron-600 font-medium hover:text-saffron-700 transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of informative articles on dental health, treatments, and oral care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover-scale border border-orange-100 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3 leading-tight hover:text-saffron-600 transition-colors duration-200">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-saffron-100 text-saffron-700 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-saffron-600 hover:text-saffron-700 font-medium text-sm transition-colors duration-200"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Quick Health <span className="text-gradient">Tips</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, actionable tips for maintaining optimal oral health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover-scale bg-gradient-to-br from-saffron-50 to-orange-50 p-8 rounded-2xl border border-saffron-100">
              <div className="bg-gradient-to-r from-saffron-500 to-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-gray-800 mb-3">Brush Properly</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Brush for 2 minutes, twice daily with fluoride toothpaste using gentle circular motions.
              </p>
            </div>

            <div className="text-center group hover-scale bg-gradient-to-br from-maroon-50 to-red-50 p-8 rounded-2xl border border-maroon-100">
              <div className="bg-gradient-to-r from-maroon-500 to-burgundy-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-gray-800 mb-3">Floss Daily</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Remove plaque and food particles between teeth where your toothbrush can't reach.
              </p>
            </div>

            <div className="text-center group hover-scale bg-gradient-to-br from-gold-50 to-yellow-50 p-8 rounded-2xl border border-gold-100">
              <div className="bg-gradient-to-r from-gold-500 to-terracotta-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Smile className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-gray-800 mb-3">Regular Checkups</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Visit your dentist every 6 months for professional cleaning and early problem detection.
              </p>
            </div>

            <div className="text-center group hover-scale bg-gradient-to-br from-terracotta-50 to-orange-50 p-8 rounded-2xl border border-terracotta-100">
              <div className="bg-gradient-to-r from-terracotta-500 to-saffron-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-gray-800 mb-3">Stay Informed</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Keep up with the latest dental health information and treatment advances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-maroon-600 via-burgundy-600 to-maroon-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Stay Updated with Dental Health Tips
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Subscribe to our newsletter for the latest articles, health tips, and updates from Ethos Dental.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-saffron-500"
              />
              <button className="bg-gradient-to-r from-saffron-500 to-gold-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;