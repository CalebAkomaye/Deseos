'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/utils/firebase';
import { MdMenu } from 'react-icons/md';
import Profile from './avatar';

const IndexNav = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  if (!user) router.push('/');
  return (
    <div className='border-b'>
      <div className='flex items-center justify-between px-3 md:px-6 py-2'>
        <div className='text-sm font-medium flex items-center justify-center gap-1'>
          <span className='inline-block text-gray-500'>
            <Profile url={user?.photoURL} />
          </span>
          /
          <span className='underline font-bold inline-block ml-1'>
            {' '}
            {user?.displayName}{' '}
          </span>
        </div>
        <div>
          <Button variant='ghost' size='icon' className='text-gray-500'>
            <MdMenu className=' text-2xl' />
          </Button>
        </div>
      </div>{' '}
    </div>
  );
};
export default IndexNav;
