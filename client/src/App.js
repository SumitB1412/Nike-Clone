import React from 'react';
import NavBar from './Components/navbar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/home/Home';
import SignUpPopUp from './Components/SignUp/SignUpPopUp';
import Products from './pages/Products';

const App = () => {
  return (
    <>
      <NavBar/>
      {/* <Home /> */}
      <Products />
      {/* <SignUpPopUp/> */}
      <Footer />
    </>
    
  )
};

export default App;
