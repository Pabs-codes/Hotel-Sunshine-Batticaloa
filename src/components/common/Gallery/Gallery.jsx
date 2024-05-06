import React, { useState } from 'react';
import './Gallery.css'; // Import CSS file for styling
import image1 from './image (1).jpg';
import image2 from './image (2).jpg';
import image3 from './image (3).jpg';
import image4 from './image (4).jpg';
import image5 from './image (5).jpg';
import image6 from './image (6).jpg';
import image7 from './image (14).jpg';
import image8 from './image (8).jpg';
import image9 from './image (17).jpg';
import image10 from './image (18).jpg';
import image11 from './image (13).jpg';
import image12 from './image (8).jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Galleryview ${index + 1}`}
          className="gallery-image"
          onClick={() => handleClick(image)}
        />
      ))}
      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Selectedimage"
            className="overlay-image"
          />
        </div>
      )}



    </div>
  );
};

export default Gallery;
