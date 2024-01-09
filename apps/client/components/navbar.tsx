'use client';

import Logo from '@/components/logo';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center'>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <Logo />
        <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
          {session && session.user ? (
            <>
              <p>{session.user.name}</p>
              <p>{session.user.name}</p>
            </>
          ) : (
            <>
              <Button size='sm' variant='outline' asChild>
                <Link href='/api/auth/signin'>Login</Link>
              </Button>
              <Button size='sm' asChild>
                <Link href='/sign-up'>Get DropTask for free</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
