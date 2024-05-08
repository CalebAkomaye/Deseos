import React from 'react';
import { Undo } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaGoogle } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className=' md:px-6 px-3'>
      <div className='inline-flex flex-col gap-y-4 items-start'>
        <Undo />
        <div>
          <h1 className='font-bold text-2xl'>
            shows & tales
            <br />
            for copy writers
          </h1>
          <p>Never miss a read, share, tale, and save your favorite books</p>
        </div>
        <Button className=' mt-7'>
          <FaGoogle />{' '}
          <span className='inline-block ml-2'>Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
};

export default Hero;