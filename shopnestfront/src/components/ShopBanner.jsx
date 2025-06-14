import React, { useState, useEffect } from "react";
import "./ShopBanner.css";

const slides = [
  {
    img: "/assets/m1.jpg",
    title: "Discover New Arrivals",
    subtitle: "Home > Shop",
  },
  {
    img: "/assets/m2.jpg",
    title: "Premium Lifestyle Gear",
    subtitle: "Home > Shop",
  },
  {
    img: "/assets/m3.jpg",
    title: "Tech Meets Elegance",
    subtitle: "Home > Shop",
  },
];

const ShopBanner = () => {
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
    <div className="shop-banner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`shop-slide ${index === current ? "active" : ""}`}
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

export default ShopBanner;
