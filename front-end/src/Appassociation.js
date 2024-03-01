import React, { useState } from 'react';
import './Appassociation.css';
import { Link } from "react-router-dom";


const Appassociation = () => {



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [applications, setApplications] = useState([
    { id: 1, name: 'Facebook', logo: 'https://cdn-icons-png.flaticon.com/256/124/124010.png', email: '', password: '' },
    { id: 2, name: 'Instagram', logo: 'https://img.freepik.com/vecteurs-premium/icone-application-instagram-logo-medias-sociaux-illustration-vectorielle_277909-403.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1707609600&semt=ais', email: '', password: '' },
    { id: 3, name: 'Twitter', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png', email: '', password: '' },
    { id: 4, name: 'LinkedIn', logo:'data:image/png;base64,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', email: '', password: '' },
    { id: 5, name: 'Snapchat', logo: 'data:image/png;base64,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', email: '', password: '' },
    { id: 6, name: 'TikTok', logo: 'https://i.imgur.com/Ru3NCSV.png' },
     
  ]);

    

  
  const [selectedApplication, setSelectedApplication] = useState(null);

  const handleApplicationClick = (application) => {
    setSelectedApplication(application);
    setEmail(application.email);
    setPassword(application.password);
  };

  const handleAssociate = () => {
    if (!selectedApplication) return;
    const updatedApplications = applications.map(app => {
      if (app.id === selectedApplication.id) {
        return {
          ...app,
          email,
          password,
        };
      }
      return app;
    });
    console.log("Updated Applications:", updatedApplications); // Logging
    setApplications(updatedApplications);
    setEmail('');
    setPassword('');
    setSelectedApplication(null);
  };

  return (
    <div>
      <div className="wildlife-page">
        <h2></h2>
        <div className="app-animals-list">
          {/* Mapping through applications to render each application animal */}
          {applications.map(application => (
            <div key={application.id} className="app-animal" onClick={() => handleApplicationClick(application)}>
              {/* Using img tag to display the application logo */}
              <img src={application.logo} alt={application.name} />
            </div>
          ))}
        </div>
        {/* Render the form based on selected application */}
        {selectedApplication && (
          <div className="app-form">
            <h3>{selectedApplication.name}</h3>
            {/* Form inputs */}
            <div className="form-group">
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {/* Save button */}
            <button onClick={handleAssociate}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appassociation;