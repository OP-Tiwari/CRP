import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
        🔍 Crime Predictor
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About Us</Link>
        <Link to="/Notifications">Notifications</Link>
        <Link to="/new criminal laws">New Criminal Laws</Link>
        <Link to="/feedback">Feedback</Link>
      </div>
    </nav>
  );
}

export default Navbar;
