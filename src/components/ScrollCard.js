import React, { useRef } from "react";
import scrolldetails from "../data/scrolldetails.js";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Carousel from 'react-elastic-carousel'



const ScrollCard = () => {
  
  return (

    <div>
      <div className="flex items-center justify-around mt-4  mb-4">
        <button className="">
          <FaAngleDoubleLeft />
        </button>
        <button className="">
          <FaAngleDoubleRight />
        </button>
      </div>

      <div className="flex overflow-x-hidden justify-between scroll-smooth gap-20 ml-4">
        {scrolldetails.map((value) => {
          return ( 
              <div className="text-center" key={value.id}>
                <img
                  src={value.pic}
                  alt="failed"
                  className="max-w-none w-32 lg:w-36 "
                  />
                <p>{value.name}</p>
              </div>
             
             );
            })}
      </div>
    </div>
  );
};

export default ScrollCard;
