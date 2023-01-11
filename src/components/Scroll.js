import React,{useState,useEffect} from "react";
import scrolldetails from '../data/scrolldetails.js'
import ScrollCard from "../components/ScrollCard.js";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";




const Scroll = () => {
  


  return (
    <div>
      <div className="flex items-center justify-around mt-4 mb-0">
       <button className="" > 
         <FaAngleDoubleLeft />
       </button>
       <button className="" >
        <FaAngleDoubleRight />
       </button>
      </div>
    <div className=" flex overflow-hidden p-2" id="scrollcard">
      <div>
        <ScrollCard />
      </div>
      
    </div>
    </div>
  );
};

export default Scroll;
