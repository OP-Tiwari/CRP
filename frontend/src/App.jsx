import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import NotificationPage from "./pages/NotificationPage";
import NewcriminalLawsPage from "./pages/NewcriminalLawsPage";
import FeedbackPage from "./pages/FeedbackPage";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/Notifications" element={<NotificationPage />} />
        <Route path="/New Criminal Laws" element={<NewcriminalLawsPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
