import React from 'react';
import { Users, Building2, Brain, Shield, Clock, BarChart as ChartBar } from 'lucide-react';

const stats = [
  { label: "Accuracy Rate", value: "95%", icon: ChartBar },
  { label: "Response Time", value: "< 2 min", icon: Clock },
  { label: "Cases Analyzed", value: "50,000+", icon: Shield }
];

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Dermatologist",
    hospital: "Central Medical Center",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    expertise: "Skin Cancer Specialist with 15 years of experience"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Oncologist",
    hospital: "Metropolitan Hospital",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    expertise: "Melanoma Research Expert"
  },
  {
    name: "Dr. Emily Williams",
    specialty: "Dermatologist",
    hospital: "City Healthcare",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    expertise: "Specialized in Early Detection Technologies"
  }
];

const hospitals = [
  {
    name: "Central Medical Center",
    location: "123 Healthcare Ave",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=500&h=300",
    features: ["State-of-the-art Imaging", "24/7 Emergency Care", "Research Center"]
  },
  {
    name: "Metropolitan Hospital",
    location: "456 Medical Park",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=500&h=300",
    features: ["Advanced Cancer Treatment", "Specialized Dermatology Unit", "Clinical Trials"]
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16 transform transition-all duration-500 hover:scale-105">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
          AI-Powered Skin Cancer Detection
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Early detection saves lives. Our advanced AI system helps identify potential skin cancer symptoms with high accuracy.
        </p>
        <div className="inline-flex space-x-4">
          <a href="#learn-more" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Learn More
          </a>
          <a href="#contact" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
            Contact Us
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2">
            <stat.icon className="w-12 h-12 text-blue-600 mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2">
          <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
          <p className="text-gray-600">Advanced machine learning algorithms trained on millions of images for accurate detection</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2">
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
          <p className="text-gray-600">Team of board-certified dermatologists and oncologists</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2">
          <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Leading Hospitals</h3>
          <p className="text-gray-600">Partnership with top medical facilities worldwide</p>
        </div>
      </div>

      {/* Doctors Section */}
      <section className="mb-16" id="doctors">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-blue-600 mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 mb-2">{doctor.hospital}</p>
                <p className="text-gray-500 text-sm">{doctor.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hospitals Section */}
      <section id="hospitals">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Partner Hospitals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hospitals.map((hospital, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{hospital.name}</h3>
                <p className="text-gray-600 mb-4">{hospital.location}</p>
                <ul className="space-y-2">
                  {hospital.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Shield className="w-4 h-4 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-16 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Get in Touch</h3>
              <p className="text-gray-600">Have questions about our AI detection system? Our team is here to help.</p>
              <div className="space-y-2">
                <p className="text-gray-600">📞 (555) 123-4567</p>
                <p className="text-gray-600">📧 contact@skincheckAI.com</p>
                <p className="text-gray-600">📍 789 Medical Drive, Suite 100</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Hours of Operation</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}