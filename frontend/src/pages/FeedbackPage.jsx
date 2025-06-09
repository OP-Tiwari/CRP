// FeedbackPage.jsx
import React, { useState, useEffect } from "react";
import "./FeedbackPage.css";

function FeedbackPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [quote, setQuote] = useState("");

  const quotes = [
    "Your feedback helps us improve.",
    "We listen because you matter.",
    "Every opinion counts.",
    "Great feedback builds great products.",
    "Tell us what you think – we’re all ears!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted!");
    setFormData({ username: "", email: "", message: "" });
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-box">
        <div className="feedback-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
            alt="Feedback Icon"
            className="feedback-icon"
          />
          <div className="feedback-quote">{quote}</div>
        </div>
        <h2>We Value Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your feedback here..."
            rows="6"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackPage;
