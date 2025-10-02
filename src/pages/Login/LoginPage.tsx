import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: Add Google OAuth login logic
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Parent Dashboard Login</h1>
      <button onClick={handleLogin} style={{ padding: "0.5rem 1rem" }}>
        Log in with Google
      </button>
    </div>
  );
};

export default Login;
