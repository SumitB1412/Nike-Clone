import React from 'react';
import men from './men.webp';
import women from './women.webp';
import kids from './kid.webp';

const Bottom = () => {
  return (
    <div className='w-full px-6 py-10 md:py-20 md:px-12'>
        <p className='text-2xl pb-8'>The Essentials</p>
        <div className='flex flex-col sm:flex-row gap-3'>
            <div className='relative'>
                <img src={men} alt="men" className='h-[550px] object-cover'/>
                <button className='absolute bg-white hover:bg-gray-200 text-black rounded-full py-2 px-5 top-[462px] left-[50px]'>Men's</button>
            </div>
            <div className='relative'>
                <img src={women} alt="men" className='h-[550px] object-cover'/>
                <button className='absolute bg-white hover:bg-gray-200 text-black rounded-full py-2 px-5 top-[462px] left-[50px]'>Women's</button>
            </div>
            <div className='relative'>
                <img src={kids} alt="men" className='h-[550px] object-cover'/>
                <button className='absolute bg-white hover:bg-gray-200 text-black rounded-full py-2 px-5 top-[462px] left-[50px]'>Kid's</button>
            </div>
        </div>
    </div>
  )
};

export default Bottom;