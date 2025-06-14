import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, DollarSign, CheckCircle, Phone } from 'lucide-react';
import { services } from '../data/services';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="bg-gradient-to-r from-saffron-500 to-maroon-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-saffron-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-saffron-600">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-saffron-50 via-orange-50 to-red-50 bg-indian-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/services"
              className="inline-flex items-center text-saffron-600 hover:text-saffron-700 mb-6 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="font-heading text-5xl font-bold text-gray-800 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-800 mb-6">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.detailContent.overview}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-800 mb-6">Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.detailContent.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-saffron-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-800 mb-6">Treatment Process</h2>
                <div className="space-y-4">
                  {service.detailContent.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-saffron-500 to-maroon-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special sections for Dental Implants */}
              {service.id === 'dental-implants' && (
                <div className="space-y-12">
                  <div>
                    <h2 className="font-heading text-3xl font-bold text-gray-800 mb-6">Advanced Implant Techniques</h2>
                    
                    <div className="space-y-8">
                      <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-8 border border-saffron-100">
                        <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">All-On-6 Technique</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          The most comprehensive, successful, safe, and simpler solution for completely missing teeth. 
                          Six implants placed in a completely toothless jaw, providing secure and optimal support for a fixed bridge/denture.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-saffron-500" />
                            <span className="text-sm text-gray-600">Suitable for almost all bone quantities</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-saffron-500" />
                            <span className="text-sm text-gray-600">None or very small bone graft required</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-saffron-500" />
                            <span className="text-sm text-gray-600">Immediate function & fixed prosthesis</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-maroon-50 to-red-50 rounded-2xl p-8 border border-maroon-100">
                        <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">Teeth in a Day</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The dental implant procedure, including multiple implants, can be placed with teeth (crowns) 
                          or with a dental bridge in just one day with new advances in dentistry.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-gold-50 to-yellow-50 rounded-2xl p-8 border border-gold-100">
                        <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">Permanent Fixed Teeth in 5 Days</h3>
                        <p className="text-gray-700 leading-relaxed">
                          This implant system heals faster when loaded immediately, with no waiting for 3-6 months 
                          for osseointegration. Single piece implants with no screw loosening and less chance of peri-implantitis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-8 border border-saffron-100">
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-6">Quick Information</h3>
                <div className="space-y-4">
                  {service.detailContent.cost && (
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-saffron-600" />
                      <div>
                        <p className="text-sm text-gray-600">Cost Range</p>
                        <p className="font-semibold text-gray-800">{service.detailContent.cost}</p>
                      </div>
                    </div>
                  )}
                  
                  {service.detailContent.duration && (
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-saffron-600" />
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-semibold text-gray-800">{service.detailContent.duration}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-maroon-600 to-burgundy-600 rounded-2xl p-8 text-white">
                <h3 className="font-heading text-xl font-semibold mb-4">Ready to Get Started?</h3>
                <p className="text-orange-100 mb-6 text-sm">
                  Schedule a consultation with our expert team to discuss your treatment options.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full bg-gradient-to-r from-saffron-500 to-gold-500 text-white text-center py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href="tel:+919705859606"
                    className="flex items-center justify-center space-x-2 w-full border-2 border-white text-white py-3 rounded-full font-semibold hover:bg-white hover:text-maroon-600 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-6">Related Services</h3>
                <div className="space-y-3">
                  {services
                    .filter(s => s.id !== service.id)
                    .slice(0, 4)
                    .map((relatedService) => (
                      <Link
                        key={relatedService.id}
                        to={`/services/${relatedService.id}`}
                        className="block p-3 rounded-lg hover:bg-saffron-50 hover:text-saffron-600 transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{relatedService.icon}</span>
                          <span className="font-medium text-sm">{relatedService.title}</span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;