import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="container">
      <h2>About Crime Predictor</h2>
      <p>
        This project helps classify Indian cities into Red, Yellow, or Green
        zones using real-time or historical crime data and machine learning.
      </p>
      <p>It aims to raise awareness and inform citizens about crime trends.</p>

      <h3>Key Features:</h3>
      <ul>
        <li>
          <strong>Prediction:</strong> Uses machine learning to forecast crime
          zones.
        </li>
        <li>
          <strong>Crime Rate Analysis:</strong> Displays crime rates by city and
          year.
        </li>
        <li>
          <strong>Population Data:</strong> Shows total population of the
          selected city for context.
        </li>
        <li>
          <strong>City Comparison:</strong> Compare two cities to find which is
          safer based on recent data.
        </li>
        <li>
          <strong>Awareness:</strong> Educates users on crime prevention and
          safety tips.
        </li>
      </ul>

      <h3>Why Use Crime Predictor?</h3>
      <p>
        By understanding crime patterns and trends, citizens and authorities can
        take proactive steps to increase safety and reduce crime rates.
      </p>
    </div>
  );
}

export default AboutPage;
