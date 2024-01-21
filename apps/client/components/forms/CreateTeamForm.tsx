import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Roboto } from 'next/font/google';
import { cn } from '@/lib/utils';

const textFont = Roboto({
  subsets: ['latin'],
  weight: ['400'],
});

const CreateTeamForm = () => {
  return (
    <div>
      <div className=''>
        <Label>
          Team Name <br />
          <Input type='text' className='bg-gray-100 w-1/2' />
        </Label>
        <div className='mx-auto my-4 border-t border-stone-400 w-full'></div>
        <div>
          <p className={cn('text-sm', textFont.className)}>
            Add members invite members to the team.
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

export default CreateTeamForm;
