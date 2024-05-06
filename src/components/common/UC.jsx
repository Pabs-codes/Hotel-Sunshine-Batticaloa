import React from 'react';
import videoSource from './ImagesP/UC.mp4';

const UC = () => {
  const videoContainerStyle = {
    position: 'relative',
    width: '60%', // Adjust as needed
    margin: '0 auto', // Center the container horizontally
    overflow: 'hidden',
    borderRadius: '100px',
    backgroundColor: '#F1F8FF',
    paddingLeft:'20px',
    paddingBottom:'50px'

  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const containerStyle = {
    // position: 'relative',
    // width: '100%',
    // height: '100vh',
    // overflow: 'hidden',
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white', // Adjust text color as needed
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={videoContainerStyle}>
        <video autoPlay loop muted playsInline style={videoStyle}>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={videoContainerStyle}> </div>
      <div style={contentStyle}>
      
        {/* Other content can be added here */}
      </div>
    </div>
  );
};

export default UC;
