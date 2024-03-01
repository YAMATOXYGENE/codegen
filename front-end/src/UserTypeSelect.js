// UserTypeSelect.js

import React from 'react';

const UserTypeSelect = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="userType">You are:</label>
      <select name="userType" value={value} onChange={onChange} required>
        <option value="">Select an option</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="preferNotToSay">Prefer not to say</option>
      </select>
    </div>
  );
};

export default UserTypeSelect;
