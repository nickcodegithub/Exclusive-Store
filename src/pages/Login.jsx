import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      className=" px-28 flex justify-around h-[100vh] items-center bg-gradient-to-b from-black via-blue-950 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 1 }}
    >
      <div className="text-6xl text-white font-bold w-1/2">
        <div className=" w-1/2 leading-snug">
          Login to your <span className="  text-cyan-300">Exclusive</span>{" "}
          account
        </div>
      </div>

      <div className="text-white flex flex-col gap-5 bg-black-transparent-xl p-10 rounded-md">
        <div className="text-2xl font-bold text-center text-cyan-300 mb-5">
          Welcome Back
        </div>
        <input
          type="text"
          placeholder="Email"
          className="p-5 border-l-4 border-0 bg-transparent border-cyan-300 outline-none w-96 h-10"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-5 border-l-4 border-0 bg-transparent border-cyan-300 outline-none w-96 h-10"
        />

        <div className=" text-xs text-white">
          <input type="checkbox" id="keepSigned" className=" mr-2" />
          <label htmlFor="keepSigned">Keep me signed in</label>
        </div>

        <div className="flex justify-center">
          <button className=" bg-cyan-300 text-black font-bold px-10 py-2 rounded-lg hover:bg-cyan-700 hover:text-white active:scale-110">
            Login
          </button>
        </div>
        <div className="flex text-xs justify-around text-gray-400">
          <div className=" hover:text-white hover:cursor-pointer">
            Forgot password?
          </div>
          <Link to="/Signup">
            <div className=" hover:text-white hover:cursor-pointer">
              Don't have an account yet?
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
