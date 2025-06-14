import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { locations } from '../data/locations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        service: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
    }, 3000);
  };

  const services = [
    'Dental Implants',
    'Cosmetic Dentistry',
    'Root Canal Treatment',
    'Orthodontics',
    'Teeth Whitening',
    'Periodontics',
    'Oral Surgery',
    'Pediatric Dentistry',
    'General Checkup',
    'Other'
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="py-5 bg-gradient-to-br from-saffron-50 via-orange-50 to-red-50 bg-indian-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-gray-800 mb-6">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience exceptional dental care? Get in touch with us to schedule your appointment 
            or ask any questions about our services.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-saffron-100">
              <h2 className="font-heading text-3xl font-bold text-gray-800 mb-8">
                Schedule Your Appointment
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your appointment request has been submitted successfully. 
                    Our team will contact you within 24 hours to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-200"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Location *
                      </label>
                      <select
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a location</option>
                        {locations.map((location) => (
                          <option key={location.id} value={location.name}>
                            {location.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about your dental concerns or any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-saffron-500 to-maroon-500 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Schedule Appointment</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-800 mb-8">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We're here to help you achieve optimal oral health. Contact us through any of the following methods 
                  or visit one of our convenient locations.
                </p>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-maroon-50 to-red-50 rounded-2xl p-8 border border-maroon-100">
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-saffron-500 to-gold-500 w-12 h-12 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Emergency Line</p>
                      <a href="tel:+919705859606" className="text-lg font-semibold text-gray-800 hover:text-saffron-600 transition-colors duration-200">
                        +91-9705859606
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-maroon-500 to-burgundy-500 w-12 h-12 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email Us</p>
                      <a href="mailto:contact@ethosdental.com" className="text-lg font-semibold text-gray-800 hover:text-maroon-600 transition-colors duration-200">
                        contact@ethosdental.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-gold-500 to-terracotta-500 w-12 h-12 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Working Hours</p>
                      <p className="text-lg font-semibold text-gray-800">Mon-Sat: 9AM-8PM</p>
                      <p className="text-sm text-gray-600">Sun: 9AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
                <h3 className="font-heading text-xl font-semibold mb-4">Dental Emergency?</h3>
                <p className="text-red-100 mb-6 text-sm">
                  If you're experiencing a dental emergency, don't wait. Contact us immediately for urgent care.
                </p>
                <a
                  href="tel:+919705859606"
                  className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Emergency Line</span>
                </a>
              </div>

              {/* Location Summary */}
              <div className="bg-gradient-to-br from-gold-50 to-yellow-50 rounded-2xl p-8 border border-gold-100">
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-6">Our Locations</h3>
                <div className="space-y-4">
                  {locations.slice(0, 3).map((location) => (
                    <div key={location.id} className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">{location.name}</p>
                        <p className="text-sm text-gray-600">{location.phone[0]}</p>
                      </div>
                    </div>
                  ))}
                  <a
                    href="/locations"
                    className="text-gold-600 hover:text-gold-700 font-medium text-sm inline-flex items-center space-x-1 mt-4"
                  >
                    <span>View All Locations</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Find Us <span className="text-gradient">Nearby</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With 6 convenient locations across Andhra Pradesh and Telangana, 
              quality dental care is always within reach.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 border border-orange-100">
            <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg font-medium">Interactive Map</p>
                <p className="text-gray-500 text-sm">Find the nearest Ethos Dental location</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;