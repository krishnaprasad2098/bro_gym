import React, { useEffect, useState } from "react";
const SearchExercise = () => {
  return (
    <div>
      <h1 className=" text-center mt-4 text-4xl text-amber-800 font-serif font-bold capitalize">"The body achieves</h1> 
      <h1 className=" text-center text-4xl text-amber-800 font-serif font-bold capitalize">what the mind believes"</h1>
      {/* <h1 className=" text-center  mt-4 text-4xl text-amber-800 font-serif font-bold capitalize">--Napoleon Hill</h1> */}
      <p>Know your exercises</p>
      <input type="search" placeholder="enter exercise"></input>
    </div>
  );
};

export default SearchExercise;
