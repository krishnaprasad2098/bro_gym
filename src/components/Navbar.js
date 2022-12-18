import React, {useState} from 'react'
import hand from '../assets/icons/hand.jpg'
import {FaBars,FaTimes} from 'react-icons/fa'
const Navbar = () => {


  const [nav,setNav] = useState(false)
  const handleNav = ()=>{

    setNav(!nav)
  }
 
  return (


    <header className=" lg:flex items-center justify-start">
      <div className="flex items-center">
      <img src={hand} alt="" className="h-20 w-20"></img>
      <h1 className="">DO HARD</h1>
      </div>


      <div className="text-center lg:ml-8">
        <ul className="hidden lg:flex gap-2">
          <li className="pt-2 lg:px-6 mr-6 ">Home</li>
          <li className="pt-2 lg:px-6 mr-6 ">Services</li>
          <li className="pt-2 lg:px-6 mr-6 ">About</li>
          <li className="pt-2 lg:px-6 mr-6 ">Contact</li>
        </ul>
      </div>
        <button className="ml-7 mt-4 lg:hidden" onClick={handleNav}>
          {!nav ? <FaTimes /> : <FaBars />}
          
        </button>
        <ul className={!nav ? 'text-center p-4 ease-in-out duration-500 lg:hidden ': 'fixed left-[-100%]'}>
          <li className="pt-4 lg:px-6 mr-6 ">Home</li>
          <li className="pt-4 lg:px-6 mr-6 ">Services</li>
          <li className="pt-4 lg:px-6 mr-6 ">About</li>
          <li className="pt-4 lg:px-6 mr-6 ">Contact</li>
        </ul>
    </header>
  )
}

export default Navbar