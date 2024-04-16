import React, { useContext, useState } from "react";
import CartProduct from "../components/CartProduct";
import { motion } from "framer-motion";
import { cartItemContext } from "../context/Context";

const Cart = () => {
  const context = useContext(cartItemContext);

  return (
    <motion.div
      className="px-28 bg-gradient-to-br from-gray-950 via-violet-950 to-gray-950 py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 1 }}
    >
      <div className="flex">
        <div className=" w-[600px]">
          <div className="flex flex-col gap-10">
            <>
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
            </>
          </div>
        </div>

        <div className=" text-white bg-black-transparent-xl mr-28 p-10 fixed right-0 rounded-md w-[600px] text-center">
          <div className="">
            <h1 className=" font-light">
              You have total{" "}
              <span className="font-bold">{context.items} Items</span> worth{" "}
              <span className="font-bold">₹{context.bill}</span> in
              your cart
            </h1>
          </div>
          <div>
            <button className=" bg-green-600 hover:bg-green-900 text-white active:scale-90 p-3 rounded-md shadow-xl my-10 mx-28 font-bold">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
