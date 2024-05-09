import { Button } from '@/components/ui/button';
import React from 'react';
import Login from './signinBtn';

const Footer = () => {
  return (
    <div className='border-t'>
      <div className='flex items-center justify-between px-3 md:px-6 py-2'>
        <div className='text-sm font-medium'>
          <span className='inline-block text-gray-500'>Deseos</span>/
          <span className='underline font-bold inline-block ml-1'> books </span>
        </div>
        <div className='inline-flex gap-x-3'>
          <Login size='sm' variant='ghost' text='Sign in' />
          <Login size='sm' variant='ghost' text='About' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
