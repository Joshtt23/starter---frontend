import React from 'react';
import ProfileDropdown from '../components/ProfileDropdown';

const DashboardLayout = ({ setActiveTab, children }) => {
  return (
    <div>
      <div>
        <ProfileDropdown />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
