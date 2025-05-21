import React, { useState } from "react";

const mockPrediction = (city, year, crimeType) => {
  const zones = ["Red Zone", "Yellow Zone", "Green Zone"];
  return zones[Math.floor(Math.random() * zones.length)];
};

function HomePage() {
  const [city, setCity] = useState("");
  const [year, setYear] = useState("");
  const [crime, setCrime] = useState("");
  const [result, setResult] = useState("");

  const handlePredict = () => {
    if (city && year && crime) {
      const prediction = mockPrediction(city, year, crime);
      setResult(prediction);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow space-y-4">
      <h2 className="text-2xl font-semibold text-center">
        Crime Rate Prediction
      </h2>
      <select
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-2 border rounded"
        value={city}
      >
        <option value="">Select City</option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Bangalore</option>
      </select>
      <select
        onChange={(e) => setYear(e.target.value)}
        className="w-full p-2 border rounded"
        value={year}
      >
        <option value="">Select Year</option>
        <option>2023</option>
        <option>2024</option>
        <option>2025</option>
      </select>
      <select
        onChange={(e) => setCrime(e.target.value)}
        className="w-full p-2 border rounded"
        value={crime}
      >
        <option value="">Select Crime Type</option>
        <option>Theft</option>
        <option>Assault</option>
        <option>Cyber Crime</option>
      </select>
      <button
        onClick={handlePredict}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Predict
      </button>
      {result && (
        <p className="text-center mt-4 text-xl">
          Predicted Zone: <strong>{result}</strong>
        </p>
      )}
    </div>
  );
}

export default HomePage;
