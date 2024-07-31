import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <form action="" id="login-form">
        <h3>Login form</h3>
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="login-input"
          placeholder="Enter your username"
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="login-input"
          placeholder="Enter your username"
          required
        />
        <div className="div-form" required>
          <input type="checkbox" required />
          I'm not a bot
          <input type="submit" value="Log in" />
        </div>
        Are you new at x?{" "}
        <a onClick={() => navigate("/register")}>Sing up now!</a>
      </form>
    </>
  );
};

export default Login;
