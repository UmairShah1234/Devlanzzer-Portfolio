import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import img from "../assets/wave-haikei.svg";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light py-4"
      style={{ backgroundImage: img }}
    >
      <div className="container">
        <div className="row">
          {/* Logo and About Section */}
          <div className="col-md-4 mb-3">
            <h5 className="">FreelancePro</h5>
            <p>
              Connecting businesses with top-tier talent to bring ideas to life.
              Trust us to deliver expertise, efficiency, and excellence.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-3">
            <h5 className="">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-3">
                <a href="#services" className="text-light text-decoration-none">
                  Our Services
                </a>
              </li>
              <li className="mb-3">
                <a href="#pricing" className="text-light text-decoration-none">
                  Pricing
                </a>
              </li>
              <li className="mb-3">
                <a href="#contact" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-3">
            <h5 className="">Follow Us</h5>
            <div className="d-flex">
              <div>
                <IconButton color="primary">
                  <Facebook />
                </IconButton>
                <span className="material-icons">facebook</span>
              </div>

              <div>
                <IconButton color="primary">
                  <Twitter />
                </IconButton>
                <span className="material-icons">Twitter</span>
              </div>

              <div>
                <IconButton color="primary">
                  <LinkedIn />
                </IconButton>
                <span className="material-icons">LinkdIn</span>
              </div>

              <div>
                <IconButton color="secondary">
                  <Instagram />
                </IconButton>
                <span className="material-icons">Instagram</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} FreelancePro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
