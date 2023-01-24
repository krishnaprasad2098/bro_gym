import React, { useRef,useState } from "react";
import scrolldetails from "../data/scrolldetails.js";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import logo2 from '../assets/images/image-2.jpg'
import logo1 from '../assets/images/image-1.png'
import logo3 from '../assets/images/image-3.png'
import logo4 from '../assets/images/image-4.png'
import logo5 from '../assets/images/image-5.png'
import logo6 from '../assets/images/image-6.png'
import Exercisecard from "./Exercisecard.js";
import EquipmentCard from "./EquipmentCard.js";
import Infrastructurecard from "./Infrastructurecard.js";
import YogaCard from "./YogaCard.js";


const ScrollCard = () => {

  const[active, setActive]=useState("FirstComponent")


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
        {/* {scrolldetails.map((value) => {
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
            })} */}


            <div className="text-center">
              <img src={logo1} alt="" className="max-w-none w-32 lg:w-36 "></img>
              <button onClick={()=>setActive("FirstComponent")}><h1 classsName="">lorem</h1></button>
            </div>
            <div className="text-center">
              <img src={logo2} alt="" className="max-w-none w-32 lg:w-36 "></img>
              <button onClick={()=>setActive("SecondComponent")}><h1 classsName="">lorem</h1></button>
            </div>
            <div className="text-center">
              <img src={logo3} alt="" className="max-w-none w-32 lg:w-36 "></img>
              <button onClick={()=>setActive("ThirdComponent")}><h1 classsName="">lorem</h1></button>
            </div>
            <div className="text-center">
              <img src={logo4} alt="" className="max-w-none w-32 lg:w-36"></img>
              <button onClick={()=>setActive("FourthComponent")}><h1 classsName="">lorem</h1></button>
            </div>
            <div className="text-center">
              <img src={logo5} alt="" className="max-w-none w-32 lg:w-36"></img>
              <button><h1 classsName="">lorem</h1></button>
            </div>
            <div className="text-center">
              <img src={logo6} alt="" className="max-w-none w-32 lg:w-36"></img>
              <button><h1 classsName="">lorem</h1></button>
            </div>
            <div className="text-center">
              <img src={logo1} alt="" className="max-w-none w-32 lg:w-36"></img>
              <button><h1 classsName="">lorem</h1></button>
            </div>
            <div className="text-center">
              <img src={logo2} alt="" className="max-w-none w-32 lg:w-36"></img>
              <button><h1 classsName="">lorem</h1></button>
            </div>
            <div className="text-center">
              <img src={logo3} alt="" className="max-w-none w-32 lg:w-36"></img>
              <button><h1 classsName="">lorem</h1></button>
            </div>
            <div className="text-center">
              <img src={logo4} alt="" className="max-w-none w-32 lg:w-36"></img>
              <button><h1 classsName="">lorem</h1></button>
            </div>
      </div>
      <div>
        {active === "FirstComponent" &&  <Exercisecard />}
        {active === "SecondComponent" && <EquipmentCard />}
        {active === "ThirdComponent" && <Infrastructurecard />}
        {active === "FourthComponent" && <YogaCard />}
      
      
      </div>
    </div>
  );
};

export default ScrollCard;
