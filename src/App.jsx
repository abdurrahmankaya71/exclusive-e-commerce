/*eslint-disable */

import React, {  Suspense } from 'react';
import { ClipLoader } from 'react-spinners'
import {BrowserRouter, BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { WishlistProvider } from "./WishlistContext.jsx";
import { CartProvider } from './CartContext';

const Layout = React.lazy(() => import('./pages/Layout'));
const Home = React.lazy(() => import('./pages/Home'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const Login = React.lazy(() => import('./pages/Login'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const Wishlist = React.lazy(() => import('./pages/Wishlist'));
const Cart = React.lazy(() => import('./pages/Cart'));
const CheckOut = React.lazy(() => import('./pages/CheckOut'));
const AllProducts = React.lazy(() => import('./pages/AllProducts'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
// import './App.css';


function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
        <Suspense fallback={
        <div className="loader-container">
          <ClipLoader color={"#123abc"} loading={true} size={50} />
        </div>
        }>
          <Routes>
            <Route path="/" element={<Layout/>} >
              <Route index element={<Home/>} />
              <Route path= "SignUp" element={<SignUp/>} />
              <Route path= "Login" element={<Login/>} />
              <Route path= "Contact" element={<Contact/>} />
              <Route path= "About" element={<About/>} />
              <Route path=":name" element={<ProductDetail/>} />
              <Route path="wishlist" element={<Wishlist/>} />
              <Route path="Cart" element={<Cart/>} />
              <Route path="CheckOut" element={<CheckOut/>} />
              <Route path="AllProducts" element={<AllProducts/>} />
              <Route path= "/*" element={<NotFound/>} />
            </Route>
          </Routes>
        </Suspense>
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  )
}

export default App
