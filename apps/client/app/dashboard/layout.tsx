import { Navbar } from '@/components/Navbar';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async (props: Props) => {
  return (
    <>
      <Navbar />
      <div>{props.children}</div>
    </>
  );
};

export default DashboardLayout;
