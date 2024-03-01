import React from 'react';
import './home.css'; // Import CSS file
import codeGeneratorImage from './code-generator.jpg'; // Import code generator image

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo"></div>
        <ul className="nav-links">
          <li><a href="/Home">Home</a></li>
          <li><a href="/AboutUs">About</a></li>
          <li><a href="/Services">Services</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <div className="home">
        <h1>Welcome to Code Generator App</h1>
        <p>This application helps you generate various types of codes effortlessly.</p>
        <div className="code-generator-info">
          <img src={codeGeneratorImage} alt="Code Generator" className="code-generator-image" />
          <div className="code-generator-description">
            <h2>Generate Codes Quickly and Easily</h2>
            <p>The Code Generator App allows you to generate different types of codes, including random passwords, QR codes, barcodes, and more.</p>
            <p>With its user-friendly interface and powerful features, generating codes has never been easier.</p>
            <p>Explore the app to discover its full range of capabilities and start generating codes today!</p>
          </div>
        </div>
        <div className="additional-info">
          <h2>Why Choose Code Generator App?</h2>
          <ul>
            <li>Simple and intuitive user interface</li>
            <li>Supports various types of codes</li>
            <li>Customizable options for code generation</li>
            <li>Fast and efficient code generation process</li>
            <li>Secure and reliable</li>
          </ul>
          <p>Whether you're a developer, designer, or business owner, the Code Generator App is the perfect tool for generating codes for your projects and needs.</p>
        </div>
        <div className="testimonial">
          <h2>What Our Users Say</h2>
          <blockquote>
            "I've been using the Code Generator App for all my code generation needs, and it has made my workflow so much smoother. Highly recommended!"
            <footer>- John Doe, Web Developer</footer>
          </blockquote>
          <blockquote>
            "As a small business owner, having a reliable tool like the Code Generator App has saved me time and resources. It's a must-have for anyone needing to generate codes."
            <footer>- Jane Smith, Business Owner</footer>
          </blockquote>
        </div>
        <div className="call-to-action">
          <h2>Ready to Get Started?</h2>
          <p>Download the Code Generator App now and experience the convenience of generating codes effortlessly!</p>
          <button className="cta-button">Download Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
