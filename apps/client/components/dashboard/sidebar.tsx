'use client';

import { useSession } from 'next-auth/react';
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className='min-h-screen min-w-[15rem] bg-gray-200 shadow-lg pt-20 flex justify-center'>
      <ul className='min-w-[13rem]'>
        <li className='my-3 w-full bg-gray-300 flex rounded-xl'>
          <Link
            className='py-2 w-full h-full text-center'
            href={`/dashboard/user/${session?.user.id}`}>
            User Profile
          </Link>
        </li>
        <li className='my-3 w-full bg-gray-300 flex rounded-xl'>
          <Link
            className='py-2 w-full h-full text-center'
            href={`/dashboard/user/${session?.user.id}`}>
            User Profile
          </Link>
        </li>
        <li className='my-3 w-full bg-gray-300 flex rounded-xl'>
          <Link
            className='py-2 w-full h-full text-center'
            href={`/dashboard/user/${session?.user.id}`}>
            User Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
