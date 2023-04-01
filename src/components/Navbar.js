import React, { useState } from "react";
import hand from "../assets/icons/hand.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className=" lg:flex items-center justify-between p-4">
      <div className="flex items-center">
        <img src={hand} alt="" className="h-20 w-20 mix-blend-multiply "></img>
        <h1 className="pl-2">DO HARD</h1>
      </div>
      <button
        className=" absolute top-10 right-4 mt-2 lg:hidden"
        onClick={handleNav}
      >
        {nav ? <FaBars /> : <FaTimes />}
      </button>

      <div className="text-center lg:ml-8">
        <ul className="hidden lg:flex gap-2">
          <li className="pt-2 lg:px-6 mr-6 font-bold hover:cursor-pointer">
            Home
          </li>
          <li className="pt-2 lg:px-6 mr-6 font-bold hover:cursor-pointer">
            Exercises
          </li>
          {/* <Link to="/exercise">Exercise Link</Link>
          <Link to="/">Home Link</Link> */}
          <li className="pt-2 lg:px-6 mr-6 font-bold hover:cursor-pointer">
            Packages
          </li>
          <li className="pt-2 lg:px-6 mr-6 font-bold hover:cursor-pointer">
            Contact
          </li>
        </ul>
      </div>

      <ul
        className={
          !nav
            ? " text-center p-4 ease-in-out duration-500 lg:hidden "
            : "fixed left-[-100%]  "
        }
      >
        <li className="pt-4 lg:px-6 mr-6 " onClick={handleNav}>
          Home
        </li>
        <li className="pt-4 lg:px-6 mr-6 " onClick={handleNav}>
          Exercises
        </li>
        <li className="pt-4 lg:px-6 mr-6 " onClick={handleNav}>
          Packages
        </li>
        <li className="pt-4 lg:px-6 mr-6 " onClick={handleNav}>
          Contact
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
