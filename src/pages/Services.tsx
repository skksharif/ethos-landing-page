import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="py-5 bg-gradient-to-br from-saffron-50 via-orange-50 to-red-50 bg-indian-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive dental care solutions combining traditional values with modern technology. 
            From routine check-ups to advanced procedures, we provide excellence in every treatment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="service-card group hover-scale p-8 rounded-2xl shadow-lg border border-orange-100 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4 group-hover:text-saffron-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Key benefits preview */}
                {service.detailContent.benefits && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.detailContent.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-saffron-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center text-saffron-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Additional <span className="text-gradient">Treatments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We also offer specialized treatments and procedures to meet all your dental needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Braces / Invisalign Aligners',
              'Self Ligating Braces',
              'Root Canal and Advanced Root Canals',
              'Teeth Whitening',
              'Painless Tooth Removal',
              'Dentures',
              'Veneers, Crowns & Bridges',
              'Tooth Fillings',
              'Scaling & Polishing',
              'IOPA (RVG) & Full Mouth X-ray',
              'OPG',
              'Bone Grafts'
            ].map((treatment, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100 hover:border-saffron-200"
              >
                <h3 className="font-semibold text-gray-800 text-sm">{treatment}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-600 via-burgundy-600 to-maroon-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Need Help Choosing the Right Treatment?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Our expert dental team is here to guide you through the best treatment options 
            for your specific needs. Schedule a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-saffron-500 to-gold-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
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

export default Services;