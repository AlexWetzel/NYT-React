import React from "react";
import { Link } from "react-router-dom";

// Page header and navigation bar
const Nav = () =>
  <div>
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <h1 className="navbar-brand">NYT Search</h1>
      </div>
    </div>

    <div className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/saved" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>Saved Articles</Link>
        </li>
      </ul>
    </div>
  </div>;

export default Nav;