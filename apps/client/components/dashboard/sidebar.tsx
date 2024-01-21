'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Poppins, Roboto } from 'next/font/google';
import { cn } from '@/lib/utils';
import CreateOrganizationModal from './CreateModal';

const textFont = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400'],
});

const createFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400'],
});

const Sidebar = () => {
  const { data: session } = useSession();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='sm:min-h-screen bg-gray-700 shadow-lg pt-16 text-white/75'>
      <Button
        variant='destructive'
        className={cn(
          'bg-gray-600 hover:bg-gray-950 hover:text-gray-100 m-2',
          createFont.className
        )}
        onClick={() => setOpenModal(true)}>
        Create Organization (3 left)
      </Button>

      <CreateOrganizationModal
        openModal={openModal}
        onClose={() => setOpenModal(false)}
      />

      <ul
        className={cn(
          'mt-10 flex flex-col justify-center items-center',
          textFont.className
        )}>
        <Link
          href={`/dashboard/user/${session?.user.id}`}
          className='h-10 w-full text-center hover:bg-gray-600 hover:text-white flex justify-center items-center p-6 transition-all'>
          Organization 1
        </Link>
        <Link
          href={`/dashboard/user/${session?.user.id}`}
          className='h-10 w-full text-center hover:bg-gray-600 hover:text-white flex justify-center items-center p-6 transition-all'>
          Organization 2
        </Link>
        <Link
          href={`/dashboard/user/${session?.user.id}`}
          className='h-10 w-full text-center hover:bg-gray-600 hover:text-white flex justify-center items-center p-6 transition-all'>
          Organization 3
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
