import React from "react";
import JoinUs from "../SignUp/JoinUs";
import LogIn from "../LogIn/LogIn";
import { useSelector } from "react-redux";

const UpperBar = () => {
  const user = useSelector(state => state.authReducer);
  console.log(user);
  return (
    <div className="h-9 bg-gray-100 flex justify-end py-2 pr-7">
        <div>
          <button className="text-sm mr-4">Sign In</button>
          {/* <LogIn /> */}
        </div>
        <div>
          <button className="text-sm">Join Us</button>
          {/* <JoinUs /> */}
        </div>
    </div>
  );
};

export default UpperBar;
