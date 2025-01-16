import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  fixed-top bg-transparent">
      <div className="container">
        <a className="navbar-brand text-dark fw-bold" href="#home">
          Umair
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
