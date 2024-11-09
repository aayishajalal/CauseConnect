import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./shared/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Dashboard from "./components/EventsComponents/Dashboard";
import CreateEventForm from "./components/EventsComponents/CreateEventForm";
import Footer from "./shared/Footer";
import VolunteerPage from "./pages/VolunterPage";


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-event" element={<CreateEventForm />} />
          <Route path="/volunteer/:id" element={<VolunteerPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
