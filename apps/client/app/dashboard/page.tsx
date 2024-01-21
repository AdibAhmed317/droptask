'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Poppins, Roboto } from 'next/font/google';
import { Button } from '@/components/ui/button';
import CreateTeamModal from '@/components/dashboard/CreateTeamModal';
import TeamList from '@/components/dashboard/TeamList';
import Sidebar from '@/components/dashboard/Sidebar';

const createFont = Poppins({
  subsets: ['latin'],
  weight: ['200'],
});

const textFont = Roboto({
  subsets: ['latin'],
  weight: ['700'],
});

const DashboardPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row'>
      <Sidebar />
      <div className='pt-14 w-full'>
        <nav className='w-full h-20 p-4 border-b border-gray-500 shadow-lg text-black bg-gray-500 flex justify-between items-center px-16'>
          <h1 className={cn('text-2xl mx-10 text-white', createFont.className)}>
            Organization 1
          </h1>
          <Button
            onClick={() => setOpenModal(true)}
            variant='default'
            size='sm'
            className={cn('mx-10 hover:bg-gray-600', textFont.className)}>
            Create Team (5 left)
          </Button>
          <CreateTeamModal
            openModal={openModal}
            onClose={() => setOpenModal(false)}
          />
        </nav>
        <TeamList />
      </div>
    </div>
  );
};

export default DashboardPage;
