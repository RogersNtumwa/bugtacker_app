import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const ImageSlider = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };
  console.log(currentImage);
  if (!Array.isArray(data) || data.length <= 0) {
    return (
      <div className="message">
        <h1>No attachments Found</h1>
      </div>
    );
  }
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {data.map((image, index) => {
        return (
          <div
            className={index === currentImage ? "slide active" : "slide"}
            key={data.public_id}
          >
            {index === currentImage && (
              <img
                key={data.public_id}
                src={image.uri}
                alt="attached image"
                className="slideImage"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
