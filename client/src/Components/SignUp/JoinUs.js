import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {Link,useNavigate} from "react-router-dom";
import { emailValidator, isSignUpFormEmpty, passwordValidator } from "../../utils/formValidator";
import { getRegisterSuccess } from "../../Redux/auth/actions";

const JoinUs = () => {
  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    dateOfBirth: "",
  };
  const [form, setForm] = useState(initState);

  const handleInputChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const isEmpty = isSignUpFormEmpty(form);
    if(!isEmpty.status){
      return alert(isEmpty.message);
    }

    const isEmail = emailValidator(form.email);
    if(!isEmail.status){
      return alert(isEmail.message);
    }

    const isPassword = passwordValidator(form.password);
    if(!isPassword.status){
      return alert(isPassword.message);
    }
    dispatch(getRegisterSuccess(form,navigate));
  }
  return (
      <div className="w-[100%] flex flex-col py-14">
        <div className="flex justify-center">
          <p className="text-xl font-semibold">BECOME A NIKE MEMBER</p>
        </div>
        <div className="pt-8 pb-4 flex justify-center">
          <input
            name="email"
            type="email"
            onChange={handleInputChange}
            placeholder="Email Address"
            className="w-[90%] sm:w-[338px] h-[38px] text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="flex justify-center">
          <input
            name="password"
            type="password"
            onChange={handleInputChange}
            placeholder="Password"
            className="w-[90%] sm:w-[338px] h-[38px] text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="py-4 flex justify-center">
          <input
            name="firstName"
            type="text"
            onChange={handleInputChange}
            placeholder="First Name"
            className="w-[90%] sm:w-[338px] h-[38px] text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="flex justify-center">
          <input
            name="lastName"
            type="text"
            onChange={handleInputChange}
            placeholder="Last Name"
            className="w-[90%] sm:w-[338px] h-[38px] text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="py-4 flex justify-center">
          <select
            name="gender"
            onChange={handleInputChange}
            id="gender"
            className="w-[90%] sm:w-[338px] h-[38px] text-black border border-gray-300 py-2 px-3 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          >
            <option>Choose Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="flex justify-center">
          <input
            type="date"
            onChange={handleInputChange}
            name="dateOfBirth"
            id="dateOfBirth"
            placeholder="Date of Birth"
            className="w-[90%] sm:w-[338px] h-[38px] text-black border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:border-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="py-4 flex justify-center">
          <button onClick={handleOnSubmit} className="w-[90%] sm:w-[338px] h-[38px] bg-black text-white border border-gray-300 py-2 px-3 rounded-lg shadow-sm hover:border-gray-500">
            JOIN US
          </button>
        </div>
        <div className="flex justify-center pt-2">
          <p className="text-md text-gray-400 font-normal">
            Already a Member?<Link to={'/login'}  className="underline hover:text-gray-600">Login</Link>
          </p>
        </div>
      </div>
  );
};

export default JoinUs;
