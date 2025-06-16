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
   //autofill user info
  useEffect(() => {
  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem("token");
       console.log("Sending token:", token);
       
      if (!token) return;

      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched user info:", data);

        setFormData((prev) => ({
          ...prev,
          username: data.username || "",
          email: data.email || "",
        }));
      }
    } catch (err) {
      console.error("Failed to fetch user info:", err);
    }
  };

  fetchUserInfo();

  // Random quote
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      
       const response = await fetch("http://localhost:5000/api/form/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
         body: JSON.stringify(formData),
       });
       if (response.ok) {
      alert("Feedback submitted successfully!");
      setFormData((prev) => ({
        ...prev,
        message: "", // clear only the message
      }));
     } else {
      const errData = await response.json();
      alert("Failed to submit feedback: " + errData.message);
    }
    }catch(error){
      console.error("Error submitting feedback:", error);
    alert("An error occurred. Please try again.");
    }
    
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
