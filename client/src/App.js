import React from "react";
import NavBar from "./Components/navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/home/Home";
import SignUpPopUp from "./Components/SignUp/JoinUs";
import LogIn from "./Components/LogIn/LogIn";
import ProductPage from "./Components/productpage/ProductPage";
import Products from "./pages/Products";
import Router from './Routes/Router';

const App = () => {
  return (
    <>
    <Router />
    </>
  );
};

export default App;
