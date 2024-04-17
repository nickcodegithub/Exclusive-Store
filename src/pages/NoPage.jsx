import React from "react";
import { motion } from "framer-motion";
import errorImage from "../assets/404.png";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <motion.div
      className="pt-32 flex h-[100vh] justify-center bg-gradient-to-b from-black via-blue-950 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 1 }}
    >
      <div className="flex flex-col justify-center items-center">
        <img className=" w-96" src={errorImage} alt="" />

        <Link to={"/"}>
          <button className=" bg-blue-500 font-bold text-white w-40 px-3 py-2 rounded-lg hover:bg-blue-300 hover:text-black active:scale-110">
            Back to Home
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NoPage;
