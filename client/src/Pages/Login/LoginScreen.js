
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../Components/RegisterScreen/TextInput";
import PasswordMessage from "../../Components/RegisterScreen/PasswordMessage";
import "./LoginScreen.css";
import { createJwtToken } from './token';

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await createJwtToken(username.trim(), password);
      localStorage.setItem('username', username);
      setFormError("");
      navigate("/chat");
    } catch (error) {
      console.error("Error creating token:", error);
      setFormError("Failed to login");
    }
  };

  const isFormValid = () => {
    return (
      username.trim() !== "" &&
      password.trim() !== "" &&
      document.querySelector("#username").checkValidity() &&
      document.querySelector("#password").checkValidity()
    );
  };

  return (
    <div className="LoginScreen">
      <h1 id="logintitle">Login</h1>
      <form onSubmit={handleLogin} className="form">
        <TextInput
          type="text"
          id="username"
          name="username"
          placeholder="Type your username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          type="password"
          id="password"
          name="password"
          min={8}
          placeholder="Enter password"
          required
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {formError && <PasswordMessage message={formError} />}
        <button id="buttonlogin" type="submit" disabled={!isFormValid()}>
          Login
        </button>{" "}
        <span>
          Not registered? <Link to="/register">Click here</Link> to register
        </span>
      </form>
    </div>
  );
}

export default LoginScreen;
