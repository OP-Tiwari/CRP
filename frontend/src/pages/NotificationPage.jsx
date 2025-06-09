import React from "react";
import "./NotificationPage.css";

const notifications = [
  "Crime zone predictions are based on historical data and machine learning analysis. They are for informational purposes only and should not be considered official or legally binding. Stay alert and stay safe.",
  "Recent data indicates a rise in cybercrime activities. Always secure your online accounts and avoid sharing sensitive information.",
  "Community policing initiatives are underway in several cities to improve local safety. Participate and report suspicious activities.",
  "Women safety awareness campaigns are being conducted across the country. Join local workshops to learn effective safety measures.",
  "Timely reporting of crimes helps law enforcement take swift action. Use official channels to report any incidents.",
];

function NotificationPage() {
  return (
    <div className="notification-container">
      <h2>Latest Notifications</h2>
      <ul className="notification-list">
        {notifications.map((note, idx) => (
          <li key={idx} className="notification-item">
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationPage;
