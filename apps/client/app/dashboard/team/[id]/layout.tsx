import TeamHeader from '@/components/team/TeamHeader';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const TeamLayout = async (props: Props) => {
  return (
    <>
      <TeamHeader />
      <div>{props.children}</div>
    </>
  );
};

export default TeamLayout;
