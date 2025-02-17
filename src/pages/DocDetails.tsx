import { useParams } from "react-router-dom";
import doctors from "./doctors"; // Adjust path as needed
import { Star, Clock, Languages, Award, Building2, Phone } from 'lucide-react';



const DoctorDetails = () => {
    const { id } = useParams(); // Get doctor ID from URL
    const doctor = doctors.find((doc) => doc.id === id); // Find the doctor by ID

    if (!doctor) {
        return <div className="text-center text-red-500 text-xl mt-10">Doctor not found</div>;
    }

    return (
        // <div className=" border-2 flex" >
        //     <div className="rounded-xs border-2 ml-10">
        //         <img
        //             src={doctor.image}
        //             alt={doctor.name}
        //             className="rounded-xs h-64 object-cover rounded-lg m-4 mt-10"
        //         />
        //         <h2 className="text-3xl font-bold mb-2">{doctor.name}</h2>
        //     </div>
        //     <div className="border-2 flex items-center justify-center flex-col ">
                
        //         <p className="text-blue-600 text-lg mb-2">{doctor.specialty}</p>
        //         <p className="text-gray-600 text-lg mb-2">{doctor.hospital}</p>
        //         <p className="text-gray-500 text-sm">{doctor.expertise}</p>
        //     </div>
        // </div>
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <button
            
            className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            ← Back to Doctors
          </button>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{doctor.name}</h1>
                    <p className="text-lg text-gray-600">{doctor.specialty}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star 
                      className="w-5 h-5 text-yellow-400" 
                      style={{ fill: '#FBBF24' }}
                    />
                    <span className="font-semibold">{doctor.rating}</span>
                    <span className="text-gray-500">({doctor.reviews} reviews)</span>
                  </div>
                </div>
  
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#3A7D44]" />
                    <span>{doctor.hospital}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#3A7D44]" />
                    <span>Mon - Sun</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#3A7D44]" />
                    <span>{doctor.expertise} </span>
                  </div>
                </div>
  
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-2">About</h2>
                  <p className="text-gray-600">{doctor.about}</p>
                </div>
  
                
  
                <div className="mt-8">
                    <a href ={` ${doctor.link} `} target="_blank">
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
    );
};

export default DoctorDetails;
