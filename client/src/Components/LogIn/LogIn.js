import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const LogIn = (props) => {
  if (!props.isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "outerpart") props.clickHandler();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center text-black"
      id="outerpart"
      onClick={handleClose}
    >
      <div className="w-[100%] sm:w-[448px] bg-white flex flex-col rounded-lg px-14 py-14">
        <button className="text-black place-self-end -mt-10 mb-4 -mr-10">
          <AiOutlineClose
            size={25}
            className="cursor-pointer text-black border border-gray-200 rounded-lg shadow-sm hover:border-gray-500"
            onClick={props.clickHandler}
          />
        </button>
        <div className="flex flex-col justify-center text-center">
          <p className="text-xl font-semibold ">YOUR ACCOUNT FOR</p>
          <p className="text-xl font-semibold ">EVERYTHING NIKE</p>
        </div>
        <div className="py-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-[90%] sm:w-[338px] h-[38px] text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="w-[90%] sm:w-[338px] h-[38px] text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="flex place-content-end pt-4">
          <p className="text-md text-gray-400 font-normal">
            Forgot your Password?
          </p>
        </div>
        <div className="py-4">
          <button className="w-[90%] sm:w-[338px] h-[38px] bg-black text-white border border-gray-300 py-2 px-3 rounded-lg shadow-sm hover:border-gray-500">
            SIGN IN
          </button>
        </div>
        <div className="flex justify-center">
          <p className="text-md text-gray-400 font-normal">
            Not a Member?SignUp
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
