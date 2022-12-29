import React from 'react'
import MainBannerPic from '../assets/images/MainBannerPic.jpg'
const MainBanner = () => {
  return (
    <div className="">
      <h1 className="pb-2  text-3xl text-red-600 flex justify-center font-semibold">Fitness Club</h1>
    <div className="lg:flex justify-around mr-2 ml-2  items-center">
      <div className="font-bold p-2">
        <h1 className=" text-left  lg:pl-1 text-5xl  text-red-900">"BLOOD,</h1>
        <h1 className=" text-left pl-6 lg:pl-6 text-5xl pb-4 text-red-900">SWEAT,</h1>

        <h1 className="pl-6 text-4xl text-red-500">RESPECT"</h1>
        <p className="pt-4 pl-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit mollitia quaerat laboriosam fugiat reiciendis</p>
        <p className='pl-2'>sint eaque enim repellendus perferendis ex architecto culpa laudantium maxime illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, consequuntur quisquam? Qui eos reiciendis perspiciatis!</p>
      </div>
        <img src={MainBannerPic} alt="banner" className="lg:max-w-xl max-h-80 p-2 rounded"/>
    </div>
    <div className="flex justify-center">
      <button className="  bg-blue-500 p-2 rounded mt-4 hover:bg-slate-800 text-white " href="#exercises">Checkout Exercise</button>
    </div>
    <div className="flex justify-center lg:justify-evenly text-red-100">
      <h1 className="text-2xl lg:text-9xl  mt-8">E</h1>
      <h1 className="text-2xl lg:text-9xl  mt-8">X</h1>
      <h1 className="text-2xl lg:text-9xl  mt-8">E</h1>
      <h1 className="text-2xl lg:text-9xl  mt-8">R</h1>
      <h1 className="text-2xl lg:text-9xl  mt-8">C</h1>
      <h1 className="text-2xl lg:text-9xl  mt-8">I</h1>
      <h1 className="text-2xl lg:text-9xl  mt-8">S</h1>
      <h1 className="text-2xl lg:text-9xl  mt-8">E</h1>
      <h1 className="text-2xl lg:text-9xl  mt-8">S</h1>

    </div>
    </div>
  

  )
}

export default MainBanner
