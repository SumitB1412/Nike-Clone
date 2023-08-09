import React from 'react';
import { Route,Routes } from 'react-router-dom';
import NavBar from "../Components/navbar/NavBar";
import Home from "../Components/home/Home";
import Footer from "../Components/Footer/Footer";
import ProductPage from "../Components/productpage/ProductPage"
import Cart from '../Components/Cart/Cart';
import CheckOut from '../Components/Cart/CheckOut';
import Orders from '../Components/Orders/Orders';



const Router = () => {
  return (
  <>
    <NavBar />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/description' element={<ProductPage />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<CheckOut />}/>
        <Route path='/orders' element={<Orders />}/>
    </Routes>
    <Footer />
  </>
  )
}

export default Router