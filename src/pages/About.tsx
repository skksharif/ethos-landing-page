import React from 'react';
import { Users, Heart, Award, MapPin, Clock, Stethoscope } from 'lucide-react';

const About = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="p-5 bg-gradient-to-br from-saffron-50 via-orange-50 to-red-50 bg-indian-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="font-heading text-5xl font-bold leading-tight">
                  <span className="text-gradient">About</span><br />
                  <span className="text-gray-800">Ethos Dental</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A contemporary dental health centre providing services across Telugu states with 
                  unwavering commitment to excellence, compassion, and the finest quality oral treatment.
                </p>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="bg-white rounded-3xl shadow-2xl p-8 mandala-pattern">
                <img
                  src="https://images.pexels.com/photos/4269291/pexels-photo-4269291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ethos Dental Team"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center space-y-6 group hover-scale bg-gradient-to-br from-saffron-50 to-orange-50 p-8 rounded-2xl border border-saffron-100">
              <div className="bg-gradient-to-r from-saffron-500 to-gold-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:shadow-lg transition-all duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-gray-800">Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our mission is to bring healthcare of International standards within the reach of every individual. 
                We are committed to the achievement of this goal through compassionate care and excellence in treatment.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center space-y-6 group hover-scale bg-gradient-to-br from-maroon-50 to-red-50 p-8 rounded-2xl border border-maroon-100">
              <div className="bg-gradient-to-r from-maroon-500 to-burgundy-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:shadow-lg transition-all duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-gray-800">Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide a world class integrated healthcare system, with a focus on compassionate patient care 
                to the underprivileged people across our communities.
              </p>
            </div>

            {/* Values */}
            <div className="text-center space-y-6 group hover-scale bg-gradient-to-br from-gold-50 to-yellow-50 p-8 rounded-2xl border border-gold-100">
              <div className="bg-gradient-to-r from-gold-500 to-terracotta-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:shadow-lg transition-all duration-300">
                <Stethoscope className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-gray-800">Values</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our commitment core values stand on the principles of truth and dedication. 
                Providing high-quality dental care ensuring a caring and compassionate approach to every patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ethos Dental is a contemporary dental health centre providing services across Telugu states. 
                We are committed to providing the finest quality oral treatment, unsurpassed in precision and eminence. 
                More than just dentistry… at Ethos Dental, we do not only treat your teeth related problems, 
                but also treat your dental phobias!
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Unlike traditional clinics, we emphasize pretty much on our patients comfort without compromising 
                the quality of our treatments. Currently our network of 6 Dental Hospitals work across Andhra & Telangana, 
                still in the process of network expansion.
              </p>

              <div className="bg-gradient-to-r from-saffron-50 to-orange-50 rounded-2xl p-8 border border-saffron-100">
                <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                  Our Commitment to Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to use exclusive dental materials and clinical procedures of proven quality. 
                  We dedicate ourselves to search for the best products and solutions to fulfill our patients' needs 
                  by keeping our clinical and scientific knowledge abreast.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                At this age of time, dental treatments are no longer restricted to resolution of pain and replacing missing teeth. 
                Instead, advanced techniques can be utilized to enhance an individual's smile, making them look more attractive and confident! 
                A change in your teeth could change your life. Seriously….We mean it…
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">
              Our Expert <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Ethos Dental Hospital, our senior most dental doctors take care of each patient with 
              personalized attention and expertise in their respective specializations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover-scale bg-gradient-to-br from-saffron-50 to-orange-50 p-8 rounded-2xl border border-saffron-100">
              <div className="bg-gradient-to-r from-saffron-500 to-gold-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">Dr. Mahesh Chinta</h3>
              <p className="text-gray-600 text-sm">Chief Dental Surgeon</p>
              <p className="text-gray-500 text-sm mt-2">Specializing in Oral Surgery & Implants</p>
            </div>

            <div className="text-center group hover-scale bg-gradient-to-br from-maroon-50 to-red-50 p-8 rounded-2xl border border-maroon-100">
              <div className="bg-gradient-to-r from-maroon-500 to-burgundy-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">Dr. Charishma</h3>
              <p className="text-gray-600 text-sm">Senior Consultant</p>
              <p className="text-gray-500 text-sm mt-2">Cosmetic & Restorative Dentistry</p>
            </div>

            <div className="text-center group hover-scale bg-gradient-to-br from-gold-50 to-yellow-50 p-8 rounded-2xl border border-gold-100">
              <div className="bg-gradient-to-r from-gold-500 to-terracotta-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">Dr. Naresh Kumar</h3>
              <p className="text-gray-600 text-sm">Specialist</p>
              <p className="text-gray-500 text-sm mt-2">Endodontics & Root Canal</p>
            </div>

            <div className="text-center group hover-scale bg-gradient-to-br from-terracotta-50 to-orange-50 p-8 rounded-2xl border border-terracotta-100">
              <div className="bg-gradient-to-r from-terracotta-500 to-saffron-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">Dr. Shravanthi</h3>
              <p className="text-gray-600 text-sm">Consultant</p>
              <p className="text-gray-500 text-sm mt-2">Periodontics & Orthodontics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-600 via-burgundy-600 to-maroon-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our commitment to excellence has earned the trust of patients across Andhra Pradesh and Telangana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-saffron-300 mb-2">15+</div>
              <div className="text-lg font-medium">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-300 mb-2">10,000+</div>
              <div className="text-lg font-medium">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-300 mb-2">6</div>
              <div className="text-lg font-medium">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-300 mb-2">20+</div>
              <div className="text-lg font-medium">Services</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;