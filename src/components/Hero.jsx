import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center text-white text-center"
    >
      <div className="container">
        <h1 className="display-4 fw-bold">Hi, I'm [Your Name]</h1>
        <p className="lead mt-3">
          Web Developer | Digital Marketer | Freelancer
        </p>
        <a href="#contact" className="btn btn-primary btn-lg mt-4">
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
