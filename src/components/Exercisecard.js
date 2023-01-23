import React from 'react'
import exerciseimg from '../assets/images/image-1.png'
const Exercisecard = () => {
  return (

    // flex justify-center items-center

    <div className="grid md:grid grid-cols-2 gap-3 m-2" > 
        <div className="w-auto lg: border-green-700 w-auto border-4">
            <img src={exerciseimg} alt="" className="h-32  ml-auto mr-auto"></img>
            <h1 className="text-center">Excercise</h1>
            <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, non ipsam! Odio, doloremque porro modi 
            eos natus possimus hic aspernatur rerum quos architecto necessitatibus consequuntur cupiditate commodi impedit
            sunt inventore.</p>
        </div>

        <div className="w-auto lg: border-green-700 w-auto border-4 h-auto">
            <img src={exerciseimg} alt="" className="h-32  ml-auto mr-auto"></img>
            <h1 className="text-center">Excercise</h1>
            <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, non ipsam! Odio, doloremque porro modi 
            eos natus possimus hic aspernatur rerum quos architecto necessitatibus consequuntur cupiditate commodi impedit
            sunt inventore.</p>
        </div>

        <div className="w-auto lg:  border-green-700 w-auto border-4 h-auto">
            <img src={exerciseimg} alt="" className="h-32  ml-auto mr-auto"></img>
            <h1 className="text-center">Excercise</h1>
            <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, non ipsam! Odio, doloremque porro modi 
            eos natus possimus hic aspernatur rerum quos architecto necessitatibus consequuntur cupiditate commodi impedit
            sunt inventore.</p>
        </div>

        <div className="w-auto lg:  border-green-700 w-auto border-4 h-auto">
            <img src={exerciseimg} alt="" className="h-32  ml-auto mr-auto"></img>
            <h1 className="text-center">Excercise</h1>
            <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, non ipsam! Odio, doloremque porro modi 
            eos natus possimus hic aspernatur rerum quos architecto necessitatibus consequuntur cupiditate commodi impedit
            sunt inventore.</p>
        </div>

        <div className="w-auto lg: border-green-700 w-auto border-4 h-auto">
            <img src={exerciseimg} alt="" className="h-32  ml-auto mr-auto"></img>
            <h1 className="text-center">Excercise</h1>
            <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, non ipsam! Odio, doloremque porro modi 
            eos natus possimus hic aspernatur rerum quos architecto necessitatibus consequuntur cupiditate commodi impedit
            sunt inventore.</p>
        </div>

        <div className="w-auto lg: border-green-700 w-auto border-4 h-auto">
            <img src={exerciseimg} alt="" className="h-32  ml-auto mr-auto"></img>
            <h1 className="text-center">Excercise</h1>
            <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, non ipsam! Odio, doloremque porro modi 
            eos natus possimus hic aspernatur rerum quos architecto necessitatibus consequuntur cupiditate commodi impedit
            sunt inventore.</p>
        </div>

    </div>
  )
}

export default Exercisecard