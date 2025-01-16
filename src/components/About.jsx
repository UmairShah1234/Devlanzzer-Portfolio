import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Profile"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-6">
            <p>
              I am a dedicated freelancer with expertise in web development,
              digital marketing, and SEO. With years of experience in delivering
              high-quality results, I ensure every project aligns with your
              vision.
            </p>
            <p>
              My goal is to help businesses grow by creating impactful digital
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
