import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Banner */}
      <section className="banner-section">
        <img
          src="https://www.ncrb.gov.in/uploads/2022/May/20/1653043572_PM_Banner20225.jpg"
          alt="NCRB Banner"
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1></h1>
          <br />
          <p>Stay Alert. Stay Safe. Empower Your Community.</p>
        </div>
      </section>

      {/* Instructions */}
      <section className="instruction-section">
        <h2>Safety Guidelines</h2>
        <div className="instruction-cards">
          <div className="card do-card">
            <h3>What To Do ✅</h3>
            <ul>
              <li>Stay aware of surroundings at all times</li>
              <li>Travel in groups, especially after dark</li>
              <li>Use trusted safety apps and emergency contacts</li>
              <li>Report suspicious activity immediately</li>
            </ul>
          </div>
          <div className="card dont-card">
            <h3>What Not To Do ❌</h3>
            <ul>
              <li>Don't share personal details with strangers</li>
              <li>Avoid isolated or poorly lit areas</li>
              <li>Never ignore unusual behavior or signs</li>
              <li>Always lock doors and windows securely</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <h2>Crime Hotspots </h2>
        <img
          src="https://onefivenine.com/images/GoogleMapImages/23_3585_31.jpg"
          alt="Crime Map of India"
          className="map-image"
        />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2025 National Crime Records of city of India. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
