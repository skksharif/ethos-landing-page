import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';
import { services } from '../data/services';
import { locations } from '../data/locations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Sacred Top Header Bar */}
      <div className="bg-gradient-to-r from-maroon-600 via-burgundy-600 to-maroon-700 text-white py-3 px-4 text-sm ayurvedic-texture">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91-9705859606</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>6 Sacred Healing Centers across AP & Telangana</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="sanskrit-small">🕉️ स्वास्थ्यस्य मूलं दन्त रक्षा 🪷</span>
          </div>
        </div>
      </div>

      {/* Main Sacred Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b-2 border-saffron-200' 
          : 'bg-white/90 backdrop-blur-sm'
      } mandala-pattern`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Sacred Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative bg-gradient-to-br from-saffron-500 via-gold-500 to-maroon-500 p-4 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500 chakra-symbol">
                <div className="text-white font-bold text-2xl font-sanskrit">ॐ</div>
                <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-maroon-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
              <div>
                <h1 className="font-heading text-3xl font-bold text-gradient">
                  Ethos Dental
                </h1>
                <p className="text-xs text-gray-600 -mt-1 sanskrit-small">
                  आयुर्वेदिक दंत चिकित्सा • Spiritual Oral Care
                </p>
              </div>
            </Link>

            {/* Desktop Sacred Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-all duration-300 hover:text-saffron-500 lotus-symbol ${
                  location.pathname === '/' ? 'text-saffron-500' : 'text-gray-700'
                }`}
              >
                गृह (Home)
              </Link>
              
              <Link 
                to="/about" 
                className={`font-medium transition-all duration-300 hover:text-saffron-500 ${
                  location.pathname === '/about' ? 'text-saffron-500' : 'text-gray-700'
                }`}
              >
                हमारे बारे में (About)
              </Link>

              {/* Sacred Services Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 font-medium text-gray-700 hover:text-saffron-500 transition-all duration-300 kalash-symbol"
                  onMouseEnter={() => setActiveDropdown('services')}
                >
                  <span>सेवाएं (Services)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div 
                    className="absolute top-full left-0 mt-3 w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-saffron-100 py-6 z-50 mandala-pattern"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="px-4 mb-4">
                      <h3 className="font-sanskrit text-lg font-semibold text-maroon-600 mb-2">
                        🪷 आध्यात्मिक उपचार सेवाएं
                      </h3>
                      <p className="text-xs text-gray-600">Spiritual Healing Services</p>
                    </div>
                    <div className="grid grid-cols-1 gap-1 px-4 max-h-96 overflow-y-auto">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="flex items-center space-x-3 p-4 rounded-xl hover:bg-saffron-50 hover:text-saffron-600 transition-all duration-300 group"
                          onClick={closeMenu}
                        >
                          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                          <div>
                            <div className="font-medium text-sm">{service.title}</div>
                            <div className="text-xs text-gray-500 line-clamp-1">{service.spiritualDescription}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sacred Locations Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 font-medium text-gray-700 hover:text-saffron-500 transition-all duration-300"
                  onMouseEnter={() => setActiveDropdown('locations')}
                >
                  <span>स्थान (Locations)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === 'locations' && (
                  <div 
                    className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-saffron-100 py-6 z-50 lotus-pattern"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="px-4 mb-4">
                      <h3 className="font-sanskrit text-lg font-semibold text-maroon-600 mb-2">
                        🏺 पवित्र उपचार केंद्र
                      </h3>
                      <p className="text-xs text-gray-600">Sacred Healing Centers</p>
                    </div>
                    <div className="px-4">
                      {locations.map((loc) => (
                        <Link
                          key={loc.id}
                          to={`/locations/${loc.id}`}
                          className="block p-3 rounded-xl hover:bg-saffron-50 hover:text-saffron-600 transition-all duration-300"
                          onClick={closeMenu}
                        >
                          <div className="font-medium">{loc.name}</div>
                          <div className="text-sm text-gray-500">{loc.address.slice(0, 50)}...</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Media Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 font-medium text-gray-700 hover:text-saffron-500 transition-all duration-300"
                  onMouseEnter={() => setActiveDropdown('media')}
                >
                  <span>मीडिया (Media)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === 'media' && (
                  <div 
                    className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-saffron-100 py-4 z-50"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="px-4 space-y-1">
                      <Link
                        to="/media?tab=images"
                        className="block p-3 rounded-xl hover:bg-saffron-50 hover:text-saffron-600 transition-all duration-300"
                        onClick={closeMenu}
                      >
                        🖼️ चित्र (Images)
                      </Link>
                      <Link
                        to="/media?tab=videos"
                        className="block p-3 rounded-xl hover:bg-saffron-50 hover:text-saffron-600 transition-all duration-300"
                        onClick={closeMenu}
                      >
                        🎥 वीडियो (Videos)
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/patient-education" 
                className={`font-medium transition-all duration-300 hover:text-saffron-500 ${
                  location.pathname === '/patient-education' ? 'text-saffron-500' : 'text-gray-700'
                }`}
              >
                शिक्षा (Education)
              </Link>

              <Link 
                to="/testimonials" 
                className={`font-medium transition-all duration-300 hover:text-saffron-500 ${
                  location.pathname === '/testimonials' ? 'text-saffron-500' : 'text-gray-700'
                }`}
              >
                प्रशंसापत्र (Testimonials)
              </Link>

              <Link 
                to="/blog" 
                className={`font-medium transition-all duration-300 hover:text-saffron-500 ${
                  location.pathname === '/blog' ? 'text-saffron-500' : 'text-gray-700'
                }`}
              >
                ब्लॉग (Blog)
              </Link>

              <Link 
                to="/contact"
                className="cta-button bg-gradient-to-r from-saffron-500 via-gold-500 to-maroon-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-2xl transform hover:scale-105 transition-all duration-300 healing-aura"
              >
                संपर्क करें (Contact)
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-saffron-50 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Sacred Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t-2 border-saffron-100 shadow-xl mandala-pattern">
            <nav className="max-w-7xl mx-auto px-4 py-6 space-y-3">
              <Link 
                to="/" 
                className="block py-3 text-gray-700 hover:text-saffron-500 transition-all duration-300 font-medium"
                onClick={closeMenu}
              >
                🏠 गृह (Home)
              </Link>
              
              <Link 
                to="/about" 
                className="block py-3 text-gray-700 hover:text-saffron-500 transition-all duration-300 font-medium"
                onClick={closeMenu}
              >
                ℹ️ हमारे बारे में (About)
              </Link>

              {/* Mobile Services */}
              <div>
                <button 
                  className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-saffron-500 transition-all duration-300 font-medium"
                  onClick={() => handleDropdownToggle('services')}
                >
                  <span>🦷 सेवाएं (Services)</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="pl-6 mt-3 space-y-2 bg-saffron-50 rounded-xl p-4">
                    {services.slice(0, 6).map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        className="block py-2 text-sm text-gray-600 hover:text-saffron-500 transition-all duration-300"
                        onClick={closeMenu}
                      >
                        {service.icon} {service.title}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block py-2 text-sm text-saffron-500 font-medium"
                      onClick={closeMenu}
                    >
                      सभी सेवाएं देखें (View All Services) →
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/patient-education" 
                className="block py-3 text-gray-700 hover:text-saffron-500 transition-all duration-300 font-medium"
                onClick={closeMenu}
              >
                📚 शिक्षा (Education)
              </Link>

              <Link 
                to="/testimonials" 
                className="block py-3 text-gray-700 hover:text-saffron-500 transition-all duration-300 font-medium"
                onClick={closeMenu}
              >
                ⭐ प्रशंसापत्र (Testimonials)
              </Link>

              <Link 
                to="/contact"
                className="block mt-6 bg-gradient-to-r from-saffron-500 via-gold-500 to-maroon-500 text-white px-8 py-4 rounded-full font-medium text-center cta-button"
                onClick={closeMenu}
              >
                संपर्क करें (Contact Us)
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;