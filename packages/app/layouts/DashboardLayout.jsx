import React from 'react';

const DashboardLayout = ({ setActiveTab, children }) => {
  return (
    <div>
      <div>
        <button onClick={() => setActiveTab('home')}>Home</button>
        <button onClick={() => setActiveTab('settings')}>Settings</button>
        <button onClick={() => setActiveTab('profile')}>Profile</button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
