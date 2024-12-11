'use client'
import React from 'react'
import ProfileCard from './profilecard';

const LowerSection = () => {
  return (
    <section className="flex-grow flex items-center justify-center p-2 bg-blue-100">
      <div className="relative w-full max-w-xs h-[75%]">
        {/* Profile Card(to add more) */}
        <ProfileCard/>
      </div>
    </section>
  );
}

export default LowerSection
