'use client';

import { Button } from '@/components/ui/button';
import { Column } from '@/lib/types';
import PlusIcon from '@/public/icons/PlusIcon';
import React, { useState } from 'react';

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);

  const createColumn = () => {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  };

  const generateId = () => {};

  return (
    <div className='m-auto min-h-screen w-full overflow-x-auto overflow-y-hidden px-[40px]'>
      <div className='m-auto'>
        <Button
          className='h-6 text-xs bg-gray-300 text-black/75 hover:text-white/95 flex gap-2'
          onClick={createColumn}>
          <PlusIcon />
          Add column
        </Button>
      </div>
    </div>
  );
};

export default KanbanBoard;
