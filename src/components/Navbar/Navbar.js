import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="app-navbar">
        <div className="nav-logo">
          <h1>
            RoadSafe <i className="fas fa-road" />
          </h1>
        </div>
        <div className="nav-links">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/map">Map</NavLink>
          <NavLink to="/service">Service</NavLink>
        </div>
      </div>
    </nav>
  );
}
