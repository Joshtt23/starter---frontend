import React from 'react';
import ProfileDropdown from '../components/ProfileDropdown';

const DashboardLayout = ({ setActiveTab, children }) => {
  return (
    <div>
      <div>
        <button onClick={() => setActiveTab('home')}>Home</button>
        <button onClick={() => setActiveTab('settings')}>Settings</button>
        <button onClick={() => setActiveTab('profile')}>Profile</button>
        <ProfileDropdown />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
