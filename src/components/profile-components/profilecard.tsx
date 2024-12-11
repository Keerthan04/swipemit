import React from 'react'
import TinderCard from 'react-tinder-card';

const ProfileCard = () => {
  return (
    <TinderCard className="absolute w-full h-full">
      <div className="w-full h-full bg-white rounded-lg shadow-lg">
        <div className="w-full h-2/3 bg-gray-200 rounded-t-lg"></div>
        <div className="w-full h-1/3 p-4">
          <h1 className="text-lg font-semibold">Name</h1>
          <p className="text-sm text-gray-500">Bio</p>
        </div>
        <div className="flex justify-between p-4 space-x-2">
          <button className="w-full py-2 bg-red-500 text-white rounded-b-lg">
            Like
          </button>
          <button className="w-full py-2 bg-green-500 text-white rounded-b-lg">
            View Profile
          </button>
        </div>
      </div>
    </TinderCard>
  );
}

export default ProfileCard
