import React from 'react';
import './aboutUs.css'; 
import johnDoePhoto from './john-doe.jpg';
import janeSmithPhoto from './jane-smith.jpg';
import davidJohnsonPhoto from './david-johnson.jpg';
import emilyBrownPhoto from './emily-brown.jpg';

const AboutUs = () => {
  return (
    <div>
      <div className="about-us">
        <h2>About Us</h2>
        <p>Welcome to our company!</p>
        <p>We are a team of passionate developers dedicated to creating innovative solutions for our clients.</p>
        <p>Our mission is to deliver high-quality software products that exceed our customers' expectations.</p>
        <h3>Our Team</h3>
        <div className="team-members">
          <div className="team-member">
            <img src={johnDoePhoto} alt="John Doe" />
            <p>John Doe</p>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src={janeSmithPhoto} alt="Jane Smith" />
            <p>Jane Smith</p>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src={davidJohnsonPhoto} alt="David Johnson" />
            <p>David Johnson</p>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src={emilyBrownPhoto} alt="Emily Brown" />
            <p>Emily Brown</p>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
