import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full bg-slate-300'>
      <Navbar />
      <main className='pt-40 pb-20'>{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
