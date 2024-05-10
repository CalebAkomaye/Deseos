'use client';
import React from 'react';
import Hero from '@/app/(main)/_components/hero';
import Footer from '@/app/(main)/_components/footer';

const MainPage = () => {
  return (
    <div className='flex flex-col min-h-full '>
      <div className='grid min-h-full place-items-center'>
        <div className='min-h-full flex flex-col pt-40 pb-52 items-center justify-start'>
          <Hero />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
