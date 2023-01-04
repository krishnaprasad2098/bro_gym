import React, { useEffect, useState } from "react";
const SearchExercise = () => {
  
    const[search,setSearch] = useState("");
    const Search=(e)=>{
      setSearch(e.target.value.toLowerCase());
    }

    const handleSearch = async () =>{
      if(search){
         
      }

    }
 
  
  return (
    <div>
      <h1 className=" text-center mt-8 text-4xl text-amber-800 font-serif font-bold capitalize">"The body achieves</h1> 
      <h1 className=" text-center mt-1 text-4xl text-amber-800 font-serif font-bold capitalize">what the mind believes"</h1>
      {/* <h1 className=" text-center  mt-4 text-4xl text-amber-800 font-serif font-bold capitalize">--Napoleon Hill</h1> */}
      <p className="text-center p-4 text-xl text-teal-600 font-extrabold font-mono">Know Your Exercises</p>
      <div className="flex justify-center">
      <input type="text" placeholder="Enter Exercise" className="w-6/12 placeholder-gray-700 outline-none" 
      value={search} onChange={Search}></input>
      <button type="submit" onClick={handleSearch} className=" w-20 outline-none p-1 rounded-r bg-slate-700 text-white  lg:bg-red-500">Search</button>
      </div>
    </div>
  ); 
};

export default SearchExercise;
