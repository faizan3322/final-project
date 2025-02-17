import React from 'react';
import { Users, Building2, Brain, Shield, Clock, Mail, MapPin, Phone, BarChart as ChartBar } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import doctors from "./doctors"
import { Link, useNavigate } from 'react-router-dom';
import hospitals from "./hospitals";




const stats = [
  { label: "Accuracy Rate", value: "95%", icon: ChartBar },
  { label: "Response Time", value: "Less Than 2 min", icon: Clock },
  { label: "Cases Analyzed", value: "50,000+", icon: Shield }
];



export default function Home() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user") !== null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isLoggedIn) {
      e.preventDefault(); // Prevent navigation
      navigate("/login"); // Redirect to login page
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 md:px-12 lg:px-20">
        {/* Left Side (Image) */}
        <div className="flex justify-center">
          <img src="/src/doctor-5.png" alt="Doctor" className="h-auto max-h-96 w-full object-contain" />
        </div>

        {/* Right Side (Text & Buttons) */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Skin Cancer Detection
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-lg mx-auto lg:mx-0 mb-8">
            Early detection saves lives. Our advanced AI system helps identify potential skin cancer symptoms with high accuracy.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <Link
              to="/upload-image"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
              onClick={handleClick}
            >
              Analyze Image
            </Link>
            <Link to="/cancer-types" className="border-2 border-[#3F4F44] text-[#3F4F44] font-bold px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-blue-50 transition-colors duration-300">
              Learn About Skin Cancer
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-5">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2">
            <stat.icon className="w-12 h-12 text-[#3A7D44] mb-4" />
            <div className="text-3xl font-bold text-[#3A7D44] mb-2">{stat.value}</div>
            <div className="text-gray-700">{stat.label}</div>
          </div>
        ))}
      </div>
      {/* Types Of Skin Cancer */}

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left Side (Image) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/src/skin-types.jpg"
              alt="Skin Cancer Types"
              className="h-auto max-h-96 w-full object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side (Text & Buttons) */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-[#3A7D44] mb-6">Types of Skin Cancer</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#3A7D44]">Basal Cell Carcinoma (BCC)</h3>
                <p className="text-gray-600 mt-2">
                  The most common type of skin cancer, usually found on sun-exposed areas like the face, ears, and neck.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#3A7D44]">Squamous Cell Carcinoma (SCC)</h3>
                <p className="text-gray-600 mt-2">
                  The second most common type, developing slowly but can spread if left untreated.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#3A7D44]">Malignant Melanoma</h3>
                <p className="text-gray-600 mt-2">
                  A serious and aggressive form of skin cancer that grows quickly and requires early treatment.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/upload-image"
                className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                onClick={handleClick}
              >
                Analyze Image
              </Link>
              <Link
                to="/cancer-types"
                className="border-2 border-gray-700 text-gray-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
              >
                Learn More About Skin Cancer
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* types of Skin Cancer Ends */}
      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2">
          <Brain className="w-12 h-12 text-[#3A7D44] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2  text-[#3A7D44]">AI Analysis</h3>
          <p className="text-gray-700">Advanced machine learning algorithms trained on millions of images for accurate detection</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2">
          <Users className="w-12 h-12 text-[#3A7D44] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[#3A7D44] ">Expert Dematologists</h3>
          <p className=" text-gray-700">Book appointments with expert Dermatologists</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2">
          <Building2 className="w-12 h-12 text-[#3A7D44] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[#3A7D44]">Leading Hospitals</h3>
          <p className="text-gray-700">Suggest top medical facilities all over Karachi</p>
        </div>
      </div>

      {/* Doctors Section */}
      <section className="mb-16" id="doctors">
        <h2 className="text-3xl font-bold text-[#3A7D44] mb-8 text-center">Best Dermatologists in Karachi</h2>

        <Slider
          dots={true}
          infinite={false}
          speed={500}
          slidesToShow={4} // Change this for different screen sizes
          slidesToScroll={1}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
          ]}
        >
          {doctors.map((doctor, index) => (
            <div key={index} className="p-4">
              <div className="bg-[#F8F5E9] rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-45 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">{doctor.name}</h3>
                  <p className="text-[#3A7D44] mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 mb-2">{doctor.hospital}</p>
                  <p className="text-gray-500 text-sm">{doctor.expertise}</p>
                  <Link className='text-[#3A7D44] underline hover:text-[#9DC08B]' to={`/doctors-detail/${doctor.id}`}>Read More</Link>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>


      {/* Hospitals Section */}
      <section id="hospitals">
        <h2 className="text-3xl font-bold text-[#3A7D44] mb-8 text-center">Suggested Hospitals</h2>

        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={2} // Shows 2 slides on larger screens
          slidesToScroll={1}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Medium screens
            { breakpoint: 768, settings: { slidesToShow: 1 } },  // Small screens
          ]}
        >
          {hospitals.map((hospitals, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={hospitals.image}
                    alt={hospitals.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">{hospitals.name}</h3>
                  <p className="text-gray-600 mb-4">{hospitals.rating}</p>
                  <Link className='text-[#3A7D44] underline hover:text-[#9DC08B]' to={`/hospital-details/${hospitals.id}`}>Read More</Link>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>


      {/* Contact Section */}
      <section id="contact" className="mt-16 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">About Us</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Get in Touch</h3>
              <p className="text-gray-600">Have questions about our AI detection system? </p>
              <div className="space-y-2">
                <a href='tel:+923494549812'><p className="text-gray-600 flex items-center"><Phone className="text-gray-600 mr-2 " /> +92 3494549812</p></a>
                <a className="text-gray-600 flex items-center" href='mailto:melanocheck@gmail.com'><p className="text-gray-600 flex items-center"><Mail className="text-gray-600 mr-2" /> melanocheck@gmail.com</p></a>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="text-gray-600 mr-2" />
                  Gulshan e Iqbal block 6
                </p>


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