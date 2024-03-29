import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen bg-slate-50 flex justify-center items-center'>
      <Navbar />
      <main className='py-20 h-full w-full flex justify-center items-center'>
        <div className='p-10 bg-slate-200 rounded-md shadow-lg'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
