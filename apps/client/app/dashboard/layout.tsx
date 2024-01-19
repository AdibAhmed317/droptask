import { Navbar } from '@/components/navbar';
import Sidebar from '@/components/dashboard/sidebar';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async (props: Props) => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='pt-14 w-full'>{props.children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
