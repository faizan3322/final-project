import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaHourglass, FaVenusMars } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  gender: string;
}

interface FlashMessage {
  type: "success" | "error";
  message: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [flashMessage, setFlashMessage] = useState<FlashMessage | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setFlashMessage({ type: "error", message: "Passwords do not match." });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFlashMessage({ type: "success", message: data.message });
        navigate("/verify", { state: { email: formData.email } });
      } else {
        setFlashMessage({ type: "error", message: data.message });
      }
    } catch (error) {
      setFlashMessage({ type: "error", message: "An error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-gray-100 px-6 py-12">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
          <div className="loader border-4 border-green-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-[#3A7D44] mb-6">Create an Account</h2>

        {flashMessage && (
          <div className={`flex items-center justify-between p-3 text-white text-sm rounded-md mb-4 ${flashMessage.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
            <span>{flashMessage.message}</span>
            <button className="text-white text-lg font-bold" onClick={() => setFlashMessage(null)}>&times;</button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 border rounded-md focus:ring-2 focus:ring-[#3A7D44] focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 border rounded-md focus:ring-2 focus:ring-[#3A7D44] focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-10 p-3 border rounded-md focus:ring-2 focus:ring-[#3A7D44] focus:outline-none"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-10 p-3 border rounded-md focus:ring-2 focus:ring-[#3A7D44] focus:outline-none"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="relative">
            <FaHourglass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 border rounded-md focus:ring-2 focus:ring-[#3A7D44] focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaVenusMars className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 border rounded-md focus:ring-2 focus:ring-[#3A7D44] focus:outline-none appearance-none bg-white text-gray-700"
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>


          <button
            type="submit"
            className="w-full bg-[#3A7D44] text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account? <a href="/login" className="text-[#3A7D44] hover:underline">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
