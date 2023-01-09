import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import exercisedetail from '../data/details.json'
import Scroll from '../components/Scroll.js'
const SearchExercise = () => {
  
  return (
    <div>
      <h1 className=" text-center mt-8 text-4xl text-amber-800 font-serif font-bold capitalize">"The body achieves</h1> 
      <h1 className=" text-center mt-1 text-4xl text-amber-800 font-serif font-bold capitalize">what the mind believes"</h1>
      <p className="text-center p-4 text-xl text-teal-600 font-extrabold font-mono">Know Your Exercises</p>
      <SearchBar data={exercisedetail} />
      <Scroll />
    </div>
  ); 
};

export default SearchExercise;
