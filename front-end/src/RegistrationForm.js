import React, { useState, useContext} from 'react';
import './regis.css'; // Import the CSS file
import UsernameInput from './UsernameInput';
import UserTypeSelect from './UserTypeSelect';
import EmailInput from './EmailInput';
import RecaptchaContainer from './RecaptchaContainer';
import AuthContext from './AuthContext'
const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const {registerUser} = useContext(AuthContext)

  console.log(email);
  console.log(username);
  console.log(password);
  console.log(password2);


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setPassword2(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!isPasswordComplex(password)) {
      setPasswordError("The password must contain at least 8 characters, including uppercase letters(A-Z), lowercase letters(a-z), numbers(0-9), and special characters(@$!%*?&).");
      return;
    }
    if (password !== password2) {
      setPasswordError("Passwords do not match.");
      return;
    }
    
    // Add your registration logic here
    registerUser(email, username, password, password2);
  };
  

  const isPasswordComplex = (password) => {
    const complexRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return complexRegex.test(password);
  };

  return (
    <form className="regis-form" onSubmit={handleSubmit}>
      <UsernameInput value={username} onChange={(e) => setUsername(e.target.value)} />
      <UserTypeSelect value={userType} onChange={(e) => setUserType(e.target.value)} />
      <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={password2}
          onChange={handleConfirmPasswordChange}
          required
        />
      </div>
      <RecaptchaContainer />
      {passwordError && <p className="error-message">{passwordError}</p>}
      <button type="submit">Register now!</button>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </form>
  );  
};

export default RegistrationForm;
