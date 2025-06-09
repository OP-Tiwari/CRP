// src/pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import "./HomePage.css";

const quotes = [
  "“Justice will not be served until those who are unaffected are as outraged as those who are.” – Benjamin Franklin",
  "“The more informed the citizen, the stronger the community.”",
  "“Crime prevention is everyone's responsibility.”",
  "“Safety doesn't happen by accident.”",
  "“Awareness is the first step to change.”",
];

function HomePage() {
  const [city, setCity] = useState("");
  const [year, setYear] = useState("");
  const [crime, setCrime] = useState("");
  const [result, setResult] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePredict = () => {
    if (city && year && crime) {
      const zones = ["Red Zone", "Yellow Zone", "Green Zone"];
      setResult(zones[Math.floor(Math.random() * zones.length)]);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="quote-box">
          <h3>{quotes[quoteIndex]}</h3>
        </div>
        <img
          src="https://media.istockphoto.com/id/1460719525/photo/wooden-cubes-with-the-word-crime-and-crime-related-icons.webp?a=1&b=1&s=612x612&w=0&k=20&c=nmAkZAc-fWMHbsiRu1nrsUJhLBxUKXLEu83Mc9v_s5g="
          alt="Crime awareness"
          className="hero-image"
        />
      </div>

      <div className="predict-section">
        <h2>Predict Crime Zone</h2>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select City</option>
          <option>Mumbai</option>
          <option>Delhi</option>
          <option>Bangalore</option>
          <option>Ranchi</option>
          <option>Patna</option>
          <option>Chennai</option>
          <option>Kolkata</option>
          <option>Raipur</option>
          <option>Jaipur</option>
          <option>Hyderabaad</option>
        </select>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
        <select value={crime} onChange={(e) => setCrime(e.target.value)}>
          <option value="">Select Crime Type</option>
          <option>Murder</option>
          <option>Against Women</option>
          <option>Cyber Crime</option>
          <option>Against Child</option>
          <option>Theft/Robbery</option>
        </select>
        <button onClick={handlePredict}>Predict</button>

        {result && (
          <div
            className={`result-box ${result.replace(" ", "").toLowerCase()}`}
          >
            <p>
              <strong>Predicted Zone:</strong> {result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
