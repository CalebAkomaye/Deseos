'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { useRouter } from 'next/navigation';

const Login = ({
  variant,
  size,
  text,
}: {
  variant: 'ghost' | 'link' | 'default';
  size: 'sm' | 'lg' | 'default';
  text: string;
}) => {
  const router = useRouter();
  const authProvider = new GoogleAuthProvider();
  const authLogin = async () => {
    try {
      const result = await signInWithPopup(auth, authProvider);
      router.push('/documents');
    } catch (error) {
      console.log('Athentication Error: ', error);
    }
  };
  return (
    <Button
      variant={variant}
      size={size}
      onClick={authLogin}
      className='text-gray-500'
    >
      {text}
    </Button>
  );
};

export default Login;
