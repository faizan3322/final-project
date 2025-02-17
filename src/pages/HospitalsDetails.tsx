import React from 'react'
import hospitals from "./hospitals"
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, MapPin, Award, Building, Calendar, ExternalLink } from 'lucide-react';


export default function HospitalsDetails() {

    const { id } = useParams();
    const hospital = hospitals.find(h => h.id === id);

    if (!hospital) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Hospital not found</h2>
                    <Link to="/" className="text-[#3A7D44] hover:text-[#9DC08B] flex items-center justify-center gap-2">
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.map)}`;


    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="text-[#3A7D44] hover:text-[#9DC08B] flex items-center gap-2 mb-8">
                    <ArrowLeft size={20} />
                    Back to Hospitals
                </Link>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src={hospital.image}
                        alt={hospital.name}
                        className="w-full h-64 object-cover"
                    />

                    <div className="p-8">
                        <div className="flex justify-between items-start mb-6">
                            <h1 className="text-3xl font-bold text-gray-900">{hospital.name}</h1>
                            <span className="bg-[#3A7D44] text-white px-4 py-2 rounded-full text-sm">
                                {hospital.rating}
                            </span>
                        </div>

                        <p className="text-gray-600 mb-8">{hospital.about}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-[#3A7D44] mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                                    <p className="text-gray-600 mb-2">{hospital.address}</p>
                                    <a
                                        href={googleMapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-[#3A7D44] hover:text-[#9DC08B] gap-1 text-sm"
                                    >
                                        View on Maps <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="text-[#3A7D44] mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Contact</h3>
                                    <p className="text-gray-600">{hospital.contact}</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Award className="text-[#3A7D44]" />
                                    <h3 className="text-xl font-semibold text-gray-900">Specialties</h3>
                                </div>
                                <ul className="space-y-2">
                                    {hospital.specialities.map((specialty, index) => (
                                        <li key={index} className="text-gray-600">• {specialty}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Building className="text-[#3A7D44]" />
                                    <h3 className="text-xl font-semibold text-gray-900">Facilities</h3>
                                </div>
                                <ul className="space-y-2">
                                    {hospital.features.map((features, index) => (
                                        <li key={index} className="text-gray-600">• {features}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="border-t pt-8">
                            <button
                                className="w-full bg-[#3A7D44] hover:bg-[#2C5A34] text-white py-4 px-6 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2 font-semibold"
                                onClick={() => window.open(`${hospital.link}, _blank`)}
                            >
                                <Calendar size={20} />
                                Book an Appointment Online
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}