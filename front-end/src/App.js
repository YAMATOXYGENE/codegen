import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import { AuthProvider } from './AuthContext';
import RegistrationPage from './RegistrationPage';
import Hero from './Hero';
import Header from './Header';
import Home from './Home';
import AfterLogin from './Afterlogin'; // Corrected the import and component name
import Services from './Services';
import AboutUs from './AboutUs';
import ProfilePage from './Profilepage'; // Corrected the import
import CodeGenerator from './CodeGenerator';
import Appassociation from './Appassociation';
import './loginPage.css';
import './registrationPage.css';
import './hero.css';
import './header.css';
import './home.css';
import './ProfilePage.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/afterlogin" element={<AfterLogin />} /> {/* Corrected the component name */}
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} /> 
            <Route path="/aboutus" element={<AboutUs />} /> 
            <Route path="/Appassociation" element={<Appassociation />} />
            <Route path="/Codegen" element={<CodeGenerator />} /> {/* Added CodeGenerator route */}
          </Routes>
          <Hero />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
