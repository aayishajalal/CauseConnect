
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './shared/Navbar';
//import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HeroSection from "../src/pages/HeroSection";
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
