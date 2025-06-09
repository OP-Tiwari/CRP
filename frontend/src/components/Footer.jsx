import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <strong>Phone:</strong> +91 7764988901
          </p>
          <p>
            <strong>Email:</strong> om7764tiwari@gmail.com
          </p>
          <p>
            <strong>Address:</strong> Pandra,Ranchi, Jharkhand, India
          </p>
        </div>

        <div className="footer-section date-time">
          <h3>Current Date & Time</h3>
          <p>{dateTime.toLocaleDateString()}</p>
          <p>{dateTime.toLocaleTimeString()}</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Mail"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Crime Predictor | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
