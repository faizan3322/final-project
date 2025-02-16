import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


interface LocationState {
  email?: string;
}

const Verify: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleVerify = async () => {
    const state = location.state as LocationState | null;
    const email = state?.email;

    if (!email) {
      setMessage("No email found for verification.");
      return;
    }

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
    }
  };

  return (
    <div className="verify-container">
      <div className="card">
        <h2>Email Verification</h2>
        {message && <p className="message">{message}</p>}
        <input
          type="text"
          placeholder="Enter Verification Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button className="btn" onClick={handleVerify}>Verify</button>
      </div>
    </div>
  );
};

export default Verify;
