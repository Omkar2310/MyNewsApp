import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a
          href="https://www.linkedin.com/in/omkar-mankar-893870159"
          target="__blank"
        >
          Omkar
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/mankar_omkar2310/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/omkar-mankar-893870159"
          target="__blank"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://omkar2310.github/io/CodeVenture" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
