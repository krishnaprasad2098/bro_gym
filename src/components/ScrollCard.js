import React, { useRef } from "react";
import scrolldetails from "../data/scrolldetails.js";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";




const ScrollCard = () => {
  const sliderRef=useRef(0)
  const scrollLeft = () => {
    sliderRef.current && (sliderRef.current.scrollLeft -= 400);
  };
  const scrollRight = () => {
    sliderRef.current && (sliderRef.current.scrollLeft += 400);
  };

  return (

    <div>
      <div className='flex items-center  justify-around mt-4  mb-4'>   {/*flex items-center justify-around mt-4  mb-4*/}
        <button className="" onClick={scrollLeft}  >
          <FaAngleDoubleLeft />
        </button>
        <button className="" onClick={scrollRight} >
          <FaAngleDoubleRight />
        </button>
      </div>

      <div className="flex overflow-x-hidden justify-between scroll-smooth gap-20 ml-4" ref={sliderRef} >
        {scrolldetails.map((value) => {
          return ( 
              <div className="text-center" key={value.id} >
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
