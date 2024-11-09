import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Dashboard from "./components/EventsComponents/Dashboard";
import CreateEventForm from "./components/EventsComponents/CreateEventForm";
import Footer from "./shared/Footer";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    // Redirect to login if there's no token
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/events/*"
            element={
              <PrivateRoute>
                <Events />
              </PrivateRoute>
            }
          />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-event" element={<CreateEventForm />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
