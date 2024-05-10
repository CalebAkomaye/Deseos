'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/utils/firebase';

const IndexPage = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  if (!user) router.push('/');
  return (
    <div>
      <div className='border-b'>
        <div className='flex items-center justify-between px-3 md:px-6 py-2'>
          <div className='text-sm font-medium'>
            <span className='inline-block text-gray-500'>Deseos</span>/
            <span className='underline font-bold inline-block ml-1'>
              {' '}
              books{' '}
            </span>
          </div>
          <div>
            <Button variant='ghost' size='sm' className='text-gray-500'>
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
