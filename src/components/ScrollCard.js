import React from 'react'
import scrolldetails from '../data/scrolldetails.js'
const ScrollCard = () => {
  return (
    <div className="flex overflow-x-hidden justify-between scroll-smooth gap-4">
      {
        scrolldetails.map((value)=>{
          return(
            <div className="text-center" key={value.id}>
              <img src={value.pic} alt="failed" className="max-w-none w-32 lg:w-36 "/>
              <p>{value.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ScrollCard