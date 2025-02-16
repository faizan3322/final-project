import React, { useState } from "react";
// import "../styles/Register.css";
import { useNavigate } from "react-router-dom";

// Define types for form data
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  dob: string;
}

// Define types for flash message
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
    dob: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [flashMessage, setFlashMessage] = useState<FlashMessage | null>(null);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFlashMessage({ type: "success", message: data.message });
        navigate("/Verify", { state: { email: formData.email } });
      } else {
        setFlashMessage({ type: "error", message: data.message });
      }
    } catch (error) {
      setFlashMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      <div className="card">
        <h2>Create an Account</h2>

        {flashMessage && (
          <div className={`flash-message ${flashMessage.type}`}>
            <i className="fas fa-exclamation-circle"></i> {flashMessage.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="fas fa-user icon"></i>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="fas fa-envelope icon"></i>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="fas fa-lock icon"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="fas fa-lock icon"></i>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="fas fa-hourglass icon"></i>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="fas fa-calendar icon"></i>
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="text-link">
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
