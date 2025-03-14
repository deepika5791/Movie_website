import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="headerLeft">
          <NavLink to="/">
            <img
              className="header__icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            />
          </NavLink>
          <NavLink
            to="/movies/popular"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span>Popular</span>
          </NavLink>
          <NavLink
            to="/movies/top_rated"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span>Top Rated</span>
          </NavLink>
          <NavLink
            to="/movies/upcoming"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span>Upcoming</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
