import React from 'react';
import NavBar from './Components/navbar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/home/Home';
import SignUpPopUp from './Components/SignUp/SignUpPopUp';

const App = () => {
  return (
    <>
      <NavBar/>
      <SignUpPopUp/>
      <Footer />
    </>
    
  )
};

export default App;
