import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({product}) => {
  return (
    <div className='flex flex-col w-full'>
        <Link to={'/products/description/:id'}><div>
            <img src={product.img[0]} alt={product.title} className='w-full object-cover'/>
        </div></Link>
        <div className='flex pt-4 w-full text-base justify-between'>
        <Link to={'/products/description/:id'}><div>
                <p className='max-w-[25ch] truncate'>{product.title}</p>
            </div></Link>
            <div>
                <p>₹{product.price}</p>
            </div>
        </div>
        <div>
            <p className='text-gray-400 max-w-[27ch] truncate'>{product.description}</p>

        </div>
        <div className='py-4'>
            <button className='px-4 py-2 border border-gray-300 hover:border-gray-700 rounded-full'>Remove</button>
        </div>
    </div>
  )
}

export default Card