import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <motion.div
      className=" px-28 text-white flex justify-around h-[100vh] items-center bg-gradient-to-b from-black via-blue-950 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 1 }}
    >
      <div className="text-6xl font-bold w-1/2">
        <div className=" w-1/2 leading-snug">
          Create your <span className="  text-orange-300">Exclusive</span>{" "}
          account
        </div>
      </div>

      <div className=" flex flex-col gap-5 bg-black-transparent-xl p-10 rounded-md">
        <div className="text-2xl font-bold text-center text-orange-300 mb-2">
          Sign up now
        </div>
        <input
          type="text"
          placeholder="Email"
          className="p-5 border-l-4 border-0 bg-transparent border-orange-300 outline-none w-96 h-10"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-5 border-l-4 border-0 bg-transparent border-orange-300 outline-none w-96 h-10"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-5 border-l-4 border-0 bg-transparent border-orange-300 outline-none w-96 h-10"
        />

        <div className="flex justify-center">
          <button className=" bg-orange-300 text-black font-bold px-20 py-2 rounded-lg hover:bg-orange-700 hover:text-white active:scale-110">
            Create Account
          </button>
        </div>
        <div className="flex text-xs justify-around text-gray-400">
          <Link to="/Login">
            <div className=" hover:text-white hover:cursor-pointer">
              Already have an account?
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
