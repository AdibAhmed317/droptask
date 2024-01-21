import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import React from 'react';

const createFont = Poppins({
  subsets: ['latin'],
  weight: ['200'],
});

const TeamPage = () => {
  return (
    <div className='min-h-screen pt-14'>
      <nav className='w-full h-20 p-4 px-28 border-b shadow-lg text-black bg-gray-500 flex justify-between items-center'>
        <h1 className={cn('text-2xl mx-10 text-white', createFont.className)}>
          Developer Team
        </h1>
        <div className='flex gap-5 text-white'>
          <p>Board</p>
          <p>Chat</p>
          <p>Canvas</p>
        </div>
      </nav>
    </div>
  );
};

export default TeamPage;
