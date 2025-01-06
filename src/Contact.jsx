import React from 'react';

const Contact = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Reach out to us with your queries, suggestions, or feedback.
      </p>
      <p>
        <strong>Email:</strong> support@mywebsite.com <br />
        <strong>Phone:</strong> +123 456 7890
      </p>
      <p>
        You can also find us on our social media platforms:
      </p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </div>
  );
};

export default Contact;
