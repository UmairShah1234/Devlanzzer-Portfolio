import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center bg-light text-center border"
    >
      <div className="container">
        <h1 className="display-5 fw-bold">Hire. Collaborate. Succeed</h1>
        <p className="lead mt-3">
          Find the right skills to turn your goals into achievements. Whether
          it's design, development, marketing, or content creation, we bring
          together the best talent to help your projects thrive. Collaborate
          with experts who deliver results, on time, every time.
        </p>
        <div className="">
          <a
            href="#contact"
            className="btn btn-dark shadow rounded-0 mt-4 "
          >
            <KeyboardDoubleArrowDown />
            <span>Connect With Us</span>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
