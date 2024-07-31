import React from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <a onClick={() => navigate("/home")} className="a-nav">
          Home
        </a>
        <a onClick={() => navigate("/login")} className="a-nav">
          Log in
        </a>
        <a onClick={() => navigate("/user-Profile")} className="a-nav">
          User
        </a>
      </nav>
    </>
  );
};

export default Nav;
