import React from "react";
import { Users, Heart, Award, Stethoscope } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="p-5 bg-gradient-to-br from-blue-50 via-aliceblue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="font-heading text-5xl font-bold leading-tight">
                  <span className="">About</span>
                  <br />
                  <span className="text-gray-800">Ethos Dental</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ethos Dental is a modern dental care provider serving
                  communities across the Telugu states. We are committed to
                  delivering high-quality, compassionate, and precise oral
                  healthcare.
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
            <div className="text-center space-y-6 group hover-scale bg-gradient-to-br from-blue-50 to-aliceblue-50 p-8 rounded-2xl border border-blue-100">
              <div className="bg-gradient-to-r from-blue-500 to-aliceblue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:shadow-lg transition-all duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-gray-800">
                Mission
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our mission is to provide dental care of international standards
                to every individual. We are dedicated to compassionate service,
                clinical excellence, and a patient-first approach.
              </p>
            </div>

            <div className="text-center space-y-6 group hover-scale bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-2xl border border-blue-100">
              <div className="bg-gradient-to-r from-blue-500 to-aliceblue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:shadow-lg transition-all duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-gray-800">
                Vision
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become a leading dental care provider known for integrated,
                ethical, and accessible oral healthcare across our communities.
              </p>
            </div>

            <div className="text-center space-y-6 group hover-scale bg-gradient-to-br from-blue-50 to-aliceblue-50 p-8 rounded-2xl border border-gold-100">
              <div className="bg-gradient-to-r from-blue-500 to-aliceblue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:shadow-lg transition-all duration-300">
                <Stethoscope className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-gray-800">
                Values
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                We uphold integrity, professionalism, and empathy in everything
                we do—ensuring each patient receives personalized, respectful,
                and expert care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-aliceblue-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">
                Our <span className="">Story</span>
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ethos Dental is a contemporary dental care network operating
                across Andhra Pradesh and Telangana. We strive to deliver
                high-quality oral healthcare using clinically proven treatments
                and compassionate service.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Patient comfort is at the heart of our practice. Unlike
                traditional setups, we ensure a relaxed, patient-friendly
                atmosphere without compromising on treatment quality. With six
                active dental hospitals and growing, our goal is to expand
                access to advanced dental care across the region.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-aliceblue-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                  Our Commitment to Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We use premium dental materials and follow clinical protocols
                  rooted in evidence-based practice. Our team stays updated with
                  global advancements to deliver safe, effective, and lasting
                  outcomes for every patient.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Modern dental care now includes opportunities to enhance
                appearance, function, and confidence. Through advanced
                techniques, we aim to help our patients achieve healthier,
                brighter smiles that support their overall wellbeing.
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
              Meet Our <span className="">Clinical Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of dental professionals brings expertise,
              empathy, and commitment to every patient interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Mahesh Chinta",
                title: "Chief Dental Surgeon",
                specialty: "Oral Surgery & Implants",
                gradient: "from-blue-500 to-aliceblue-500",
                bg: "from-blue-50 to-red-50",
                border: "border-blue-100",
              },
              {
                name: "Dr. Charishma",
                title: "Senior Consultant",
                specialty: "Cosmetic & Restorative Dentistry",
                gradient: "from-blue-500 to-aliceblue-500",
                bg: "from-blue-50 to-red-50",
                border: "border-blue-100",
              },
              {
                name: "Dr. Naresh Kumar",
                title: "Specialist",
                specialty: "Endodontics & Root Canal",
                gradient: "from-blue-500 to-aliceblue-500",
                bg: "from-blue-50 to-red-50",
                border: "border-blue-100",
              },
              {
                name: "Dr. Shravanthi",
                title: "Consultant",
                specialty: "Periodontics & Orthodontics",
                gradient: "from-blue-500 to-aliceblue-500",
                bg: "from-blue-50 to-red-50",
                border: "border-blue-100",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className={`text-center group hover-scale bg-gradient-to-br ${member.bg} p-8 rounded-2xl ${member.border}`}
              >
                <div
                  className={`bg-gradient-to-r ${member.gradient} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.title}</p>
                <p className="text-gray-500 text-sm mt-2">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-aliceblue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ethos Dental has earned the trust of thousands of patients through
              consistently high standards of dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg font-medium">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-300 mb-2">
                10,000+
              </div>
              <div className="text-lg font-medium">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-aliceblue-300 mb-2">
                6
              </div>
              <div className="text-lg font-medium">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-lg font-medium">Services</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
