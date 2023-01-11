import React from "react";

import ScrollCard from "../components/ScrollCard.js";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
const Scroll = () => {
  // const leftbuttonStyling = `w-8 h-2 right-4 relative top-20`;
  // const rightbuttonStyling = `w-8 h-2 right-8 relative top-20 left-3/4 `;
  return (
    <div>
      <div className="flex items-center justify-around mt-4 mb-0">
       <button className=""> 
         <FaAngleDoubleLeft />
       </button>
       <button className="">
        <FaAngleDoubleRight />
       </button>
      </div>
    <div className=" flex overflow-hidden p-2">
      <div>
        <ScrollCard />
      </div>
      
    </div>
    </div>
  );
};

export default Scroll;
