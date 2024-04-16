import { Outlet, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { cartItemContext } from "../context/Context";
// import { MdOutlineDarkMode } from "react-icons/md";

const Layout = () => {
  const context = useContext(cartItemContext);

  const searchItem = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <nav className="flex fixed z-50 inset-x-0 top-0 items-center justify-between  py-6 px-28 bg-black-transparent-md backdrop-blur-sm text-white">
        <li className="inline uppercase text-2xl">
          <Link to="/"> <span className=" font-semibold">Exclusive</span> Store</Link>
        </li>
        <div className="flex items-center">
          <div className="flex items-center">
            <FaSearch className=" cursor-pointer" onClick="" />
            <input
              className=" border-2 p-5 pl-3 bg-transparent border-none outline-none w-96 h-10 rounded-md"
              type="search"
              name="search"
              id=""
              placeholder="Search for products"
              onChange={(e) => searchItem(e)}
            />
          </div>

          <ul className="flex justify-end gap-5 items-center">
            {/* <li className="inline">
              <Link
                to="/Login"
                className=" p-2 rounded-md flex items-center gap-2"
              >
                <MdOutlineDarkMode className=" text-2xl" />
              </Link>
            </li> */}

            <li className="inline">
              <Link
                to="/Login"
                className=" p-2 rounded-md flex items-center gap-2"
              >
                <IoPersonSharp className=" text-2xl" />
              </Link>
            </li>

            <li className="inline">
              <Link
                to="/Wishlist"
                className="p-2 rounded-md flex items-center gap-2"
              >
                <FaRegHeart className=" text-2xl" />
              </Link>
            </li>
            <li className="inline">
              <Link
                to="/Cart"
                className="p-2 rounded-md flex items-center gap-2"
              >
                <FaShoppingCart className="text-2xl" />
                <div className="flex text-orange-200 text-sm mb-5">
                  {context.items}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
