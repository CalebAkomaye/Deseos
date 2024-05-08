import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <div className='border-b'>
      <div className='flex items-center justify-between px-3 md:px-6 py-2'>
        <div className='text-sm font-medium'>
          <span className='inline-block text-gray-500'>Deseos</span>/
          <span className='underline font-bold inline-block ml-1'> books </span>
        </div>
        <div>
          <Button variant='ghost' size='sm' className='text-gray-500'>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
