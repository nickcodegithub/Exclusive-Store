import React, { useContext } from "react";
import dressImage from "../assets/dress.png";
import { motion } from "framer-motion";
import { GoHeartFill } from "react-icons/go";
import { cartItemContext } from "../context/Context";
import { FaStar } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

const Product = () => {
  const context = useContext(cartItemContext);
  const price = 2999;
  const priceOriginal = 5999;
  const discount = 52;

  function handleAddToCart() {
    context.setItems((i) => i + 1);
  }

  return (
    <motion.div
      className="pt-32 h-[100vh] items-center text-white p-16 flex gap-28 bg-gradient-to-b from-black via-blue-950 to-black"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1}}
      exit={{ opacity: 0 }}
      // transition={{duration: 0.1}}
    >
      <div className="flex justify-end">
        <img className="w-80 rounded-xl drop-shadow-2xl" src={dressImage} alt="product" />
        <GoHeartFill className="text-gray-500 text-4xl absolute m-2 hover:text-red-900 active:text-red-500 transiton-smooth" />
      </div>
      <div className="">
        <h1 className="text-4xl font-bold my-1">DressBerry</h1>
        <h1 className="text-2xl font-light">
          Printed Halter Neck Crop Top
        </h1>

        <div className="flex items-center gap-2 text-xs p-2 w-fit">
          <div>4.3</div>
          <FaStar className=" text-green-300" />
          <div className="h-5 w-[1px] bg-gray-200"></div>
          <div>20 Ratings</div>
        </div>

        <div className="my-2">
          <div className=" uppercase font-bold">Color options</div>
          <div className="flex gap-5 py-2">
            <div className=" h-10 w-10 rounded bg-cyan-100 "></div>
            <div className=" h-10 w-10 rounded border-2 border-gray-500 hover:border-white"></div>
          </div>
        </div>

        <div className="font-bold gap-5 flex items-center text-sm uppercase my-3">
          <div className="">Select size</div>
          <div className="flex items-center text-cyan-300 hover:text-cyan-500 cursor-pointer ">
            Size Chart
            <FaAngleRight />
          </div>
        </div>

        <div className="flex gap-4">
          <div className=" border-2 flex justify-center items-center w-12 h-12 rounded-full p-4 hover:bg-cyan-300 hover:text-black hover:border-0 cursor-pointer">
            <div>XS</div>
          </div>
          <div className=" border-4 border-cyan-300 font-bold text-cyan-300 flex justify-center items-center w-12 h-12 rounded-full p-4 cursor-pointer">
            <div>S</div>
          </div>
          <div className=" border-2 flex justify-center items-center w-12 h-12 rounded-full p-4 hover:bg-cyan-300 hover:text-black hover:border-0 cursor-pointer">
            <div>M</div>
          </div>
          <div className=" border-2 flex justify-center items-center w-12 h-12 rounded-full p-4 hover:bg-cyan-300 hover:text-black hover:border-0 cursor-pointer">
            <div>L</div>
          </div>
          <div className=" border-2 flex justify-center items-center w-12 h-12 rounded-full p-4 hover:bg-cyan-300 hover:text-black hover:border-0 cursor-pointer">
            <div>XL</div>
          </div>
        </div>

        <div className=" gap-5 my-4">
          <div className="text-xl flex gap-2 font-bold">
            ₹{price}{" "}
            <span className=" font-light text-gray-300">
              MRP <span className=" line-through">₹{priceOriginal}</span>
            </span>{" "}
            <span className=" text-orange-400 font-medium">({discount}% OFF)</span>
          </div>
          <div className="text-green-300 font-bold mb-5">
            inclusive of all taxes
          </div>
          <div className="flex gap-5">
            <button
              className=" bg-yellow-600 font-bold text-white px-3 py-2 rounded-lg hover:bg-yellow-300 hover:text-black active:scale-110"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <button className=" font-bold bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-300 hover:text-black active:scale-110">
              Buy Now
            </button>
          </div>
        </div>
      </div>

     

 
    </motion.div>
  );
};

export default Product;
