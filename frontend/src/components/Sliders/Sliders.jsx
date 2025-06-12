import React, { useState } from "react";
import "./Sliders.css";
import SliderItem from "./SliderItem";

const Sliders = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const rightArrow = () => {
    setSelectedImage((prev) => (prev + 1) % 3);
  };

  const leftArrow = () => {
    setSelectedImage((prev) => (prev - 1 + 3) % 3);
  };
  return (
    <>
      <section className="slider">
        <div className="slider-elements">
          {selectedImage === 0 && (
            <SliderItem imageUrl="img/slider/slider1.jpg" />
          )}
          {selectedImage === 1 && (
            <SliderItem imageUrl="img/slider/slider2.jpg" />
          )}
          {selectedImage === 2 && (
            <SliderItem imageUrl="img/slider/slider3.jpg" />
          )}

          {/* <div className="slider-item fade">
            <div className="slider-image">
              <img src="img/slider/slider2.jpg" className="img-fluid" alt />
            </div>
            <div className="container">
              <p className="slider-title">SUMMER 2022</p>
              <h2 className="slider-heading">Save up to 70%</h2>
              <a href="#" className="btn btn-lg btn-primary">
                Explore Now
              </a>
            </div>
          </div>
          <div className="slider-item fade">
            <div className="slider-image">
              <img src="img/slider/slider3.jpg" className="img-fluid" alt />
            </div>
            <div className="container">
              <p className="slider-title">SUMMER 2022</p>
              <h2 className="slider-heading">Save up to 70%</h2>
              <a href="#" className="btn btn-lg btn-primary">
                Explore Now
              </a>
            </div>
          </div> */}
          <div className="slider-buttons">
            <button onClick={leftArrow}>
              <i className="bi bi-chevron-left" />
            </button>
            <button onClick={rightArrow}>
              <i className="bi bi-chevron-right" />
            </button>
          </div>
          <div className="slider-dots">
            <button className="slider-dot active" onclick="currentSlide(1)">
              <span />
            </button>
            <button className="slider-dot" onclick="currentSlide(2)">
              <span />
            </button>
            <button className="slider-dot" onclick="currentSlide(3)">
              <span />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sliders;
