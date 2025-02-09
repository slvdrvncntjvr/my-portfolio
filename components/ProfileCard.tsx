import React from 'react';

const ProfileCard: React.FC = () => (
  <div className="p-4 bg-white shadow rounded">
    <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
    <h2 className="text-center mt-2">Your Name</h2>
    <p className="text-center text-sm">A brief introduction about you.</p>
  </div>
);

export default ProfileCard;