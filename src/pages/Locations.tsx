import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Users, ArrowRight } from 'lucide-react';
import { locations } from '../data/locations';

const Locations = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-saffron-50 via-orange-50 to-red-50 bg-indian-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-gradient">Locations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Serving communities across Andhra Pradesh and Telangana with state-of-the-art dental facilities 
            and compassionate care rooted in Indian values.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div
                key={location.id}
                className="location-card hover-scale p-8 rounded-2xl shadow-lg border border-orange-100 group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-saffron-500 to-maroon-500 w-14 h-14 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-gray-800 group-hover:text-saffron-600 transition-colors duration-300">
                        {location.name}
                      </h3>
                      <p className="text-sm text-gray-500">{location.city}</p>
                    </div>
                  </div>
                  <Link
                    to={`/locations/${location.id}`}
                    className="text-saffron-600 hover:text-saffron-700 group-hover:translate-x-1 transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 text-sm leading-relaxed">{location.address}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <div className="space-y-1">
                      {location.phone.map((phone, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{phone}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{location.email}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600 text-sm">Mon-Sat: {location.timings.weekdays}</p>
                      <p className="text-gray-600 text-sm">Sun: {location.timings.weekends}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-saffron-500" />
                      <span className="text-sm text-gray-600">{location.services.length} Services</span>
                    </div>
                    <Link
                      to={`/locations/${location.id}`}
                      className="text-saffron-600 hover:text-saffron-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                    >
                      View Details →
                    </Link>
                  </div>
                  
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-2">Available Services:</p>
                    <div className="flex flex-wrap gap-1">
                      {location.services.slice(0, 3).map((service, idx) => (
                        <span
                          key={idx}
                          className="bg-saffron-100 text-saffron-700 px-2 py-1 rounded-full text-xs"
                        >
                          {service}
                        </span>
                      ))}
                      {location.services.length > 3 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                          +{location.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Comprehensive <span className="text-gradient">Coverage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategically located across two states to serve you better with convenient access to quality dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
                <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                  Andhra Pradesh
                </h3>
                <div className="space-y-3">
                  {locations.filter(loc => loc.address.includes('Andhra Pradesh')).map((loc) => (
                    <div key={loc.id} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-saffron-500 rounded-full"></div>
                      <Link
                        to={`/locations/${loc.id}`}
                        className="text-gray-700 hover:text-saffron-600 transition-colors duration-200"
                      >
                        {loc.city}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
                <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                  Telangana
                </h3>
                <div className="space-y-3">
                  {locations.filter(loc => loc.address.includes('Telangana')).map((loc) => (
                    <div key={loc.id} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-maroon-500 rounded-full"></div>
                      <Link
                        to={`/locations/${loc.id}`}
                        className="text-gray-700 hover:text-maroon-600 transition-colors duration-200"
                      >
                        {loc.city}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-6">
                Why Choose Our Network?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-saffron-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Consistent quality across all locations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-maroon-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">State-of-the-art equipment and facilities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Expert doctors with specialized training</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-terracotta-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Multi-specialty services under one roof</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-burgundy-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Convenient locations with ample parking</p>
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
            Find Your Nearest Location
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Experience the perfect blend of Indian hospitality and world-class dental care 
            at any of our convenient locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-saffron-500 to-gold-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+919705859606"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-maroon-600 transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;