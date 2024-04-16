import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../pages/Home.jsx";
import NoPage from "../pages/NoPage.jsx";
import Cart from "../pages/Cart.jsx";
import Wishlist from "../pages/Wishlist.jsx";
import Login from "../pages/Login.jsx";
import Product from "../pages/Product.jsx";
import { AnimatePresence } from "framer-motion";
import Signup from "../pages/Signup.jsx";
import Premium from "../pages/Premium.jsx";
import Budget from "../pages/Budget.jsx";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Wishlist" element={<Wishlist />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Product" element={<Product />} />
          <Route path="Premium" element={<Premium />} />
          <Route path="Budget" element={<Budget />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
