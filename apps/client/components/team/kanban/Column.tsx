import { Button } from '@/components/ui/button';
import React from 'react';

type ColumnProps = {
  headingText: String;
};

const Column = ({ headingText }: ColumnProps) => {
  return (
    <div className='min-w-[20rem] max-w-[25rem] min-h-[5rem] mx-5 border-t-2 border-gray-500 rounded-t-sm bg-gray-300 rounded-b'>
      <h1 className='m-2'>{headingText}</h1>
      <Button className='w-full' variant='ghost'>
        Add Task
      </Button>
    </div>
  );
};

export default Column;
