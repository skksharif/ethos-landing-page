import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, MapPin, Award, Heart, Shield, Clock } from 'lucide-react';
import { services } from '../data/services';
import { locations } from '../data/locations';
import { testimonials } from '../data/testimonials';

const Home = () => {
  const featuredServices = services.slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);

  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(scrolled * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden page-transition">
      {/* Sacred Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-saffron-50 via-gold-50 to-maroon-50 mandala-pattern parallax-container">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        
        {/* Floating Sacred Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 parallax-element" data-speed="0.3">🕉️</div>
        <div className="absolute top-40 right-20 text-4xl opacity-20 parallax-element" data-speed="0.4">🪷</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-20 parallax-element" data-speed="0.2">🏺</div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              {/* Sanskrit Blessing */}
              <div className="text-center lg:text-left mb-8">
                <h2 className="font-sanskrit text-2xl md:text-3xl text-sanskrit-gradient mb-3">
                  स्वास्थ्यस्य मूलं दन्त रक्षा
                </h2>
                <p className="text-maroon-600 text-sm italic">
                  "Dental care is the foundation of well-being"
                </p>
              </div>

              <div className="space-y-6">
                <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gradient">आध्यात्मिक</span><br />
                  <span className="text-gray-800">Dental Care</span><br />
                  <span className="text-saffron-600">Rooted in Heritage</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                  Experience holistic dental healing where ancient Indian wisdom meets modern excellence. 
                  At Ethos Dental, we nurture your prana through compassionate oral care, 
                  restoring not just your smile but your spiritual radiance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="cta-button bg-gradient-to-r from-saffron-500 via-gold-500 to-maroon-500 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 text-center healing-aura"
                >
                  🪷 Begin Your Healing Journey
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-3 border-saffron-500 text-saffron-600 px-10 py-5 rounded-full font-semibold text-lg hover:bg-saffron-50 transition-all duration-500 text-center temple-border"
                >
                  🕉️ Sacred Services
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center chakra-symbol">
                  <div className="text-4xl font-bold text-saffron-600">15+</div>
                  <div className="text-sm text-gray-600 sanskrit-small">वर्ष अनुभव</div>
                  <div className="text-xs text-gray-500">Years Experience</div>
                </div>
                <div className="text-center lotus-symbol">
                  <div className="text-4xl font-bold text-maroon-600">10,000+</div>
                  <div className="text-sm text-gray-600 sanskrit-small">प्रसन्न रोगी</div>
                  <div className="text-xs text-gray-500">Happy Souls</div>
                </div>
                <div className="text-center kalash-symbol">
                  <div className="text-4xl font-bold text-gold-600">6</div>
                  <div className="text-sm text-gray-600 sanskrit-small">पवित्र केंद्र</div>
                  <div className="text-xs text-gray-500">Sacred Centers</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 mandala-pattern healing-aura">
                <img
                  src="https://images.pexels.com/photos/6723523/pexels-photo-6723523.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sacred dental healing environment with traditional Indian elements"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-saffron-500 to-gold-500 text-white p-6 rounded-full shadow-xl animate-float chakra-symbol">
                  <Heart className="w-8 h-8" />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-maroon-500 to-burgundy-500 text-white p-8 rounded-2xl shadow-xl lotus-symbol">
                <h3 className="font-semibold text-lg mb-2">🪷 Holistic Healing</h3>
                <p className="text-sm opacity-90">Ancient Wisdom • Modern Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Values Section */}
      <section className="py-20 bg-white ayurvedic-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sanskrit text-3xl font-bold text-sanskrit-gradient mb-4">
              हमारे पवित्र सिद्धांत
            </h2>
            <h3 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Our Sacred <span className="text-gradient">Principles</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rooted in the timeless wisdom of Ayurveda and guided by the compassionate spirit of Indian culture, 
              we deliver dental care that heals both body and soul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover-scale bg-gradient-to-br from-saffron-50 to-orange-50 p-10 rounded-3xl border-2 border-saffron-100 chakra-symbol">
              <div className="bg-gradient-to-r from-saffron-500 to-gold-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:shadow-xl transition-all duration-500">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                करुणामय देखभाल
              </h3>
              <h4 className="text-lg font-medium text-saffron-600 mb-4">Compassionate Care</h4>
              <p className="text-gray-600 leading-relaxed">
                We treat every patient with the warmth and respect of family, ensuring comfort and trust 
                throughout your spiritual dental journey, like the loving care of a divine mother.
              </p>
            </div>

            <div className="text-center group hover-scale bg-gradient-to-br from-maroon-50 to-red-50 p-10 rounded-3xl border-2 border-maroon-100 lotus-symbol">
              <div className="bg-gradient-to-r from-maroon-500 to-burgundy-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:shadow-xl transition-all duration-500">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                उत्कृष्टता में उपचार
              </h3>
              <h4 className="text-lg font-medium text-maroon-600 mb-4">Excellence in Healing</h4>
              <p className="text-gray-600 leading-relaxed">
                International standards meet traditional dedication, delivering precision and eminence 
                in every procedure, like the masterful artistry of ancient temple sculptors.
              </p>
            </div>

            <div className="text-center group hover-scale bg-gradient-to-br from-gold-50 to-yellow-50 p-10 rounded-3xl border-2 border-gold-100 kalash-symbol">
              <div className="bg-gradient-to-r from-gold-500 to-terracotta-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:shadow-xl transition-all duration-500">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                विश्वास और सत्यनिष्ठा
              </h3>
              <h4 className="text-lg font-medium text-gold-600 mb-4">Trust & Integrity</h4>
              <p className="text-gray-600 leading-relaxed">
                Built on principles of truth and dedication, we ensure transparent communication 
                and ethical practice, following the sacred path of dharma in all we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Services Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 lotus-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sanskrit text-3xl font-bold text-sanskrit-gradient mb-4">
              आध्यात्मिक उपचार सेवाएं
            </h2>
            <h3 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Sacred <span className="text-gradient">Healing Services</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine care to advanced procedures, our expert team provides complete dental solutions 
              infused with spiritual intention and blessed with ancient healing wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="service-card group hover-scale p-8 rounded-3xl shadow-xl border-2 border-orange-100 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <div className="text-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                    {service.spiritualIcon}
                  </div>
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2 group-hover:text-saffron-600 transition-colors duration-500">
                  {service.title}
                </h3>
                
                <h4 className="font-sanskrit text-sm text-maroon-600 mb-3">
                  {service.sanskritName}
                </h4>
                
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {service.spiritualDescription}
                </p>
                
                <div className="flex items-center text-saffron-600 font-medium group-hover:translate-x-2 transition-transform duration-500">
                  <span>🪷 Discover Sacred Healing</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="cta-button bg-gradient-to-r from-saffron-500 via-gold-500 to-maroon-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              🕉️ Explore All Sacred Services
            </Link>
          </div>
        </div>
      </section>

      {/* Sacred Locations Section */}
      <section className="py-20 bg-white mandala-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sanskrit text-3xl font-bold text-sanskrit-gradient mb-4">
              पवित्र उपचार केंद्र
            </h2>
            <h3 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Sacred Healing <span className="text-gradient">Centers</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With 6 blessed healing centers across the sacred lands of Andhra Pradesh and Telangana, 
              we bring divine dental care closer to your community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Link
                key={location.id}
                to={`/locations/${location.id}`}
                className="location-card group hover-scale p-8 rounded-3xl shadow-xl border-2 border-orange-100 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-saffron-500 to-maroon-500 w-14 h-14 rounded-full flex items-center justify-center mr-4 kalash-symbol">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-gray-800 group-hover:text-saffron-600 transition-colors duration-500">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-500">{location.city}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {location.address}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    {location.timings.weekdays}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    {location.services.length} Sacred Services Available
                  </div>
                </div>
                
                <div className="flex items-center text-saffron-600 font-medium group-hover:translate-x-2 transition-transform duration-500">
                  <span>🏺 Visit Sacred Center</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 ayurvedic-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sanskrit text-3xl font-bold text-sanskrit-gradient mb-4">
              आत्मा की कहानियां
            </h2>
            <h3 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Sacred <span className="text-gradient">Soul Stories</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from blessed souls about their transformative healing journeys at Ethos Dental. 
              Their divine experiences inspire and guide us on the path of compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="testimonial-card hover-scale p-8 rounded-3xl shadow-xl border-2 border-orange-100 bg-white/90 backdrop-blur-md animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                    ))}
                  </div>
                  <div className="text-2xl opacity-30">🪷</div>
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
                        Blessed by {testimonial.doctor}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="cta-button bg-gradient-to-r from-saffron-500 via-gold-500 to-maroon-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              🕉️ Read More Sacred Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Sacred CTA Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-600 via-burgundy-600 to-maroon-700 text-white mandala-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="font-sanskrit text-3xl font-bold mb-4">
              आपकी मुस्कान को दिव्य बनाने के लिए तैयार हैं?
            </h2>
            <h3 className="font-heading text-4xl font-bold mb-6">
              Ready to Transform Your Sacred Smile?
            </h3>
          </div>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of blessed souls who have experienced the perfect harmony of 
            ancient healing wisdom and modern dental excellence at Ethos Dental.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="cta-button bg-gradient-to-r from-saffron-500 to-gold-500 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              🪷 Begin Sacred Consultation
            </Link>
            <Link
              to="/locations"
              className="border-3 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-maroon-600 transition-all duration-500"
            >
              🏺 Find Sacred Center
            </Link>
          </div>
          
          <div className="mt-8">
            <p className="font-sanskrit text-lg opacity-80">
              🕉️ स्वास्थ्यस्य मूलं दन्त रक्षा 🪷
            </p>
            <p className="text-sm opacity-70 mt-2">
              "Dental care is the foundation of well-being"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;