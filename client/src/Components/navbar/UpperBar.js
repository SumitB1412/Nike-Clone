import React, { useState } from "react";
import JoinUs from "../SignUp/JoinUs";
import LogIn from "../LogIn/LogIn";

const UpperBar = () => {
  const [joinUs, setJoinUs] = useState(false);
  const joinUsHandler = () => {
    setJoinUs(!joinUs);
  };
  const [logIn, setLogIn] = useState(false);
  const logInHandler = () => {
    setLogIn(!logIn);
  };
  return (
    <div className="hidden h-9 bg-gray-100 md:flex justify-end py-2 pr-7">
        <div>
          <button className="text-sm mr-4" onClick={logInHandler}>Sign In</button>
          <LogIn isVisible={logIn} clickHandler={logInHandler}/>
        </div>
        <div>
          <button className="text-sm" onClick={joinUsHandler}>Join Us</button>
          <JoinUs isVisible={joinUs} clickHandler={joinUsHandler}/>
        </div>
    </div>
  );
};

export default UpperBar;
