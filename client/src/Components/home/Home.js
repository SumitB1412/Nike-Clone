import React from 'react';
import banner1 from './banner1.webp';
import Carousels from './Carousel';
import Bottom from './Bottom';

const Home = () => {
  return (
    <><div className='w-full py-24 px-12 sm:text-center'>
        <img src={banner1} alt="banner1" className='pb-10 w-[100%]'/>
        <p className='text-lg font-light'>New Nike United Pack</p>
        <h4 className='text-6xl font-["Helvetica Neue"] font-extrabold tracking-tighter pb-7'>UNITY FOREVER</h4>
        <p className='text-lg font-light pb-7'>It's a new dawn for football.</p>
        <button className='px-5 py-2 rounded-full bg-black text-white'>Shop</button>
    </div>
    <Carousels/>
    <Bottom/>
    </>
    
  )
}

export default Home;