import { Navbar } from '@/components/Navbar';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async (props: Props) => {
  return (
    <div className='bg-slate-100'>
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
};

export default DashboardLayout;
