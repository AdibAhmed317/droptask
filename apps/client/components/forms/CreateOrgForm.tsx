import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Roboto } from 'next/font/google';
import { cn } from '@/lib/utils';

const textFont = Roboto({
  subsets: ['latin'],
  weight: ['400'],
});

const CreateOrganizationForm = () => {
  return (
    <div>
      <div className=''>
        <Label>
          Organization Name <br />
          <Input type='text' className='bg-gray-100 w-1/2' />
        </Label>
        <div
          className={cn(
            'mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:black before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400',
            textFont.className
          )}>
          Invite other members
        </div>
        <div>
          <p className={cn('text-sm', textFont.className)}>
            You can invite members to your organization.
            <a href='#' className='text-blue-500'>
              {' '}
              Click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateOrganizationForm;
