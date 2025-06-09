import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Optional styling

function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }
    const user = { email, password };
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("login form", response);

      if (response.ok) {
        // alert(`logged as in ${email}`);
        alert("Login successfully");
        //navigate("/About");
      } else {
        alert("invalid username or password ");
      }
    } catch (error) {
      console.log("login error", error);
      alert("Something went wrong.");
    }
    alert(`Logged in as ${email}`);
    navigate("/about");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Please fill all fields.");
      return;
    }
    const user = { username, email, password };
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Registered successfully!");
        navigate("/login");
      } else {
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.log("register", error);
    }
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
