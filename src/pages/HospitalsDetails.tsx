import React from 'react'
import hospitals from "./hospitals"
import { useParams } from "react-router-dom";
import { Star, Clock, Languages, Award, Building2, Phone } from 'lucide-react';

export default function HospitalsDetails() {
    const { id } = useParams(); // Get hospital ID from URL
    const hospital = hospitals.find((hos) => hos.id === id); // Find the hospital by ID

    if (!hospital) {
        return <div className="text-center text-red-500 text-xl mt-10">hospital not found</div>;
    }
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <button
            
            className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            ← Back to hospitals
          </button>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{hospital.name}</h1>
                    <p className="text-lg text-gray-600">{hospital.specialty}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star 
                      className="w-5 h-5 text-yellow-400" 
                      style={{ fill: '#FBBF24' }}
                    />
                    <span className="font-semibold">{hospital.rating}</span>
                    <span className="text-gray-500">({hospital.reviews} reviews)</span>
                  </div>
                </div>
  
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#3A7D44]" />
                    <span>{hospital.hospital}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#3A7D44]" />
                    <span>Mon - Sun</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#3A7D44]" />
                    <span>{hospital.expertise} </span>
                  </div>
                </div>
  
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-2">About</h2>
                  <p className="text-gray-600">{hospital.about}</p>
                </div>
  
                
  
                <div className="mt-8">
                    <a href ={` ${hospital.link} `} target="_blank">
                  <button className="w-full bg-[#3A7D44] text-white py-3 px-6 rounded-lg hover:bg-[#9DC08B] flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Book Appointment
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
