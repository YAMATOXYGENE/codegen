import React, { useState } from 'react';
import ConfirmPasswordInput from './ConfirmPasswordInput';

const ParentComponent = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Clear password error when input changes
  };

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <ConfirmPasswordInput
        password={password}
        onPasswordChange={handlePasswordChange}
        onPasswordMatch={(match) => {
          if (!match) {
            setPasswordError("Passwords do not match.");
          } else {
            setPasswordError("");
          }
        }}
      />
      {passwordError && <p className="error-message">{passwordError}</p>}
    </div>
  );
};

export default ParentComponent;
