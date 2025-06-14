import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Users,
  MapPin,
  Award,
  Heart,
  Shield,
  Clock,
} from "lucide-react";
import { services } from "../data/services";
import { locations } from "../data/locations";
import { testimonials } from "../data/testimonials";

const Home = () => {
  const featuredServices = services.slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);

  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".parallax-element");

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || "0.5";
        const yPos = -(scrolled * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-hidden page-transition">
      {/* Sacred Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-saffron-50 via-gold-50 to-maroon-50 mandala-pattern parallax-container">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />

        {/* Sacred Floating Icons */}
        <div
          className="absolute top-16 left-8 text-4xl opacity-20 parallax-element"
          data-speed="0.3"
        >
          🕉️
        </div>
        <div
          className="absolute top-36 right-12 text-3xl opacity-20 parallax-element"
          data-speed="0.4"
        >
          🪷
        </div>
        <div
          className="absolute bottom-32 left-12 text-4xl opacity-20 parallax-element"
          data-speed="0.2"
        >
          🏺
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="text-center lg:text-left">
                <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient">Spiritual</span>
                  <br />
                  <span className="text-gray-800">Dental Care</span>
                  <br />
                  <span className="text-saffron-600">Rooted in Heritage</span>
                </h1>
                <p className="mt-4 text-base md:text-lg text-gray-700 max-w-xl">
                  Experience holistic dental healing where ancient Indian wisdom
                  meets modern excellence. We restore not just your smile, but
                  your energetic balance through compassionate care.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-saffron-500 via-gold-500 to-maroon-500 text-white px-8 py-3 rounded-full font-medium text-base hover:shadow-xl hover:scale-105 transition healing-aura text-center"
                >
                  🪷 Start Your Journey{" "}
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-saffron-500 text-saffron-600 px-8 py-3 rounded-full font-medium text-base hover:bg-saffron-100 transition temple-border text-center"
                >
                  🕉️ View Services
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 text-center text-sm">
                <div>
                  <div className="text-2xl font-bold text-saffron-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-maroon-600">
                    10,000+
                  </div>
                  <div className="text-gray-600">Smiles Healed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold-600">6</div>
                  <div className="text-gray-600">Healing Centers</div>
                </div>
              </div>
            </div>

            {/* Right Image Content */}
            <div className="relative animate-slide-up">
              <div className="relative z-0 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 mandala-pattern healing-aura">
                <img
                  src="https://images.pexels.com/photos/6723523/pexels-photo-6723523.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Spiritual dental environment"
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-maroon-500 to-burgundy-500 text-white p-5 rounded-xl shadow-xl text-sm z-99">
                <h3 className="font-semibold mb-1">Ethos Dental</h3>
                <p className="opacity-90">Ancient Wisdom • Modern Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Values Section */}
      <section className="py-16 bg-white ayurvedic-texture">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-gray-800 mb-3">
              Our Sacred <span className="text-gradient">Principles</span>
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Rooted in Ayurveda and inspired by Indian wisdom, we offer dental
              care that nurtures the body, mind, and spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Principle 1 */}
            <div className="text-center group bg-gradient-to-br from-gold-50 to-yellow-50 p-8 rounded-2xl border border-gold-100 kalash-symbol hover:shadow-lg transition">
              <div className="bg-gradient-to-r from-saffron-500 to-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-saffron-600 mb-2">
                Compassionate Care
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                We treat each patient with warmth and empathy—restoring your
                smile with the care of family.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="text-center group bg-gradient-to-br from-gold-50 to-yellow-50 p-8 rounded-2xl border border-gold-100 kalash-symbol hover:shadow-lg transition">
              <div className="bg-gradient-to-r from-maroon-500 to-burgundy-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-maroon-600 mb-2">
                Excellence in Healing
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Precision, artistry, and global standards come together to
                ensure elevated care in every detail.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="text-center group bg-gradient-to-br from-gold-50 to-yellow-50 p-8 rounded-2xl border border-gold-100 kalash-symbol hover:shadow-lg transition">
              <div className="bg-gradient-to-r from-gold-500 to-terracotta-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gold-600 mb-2">
                Trust & Integrity
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Built on truth and ethics, we communicate transparently and act
                with integrity in every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Services Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50 lotus-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-gray-800 mb-2">
              Sacred <span className="text-gradient">Healing Services</span>
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              From routine care to advanced procedures, our expert team offers
              complete dental solutions with intention and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group p-6 rounded-2xl shadow-md border border-orange-100 bg-white hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="text-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                    {service.spiritualIcon}
                  </div>
                </div>

                <h4 className="font-heading text-lg font-semibold text-gray-800 mb-2 group-hover:text-saffron-600 transition-colors duration-300">
                  {service.title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {service.spiritualDescription}
                </p>

                <div className="flex items-center text-saffron-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  <span>Discover More</span>
                  <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-saffron-500 via-gold-500 to-maroon-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Sacred Locations Section */}
      <section className="py-20 bg-white mandala-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Sacred Healing <span className="text-gradient">Centers</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With 6 blessed healing centers across the sacred lands of Andhra
              Pradesh and Telangana, we bring divine dental care closer to your
              community.
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
            <h3 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Sacred <span className="text-gradient">Soul Stories</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from blessed souls about their transformative healing
              journeys at Ethos Dental. Their divine experiences inspire and
              guide us on the path of compassionate care.
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
                      <Star
                        key={i}
                        className="w-5 h-5 text-gold-500 fill-current"
                      />
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
                      <p className="font-semibold text-gray-800 text-lg">
                        {testimonial.name}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <p className="text-sm text-gray-500">
                          {testimonial.location}
                        </p>
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
              Read More Sacred Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Sacred CTA Section */}
      <section className="py-16 bg-gradient-to-r from-maroon-1000 via-burgundy-700 to-maroon-800  mandala-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 opacity-90">
              Ready to Transform Your Sacred Smile?
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto opacity-80 mb-6">
              Join thousands who’ve experienced the harmony of ancient wisdom
              and modern dental excellence at Ethos Dental.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-saffron-500 to-gold-500 text-white px-6 py-3 rounded-full font-medium text-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Begin Your Consultation
            </Link>
            <Link
              to="/locations"
              className="border border-gold px-6 py-3 rounded-full font-medium text-sm hover:bg-white hover:text-maroon-700 transition-all duration-300"
            >
              Find a Location
            </Link>
          </div>

          <div className="mt-6">
            <p className="text-sm italic opacity-70">
              "Dental care is the foundation of well-being"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
