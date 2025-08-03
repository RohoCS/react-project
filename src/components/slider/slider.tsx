import React, { useState } from "react";
import "./slider.css";

type SliderProps = {
  images: string[];
};

const Slider = ({ images }: SliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide((activeSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((activeSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div className="slider-image">
        <img className="img" src={images[activeSlide]} alt="$" />
      </div>
      <div className="slider-controls">
        <button className="btn btn-next" onClick={handlePrevSlide}>
          Prev
        </button>
        <button className="btn btn-prev" onClick={handleNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
