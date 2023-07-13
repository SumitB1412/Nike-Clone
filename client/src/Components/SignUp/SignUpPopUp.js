import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const SignUpPopUp = () => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center text-white'>
        <div className='w-[448px] bg-white flex flex-col rounded-md'>
            <button className='text-white place-self-end'>
                <AiOutlineClose size={25} className="cursor-pointer text-black" />
            </button>
        </div>
    </div>
  )
}

export default SignUpPopUp