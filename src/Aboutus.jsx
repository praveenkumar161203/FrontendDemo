import React from 'react';

const Aboutus = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>About Us</h1>
      <p>
        At MyWebsite, we are dedicated to delivering quality content and services to our audience. 
        Our team works tirelessly to provide you with the most accurate and engaging information.
      </p>
      <p>
        Founded in 2024, we aim to create a platform where users can explore, learn, and connect with a community that shares similar interests.
      </p>
      <img 
        src="/imge.jpg" 
        alt="About Us" 
        style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} 
      />
    </div>
  );
};

export default Aboutus;
