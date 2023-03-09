import React from "react";
import pricedetails from "../data/Pricedetails.js";
const PriceCard = () => {
  return (
    <div className="md:grid grid-cols-3  gap-3 mt-1 mx-2 py-4 ">
      {pricedetails.map((value) => {
        return (
          <div className="border-2 border-red-800 w-34 gap-y-8 text-center mb-1 rounded-xl p-2">
            <img
              src={value.imagelink}
              alt="image_"
              className="w-auto h-32 ml-auto mr-auto mt-1 mix-blend-multiply "
            />
            <h1 className="font-bold font-sans uppercase text-2xl">
              {value.name}
            </h1>
            <p className="font-semibold py-2">{value.description}</p>
            <h1 className="bg-orange-500 text-xl  text-white rounded-lg py-2 hover:bg-orange-300">
              {value.price}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default PriceCard;
