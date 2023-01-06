
import React from 'react'
import exercisedetail from '../data/details.json'


const SearchBar = () => {
  return (
    <div>

    <div className="flex justify-center">
      <input type="text" placeholder="Enter Exercise" className="w-6/12 placeholder-gray-700 outline-none" ></input> 
      {/* passing data props */}
      <button type="submit" className=" w-20 outline-none p-1 rounded-r bg-slate-700 text-white  lg:bg-red-500">Search</button>
      </div>

      <div className="text-black bg-slate-50">
        {exercisedetail.map((value,key)=>{
            return(
             <a className="" href={value.detaillink} target="_blank">  
            <p>{value.name}</p>
            </a>
        )})}

      </div>
    </div>
  )
}

export default SearchBar;