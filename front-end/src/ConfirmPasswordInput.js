import React, { useState } from 'react';

const ConfirmPasswordInput = ({ password }) => {
  const [value, setValue] = useState("");
  
  const isPasswordComplex = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
    return hasUpperCase && hasLowerCase && hasDigit && hasSpecialCharacter && password.length >= 8;
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  return (
    <div>
      <label htmlFor="confirmPassword">Confirm the password:</label>
      <input
        type="password"
        id="confirmPassword"
        value={value}
        onChange={handleChange}
        required
        disabled={!isPasswordComplex(password)}
      />
    </div>
  );
};

export default ConfirmPasswordInput;
