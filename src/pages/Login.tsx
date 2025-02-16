import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface FlashMessage {
  type: "success" | "error";
  message: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [flashMessage, setFlashMessage] = useState<FlashMessage | null>(null);
  const navigate = useNavigate(); // For redirecting after login

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      const userData = response.data.user; // Assuming response contains user info

      // Store user data in localStorage
      localStorage.setItem("user", JSON.stringify(userData));

      // Show success message
      setFlashMessage({ type: "success", message: response.data.message });

      // Redirect to home page after successful login
      setTimeout(() => {
        navigate("/upload-image");
        window.location.reload(); // Reload to update Navbar state
      }, 1000);
    } catch (error: any) {
      setFlashMessage({
        type: "error",
        message: error.response?.data?.message || "An error occurred.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
      <div className="flex min-h-screen flex-col justify-center items-center bg-gray-100 px-6 py-12">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center text-[#3a7d49] mb-6">
            Log In to Your Account
          </h2>

          {/* Flash Message */}
          {flashMessage && (
            <div
              className={`flex items-center justify-between p-3 text-white text-sm rounded-md mb-4 ${
                flashMessage.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              <span>{flashMessage.message}</span>
              <button
                className="text-white text-lg font-bold"
                onClick={() => setFlashMessage(null)}
              >
                &times;
              </button>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 p-3 border rounded-md focus:ring-2 focus:ring-green-700 focus:outline-none"
              />
            </div>

            {/* Password Input with Toggle */}
            <div className="relative">
              <i className="fas fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-[#3A7D44]"></i>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-10 p-3 border rounded-md focus:ring-2 focus:ring-green-700 focus:outline-none"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#3A7D44] text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
            >
              Login
            </button>
          </form>

          {/* Forgot Password & Register */}
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-[#3A7D44] hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="text-center mt-2">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-[#3A7D44] hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
