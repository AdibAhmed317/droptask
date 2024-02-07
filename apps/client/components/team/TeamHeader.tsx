import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const createFont = Poppins({
  subsets: ['latin'],
  weight: ['200'],
});

const TeamHeader = () => {
  return (
    <div className='pt-14'>
      <nav className='w-full h-20 min-w-fit px-28 shadow-xl text-black bg-gray-500 flex justify-between items-center'>
        <h1 className={cn('text-2xl text-white', createFont.className)}>
          Developer Team
        </h1>
        <div className='flex text-white'>
          <Link href='/dashboard/team/1/kanban'>
            <Button variant='ghost'>Kanban Board</Button>
          </Link>

          <Link href='/dashboard/team/1/chat'>
            <Button variant='ghost'>Chat</Button>
          </Link>

          <Link href='/dashboard/team/1/canvas'>
            <Button variant='ghost'>Chat</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default TeamHeader;
