import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { currentPage } = useGlobalContext();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" width="124px" height="40px" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  currentPage === "home" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/myshows"
                className={
                  currentPage === "myShows" ? "nav-link active" : "nav-link"
                }
              >
                My Shows
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
