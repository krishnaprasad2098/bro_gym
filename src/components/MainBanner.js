import React from 'react'

const MainBanner = () => {
  return (
    <div className="m-6 p-6 relative">
        <p className="text-red-600 text-3xl font-semibold">Fitness Club</p>
        <p className="text-green-800 text-xl font-bold leading-10">Sweat, Blood <br /> Respect</p>
        <p className="text-blue-500">Check out Exercise for you</p>
        <button className="bg-black text-white font-bold p-2 rounded mt-4">Explore Exercise</button>

    </div>
  )
}

export default MainBanner