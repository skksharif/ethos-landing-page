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
  Handshake,
  Eye,
  Target,
  Baby,
  User,
  Zap,
  Smile,
  Layers,
  AlignCenter,
  ShieldCheck,
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
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-white via-gray-50 to-sky-50 parallax-container">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="text-center lg:text-left">
                <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-tight text-gray-800">
                  <span className="text-blue-700">Welcome To</span>
                  <br />
                  <span className="text-gray-900">Ethos Dental</span>
                </h1>
                <h2 className="mt-2 text-xl text-blue-600 font-semibold">
                  Excellence in Dentistry with Optimum Care
                </h2>
                <p className="mt-4 text-base md:text-lg text-gray-700 max-w-xl">
                  Ethos Dental is a contemporary dental health centre providing
                  services across the Telugu states. We are committed to
                  offering the finest quality oral treatment, unsurpassed in
                  precision and eminence.
                </p>
                <p className="text-sm text-gray-600 max-w-xl mt-2">
                  More than just dentistry… we also address dental phobias by
                  prioritizing comfort without compromising care. Currently
                  operating 4 hospitals across Andhra & Telangana, our network
                  continues to grow.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium text-base hover:shadow-xl hover:scale-105 transition text-center"
                >
                  Book a Consultation{" "}
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-blue-600 text-blue-700 px-8 py-3 rounded-full font-medium text-base hover:bg-blue-50 transition text-center"
                >
                  Learn More About Us
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 text-center text-sm">
                <div>
                  <div className="text-2xl font-bold text-blue-700">4</div>
                  <div className="text-gray-600">
                    Hospitals Across Telugu States
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-700">Finest</div>
                  <div className="text-gray-600">Clinical Standards</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-700">100%</div>
                  <div className="text-gray-600">Patient-Focused Comfort</div>
                </div>
              </div>
            </div>

            {/* Right Image Content */}
            <div className="relative animate-slide-up">
              <div className="relative z-0 bg-white backdrop-blur-md rounded-2xl shadow-2xl p-6">
                <img
                  src="https://images.pexels.com/photos/3845767/pexels-photo-3845767.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ethos Dental clinic"
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white p-5 rounded-xl shadow-xl text-sm z-10">
                <h3 className="font-semibold mb-1">Ethos Dental</h3>
                <p className="opacity-90">Trusted Care • Modern Facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-gray-800 mb-3">
              Our <span className="text-blue-600">Commitment</span>
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              At Ethos Dental, we believe in delivering international standards
              of dental care with compassion, integrity, and clinical
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="text-center bg-gray-50 p-8 rounded-2xl border hover:shadow-lg transition">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">
                Our Mission
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                To bring healthcare of international standards within the reach
                of every individual. We are committed to achieving excellence in
                dental care.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center bg-gray-50 p-8 rounded-2xl border hover:shadow-lg transition">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">
                Our Vision
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                To provide a world-class integrated healthcare system with a
                focus on compassionate, accessible care—especially for
                underprivileged communities.
              </p>
            </div>

            {/* Values */}
            <div className="text-center bg-gray-50 p-8 rounded-2xl border hover:shadow-lg transition">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                Our Values
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Built on principles of truth and dedication. We aim to deliver
                high-quality, ethical dental care while fostering trust and
                long-term relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Services Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-gray-800 mb-2">
              Our <span className="text-blue-600">Treatments</span>
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              From routine care to advanced procedures, we offer comprehensive
              dental solutions tailored to every patient's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Dental Implants",
                desc: "Designed to protect facial bone and restore healthy teeth.",
                icon: <Smile className="w-7 h-7" />,
              },
              {
                title: "Maxillofacial Surgery",
                desc: "Precision procedures for facial health and functional recovery.",
                icon: <User className="w-7 h-7" />,
              },
              {
                title: "Oral Surgery",
                desc: "Specialized treatment for complex dental and jaw conditions.",
                icon: <Baby className="w-7 h-7" />,
              },
              {
                title: "Laser Dentistry",
                desc: "Minimally invasive, drill-free care for comfortable procedures.",
                icon: <Zap className="w-7 h-7" />,
              },
              {
                title: "Prosthodontics",
                desc: "Crowns, bridges, and full-mouth restoration for a confident smile.",
                icon: <Smile className="w-7 h-7" />,
              },
              {
                title: "Endodontics",
                desc: "Root canal therapy and advanced inner tooth care solutions.",
                icon: <Layers className="w-7 h-7" />,
              },
              {
                title: "Cosmetic Dentistry",
                desc: "Enhancing smiles with whitening, veneers, and more.",
                icon: <Star className="w-7 h-7" />,
              },
              {
                title: "Orthodontics",
                desc: "Braces and aligners to correct misaligned teeth and jaws.",
                icon: <AlignCenter className="w-7 h-7" />,
              },
              {
                title: "Pedodontics",
                desc: "Gentle, effective care for children’s developing teeth.",
                icon: <Baby className="w-7 h-7" />,
              },
              {
                title: "Periodontics",
                desc: "Diagnosis and treatment of gum diseases and oral inflammation.",
                icon: <ShieldCheck className="w-7 h-7" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl shadow-md border bg-white hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-600">{service.icon}</div>
                </div>
                <h4 className="font-heading text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Locations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Our <span className="text-blue-600">Dental Centers</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ethos Dental has 6 advanced dental hospitals serving communities
              across Andhra Pradesh and Telangana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Link
                key={location.id}
                to={`/locations/${location.id}`}
                className="group p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
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
                    {location.services.length} Services Offered
                  </div>
                </div>

                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span>View Location</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Patient <span className="text-blue">Stories</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how compassionate dental care at Ethos Dental has
              transformed lives. Hear directly from our patients about their
              experiences and outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className=" hover:scale-105 p-8 rounded-3xl shadow-xl border-2 border-blue-100 bg-white/90 backdrop-blur-md animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-blue-500 fill-current"
                      />
                    ))}
                  </div>
        
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
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
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

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="cta-button bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Sacred CTA Section */}

    </div>
  );
};

export default Home;
