import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {Link,useNavigate} from "react-router-dom";
import { getLoginSuccess } from "../../Redux/auth/actions";
import { isLogInFormEmpty } from "../../utils/formValidator";

const LogIn = () => {
  const initState = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState(initState);

  const handleInputChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const isEmpty = isLogInFormEmpty(form);
    if(!isEmpty.status){
      return alert(isEmpty.message);
    }
    dispatch(getLoginSuccess(form,navigate));
  }
  return (
      <div className="w-full flex flex-col px-4 py-14">
        <div className="flex flex-col justify-center text-center">
          <p className="text-xl font-semibold ">YOUR ACCOUNT FOR</p>
          <p className="text-xl font-semibold ">EVERYTHING NIKE</p>
        </div>
        <div className="pt-8 pb-4 flex justify-center">
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Email Address"
            className="w-full sm:w-[338px] h-[38px] text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="flex justify-center">
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full sm:w-[338px] h-[38px] text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="flex place-content-center pt-4">
          <p className="text-md text-gray-400 font-normal">
            Forgot your Password?
          </p>
        </div>
        <div className="py-4 flex justify-center">
          <button onClick={handleOnSubmit} className="w-full sm:w-[338px] h-[38px] bg-black text-white border border-gray-300 py-2 px-3 rounded-lg shadow-sm hover:border-gray-500">
            SIGN IN
          </button>
        </div>
        <div className="flex justify-center">
          <p className="text-md text-gray-400 font-normal">
            Not a Member?<Link to={'/register'} className="underline hover:text-gray-600">SignUp</Link>
          </p>
        </div>
      </div>
  );
};

export default LogIn;
