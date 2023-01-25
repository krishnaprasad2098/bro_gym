import React from 'react'
import {FaFacebookF,FaGithub,FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FcCallback} from 'react-icons/fc'
import {GrMail} from 'react-icons/gr'
const Footer = () => {
  return (
    <div>
    <div className="bg-slate-800 pb-4 pt-4" >
      <h1 className="text-white text-xl text-center">Reach Us Out Through</h1>

    <div className="flex justify-start gap-4 ">
      <div className="flex items-center justify-start gap-3 ml-4">
        <FcCallback className="text-2xl" />
        <h1 className="text-white font-normal">+91-1234567890</h1>
      </div>
      <div className="flex items-center justify-start gap-3 ml-4">
        <GrMail className="text-2xl text-teal-50" />
        <h1 className="text-white font-normal">examplemail@gmail.com</h1>
      </div>
    </div>
     <div>
        <h1 className="text-white text-center mt-6 p-3">Our Branches</h1>
        <div className="flex justify-around gap-6 flex-wrap">
          <div>
          <h1 className="text-white text-center pb-2">Chennai</h1>
          <p className="text-white">No.10,MTH Road,</p>
          <p className="text-white">Chennai-600023</p>
          </div>
          <div>
          <h1 className="text-white text-center pb-2">Hyderabad</h1>
          <p className="text-white">No.11,Patancheru,</p>
          <p className="text-white">Hyderabad-502319</p>
          </div>
          <div>
          <h1 className="text-white text-center pb-2">Pune</h1>
          <p className="text-white">No.48,NPHJ Street,</p>
          <p className="text-white">Pune-402654</p>
          </div>
          <div>
          <h1 className="text-white text-center pb-2">Bangalore</h1>
          <p className="text-white">No.46,JP Street,</p>
          <p className="text-white">Bangalore-301498</p>
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-center p-6">
        <button><FaFacebookF className="text-white" /></button>
        <button><BsInstagram className="text-white" /></button>
        <button><FaLinkedinIn className="text-white" /></button>
      </div>
      <h1 className="text-white text-center text-sm">Copyrights reserved-2023</h1>
      <div className="text-xl flex items-center justify-end gap-3 mr-5">
      <FaGithub />
      <a href="https://github.com/krishnaprasad2098"><h1 className="text-white">krishnaprasad2098</h1></a>
    </div>
    </div>
    
    </div>
  )
}

export default Footer