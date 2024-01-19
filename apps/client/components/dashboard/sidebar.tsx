'use client';

import { useSession } from 'next-auth/react';
import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className='min-h-screen bg-gray-400 shadow-lg pt-16'>
      <Button
        variant='destructive'
        className='bg-gray-950 text-white hover:bg-gray-600 hover:text-gray-100 m-2'>
        Create Organization (5 left)
      </Button>

      <ul className='mt-10 flex flex-col justify-center items-center'>
        <Link
          href={`/dashboard/user/${session?.user.id}`}
          className='h-10 w-full text-center hover:bg-gray-300 flex justify-center items-center p-6 transition-all'>
          Org 1
        </Link>
        <Link
          href={`/dashboard/user/${session?.user.id}`}
          className='h-10 w-full text-center hover:bg-gray-300 flex justify-center items-center p-6 transition-all'>
          Org 2
        </Link>
        <Link
          href={`/dashboard/user/${session?.user.id}`}
          className='h-10 w-full text-center hover:bg-gray-300 flex justify-center items-center p-6 transition-all'>
          Org 3
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;

{
  /* href={`/dashboard/user/${session?.user.id}`}> */
}
