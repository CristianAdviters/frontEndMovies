import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>Movies Final Project</div>
      <div>
        {" "}
        <a href="https://adviters.com/" target="_blank">
          Bootcamp Adviter
        </a>
      </div>
      <div>Sheila - Cristian</div>
    </footer>
  );
};

export default Footer;
