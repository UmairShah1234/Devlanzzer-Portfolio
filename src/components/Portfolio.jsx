import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Portfolio</h2>
        <div className="row">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card border-0 shadow-sm">
                  <img
                    src={`https://via.placeholder.com/300?text=Project+${
                      index + 1
                    }`}
                    className="card-img-top"
                    alt={`Project ${index + 1}`}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Project {index + 1}</h5>
                    <p className="card-text">
                      A professional description of the project.
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
