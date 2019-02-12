import React from "react";
import { Link } from "react-router-dom";

// Page header and navigation bar
function Nav() {
  return (
    <div>
      <header className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <div className="navbar-brand">News React</div>
        </div>
      </header>

      <nav className="container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/saved" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>Saved Articles</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;