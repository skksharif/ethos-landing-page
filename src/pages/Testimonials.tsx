import React from 'react';
import { Star, Quote, MapPin, Heart } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-heading text-5xl font-bold text-gray-800 mb-6">
            Patient <span className="text-blue-600">Stories</span>
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
              <div className="text-4xl font-bold text-blue-600">10,000+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-700">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-500">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-400">15+</div>
              <div className="text-gray-600">Years of Trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className=" hover-scale p-8 rounded-2xl shadow-lg border border-blue-100 bg-white animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < testimonial.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-200" />
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
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
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

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Video <span className="text-blue-600">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our patients share their experiences in their own words.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <div key={video} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-100 hover-scale">
                <div className="aspect-video bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white">
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
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
            </a>
            <a
              href="/locations"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
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
