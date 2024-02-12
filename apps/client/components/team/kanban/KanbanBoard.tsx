'use client';

import { Button } from '@/components/ui/button';
import { Column, Id } from '@/lib/types';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ColumnContainer from './ColumnContainer';
import { PlusCircle } from 'lucide-react';

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);

  const createColumn = () => {
    const columnToAdd: Column = {
      id: uuidv4(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  };

  const deleteColumn = (id: Id) => {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  };

  return (
    <div className='m-auto min-h-screen w-full overflow-x-auto overflow-y-hidden px-[40px]'>
      <div className='m-auto flex gap-4'>
        <div className='flex gap-4'>
          {columns.map((col) => (
            <ColumnContainer column={col} deleteColumn={deleteColumn} />
          ))}
        </div>
        <Button
          className='h-6 text-xs bg-gray-300 text-black/75 hover:text-white/95 flex gap-2'
          onClick={createColumn}>
          <PlusCircle className='max-h-4' />
          Add column
        </Button>
      </div>
    </div>
  );
};

export default KanbanBoard;
