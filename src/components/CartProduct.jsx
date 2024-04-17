import React, { useState, useEffect, useContext } from "react";
import dressImage from "../assets/dress.png";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { cartItemContext } from "../context/Context";

const CartProduct = () => {
  const price = 2999;
  const priceOriginal = 5999;
  const discount = 70;
  const daysToReturn = 15;
  const [quantity, setQuantity] = useState(0);
  const context = useContext(cartItemContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(price * quantity);
    context.setBill(price * quantity);
  }, [quantity]);

  const handleQuantityIncreament = () => {
    setQuantity((q) => q + 1);
    context.setItems((i) => i + 1);
  };

  const handleQuantityDecreament = () => {
    if (quantity > 0) {
      setQuantity((q) => q - 1);
      context.setItems((i) => i - 1);
    }
  };

  return (
    <div>
      <div className="bg-black-transparent-xl text-white p-3 rounded-lg flex items-center">
        <div>
          <img className=" w-32" src={dressImage} alt="img" />
        </div>

        <div className="flex w-full justify-between">
          <div>
            <div className=" mx-5 font-bold">Brand Name</div>
            <div className=" mx-5 text-sm">Printed Halter Neck Crop Top</div>
            <div className="flex items-center gap-5 m-5">
              <button
                className="text-xl"
                onClick={() => handleQuantityDecreament()}
              >
                <FaCircleMinus />
              </button>
              <div className="font-bold">{quantity}</div>
              <button
                className="text-xl"
                onClick={() => handleQuantityIncreament()}
              >
                <FaCirclePlus />
              </button>
            </div>
            <div className="mx-5 my-2 font-bold flex gap-2 text-sm">
              ₹{price}{" "}
              <span className="font-normal text-gray-500 line-through">
                ₹{priceOriginal}
              </span>
              <span className=" text-red-400 font-normal">{discount}% OFF</span>
            </div>
            <div className=" text-xs flex items-center mx-5 gap-1">
              <GiReturnArrow />
              <span className=" font-bold">{daysToReturn} days</span>return
              available
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <RxCross2 className=" text-xl mb-[100%] hover:text-red-400 text-slate-500" />
          <div className="flex text-sm mt-[100%] font-bold items-center gap-2">
            <div>Total:</div>
            <div>₹{totalPrice}</div>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default CartProduct;
