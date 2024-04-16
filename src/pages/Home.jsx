import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import hero from "../assets/hero-female.png";
import { Link } from "react-router-dom";
import { MdOutlineExpandMore } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";


const Home = () => {
  const text = "Exquisite Fashion, Exceptional Quality".split(" ");

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-950 via-violet-950 to-gray-950 px-28 pb-32"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      // exit={{opacity: 0}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex h-[100vh] items-center">
        <div className="w-1/2">
          <div className="text-6xl font-bold leading-snug text-orange-300">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: i / 5,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </div>

          <div className=" my-2 text-2xl uppercase tracking-widest text-orange-300">
            <TypeAnimation
              sequence={[
                "Buy something special for yourself",
                1000,
                "Buy something unique for yourself",
                1000,
                "Buy something beautiful for yourself",
                1000,
                "Buy something elegant for yourself",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </div>

          <div className="mt-12 flex gap-5">
            <Link to="/Premium">
              <button className="rounded-lg border-2 border-orange-300 px-3 py-2 font-bold text-orange-300 hover:bg-orange-300 hover:text-black active:scale-110">
                Premium
              </button>
            </Link>

            <Link to="/Budget">
              <button className="rounded-lg border-2 border-orange-300 px-3 py-2 font-bold text-orange-300 hover:bg-orange-300 hover:text-black active:scale-110">
                Budget
              </button>
            </Link>
          </div>
        </div>
        <motion.div
          className="flex h-[100vh] w-1/2  items-center"
          initial={{ scale: 0.1, translateY: "600px" }}
          animate={{ scale: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={hero} alt="" className=" w-[600px] drop-shadow-2xl" />
        </motion.div>
      </div>

      <div>
        <div className=" my-10 text-5xl font-bold text-cyan-300">
          Browse by Category
        </div>
        <div className="flex gap-5">
          <button className=" rounded-lg bg-cyan-300 px-3 py-2 font-bold text-black hover:bg-cyan-300 hover:text-black active:scale-110">
            Womens
          </button>
          <button className=" rounded-lg bg-cyan-600 px-3 py-2 font-bold text-white hover:bg-cyan-300 hover:text-black active:scale-110">
            Mens
          </button>

          <button className=" rounded-lg bg-cyan-600 px-3 py-2 font-bold text-white hover:bg-cyan-300 hover:text-black active:scale-110">
            Kids
          </button>

          <div className="mx-5">
            <select
              name="sort by"
              id=""
              className=" rounded-lg bg-cyan-600 p-2 text-white hover:bg-cyan-300 hover:text-black"
            >
              <option value="">Sort by</option>
              <option value="">Price: High to Low</option>
              <option value="">Price: Low to High</option>
              <option value="">Ratings: High to Low</option>
              <option value="">Ratings: Low to High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between pt-20">
        <Card price={2999} />
        <Card price={2999} />
        <Card price={2999} />
        <Card price={2999} />
        <Card price={2999} />
        <Card price={2999} />
        <Card price={2999} />
        <Card price={2999} />
        </div>

      <div className="transiton-smooth flex cursor-pointer items-center justify-center text-sm uppercase text-white hover:text-cyan-200">
        <MdOutlineExpandMore className=" text-2xl" />
        <div className="">Browse more products</div>
      </div>
    </motion.div>
  );
};

export default Home;
