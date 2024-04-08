import Header from '../Header';

interface IProps {
  children: React.ReactNode;
}
export default function AppShell({ children }: IProps) {
  return (
    <div className='h-full w-full px-8 py-4'>
      <div className='mb-8'>
        <Header />
      </div>
      {children}
    </div>
  );
}
