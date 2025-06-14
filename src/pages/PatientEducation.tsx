import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Heart, Shield, Smile, Baby } from 'lucide-react';

const PatientEducation = () => {
  const educationTopics = [
    {
      id: 'dental-caries',
      title: 'Dental Caries',
      description: 'Understanding tooth decay, its causes, prevention, and treatment options.',
      icon: '🦷',
      category: 'Prevention',
      readTime: '5 min read',
      content: 'The word caries means decay or rottening. It is the most commonly reported oral disease. Decay can begin on any area of a tooth and its appearance varies depending on the location and stage of development.'
    },
    {
      id: 'tooth-extraction-care',
      title: 'Care After Tooth Removal',
      description: 'Post-extraction care instructions for optimal healing and recovery.',
      icon: '🩹',
      category: 'Post-Treatment',
      readTime: '3 min read',
      content: 'Retain the cotton plug placed by the dentist at the site of tooth removal for 15 to 30 minutes which aids in blood clot formation and prevents bleeding.'
    },
    {
      id: 'pit-fissure-sealants',
      title: 'Pit and Fissure Sealants',
      description: 'Protective coatings for teeth to prevent decay in hard-to-clean areas.',
      icon: '🛡️',
      category: 'Prevention',
      readTime: '4 min read',
      content: 'Pit and fissure sealants are thin, protective coatings applied to the chewing surfaces of the back teeth to prevent decay in the deep grooves and pits.'
    },
    {
      id: 'orthodontic-aligners',
      title: 'Orthodontic Aligners',
      description: 'Modern clear aligner treatment for straightening teeth comfortably.',
      icon: '😊',
      category: 'Treatment',
      readTime: '6 min read',
      content: 'Orthodontic aligners, commonly known as clear aligners, are a modern alternative to traditional metal braces used for straightening teeth and correcting bite issues.'
    },
    {
      id: 'orthodontic-indications',
      title: 'Indications for Orthodontic Treatment',
      description: 'When and why orthodontic treatment may be necessary for optimal oral health.',
      icon: '🔍',
      category: 'Treatment',
      readTime: '5 min read',
      content: 'Orthodontic treatment, typically involving braces or aligners, is undertaken to address various dental and facial irregularities that can affect both function and aesthetics.'
    },
    {
      id: 'dental-implants-education',
      title: 'Dental Implants',
      description: 'Comprehensive guide to dental implant treatment and benefits.',
      icon: '⚕️',
      category: 'Treatment',
      readTime: '8 min read',
      content: 'Dental implants are a popular and effective treatment option for replacing missing teeth. They provide a permanent solution that looks, feels, and functions like natural teeth.'
    },
    {
      id: 'pregnancy-oral-health',
      title: 'Pregnancy and Oral Health',
      description: 'Important oral health considerations during pregnancy for mother and baby.',
      icon: '🤱',
      category: 'Special Care',
      readTime: '7 min read',
      content: 'Pregnancy can significantly impact oral health, and maintaining good oral hygiene is crucial during this period for both maternal and fetal health.'
    }
  ];

  const categories = ['All', 'Prevention', 'Treatment', 'Post-Treatment', 'Special Care'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredTopics = selectedCategory === 'All' 
    ? educationTopics 
    : educationTopics.filter(topic => topic.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-saffron-50 via-orange-50 to-red-50 bg-indian-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-saffron-500 to-maroon-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-heading text-5xl font-bold text-gray-800 mb-6">
            Patient <span className="text-gradient">Education</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering you with knowledge about dental health, treatments, and preventive care. 
            Learn from our experts to make informed decisions about your oral health.
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

      {/* Education Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTopics.map((topic, index) => (
              <div
                key={topic.id}
                className="bg-gradient-to-br from-white to-saffron-50 rounded-2xl shadow-lg border border-orange-100 overflow-hidden hover-scale group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{topic.icon}</div>
                    <span className="bg-saffron-100 text-saffron-700 px-3 py-1 rounded-full text-xs font-medium">
                      {topic.category}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3 group-hover:text-saffron-600 transition-colors duration-300">
                    {topic.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {topic.description}
                  </p>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {topic.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{topic.readTime}</span>
                    <button className="flex items-center text-saffron-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oral Health Tips */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Essential <span className="text-gradient">Oral Health Tips</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple daily practices that can make a significant difference in your oral health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover-scale bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
              <div className="bg-gradient-to-r from-saffron-500 to-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-4">Daily Brushing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Brush twice daily with fluoride toothpaste for at least 2 minutes to remove plaque and prevent decay.
              </p>
            </div>

            <div className="text-center group hover-scale bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
              <div className="bg-gradient-to-r from-maroon-500 to-burgundy-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-4">Regular Flossing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Floss daily to remove plaque and food particles between teeth where your toothbrush can't reach.
              </p>
            </div>

            <div className="text-center group hover-scale bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
              <div className="bg-gradient-to-r from-gold-500 to-terracotta-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Smile className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-4">Regular Checkups</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Visit your dentist every 6 months for professional cleaning and early detection of problems.
              </p>
            </div>

            <div className="text-center group hover-scale bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
              <div className="bg-gradient-to-r from-terracotta-500 to-saffron-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-4">Healthy Diet</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Limit sugary and acidic foods. Choose tooth-friendly foods rich in calcium and vitamins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about dental health and treatments.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How often should I visit the dentist?",
                answer: "We recommend visiting the dentist every 6 months for routine checkups and cleanings. However, some patients may need more frequent visits based on their oral health condition."
              },
              {
                question: "Are dental implants painful?",
                answer: "Most patients experience minimal discomfort during and after dental implant surgery. Local anesthesia is used during the procedure, and any post-operative discomfort can be managed with prescribed medications."
              },
              {
                question: "How long do dental implants last?",
                answer: "With proper care and maintenance, dental implants can last 20-30 years or even a lifetime. Regular dental checkups and good oral hygiene are essential for their longevity."
              },
              {
                question: "Is teeth whitening safe?",
                answer: "Professional teeth whitening performed by qualified dentists is safe and effective. We use clinically proven methods that minimize sensitivity while achieving excellent results."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-8 border border-saffron-100">
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-600 via-burgundy-600 to-maroon-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Have More Questions?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Our expert dental team is here to answer all your questions and provide personalized guidance 
            for your oral health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-saffron-500 to-gold-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Ask Our Experts
            </Link>
            <Link
              to="/locations"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-maroon-600 transition-all duration-300"
            >
              Find a Location
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientEducation;