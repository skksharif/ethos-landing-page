import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Users, Stethoscope, ArrowRight } from 'lucide-react';
import { locations } from '../data/locations';

const LocationDetail = () => {
  const { locationId } = useParams();
  const location = locations.find(l => l.id === locationId);

  if (!location) {
    return (
      <div className="pt-0 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Location Not Found</h1>
          <p className="text-gray-600 mb-8">The location you're looking for doesn't exist.</p>
          <Link
            to="/locations"
            className="bg-gradient-to-r from-saffron-500 to-maroon-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            View All Locations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-0">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-saffron-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/locations" className="text-gray-500 hover:text-saffron-600">Locations</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">{location.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-saffron-50 via-orange-50 to-red-50 bg-indian-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">

            <div className="bg-gradient-to-r from-saffron-500 to-maroon-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-heading text-5xl font-bold text-gray-800 mb-6">
              {location.name}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience world-class dental care with the warmth of Indian hospitality at our {location.city} location.
            </p>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About This Location */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-800 mb-6">
                  About Our {location.city} Clinic
                </h2>
                <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-8 border border-saffron-100">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    At Ethos Dental Clinic {location.name}, we are committed to providing exceptional dental care 
                    to patients in {location.city} and surrounding areas. We understand that a healthy smile is 
                    essential for overall well-being, and we strive to create a positive and comfortable experience 
                    for every patient who walks through our doors.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our state-of-the-art facility combines the latest dental technologies with traditional 
                    Indian values of compassion and care, ensuring you receive the finest quality treatment 
                    in a warm and welcoming environment.
                  </p>
                </div>
              </div>

              {/* Services Available */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-800 mb-6">Services Available</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {location.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-white to-saffron-50 border border-saffron-100 hover:shadow-md transition-all duration-300"
                    >
                      <Stethoscope className="w-5 h-5 text-saffron-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                
                </div>
              </div>

              {/* Our Team */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-800 mb-6">Our Expert Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {location.doctors.map((doctor, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-maroon-50 to-red-50 rounded-2xl p-6 border border-maroon-100"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-maroon-500 to-burgundy-500 w-12 h-12 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{doctor}</h3>
                          <p className="text-sm text-gray-600">Dental Specialist</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose This Location */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-800 mb-6">Why Choose Our {location.city} Clinic?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-saffron-500 to-gold-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Experienced and Compassionate Dentists</h3>
                      <p className="text-gray-700">Our team of dentists is highly skilled and experienced in all areas of dentistry, dedicated to providing quality and personalized care.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-maroon-500 to-burgundy-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Latest Technology</h3>
                      <p className="text-gray-700">We utilize the latest dental technologies to ensure accurate diagnoses and effective treatments.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-gold-500 to-terracotta-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Comfortable and Relaxing Environment</h3>
                      <p className="text-gray-700">We have created a warm and welcoming environment to help you feel comfortable during your visit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-8 border border-saffron-100">
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Address</p>
                      <p className="text-gray-800 font-medium text-sm leading-relaxed">{location.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      {location.phone.map((phone, idx) => (
                        <p key={idx} className="text-gray-800 font-medium text-sm">{phone}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <p className="text-gray-800 font-medium text-sm">{location.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Working Hours</p>
                      <p className="text-gray-800 font-medium text-sm">Mon-Sat: {location.timings.weekdays}</p>
                      <p className="text-gray-800 font-medium text-sm">Sunday: {location.timings.weekends}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment CTA */}
              <div className="bg-gradient-to-r from-maroon-600 to-burgundy-600 rounded-2xl p-8 text-white">
                <h3 className="font-heading text-xl font-semibold mb-4">Schedule Your Appointment</h3>
                <p className="text-orange-100 mb-6 text-sm">
                  Ready to experience exceptional dental care? Contact us today to schedule your consultation.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full bg-gradient-to-r from-saffron-500 to-gold-500 text-white text-center py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Book Online
                  </Link>
                  <a
                    href={`tel:${location.phone[0]}`}
                    className="flex items-center justify-center space-x-2 w-full border-2 border-white text-white py-3 rounded-full font-semibold hover:bg-white hover:text-maroon-600 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Other Locations */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-6">Other Locations</h3>
                <div className="space-y-3">
                  {locations
                    .filter(l => l.id !== location.id)
                    .slice(0, 4)
                    .map((otherLocation) => (
                      <Link
                        key={otherLocation.id}
                        to={`/locations/${otherLocation.id}`}
                        className="block p-3 rounded-lg hover:bg-saffron-50 hover:text-saffron-600 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">{otherLocation.name}</div>
                            <div className="text-xs text-gray-500">{otherLocation.city}</div>
                          </div>
                          <ArrowRight className="w-4 h-4" />
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

export default LocationDetail;