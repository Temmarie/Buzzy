import React from 'react';
import { UserProfile } from '@clerk/clerk-react';

const Profile = () => {
  return (
    <div className="profile-container">
      <UserProfile path="/profile" routing="path" />
    </div>
  );
};

export default Profile;