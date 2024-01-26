import React from 'react';

type ColumnProps = {
  headingText: String;
};

const Column = ({ headingText }: ColumnProps) => {
  return (
    <div className='min-w-[20rem] max-w-[25rem] min-h-[5rem] mx-5 border-t-2 border-red-500 rounded-t-sm'>
      <h1 className='m-2'>{headingText}</h1>
    </div>
  );
};

export default Column;
