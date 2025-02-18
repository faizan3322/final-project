import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface LocationState {
  email?: string;
}

const Verify: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Add loading state
  const location = useLocation();
  const navigate = useNavigate();

  const handleVerify = async () => {
    const state = location.state as LocationState | null;
    const email = state?.email;

    if (!email) {
      setMessage("No email found for verification.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:5000/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data: { message: string } = await response.json();

      if (response.ok) {
        navigate("/login");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Verification failed.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="w-12 h-12 border-4 border-t-transparent border-green-500 rounded-full animate-spin"></div>
        </div>
      )}

      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-[#3A7D44] mb-4">
          Email Verification
        </h2>
        
        {message && (
          <p className="text-center text-red-500 bg-red-100 p-2 rounded mb-4">
            {message}
          </p>
        )}

        <input
          type="text"
          placeholder="Enter Verification Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#3A7D44] focus:outline-none mb-4"
        />

        <button
          onClick={handleVerify}
          className="w-full bg-[#3A7D44] text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
        >
          Verify
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Didn't receive the code?{" "}
          <a href="#" className="text-[#3A7D44] hover:underline">
            Resend Code
          </a>
        </p>
      </div>
    </div>
  );
};

export default Verify;
