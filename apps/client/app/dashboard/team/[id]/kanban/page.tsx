import KanbanBoard from '@/components/team/kanban/KanbanBoard';
import React from 'react';

const KanbanPage = () => {
  return (
    <div className='flex p-10'>
      <KanbanBoard />
    </div>
  );
};

export default KanbanPage;

{
  /* <section className='flex'>
<Column headingText='To do' />
<Column headingText='doing' />
<Column headingText='done' />
</section>
<Button className='h-6 text-xs bg-gray-300 text-black/75 hover:text-white/95'>
New
</Button> */
}
