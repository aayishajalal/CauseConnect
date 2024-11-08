
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
