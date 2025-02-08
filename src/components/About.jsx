import React from "react";
import img from "../assets/about-image.png";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light" style={{ position: "relative" }}>
      <div
        className="container shadow-lg p-4 rounded"
        style={{ background: "#f9f9f9" }}
      >
        <h2 className="text-center fw-bold mb-5" style={{ color: "#333" }}>
          About Us
        </h2>
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6 mb-4">
            <h4 className="fw-bold mb-3">Who We Are</h4>
            <p style={{ lineHeight: "1.8", color: "#555" }}>
              At <strong>[Your Company Name]</strong>, we believe in connecting
              ideas with the right talent. Built on the principles of trust,
              quality, and innovation, our platform empowers businesses to
              achieve their goals and freelancers to excel. Whether you’re a
              startup seeking creative solutions or a professional eager to
              showcase your skills, we are here to make the connection seamless
              and successful.
            </p>
            <h4 className="fw-bold mt-4 mb-3">Our Values</h4>
            <ul className="list-unstyled" style={{ lineHeight: "1.8" }}>
              <li>
                <strong>Quality:</strong> Delivering exceptional talent and
                results.
              </li>
              <li>
                <strong>Trust:</strong> Building lasting collaborations through
                transparency.
              </li>
              <li>
                <strong>Innovation:</strong> Continuously evolving to meet your
                dynamic needs.
              </li>
            </ul>
          </div>
          {/* Right Column */}
          <div className="col-md-6 mb-4">
            <div className="position-relative">
              <img
                src={img}
                alt="Freelancing Team"
                className="img-fluid rounded "
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <h4 className="fw-bold">"Together, We Build Your Success"</h4>
          <p className="text-muted" style={{ fontSize: "1rem" }}>
            Join us and transform your ideas into impactful solutions today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
