import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Optional styling

function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
    setEmail("");
    setPassword("");
    setUsername("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }
    alert(`Logged in as ${email}`);
    navigate("/Home");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Please fill all fields.");
      return;
    }
    alert(`Registered as ${username}`);
    navigate("/Home");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>{isRegistering ? "Register" : "Login"}</h2>
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          {isRegistering && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isRegistering ? "Register" : "Login"}</button>
        </form>
        <p onClick={handleToggle} className="toggle-link">
          {isRegistering
            ? "Already have an account? Login here"
            : "New user? Register here"}
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
