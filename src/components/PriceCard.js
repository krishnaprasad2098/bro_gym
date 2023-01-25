import React from 'react'
import pricedetails from '../data/Pricedetails.js'
const PriceCard = () => {
  return (
    <div className="md:grid grid-cols-4 gap-3 mt-1 mr-2 ml-2 ">

     {pricedetails.map((value)=>{
      return(
        <div className="border-4 border-red-800 w-34 gap-4 text-center mb-1">
          <img src={value.imagelink} alt="image_" className="w-auto h-32 ml-auto mr-auto mt-1 "/>
          <h1 className="font-medium text-2xl">{value.name}</h1>
          <p className="font-semibold">{value.description}</p>
          <h1 className="bg-orange-500 text-xl text-white" >{value.price}</h1>
        </div>
      )
     })}

    </div>
  )
}

export default PriceCard