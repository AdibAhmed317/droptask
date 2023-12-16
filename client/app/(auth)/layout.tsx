import { Footer } from '../../components/footer';
import { Navbar } from '../../components/navbar';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full bg-slate-100'>
      <Navbar />
      <main className='py-20 bg-slate-100 h-full w-full flex justify-center items-center'>
        <div className='p-10 bg-slate-200 rounded-md'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
