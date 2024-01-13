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
        <div className='mt-20 p-5'>{props.children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
