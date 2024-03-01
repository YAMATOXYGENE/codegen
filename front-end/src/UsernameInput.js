import React from 'react';

const UsernameInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default UsernameInput;
