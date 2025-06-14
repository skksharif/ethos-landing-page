import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { locations } from "../data/locations";

const Footer = () => {
  const services = [
    "Dental Implants",
    "Cosmetic Dentistry",
    "Orthodontics",
    "Periodontics",
    "Endodontics",
    "Laser Dentistry",
    "Root Canal",
    "Teeth Whitening",
  ];

  return (
    <footer className="bg-gradient-to-br from-white via-gray-800 to-gray-900 text-white">
      {/* Decorative border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 to-gray-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 ">
                <div className="p-3 w-[200px]">
                  <img src="/ethos-dental.png" className="w-[100%] bg-color-aliceblue" />
                </div>
              </Link>
            </div>

            <p className="text-orange-100 text-sm leading-relaxed">
              Contemporary dental health centre providing services across Telugu
              states. We are committed to providing the finest quality oral
              treatment with unsurpassed precision and eminence.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-orange-200 hover:text-saffron-300 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-orange-200 hover:text-saffron-300 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-orange-200 hover:text-saffron-300 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-orange-200 hover:text-saffron-300 transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-saffron-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-orange-100 hover:text-saffron-300 transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-orange-100 hover:text-saffron-300 transition-colors duration-200 text-sm"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="text-orange-100 hover:text-saffron-300 transition-colors duration-200 text-sm"
                >
                  Our Locations
                </Link>
              </li>
              <li>
                <Link
                  to="/patient-education"
                  className="text-orange-100 hover:text-saffron-300 transition-colors duration-200 text-sm"
                >
                  Patient Education
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-orange-100 hover:text-saffron-300 transition-colors duration-200 text-sm"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-orange-100 hover:text-saffron-300 transition-colors duration-200 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-orange-100 hover:text-saffron-300 transition-colors duration-200 text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-saffron-300">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to={`/services/${service
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-orange-100 hover:text-saffron-300 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-saffron-300">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-saffron-300 mt-1" />
                <div>
                  <p className="text-orange-100 text-sm">Emergency Line</p>
                  <p className="text-white font-medium">+91-9705859606</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-saffron-300 mt-1" />
                <div>
                  <p className="text-orange-100 text-sm">Email Us</p>
                  <p className="text-white font-medium">
                    contact@ethosdental.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-saffron-300 mt-1" />
                <div>
                  <p className="text-orange-100 text-sm">Locations</p>
                  <p className="text-white font-medium">
                    6 Cities • AP & Telangana
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-saffron-300 mt-1" />
                <div>
                  <p className="text-orange-100 text-sm">Working Hours</p>
                  <p className="text-white font-medium">Mon-Sat: 9AM-8PM</p>
                  <p className="text-white font-medium">Sun: 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-orange-200 text-sm">
              <p>&copy; 2024 Ethos Dental. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-orange-200 hover:text-saffron-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-orange-200 hover:text-saffron-300 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-orange-200 hover:text-saffron-300 transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>

          <div className="text-center mt-4 text-xs text-orange-300">
            <p>
              🇮🇳 Proudly serving the dental health needs of Andhra Pradesh &
              Telangana with Indian values and international standards 🇮🇳
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
