import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const images = [
    'https://i.pinimg.com/736x/60/0d/3f/600d3f958e0fdbae5befb54f23272aa3.jpg?text=Slide+1', // Example images
    'https://i.pinimg.com/736x/63/59/45/635945fc5d3de174c6cd01c00bafecfd.jpg?text=Slide+2',
    'https://img3.wallspic.com/crops/3/1/2/8/68213/68213-food-pasteles-cakes-cake-torte-1920x1080.jpg?text=Slide+3',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className="slider-container">
      <div className="slider">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
