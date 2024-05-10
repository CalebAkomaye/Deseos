'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/utils/firebase';
import { Spinner } from '@/components/spinner';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  loading && <Spinner />;

  useEffect(() => {
    if (!user) {
      redirect('/');
    }
  }, [user]);
  return <div className='min-h-full flex flex-col'>{children}</div>;
};

export default IndexLayout;
