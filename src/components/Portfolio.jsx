import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Optional for theme
import Service from "./Service";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5 bg-light">
      <div>
        <Service />
      </div>
    </section>
  );
};

export default Portfolio;
