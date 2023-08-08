import React from "react";
import NavBar from "./Components/navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/home/Home";
import SignUpPopUp from "./Components/SignUp/JoinUs";
import LogIn from "./Components/LogIn/LogIn";
import ProductPage from "./Components/productpage/ProductPage";
import Products from "./pages/Products";

const App = () => {
  return (
    <>
      <NavBar />
      {/* <ProductPage/> */}
      <Products />
      <Footer />
    </>
  );
};

export default App;
