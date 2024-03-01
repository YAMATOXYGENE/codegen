import React from 'react';

const EmailInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        id="email"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default EmailInput;
