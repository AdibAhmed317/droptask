'use client';

import Logo from '@/components/logo';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { Avatar, Dropdown } from 'flowbite-react';

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center'>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <Logo />
        <div className='space-x-4 md:block md:w-auto flex items-center justify-center w-full'>
          {session && session.user ? (
            <>
              <div className='flex justify-center items-center gap-5'>
                <Link className='text-green-500' href='/dashboard'>
                  Dashboard
                </Link>
                <Dropdown
                  label={<Avatar alt='profile' img='' rounded />}
                  arrowIcon={false}
                  inline
                  size=''>
                  <Dropdown.Header>
                    <span className='block text-sm'>{session.user.name}</span>
                    <span className='block truncate text-sm font-medium'>
                      {session.user.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <Link className='text-red-500' href='/api/auth/signout'>
                      Sign out
                    </Link>
                  </Dropdown.Item>
                </Dropdown>
              </div>
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
