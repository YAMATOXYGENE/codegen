import React from 'react';
import './services.css'; // Import CSS file

const Services = () => {
  return (
    <div>
      <div className="services">
        <div className="service-card">
          <h3>Password Generation</h3>
          <p>Generate random passwords of varying lengths and complexity. Allow users to specify parameters such as length, character types (uppercase letters, lowercase letters, numbers, special characters), and whether to include ambiguous characters.</p>
          <button>Learn More</button>
        </div>
        <div className="service-card">
          <h3>Customizable Settings</h3>
          <p> Provide options for users to customize password generation settings according to their specific requirements and security preferences. This could include options for excluding similar characters, avoiding repeating characters, or enforcing specific patterns.</p>
          <button>Learn More</button>
        </div>
        <div className="service-card">
          <h3>Password Storage</h3>
          <p>Offer the option to securely store generated passwords in an encrypted format. Provide a password manager feature where users can organize and manage their passwords for different accounts and services.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
