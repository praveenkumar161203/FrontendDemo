import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to MyWebsite</h1>
      <p>
        Discover the latest updates, insights, and stories. We are here to keep you informed and inspired.
      </p>
      <img 
        src="/tt.jpg" 
        alt="Welcome" 
        style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} 
      />
    </div>
  );
};

export default Home;
