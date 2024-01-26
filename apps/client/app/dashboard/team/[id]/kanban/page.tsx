import Column from '@/components/team/kanban/Column';
import { Button } from '@/components/ui/button';
import React from 'react';

const KanbanPage = () => {
  return (
    <div className='flex p-10'>
      <section className='flex'>
        <Column headingText='To do' />
        <Column headingText='doing' />
        <Column headingText='done' />
      </section>
      <Button className='h-6 text-xs bg-gray-300 text-black/75'>New</Button>
    </div>
  );
};

export default KanbanPage;
