import React from 'react';
import SidebarComponent from './Sidebar'; // Imported SidebarComponent from Sidebar.js
import './AfterLogin.css';
function Afterlogin() {
  return (
    <div>
      <SidebarComponent /> {/* Render the Sidebar component here */}
      {/* Your content for the After Login page goes here */}
    </div>
  );
}

export default Afterlogin;
