import React from 'react';
import men from './men.webp';
import women from './women.webp';
import kids from './kid.webp';

const Bottom = () => {
  return (
    <div className='w-full py-24 px-12'>
        <p className='text-2xl pb-8'>The Essentials</p>
        <div className='flex flex-col sm:flex-row gap-3'>
            <div>
                <img src={men} alt="men" className='h-[480px]'/>
            </div>
            <div>
                <img src={women} alt="women" className='h-[480px]'/>
            </div>
            <div>
                <img src={kids} alt="kids" className='h-[480px]'/>
            </div>
        </div>
    </div>
  )
};

export default Bottom;