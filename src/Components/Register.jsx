import React from "react";
import "./register.css";

const Register = () => {
  return (
    <>
      <form action="" id="register-form">
        <h3>Register form</h3>
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="register-input"
          placeholder="Enter your username"
          required
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          className="register-input"
          placeholder="Enter your email"
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="register-input"
          placeholder="Enter your password"
          required
        />
        <label htmlFor="">Repeat password</label>
        <input
          type="password"
          className="register-input"
          placeholder="Repeat your password"
          required
        />
        <div className="register-input">
          <input type="checkbox" required />
          I'm not from CIA
          <input type="submit" value="Sign up" required />
        </div>
        Already have an account?<a href=""></a>
      </form>
    </>
  );
};

export default Register;
