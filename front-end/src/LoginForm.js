import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './loginForm.css';
import AuthContext from './AuthContext';

function LoginForm() {

  const {loginUser} = useContext(AuthContext)
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleemailChange = (e) => {
    setemail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    email.length > 0 && loginUser(email, password)

    console.log(email)
    console.log(password)
    console.log('Form submitted');
  };

  return (
    <div className="col-md-5">
      <div className="login-position">
      <h2 style={{ color: 'black' }}>Welcome User</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">email:</label>
          <input 
            type="text" 
            name="email" 
            value={email} 
            onChange={handleemailChange} 
            className="form-control" 
            placeholder="email" 
            required 
          />
          <label htmlFor="login-password">Password:</label>
          <input 
            type="password" 
            name="password" 
            value={password} 
            onChange={handlePasswordChange} 
            className="form-control" 
            placeholder="Password" 
            required 
          />
          <br />
          <button type="submit" className="btn big green login-button">To enter</button>
        </form>
        <p>If you don't have an account, <Link to="/register">Create your GENOWORD Account</Link>.</p>
      </div>
    </div>
  );
}

export default LoginForm;
