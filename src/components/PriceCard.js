import React from 'react'
import pricedetails from '../data/Pricedetails.js'
const PriceCard = () => {
  return (
    <div className="md:grid grid-cols-3 gap-4 mt-4 sm:grid grid-cols-2">

     {pricedetails.map((value)=>{
      return(
        <div className="border border-green-800 w-34 gap-4 text-center">
          <img src={value.imagelink} alt="image" className="w-auto h-32 ml-auto mr-auto "/>
          <h1>{value.name}</h1>
          <p>{value.description}</p>
          <h1>{value.price}</h1>
        </div>
      )
     })}

    </div>
  )
}

export default PriceCard