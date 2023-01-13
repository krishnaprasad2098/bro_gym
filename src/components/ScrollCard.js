import React, { useState } from "react";
import scrolldetails from "../data/scrolldetails.js";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";




const ScrollCard = ({prop}) => {
  const[Activeslide,setActiveslide] = useState(1);

  function prevSlideHandler(+) {
    if(scrolldetails.id === 1){
      setActiveslide(scrolldetails.length)
    }
    else if(scrolldetails.id > 1){
      setActiveslide(Activeslide-1)
    }
    else{
      setActiveslide(scrolldetails.length - 1)
    }

}

const nextSlideHandler = () => {
  if(scrolldetails.id === scrolldetails.length){
    setActiveslide(1)
  }
  else if(scrolldetails.id < scrolldetails.length){
    setActiveslide(Activeslide + 1)
  }
  else{
    setActiveslide(scrolldetails.length - 1)
  }
  
}

  return (

    <div>
      <div className={Activeslide===scrolldetails.id ? 'lg:flex items-center justify-around mt-4  mb-4' : 'lg:flex items-center justify-around mt-4  mb-4 ' }>   {/*flex items-center justify-around mt-4  mb-4*/}
        <button className="" onClick={() => prevSlideHandler(scrolldetails.id)} >
          <FaAngleDoubleLeft />
        </button>
        <button className="" onClick={() => nextSlideHandler(scrolldetails.id)}>
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
