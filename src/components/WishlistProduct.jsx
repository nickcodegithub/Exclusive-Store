import React from "react";
import img from "../assets/dress.png";

function WishlistProduct() {
  return (
    <div className=" w-64 h-64 flex  items-center rounded-xl bg-black-transparent-xl">
      <img src={img} alt="" className=" w-1/2" />
      <div className="text-right">
        <div>Product Title</div>
        <div>Description of the project</div>
        <div>Price</div>
        <div>
          <button>Remove</button>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default WishlistProduct;
