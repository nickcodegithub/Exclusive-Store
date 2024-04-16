import React from "react";
import { motion } from "framer-motion";
import WishlistProduct from "../components/WishlistProduct";

const Wishlist = () => {
  const items = 2;
  return (
    <motion.div
      className="py-32 px-28 text-white flex bg-gradient-to-br from-gray-950 via-violet-950 to-gray-950 h-[100vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 1 }}
    >

      <div className="flex justify-between w-full">
          <WishlistProduct/>
          <WishlistProduct/>
          <WishlistProduct/>
          <WishlistProduct/>
      </div>

    </motion.div>
  );
};

export default Wishlist;
