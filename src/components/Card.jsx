import React from "react";
import { Link } from "react-router-dom";
import dressImage from "../assets/dress.png";
// import dress from "E:Exclusive-Store/src/Components/dress.webp";

const Card = (props) => {
  const price = props.price;

  return (
    <div className="flex flex-col mb-10 text-white bg-black-transparent-xl rounded-lg p-5 shadow-2xl">
      <div className=" font-semibold">₹{price}</div>
      <Link to="/Product">
        <div className=" h-60 w-60 p-5 hover:scale-110 transiton-smooth">
          <img
            className="h-full m-auto"
            src={dressImage}
            alt={"Carlie Anglemire"}
          />
          <img src={"./dress.webp"} alt="" />
        </div>
        <div className="text-xs text-center">
          Printed Halter Neck Crop Top
        </div>
      </Link>
    </div>
    // <div>
    //   {data.map((product) => (
    //     <div key={product.id}>
    //       <h2>{product.title}</h2>
    //       <p>{product.description}</p>
    //       <p>Price: ${product.price}</p>
    //       <img src={product.image} alt={product.title} />
    //       <p>Rating: {product.rating}</p>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Card;
