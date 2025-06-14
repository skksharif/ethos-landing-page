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
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/patient-education', label: 'Education' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/blog', label: 'Blog' },
  ];

  return (
    <>


      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow border-b' : 'bg-white/90'} backdrop-blur`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="p-3 w-[200px]">
                 <img src='/ethos-dental.png' className='w-[100%]'/>
              </div>
           
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-6 items-center text-sm">
              {navItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`hover:text-blue-500 ${location.pathname === to ? 'text-blue-500' : 'text-gray-700'}`}
                >
                  {label}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-500">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-0 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
                    <h3 className="text-blue-600 font-semibold mb-2">🪷 Healing Services</h3>
                    <div className="space-y-2 max-h-64 overflow-y-auto text-sm">
                      {services.map(service => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          onClick={closeMenu}
                          className="block hover:text-blue-600"
                        >
                          {service.icon} {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Locations Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('locations')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-500">
                  Locations <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'locations' && (
                  <div className="absolute left-0 mt-0 w-72 bg-white shadow-lg rounded-lg p-4 z-50">
                    <h3 className="text-blue-600 font-semibold mb-2">🏺 Our Clinics</h3>
                    <div className="space-y-2 text-sm">
                      {locations.map(loc => (
                        <Link
                          key={loc.id}
                          to={`/locations/${loc.id}`}
                          onClick={closeMenu}
                          className="block hover:text-blue-600"
                        >
                          {loc.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Media Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('media')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-500">
                  Media <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'media' && (
                  <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg p-3 z-50 text-sm">
                    <Link to="/media?tab=images" onClick={closeMenu} className="block py-1 hover:text-blue-600">🖼️ Images</Link>
                    <Link to="/media?tab=videos" onClick={closeMenu} className="block py-1 hover:text-blue-600">🎥 Videos</Link>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm hover:scale-105 transition"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white px-4 py-4 border-t">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-blue-500"
              >
                {label}
              </Link>
            ))}

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className="flex justify-between w-full py-2 text-gray-700 hover:text-blue-500"
              >
                🦷 Services <ChevronDown className={`w-4 h-4 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="pl-4 py-2 space-y-1 text-sm">
                  {services.slice(0, 6).map(service => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      onClick={closeMenu}
                      className="block text-gray-600 hover:text-blue-500"
                    >
                      {service.icon} {service.title}
                    </Link>
                  ))}
                  <Link to="/services" onClick={closeMenu} className="text-blue-500 font-medium">View All →</Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-4 block bg-gradient-to-r from-blue-500 to-blue-500 text-white text-center py-3 rounded-full"
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
