import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [flashMessage, setFlashMessage] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      const userData = response.data.user;
      localStorage.setItem("user", JSON.stringify(userData));

      setFlashMessage({ type: "success", message: response.data.message });

      setTimeout(() => {
        setLoading(false);
        navigate("/upload-image");
        window.location.reload(); // Refresh to update Navbar
      }, 1500);
    } catch (error: any) {
      setFlashMessage({
        type: "error",
        message: error.response?.data?.message || "An error occurred.",
      });
      setLoading(false);
    }
  };

  return (
    <div className="login-container relative">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="loader border-4 border-green-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}
      <div className="flex min-h-screen flex-col justify-center items-center bg-gray-100 px-6 py-12">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center text-[#3a7d49] mb-6">
            Log In to Your Account
          </h2>

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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 p-3 border rounded-md focus:ring-2 focus:ring-green-700 focus:outline-none"
              />
            </div>

            <div className="relative">
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

            <button
              type="submit"
              className="w-full bg-[#3A7D44] text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
            >
              Login
            </button>
          </form>

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
