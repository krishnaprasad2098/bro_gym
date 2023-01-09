import React from 'react'
import logo2 from '../assets/images/image-2.jpg'
import logo1 from '../assets/images/image-1.png'
import logo3 from '../assets/images/image-3.png'
import logo4 from '../assets/images/image-4.png'
import {FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa'
const Scroll = () => {
  return (
    <div>
        <FaAngleDoubleLeft />
        <div  className="grid grid-cols-4 justify-items-center items-center mt-4">
            <img src={logo2} alt="image_failed" className="w-24"></img>
            <img src={logo1} alt="image_failed" className="w-24"></img>
            <img src={logo3} alt="image_failed" className="w-24"></img>
            <img src={logo4} alt="image_failed" className="w-24"></img>
            <p>Infrastructure</p>
            <p>Equipments</p>
            <p>Exercises</p>
            <p>Yoga</p>
        </div>
            <FaAngleDoubleRight/>
       
    </div>
  )
}

export default Scroll