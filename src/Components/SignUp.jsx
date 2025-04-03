import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa"; // Import Icons

const Signup = () => {
  const navigate = useNavigate(); // Navigation Hook

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User signed up:", formData);
    navigate("/home"); // Redirect to Home after signup
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#121212] text-white">
      <div className="w-full max-w-lg p-8 bg-[#1e1e1e] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Start your 30-day free trial</h2>
        <p className="text-gray-400 mb-6">No credit card required.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center bg-gray-800 p-2 rounded">
            <FaUser className="text-gray-400 mr-2" />
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-white" required />
          </div>

          <div className="mb-4 flex items-center bg-gray-800 p-2 rounded">
            <FaUser className="text-gray-400 mr-2" />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-white" required />
          </div>

          <div className="mb-4 flex items-center bg-gray-800 p-2 rounded">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-white" required />
          </div>

          <div className="mb-4 flex items-center bg-gray-800 p-2 rounded">
            <FaLock className="text-gray-400 mr-2" />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-white" required />
          </div>

          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 p-3 rounded text-black font-bold">
            Sign Up
          </button>

          {/* Skip Option */}
          <button onClick={() => navigate("/home")} className="w-full mt-4 flex items-center justify-center text-gray-400 hover:text-white">
            Skip <FaArrowRight className="ml-2" />
          </button>
        </form>

{/*         <p className="text-gray-400 mt-4 text-center">
          Already have an account? <a href="/login" className="text-yellow-400">Login</a>
        </p> */}
      </div>
    </div>
  );
};

export default Signup;
