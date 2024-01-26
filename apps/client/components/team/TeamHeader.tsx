import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const createFont = Poppins({
  subsets: ['latin'],
  weight: ['200'],
});

const TeamHeader = () => {
  return (
    <div className='pt-14'>
      <nav className='w-full h-20 px-28 shadow-xl text-black bg-gray-500 flex justify-between items-center'>
        <h1 className={cn('text-2xl text-white', createFont.className)}>
          Developer Team
        </h1>
        <div className='flex gap-5 text-white'>
          <Link href='/dashboard/team/1/kanban'>Kanban Board</Link>
          <Link href='/dashboard/team/1/chat'>Chat</Link>
          <Link href='/dashboard/team/1/canvas'>Canvas</Link>
        </div>
      </nav>
    </div>
  );
};

export default TeamHeader;
