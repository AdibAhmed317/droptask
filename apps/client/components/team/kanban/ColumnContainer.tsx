import React from 'react';
import { Column, Id } from '@/lib/types';
import { TrashIcon } from 'lucide-react';

interface ColumnContainerProps {
  column: Column;
  deleteColumn: (id: Id) => void;
}

const ColumnContainer = ({ column, deleteColumn }: ColumnContainerProps) => {
  return (
    <div className='bg-gray-300 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col'>
      <div className='bg-gray-700 text-sm text-white h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-semibold border-columnBackgroundColor border-1 flex items-center justify-between'>
        <div className='flex gap-2'>
          <div className='flex justify-center items-center bg-gray-800 px-2 py-1 text-sm rounded-sm'>
            0
          </div>
          {column.title}
        </div>
        <button onClick={() => deleteColumn(column.id)}>
          <TrashIcon className='max-h-4 w-full' />
        </button>
      </div>
      <div className='flex flex-grow'>Content</div>
      <div>footer</div>
    </div>
  );
};

export default ColumnContainer;
