import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../assets/premium-dress.png";
import { FaCircleLeft, FaCircleRight } from "react-icons/fa6";

const Budget = () => {
  // const hoverable = document.querySelectorAll(".hoverable");
  // const target = document.querySelectorAll(".target");

  // hoverable.addEventListener("mouseenter", () => {
  //   target.style.opacity = "0";
  // });
  // hoverable.addEventListener("mouseleave", () => {});

  return (
    <motion.div
      className=" px-28 pt-12 bg-gradient-to-b from-black via-blue-950 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 1 }}
    >
      <div className="h-[100vh] flex items-center justify-evenly">
        <div className=" w-1/2">
          <h1 className=" text-6xl text-green-300 font-bold leading-snug">
            Elevate Your Wardrobe Without Breaking the Bank!
          </h1>
        </div>
        <div className=" h-96  flex justify-center w-1/3 transiton-smoot bg-black-transparent-xl rounded-lg px-10 py-10 shadow-2xl">
          <FaCircleLeft className=" cursor-pointer text-green-300 hover:text-green-500 active:scale-125 transiton-smooth" />
          <img src={image} alt="" className="" />
          <FaCircleRight className=" cursor-pointer text-green-300 hover:text-green-500 active:scale-125 transiton-smooth" />
        </div>
        <div></div>
      </div>
    </motion.div>
  );
};

export default Budget;
