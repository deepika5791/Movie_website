import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
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
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
