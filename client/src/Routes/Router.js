import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../Components/navbar/NavBar";
import Home from "../Components/home/Home";
import Footer from "../Components/Footer/Footer";
import ProductPage from "../Components/productpage/ProductPage";
import Cart from "../Components/Cart/Cart";
import CheckOut from "../Components/Cart/CheckOut";
import Orders from "../Components/Orders/Orders";
import JoinUs from "../Components/SignUp/JoinUs";
import LogIn from "../Components/LogIn/LogIn";
import Products from "../pages/Products";
import Favourites from "../Components/Favourites/Favourites";

const Router = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/description/:id" element={<ProductPage />} />
        {/* <Route path='/description' element={<ProductPage />}/> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/register" element={<JoinUs />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
