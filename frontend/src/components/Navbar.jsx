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
      </div>
    </nav>
  );
}

export default Navbar;
