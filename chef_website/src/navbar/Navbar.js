import React from "react";
import "./navbar.css";
import logo from "../ChefPrivIImages/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-background navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} />
        </a>
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
        <div
          className="navbar-center-menu collapse navbar-collapse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link navbar-middle-links active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-middle-links active" href="#">
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-middle-links active" href="#">
                Our Chefs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-middle-links active" href="#">
                Book
              </a>
            </li>
          </ul>
        </div>
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <i class="bi bi-person"></i>
              <span className="right-menu-one">Sign Up</span>
              <span className="right-menu-two">|</span>
              <span className="right-menu-three">Log In</span>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link active" href="#">How It Works</a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
