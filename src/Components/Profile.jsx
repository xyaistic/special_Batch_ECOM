import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-6">Profile Screen</h2>
      <button
        onClick={() => navigate('/profile/order')}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Go to Order Screen
      </button>
    </div>
  );
}

export default ProfileScreen;
