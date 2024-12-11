import LowerSection from '@/components/profile-components/lowerSection';
import UpperSection from '@/components/profile-components/upperSection';
import React from 'react'

const userPage = () => {
  return (
    <main className="h-screen w-full flex flex-col bg-white">
      {/* Upper Section */}
      <UpperSection/>

      {/* Lower Section */}
      <LowerSection/>
    </main>
  );
}

export default userPage
