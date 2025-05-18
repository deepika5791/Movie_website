import React from "react";
import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <div className="Footer_container">
        <ul className="Navbar">
          <li>
            <CiMail className="Email_icon" />
            <NavLink to="/" className="list">
              deepikatripathi@0810gmail.com
            </NavLink>
          </li>
        </ul>
        <div className="Social_Contact">
          <NavLink
            to="https://github.com/deepika5791"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </NavLink>

          <NavLink>
            <FaInstagram />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/deepika-tripathi-5617562a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
