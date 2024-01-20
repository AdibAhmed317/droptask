import React from 'react';
import { cn } from '@/lib/utils';
import { Poppins, Roboto } from 'next/font/google';
import { Button } from '@/components/ui/button';

const createFont = Poppins({
  subsets: ['latin'],
  weight: ['200'],
});

const textFont = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500'],
});

const DashboardPage = () => {
  return (
    <>
      <nav className='w-full h-20 p-4 border-b shadow-sm text-black bg-gray-300 flex justify-between items-center'>
        <h1 className={cn('text-2xl mx-10', createFont.className)}>Org 1</h1>
        <Button
          variant='default'
          size='sm'
          className={cn('mx-10', textFont.className)}>
          Create channel
        </Button>
      </nav>
      <section className='container mt-10'>Dashboard</section>
    </>
  );
};

export default DashboardPage;
