import React from 'react';
import { Star, Quote, MapPin, Heart } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-saffron-50 via-orange-50 to-red-50 bg-indian-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-saffron-500 to-maroon-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-heading text-5xl font-bold text-gray-800 mb-6">
            Patient <span className="text-gradient">Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our valued patients about their transformative experiences at Ethos Dental. 
            Their trust and satisfaction inspire us to continue delivering exceptional care.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-saffron-600">10,000+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-maroon-600">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gold-600">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-terracotta-600">15+</div>
              <div className="text-gray-600">Years of Trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="testimonial-card hover-scale p-8 rounded-2xl shadow-lg border border-orange-100 bg-white animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < testimonial.rating 
                            ? 'text-gold-500 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-saffron-200" />
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800 text-lg">{testimonial.name}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="bg-saffron-100 text-saffron-700 px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.treatment}
                    </span>
                    {testimonial.doctor && (
                      <span className="text-xs text-gray-500">
                        Treated by {testimonial.doctor}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Video <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our patients share their experiences in their own words.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <div key={video} className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-8 border border-saffron-100 hover-scale">
                <div className="aspect-video bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
                  <div className="bg-gradient-to-r from-saffron-500 to-maroon-500 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-800 mb-2">
                  Patient Success Story #{video}
                </h3>
                <p className="text-gray-600 text-sm">
                  Watch how our treatment transformed this patient's smile and confidence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Success Stories */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Treatment <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed accounts of successful treatments and patient journeys.
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-gradient-to-r from-saffron-100 to-orange-100 rounded-2xl p-6 mb-6">
                    <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                      Complete Smile Makeover
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      "My mother is 78 years old. The way Dr Mahesh and Dr Charishma treated her is marvelous. 
                      She underwent 4 tooth removal, 8 root canals and 12 capping procedure without complaining pain. 
                      She is so happy now with her new teeth."
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">- Raj Sundar, Guntur</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-8 border border-saffron-100">
                  <h4 className="font-semibold text-gray-800 mb-4">Treatment Details:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-saffron-500 rounded-full"></div>
                      <span>4 Tooth Extractions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-maroon-500 rounded-full"></div>
                      <span>8 Root Canal Treatments</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span>12 Crown Placements</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-terracotta-500 rounded-full"></div>
                      <span>Pain-free Experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-maroon-50 to-red-50 rounded-2xl p-8 border border-maroon-100">
                  <h4 className="font-semibold text-gray-800 mb-4">Pediatric Excellence:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-saffron-500 rounded-full"></div>
                      <span>Child-friendly Environment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-maroon-500 rounded-full"></div>
                      <span>Specialized Pediatric Care</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span>Parent Education</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-terracotta-500 rounded-full"></div>
                      <span>Preventive Focus</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="bg-gradient-to-r from-maroon-100 to-red-100 rounded-2xl p-6 mb-6">
                    <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                      Exceptional Pediatric Care
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      "Pediatric dentist Dr. Mahesh Chinta is incredible, very knowledgeable, sensitive and informative! 
                      Not only has he taken great care of my son's teeth, but also he is lovely to speak with at every appointment. 
                      I would HIGHLY recommend to anyone!"
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">- Rama Yadav, Guntur</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-600 via-burgundy-600 to-maroon-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of satisfied patients who have experienced exceptional dental care 
            with the warmth of Indian hospitality at Ethos Dental.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-saffron-500 to-gold-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
            </a>
            <a
              href="/locations"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-maroon-600 transition-all duration-300"
            >
              Find a Location
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;