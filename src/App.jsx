import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from './Components/Home'
import Signup from "./Components/SignUp";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
