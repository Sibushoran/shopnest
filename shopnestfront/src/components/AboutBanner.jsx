import React, { useState, useEffect } from "react";
import "./AboutBanner.css"; // You should duplicate and rename the CSS file accordingly

const slides = [
  {
    img: "/assets/l1.jpg",
    title: "Who We Are",
    subtitle: "Home > About Us",
  },
  {
    img: "/assets/l2.jpg",
    title: "Our Story",
    subtitle: "Driven by Passion & Innovation",
  },
  {
    img: "/assets/l3.jpg",
    title: "Meet the Team",
    subtitle: "Collaboration is Our Culture",
  },
];

const AboutBanner = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-banner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`about-slide ${index === current ? "active" : ""}`}
        >
          <img src={slide.img} alt={`Slide ${index}`} />
          <div className="overlay"></div>
          <div className="caption">
            <p>{slide.subtitle}</p>
            <h2>{slide.title}</h2>
          </div>
        </div>
      ))}

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === current ? "active" : ""}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AboutBanner;
