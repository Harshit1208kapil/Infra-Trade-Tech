import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaArrowRight, FaSignInAlt } from "react-icons/fa"; // Import Icons

const Login = () => {
  const navigate = useNavigate(); // Navigation Hook

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User logged in:", formData);
    navigate("/home"); // Redirect to Home after login
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#121212] to-[#1e1e1e] text-white">
      <div className="w-full max-w-md p-8 bg-[#222] rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-yellow-400 mb-4 text-center">Welcome Back!</h2>
        <p className="text-gray-400 mb-6 text-center">Sign in to continue</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center bg-gray-800 p-3 rounded-lg">
            <FaEnvelope className="text-yellow-400 mr-3" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-white" required />
          </div>

          <div className="mb-4 flex items-center bg-gray-800 p-3 rounded-lg">
            <FaLock className="text-yellow-400 mr-3" />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-white" required />
          </div>

          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 p-3 rounded-lg text-black font-bold flex justify-center items-center">
            <FaSignInAlt className="mr-2" /> Login
          </button>

          {/* Skip Option */}
          <button onClick={() => navigate("/home")} className="w-full mt-4 flex items-center justify-center text-gray-400 hover:text-white">
            Skip <FaArrowRight className="ml-2" />
          </button>
        </form>

        <p className="text-gray-400 mt-4 text-center">
          Don't have an account? <a href="/" className="text-yellow-400">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
