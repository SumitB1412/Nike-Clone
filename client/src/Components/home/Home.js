import React from 'react';
import {Link} from 'react-router-dom'
import banner1 from './banner1.webp';
import Carousels from './Carousel';
import Bottom from './Bottom';
import newTech from './newtech.mp4';
import latest from './latest.webp';
import jordan from './jordan.webp';

const Home = () => {
  return (
    <><div className='w-full px-6 pt-12 pb-8 md:pt-24 md:pb-12 md:px-12 sm:text-center'>
        <video className='w-full pb-10 object-cover' src={newTech} autoPlay loop muted/>
        <h4 className='text-4xl md:text-5xl lg:text-6xl font-["Helvetica Neue"] font-extrabold tracking-tighter pb-4'>NIKE TECH</h4>
        <p className='text-base md:text-lg font-light pb-4'>Engineered to the Exact Specifications of Championship Athletes</p>
        <Link to={'/products'}><button className='px-5 py-2 rounded-full bg-black text-white hover:bg-black/70'>Shop</button></Link>
        <p className="text-2xl py-10 text-left">Just In</p>
        <img src={banner1} alt="banner1" className='pb-10 w-[100%]'/>
        <p className='text-base md:text-lg font-light'>New Nike United Pack</p>
        <h4 className='text-4xl md:text-5xl lg:text-6xl font-["Helvetica Neue"] font-extrabold tracking-tighter pb-4'>UNITY FOREVER</h4>
        <p className='text-base md:text-lg font-light pb-4'>It's a new dawn for football.</p>
        <Link to={'/products'}><button className='px-5 py-2 rounded-full bg-black text-white hover:bg-black/70'>Shop</button></Link>
    </div>
    <Carousels/>
    <div className='w-full px-6 pt-6 md:pt-12 md:px-12 sm:text-center'>
        <p className="text-2xl py-10 text-left">The Latest</p>
        <img src={latest} alt="banner1" className='pb-10 w-[100%]'/>
        <h4 className='text-4xl md:text-5xl lg:text-6xl font-["Helvetica Neue"] font-extrabold tracking-tighter pb-4'>MEET YOUR NEW TRAIL GUIDES</h4>
        <p className='text-base md:text-lg font-light pb-4'>No matter the terrain, Nike Trail keeps you on the move.</p>
        <Link to={'/products'}><button className='px-5 py-2 rounded-full bg-black text-white hover:bg-black/70'>Shop</button></Link>
        <p className="text-2xl py-10 text-left">Don't Miss</p>
        <img src={jordan} alt="banner1" className='pb-10 w-[100%]'/>
        <p className='text-lg font-light'>Jordan Men</p>
        <h4 className='text-4xl md:text-5xl lg:text-6xl font-["Helvetica Neue"] font-extrabold tracking-tighter pb-4'>MVP COLLECTION</h4>
        <p className='text-base md:text-lg font-light pb-4'>Elevate your look with our MVP collection - a striking blend of bold colors and classic styles.</p>
        <Link to={'/products'}><button className='px-5 py-2 rounded-full bg-black text-white hover:bg-black/70'>Shop</button></Link>
    </div>
    <Bottom/>
    </>
    
  )
}

export default Home;