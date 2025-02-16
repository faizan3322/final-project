// Login.tsx (React + TypeScript)
import React, { useState } from "react";

import axios from "axios";

interface FlashMessage {
  type: "success" | "error";
  message: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [flashMessage, setFlashMessage] = useState<FlashMessage | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      setFlashMessage({ type: "success", message: response.data.message });
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
      <div className="card">
        <h2>Log In to Your Account</h2>

        {flashMessage && (
          <div className={`flash-message ${flashMessage.type}`}>
            <i
              className={`icon fas ${
                flashMessage.type === "success"
                  ? "fa-check-circle"
                  : "fa-exclamation-circle"
              }`}
            ></i>
            {flashMessage.message}
            <button className="close-btn" onClick={() => setFlashMessage(null)}>
              &times;
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="fas fa-envelope icon"></i>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock icon"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>

        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <div className="text-link">
          <p>
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
